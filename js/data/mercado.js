export const MERCADO = {
  semanal_perecederos: [
    {
      id: 'pollo',
      producto: 'Pechuga de pollo',
      cantidad: '330 g',
      nota: 'Batch domingo noche (congelables): 330 g crudo total. Lun 135 g cubos (Teriyaki, congelado) + Mié 48 g deshilachado (Soboro, congelado) + Jue 135 g cubos (Teriyaki, congelado). TODO a congelador.'
    },
    {
      id: 'res',
      producto: 'Res lomo/bola',
      cantidad: '220 g',
      nota: 'Batch domingo noche (congelables): 220 g crudo total dividido en 2 marinadas. Mar 110 g marinada Gyudon (congelado) + Vie 110 g marinada Gyudon (congelado). TODO a congelador.'
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
      cantidad: '28 unidades',
      nota: 'Desayuno okayu ×7 (2 c/u) = 14 · Mar almuerzo Gyudon 1 · Mié almuerzo Soboro 3 · Lun cena Miso Udon 2 · Mar cena Tofu Don 1 · Mié cena Sopa Miso 1 · Jue cena Miso Udon 2 · Vie almuerzo Gyudon 1 · Vie cena Tofu Don 1 · Sáb cena Sopa Miso 1 · Dom cena Sopa Miso 1 = 28 ud. El batido NO lleva huevo. Domingo almuerzo es LIBRE.'
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
      cantidad: '3 manojos (~300 g)',
      nota: '~290 g/semana: desayuno okayu ×7 (10 g c/u) = 70 g + almuerzos y cenas toda la semana ~220 g. Parte verde y blanca. Se ralla o pica en el día, no en el batch.'
    },
    {
      id: 'jengibre',
      producto: 'Jengibre fresco',
      cantidad: '30 g',
      nota: 'Marinadas batch ×2 (5 g c/u) = 10 g + recetas de la semana ~20 g (5 g en Teriyaki ×2, Gyudon ×2). Se ralla fresco en el día, no en el batch.'
    },
    {
      id: 'banano',
      producto: 'Banano',
      cantidad: '7 unidades (~700 g)',
      nota: '1 banano de 100 g al día para el batido post-entreno. Comprar maduros pero firmes.'
    },
    {
      id: 'mandarina',
      producto: 'Mandarina',
      cantidad: '7 unidades (~700 g)',
      nota: 'Snack diario — 100 g (1 mandarina) entre almuerzo y cena. Comprar firmes y aromáticas.'
    }
  ],

  mensual_no_perecederos: [
    {
      id: 'arroz',
      producto: 'Arroz blanco',
      cantidad: '5 kg',
      nota: '~1,105 g/semana: desayunos 7×35 g=245 g · almuerzos 6×80 g + 1×85 g (sáb)=565 g · cenas 5×75 g=375 g (lun/jue no llevan arroz en cena). Domingo almuerzo = LIBRE.'
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
      cantidad: '750 g',
      nota: '~170 g/semana: desayuno okayu ×7 (10 g c/u) = 70 g + Miso Udon ×2 (20 g c/u) = 40 g + Sopa Miso ×3 (20 g c/u) = 60 g. Total: 170 g.'
    },
    {
      id: 'mirin',
      producto: 'Mirin',
      cantidad: '375 ml',
      nota: '~55 ml/semana: marinadas (2.5 ml × 2) = 5 ml · Teriyaki ×2 (10 ml c/u) = 20 ml · Gyudon ×2 (10 ml c/u) = 20 ml · Soboro (10 ml) = 10 ml. Total: 55 ml.'
    },
    {
      id: 'sesamo_oil',
      producto: 'Aceite de sésamo',
      cantidad: '500 ml',
      nota: '~95 ml/semana: desayuno okayu ×7 (5 ml) = 35 ml + Teriyaki ×2 (5 ml) + Soboro (5 ml) + Tamagoyaki (5 ml) + Tofu Don ×2 (5 ml) + Miso Udon ×2 (7 ml) + Sopa Miso ×3 (7 ml).'
    },
    {
      id: 'sesamo_semillas',
      producto: 'Sésamo semillas',
      cantidad: '200 g',
      nota: '~40 g/semana: 5 g de topping en Teriyaki ×2, Gyudon ×2, Soboro, Salmon Don, Tofu Don ×2, Tamagoyaki = 40 g. (Okayu no lleva sésamo.)'
    },
    {
      id: 'nori',
      producto: 'Nori (alga)',
      cantidad: '50 hojas (5 paquetes de 10)',
      nota: '~26 g/semana: okayu desayuno ×7 (2 g c/u) = 14 g + Miso Udon ×2 (2 g) = 4 g + Sopa Miso ×3 (2 g) = 6 g + Salmon Don (2 g) = 2 g.'
    },
    {
      id: 'ghee',
      producto: 'Ghee clarificado',
      cantidad: '250 g',
      nota: '~105 g/semana: cocción diaria pollo/proteína Lun+Jue (7 g c/u) = 14 g · Teriyaki ×2 (7 g) = 14 g · Gyudon ×2 (5 g) = 10 g · Tofu Don ×2 (10 g) = 20 g · Tamagoyaki (5 g) = 5 g · pizca huevos okayu/soboro/udon/sopa (~42 g) = 42 g. Total: 105 g.'
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
      nota: '~115 ml/semana: Teriyaki ×2 (15 ml) + Gyudon ×2 (15 ml) + Soboro (10 ml) + Salmon Don (10 ml) + Tofu Don ×2 (15 ml) + Tamagoyaki (10 ml) + marinadas batch (15 ml).'
    },
    {
      id: 'maicena',
      producto: 'Almidón de maíz (maicena)',
      cantidad: '250 g',
      nota: '16 g/semana: 8 g por receta × 2 (Tofu Don, Martes y Viernes cena).'
    },
    {
      id: 'sal_pimienta',
      producto: 'Sal + pimienta negra molida',
      cantidad: '1 frasco pequeño',
      nota: 'Ingredientes básicos (pantry). Solo se usan pizca en Salmon Don (sábado almuerzo).'
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
    },
    {
      id: 'cebada_perlada',
      producto: 'Cebada perlada',
      cantidad: '500 g (tienda naturista)',
      nota: 'Para hacer mugicha casero. Tostar 200 g en sartén Rena Ware seca → guarda en frasco. 30 g por jarra de 2.5 L = ~6-7 jarras por tanda. Compra mensual — 500 g dura ~1 mes con consumo diario.'
    }
  ],

  notas_importantes: {
    presupuesto: '⚠️ Presupuesto DESHABILITADO. Se definirá con facturas reales de compras verificadas.',
    compras_semanales: 'Perecederos: compra cada semana. No-perecederos: compra mensual (duran 4+ semanas).',
    consistencia: 'Lo que se compra = exactamente lo que usan las recetas. Ningún ingrediente falta ni sobra sin razón.',
    salmon_fresco: 'El salmón se compra FRESCO el sábado por la mañana. Se cocina ese mismo día. No se puede guardar para el día siguiente.',
    tofu_nota: 'Abierto, el tofu Mori-Nu dura 3 días en nevera. Usar siempre contenedor de vidrio. Se necesitan 920 g/semana (3 paquetes de ~310 g).',
    huevos_nota: 'Se necesitan 28 huevos/semana: 14 para desayunos okayu (2 por día) + 14 para almuerzos y cenas. El batido post-entreno NO lleva huevo.'
  }
};

export const getItemSemanal = (id) => MERCADO.semanal_perecederos.find(i => i.id === id);
export const getItemMensual = (id) => MERCADO.mensual_no_perecederos.find(i => i.id === id);
