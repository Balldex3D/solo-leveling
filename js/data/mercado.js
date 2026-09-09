export const MERCADO = {
  semanal_perecederos: [
    {
      id: 'pollo',
      producto: 'Pechuga de pollo',
      cantidad: '330 g',
      nota: 'Batch domingo: 195 g (135 g Lunes + 60 g Miércoles crudo). Batch miércoles: 135 g (Jueves). Total crudo: 330 g.'
    },
    {
      id: 'res',
      producto: 'Res lomo/bola',
      cantidad: '220 g',
      nota: 'Batch domingo: 110 g crudo → marinada Martes Gyudon. Batch miércoles: 110 g crudo → marinada Viernes Gyudon. Total: 220 g.'
    },
    {
      id: 'salmon',
      producto: 'Salmón filete FRESCO',
      cantidad: '130 g',
      nota: 'Comprar el SÁBADO por la mañana. No congelado. Se cocina el mismo día con air fryer.'
    },
    {
      id: 'huevos',
      producto: 'Huevos',
      cantidad: '11 unidades',
      nota: 'Lun cena (Miso Udon) 2 · Mar almuerzo (Gyudon) 1 · Mar cena (Tofu Don) 1 · Mié cena (Tofu Tamago) 1 · Jue cena (Miso Udon) 2 · Vie almuerzo (Gyudon) 1 · Vie cena (Tofu Don) 1 · Sáb cena 1 · Dom cena 1. El batido NO lleva huevo.'
    },
    {
      id: 'tofu',
      producto: 'Tofu Mori-Nu Silken',
      cantidad: '920 g (3 paquetes de ~310 g)',
      nota: 'Lun cena 80 g · Mar cena 200 g · Mié cena 120 g · Jue cena 80 g · Vie cena 200 g · Sáb cena 120 g · Dom cena 120 g = 920 g. Abierto dura 3 días en nevera, siempre en contenedor de vidrio.'
    },
    {
      id: 'espinaca',
      producto: 'Espinaca',
      cantidad: '500 g',
      nota: 'Lun almuerzo 50 g · Lun cena 40 g · Mar cena 60 g · Mié cena 50 g · Jue almuerzo 50 g · Jue cena 40 g · Vie cena 60 g · Sáb almuerzo 50 g · Sáb cena 50 g · Dom cena 50 g = 500 g.'
    },
    {
      id: 'cebolla_larga',
      producto: 'Cebolla larga',
      cantidad: '2 manojos (~250 g)',
      nota: 'Para almuerzos y cenas toda la semana (~191 g en recetas + picada extra para batch). Parte verde y blanca.'
    },
    {
      id: 'jengibre',
      producto: 'Jengibre fresco',
      cantidad: '80 g',
      nota: 'Batch domingo 10–15 g (marinada res) · Batch miércoles 10 g · Recetas de la semana ~55 g (5 g por plato en Teriyaki × 2, Gyudon × 2, Soboro, etc.).'
    },
    {
      id: 'banano',
      producto: 'Banano',
      cantidad: '7 unidades (~700 g)',
      nota: '1 banano de 100 g al día para el batido post-entreno. Comprar maduros pero firmes.'
    }
  ],

  mensual_no_perecederos: [
    {
      id: 'arroz',
      producto: 'Arroz blanco',
      cantidad: '5 kg',
      nota: '~1,235 g/semana: batch domingo 570 g + batch miércoles 540 g + sábado almuerzo fresco 125 g.'
    },
    {
      id: 'udon',
      producto: 'Fideos udon secos',
      cantidad: '1 kg (5 paquetes de 200 g)',
      nota: '100 g por cena × 2 noches (Lunes + Jueves Miso Udon) = 200 g/semana.'
    },
    {
      id: 'crema_arroz',
      producto: 'Crema de arroz (Primor)',
      cantidad: '1 kg',
      nota: '40 g/día × 7 días = 280 g/semana para el batido post-entreno.'
    },
    {
      id: 'miso',
      producto: 'Pasta miso',
      cantidad: '500 g',
      nota: '~100 g/semana: 20 g Miso Udon × 2 = 40 g + 20 g Tofu Tamago × 3 = 60 g. Total: 100 g.'
    },
    {
      id: 'mirin',
      producto: 'Mirin',
      cantidad: '375 ml',
      nota: '~50 ml/semana: marinadas (2.5 ml × 2 batch) + recetas Teriyaki × 2 (10 ml c/u) + Gyudon × 2 (10 ml c/u) + Soboro (10 ml).'
    },
    {
      id: 'sesamo_oil',
      producto: 'Aceite de sésamo',
      cantidad: '250 ml',
      nota: '~60 ml/semana: Teriyaki × 2 (5 ml) + Soboro (5 ml) + Tofu Don × 2 (5 ml) + Miso Udon × 2 (7 ml) + Tofu Tamago × 3 (7 ml).'
    },
    {
      id: 'sesamo_semillas',
      producto: 'Sésamo semillas',
      cantidad: '200 g',
      nota: '~40 g/semana: 5 g de topping en Teriyaki × 2, Gyudon × 2, Soboro, Salmon Don, Tofu Don × 2.'
    },
    {
      id: 'nori',
      producto: 'Nori (alga)',
      cantidad: '10 hojas',
      nota: '~12 g/semana: 2 g en Miso Udon × 2 + 2 g en Tofu Tamago × 3 + 2 g en Salmon Don.'
    },
    {
      id: 'ghee',
      producto: 'Ghee clarificado',
      cantidad: '250 g',
      nota: '~60 g/semana: batch domingo pollo 10 g + batch miércoles pollo 5 g + Teriyaki × 2 (7 g) + Gyudon × 2 (5 g) + Tofu Don × 2 (10 g).'
    },
    {
      id: 'aceite_oliva',
      producto: 'Aceite de oliva',
      cantidad: '500 ml',
      nota: '10 ml/semana solo para el topping del Salmon Don.'
    },
    {
      id: 'mani',
      producto: 'Mantequilla de maní',
      cantidad: '500 g',
      nota: '25 g/día × 7 días = 175 g/semana para el batido post-entreno.'
    },
    {
      id: 'salsa_soya',
      producto: 'Salsa de soya',
      cantidad: '500 ml',
      nota: '~115 ml/semana: Teriyaki × 2 (15 ml) + Gyudon × 2 (15 ml) + Soboro (10 ml) + Salmon Don (10 ml) + Tofu Don × 2 (15 ml) + marinadas batch (15 ml).'
    },
    {
      id: 'maicena',
      producto: 'Almidón de maíz (maicena)',
      cantidad: '250 g',
      nota: '16 g/semana: 8 g por receta × 2 (Tofu Don, Martes y Viernes cena).'
    },
    {
      id: 'whey',
      producto: 'Whey Isolate',
      cantidad: '1 kg',
      nota: '35 g/día × 7 días = 245 g/semana para el batido post-entreno.'
    },
    {
      id: 'creatina',
      producto: 'Creatina monohidrato',
      cantidad: '500 g',
      nota: '5 g/día × 7 días = 35 g/semana para el batido post-entreno.'
    }
  ],

  notas_importantes: {
    presupuesto: '⚠️ Presupuesto DESHABILITADO. Se definirá con facturas reales de compras verificadas.',
    compras_semanales: 'Perecederos: compra cada semana. No-perecederos: compra mensual (duran 4+ semanas).',
    consistencia: 'Lo que se compra = exactamente lo que usan las recetas. Ningún ingrediente falta ni sobra sin razón.',
    salmon_fresco: 'El salmón se compra FRESCO el sábado por la mañana. Se cocina ese mismo día. No se puede guardar para el día siguiente.',
    tofu_nota: 'Abierto, el tofu Mori-Nu dura 3 días en nevera. Usar siempre contenedor de vidrio. Se necesitan 920 g/semana (3 paquetes de ~310 g).',
    huevos_nota: 'El batido post-entreno NO lleva huevo. Los 11 huevos son 100% para recetas de almuerzo y cena.'
  }
};

export const getItemSemanal = (id) => MERCADO.semanal_perecederos.find(i => i.id === id);
export const getItemMensual = (id) => MERCADO.mensual_no_perecederos.find(i => i.id === id);
