/**
 * Cálculo de macros y calorías.
 * Todos los valores vienen de js/data/recetas.js — ninguno se recalcula.
 */

import { RECETAS } from '../data/recetas.js';
import { RUTINA_SEMANAL } from '../data/horario.js';
import { getFaseActiva } from '../data/fases.js';

export function macrosDeReceta(recetaId, ajusteFase1 = false) {
  const receta = RECETAS[recetaId];
  if (!receta) return null;

  let kcal = receta.kcal;
  let proteina = receta.proteina_g;
  let grasa = receta.grasa_g;
  let carbo = receta.carbo_g;

  // receta.kcal/proteina_g/grasa_g/carbo_g YA incluyen el ajuste de Fase 1
  // cuando existe (ver receta.ajuste_fase1.descripcion: "ya incluido en kcal").
  // Si el ajuste está DESACTIVADO en Ajustes, hay que restar el delta para
  // dar los valores base (sin Fase 1) — nunca sumarlo, o se cuenta doble.
  if (!ajusteFase1 && receta.ajuste_fase1) {
    kcal -= receta.ajuste_fase1.delta_kcal;
    proteina -= receta.ajuste_fase1.delta_p;
    grasa -= receta.ajuste_fase1.delta_g;
    carbo -= receta.ajuste_fase1.delta_c;
  }

  return { kcal, proteina, grasa, carbo };
}

export function totalesDelDia(fecha, ajusteFase1 = false) {
  const dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
  const dia = dias[fecha.getDay()];
  const rutina = RUTINA_SEMANAL[dia];

  if (!rutina) return null;

  // Domingo es no verificable (almuerzo libre, cena sin receta fija)
  if (dia === 'domingo') {
    return { verificable: false };
  }

  let totales = { kcal: 0, proteina: 0, grasa: 0, carbo: 0 };

  // Batido (todos los dias)
  const batido = macrosDeReceta('batido_post_entreno', false);
  totales.kcal += batido.kcal;
  totales.proteina += batido.proteina;
  totales.grasa += batido.grasa;
  totales.carbo += batido.carbo;

  // Almuerzo
  const almuerzo = macrosDeReceta(rutina.almuerzo, ajusteFase1);
  totales.kcal += almuerzo.kcal;
  totales.proteina += almuerzo.proteina;
  totales.grasa += almuerzo.grasa;
  totales.carbo += almuerzo.carbo;

  // Cena
  const cena = macrosDeReceta(rutina.cena, false); // No hay ajuste en cenas
  totales.kcal += cena.kcal;
  totales.proteina += cena.proteina;
  totales.grasa += cena.grasa;
  totales.carbo += cena.carbo;

  totales.verificable = true;
  return totales;
}

export function progresoVsMeta(totales, ajusteFase1 = false) {
  const fase = getFaseActiva();
  if (!fase.macros_meta) {
    return { meta: 'pendiente', items: [] };
  }

  return {
    meta: fase.kcal_meta,
    items: [
      {
        macro: 'kcal',
        actual: totales.kcal,
        meta: fase.kcal_meta,
        delta: totales.kcal - fase.kcal_meta,
        pct: Math.round((totales.kcal / fase.kcal_meta) * 100)
      },
      {
        macro: 'P',
        actual: totales.proteina,
        meta: fase.macros_meta.proteina_g,
        delta: totales.proteina - fase.macros_meta.proteina_g,
        pct: Math.round((totales.proteina / fase.macros_meta.proteina_g) * 100)
      },
      {
        macro: 'G',
        actual: totales.grasa,
        meta: fase.macros_meta.grasa_g,
        delta: totales.grasa - fase.macros_meta.grasa_g,
        pct: Math.round((totales.grasa / fase.macros_meta.grasa_g) * 100)
      },
      {
        macro: 'C',
        actual: totales.carbo,
        meta: fase.macros_meta.carbo_g,
        delta: totales.carbo - fase.macros_meta.carbo_g,
        pct: Math.round((totales.carbo / fase.macros_meta.carbo_g) * 100)
      }
    ]
  };
}

/** Auto-chequeo: verificar que los totales coinciden con el documento auditado. */
export function autoVerificar() {
  const esperados = {
    lunes: { kcal: 1976, proteina: 115.1, grasa: 53.1, carbo: 256.9 },
    martes: { kcal: 2031, proteina: 111.2, grasa: 64.7, carbo: 250.5 },
    miercoles: { kcal: 1970, proteina: 108.9, grasa: 55, carbo: 259.8 },
    jueves: { kcal: 1976, proteina: 115.1, grasa: 53.1, carbo: 256.9 },
    viernes: { kcal: 2031, proteina: 111.2, grasa: 64.7, carbo: 250.5 },
    sabado: { kcal: 1976, proteina: 104.9, grasa: 59.9, carbo: 251.3 }
  };

  const dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
  const errores = [];

  dias.forEach(dia => {
    if (dia === 'domingo') return; // Domingo no es verificable

    const fecha = new Date();
    const indexDia = dias.indexOf(dia);
    const hoy = fecha.getDay();
    const diff = indexDia - hoy;
    fecha.setDate(fecha.getDate() + diff);

    const totales = totalesDelDia(fecha, true);
    const esperado = esperados[dia];

    if (!totales || !totales.verificable) {
      errores.push(`${dia}: no verificable`);
      return;
    }

    const tolerance = 1; // 1 kcal de tolerancia por redondeos
    if (Math.abs(totales.kcal - esperado.kcal) > tolerance) {
      errores.push(`${dia}: kcal ${totales.kcal} != ${esperado.kcal}`);
    }
    if (Math.abs(totales.proteina - esperado.proteina) > 0.2) {
      errores.push(`${dia}: P ${totales.proteina} != ${esperado.proteina}`);
    }
    if (Math.abs(totales.grasa - esperado.grasa) > 0.2) {
      errores.push(`${dia}: G ${totales.grasa} != ${esperado.grasa}`);
    }
    if (Math.abs(totales.carbo - esperado.carbo) > 0.2) {
      errores.push(`${dia}: C ${totales.carbo} != ${esperado.carbo}`);
    }
  });

  if (errores.length === 0) {
    console.log('✓ Aritmética de macros verificada.');
  } else {
    console.error('✗ Errores en macros:', errores);
  }

  return errores.length === 0;
}
