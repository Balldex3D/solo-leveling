export const BATCH_CONGELABLES = {
  domingo_noche: {
    titulo: 'Domingo noche — Batch congelables (semana completa)',
    dia: 'domingo_noche',
    tiempo_min: 45,
    nota: 'Prepara TODO el pollo + res marinada para la semana. TODO se congela. Lunes-domingo.',
    tareas: [
      {
        texto: 'COCINA POLLO (MIN 10–20)\n\n330 g de pechuga de pollo cruda en total (Lun 135g + Mar 60g + Jue 135g).\n\nTÉCNICA RENA WARE:\n1. Pon sartén grande VACÍA Y SECA a FUEGO MEDIO-ALTO (6–7 de 9)\n2. Espera 2–3 min. Prueba: gotas de agua ruedan sin evaporarse = lista\n3. Agrega 17 g de ghee total (divide en tandas si es necesario)\n4. Cocina el pollo en tiras, SIN revolver 2–3 min hasta dorados\n5. Revuelve, cocina 3–4 min más\n6. Listo: exterior dorado, interior blanco firme\n\nRinde ~264 g cocido total.',
        timer_segundos: 600
      },
      {
        texto: 'DIVIDE Y CONGELA POLLO (MIN 25)\n\n264 g cocido total. Divide en 3 porciones:\n\n📦 LUNES almuerzo (Teriyaki): ~108 g en cubos\n   Etiqueta: "POLLO CUBOS 108g — Lunes Teriyaki"\n\n📦 MIÉRCOLES almuerzo (Soboro): ~48 g deshilachado\n   Con dos tenedores, deshébralo fino\n   Etiqueta: "POLLO DESHILACHADO 48g — Miércoles Soboro"\n\n📦 JUEVES almuerzo (Teriyaki): ~108 g en cubos\n   Etiqueta: "POLLO CUBOS 108g — Jueves Teriyaki"\n\nTODO A CONGELADOR.',
        timer_segundos: null
      },
      {
        texto: 'MARINADA RES (MIN 30)\n\n220 g de res lomo/bola en tiras CRUDA total (Martes 110g + Viernes 110g).\n\nEn un tazón, mezcla:\n  • 15 ml de salsa de soya (2.5 ml × 2 marinadas)\n  • 5 ml de mirin (2.5 ml × 2 marinadas)\n  • 10 g de jengibre rallado (5 g × 2 marinadas)\n\nDivide en 2 contenedores:\n\n📦 MARTES almuerzo (Gyudon): 110 g crudo\n   Etiqueta: "RES MARINADA 110g — Martes Gyudon"\n   A CONGELADOR\n\n📦 VIERNES almuerzo (Gyudon): 110 g crudo\n   Etiqueta: "RES MARINADA 110g — Viernes Gyudon"\n   A CONGELADOR',
        timer_segundos: null
      },
      {
        texto: 'CHECKLIST FINAL (MIN 45)\n\n☐ POLLO CUBOS (108 g) × 2 — Lunes + Jueves (congelados)\n☐ POLLO DESHILACHADO (48 g) — Miércoles (congelado)\n☐ RES MARINADA (110 g) × 2 — Martes + Viernes (congelados)\n\n✅ Listo. Semana completa de proteína congelada.',
        timer_segundos: null
      }
    ],
    almacenamiento: [
      '❄️ CONGELADOR — POLLO CUBOS (108 g c/u): Lunes + Jueves almuerzo (Teriyaki)',
      '❄️ CONGELADOR — POLLO DESHILACHADO (48 g): Miércoles almuerzo (Soboro)',
      '❄️ CONGELADOR — RES MARINADA (110 g c/u): Martes + Viernes almuerzo (Gyudon)'
    ]
  }
};

export const PREP_DIARIO = {
  lunes: {
    titulo: 'Lunes — Prep del día',
    dia: 'lunes',
    tiempo_min: 15,
    nota: 'Mañana: arrocera + descongelar pollo. Sin prep de noche.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n115 g de arroz blanco crudo + 138 ml de agua fría.\n\n1. Coloca 115 g de arroz\n2. Agrega 138 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'DESCONGELA POLLO (MIN 5)\n\n108 g de pollo cocido cubos para almuerzo Teriyaki.\n\nOpciones:\n• Nevera: descongela la noche anterior\n• Rápido: agua fría 15 min en bolsa\n• Microondas: descongelar 5 min\n\nUsa para el almuerzo.',
        timer_segundos: null
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n115 g crudo rinde ~287 g cocidos. Divide en 2:\n  • 90 g cocido → Lunes desayuno (Okayu Miso Tamago)\n  • 197 g cocido → Lunes almuerzo (Chicken Teriyaki)\n\nEspera 2 min a que enfríe. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [],
    almacenamiento: [
      '❄️ CONGELADOR (sacado) — POLLO CUBOS (108 g): para almuerzo mañana',
      '📦 NEVERA — ARROZ (~287 g cocido): Lunes desayuno 90 g + Lunes almuerzo 197 g'
    ]
  },

  martes: {
    titulo: 'Martes — Prep del día',
    dia: 'martes',
    tiempo_min: 15,
    nota: 'Mañana: arrocera + descongelar res marinada. Sin prep de noche.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n190 g de arroz blanco crudo + 228 ml de agua fría.\n\n1. Coloca 190 g de arroz\n2. Agrega 228 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'DESCONGELA RES MARINADA (MIN 5)\n\n110 g de res marinada cruda para almuerzo Gyudon.\n\nOpciones:\n• Nevera: descongela la noche anterior\n• Rápido: agua fría 15 min en bolsa\n• Microondas: descongelar 3 min\n\nUsa para el almuerzo.',
        timer_segundos: null
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n190 g crudo rinde ~475 g cocidos. Divide en 3:\n  • 90 g cocido → Martes desayuno (Okayu Miso Tamago)\n  • 200 g cocido → Martes almuerzo (Gyudon)\n  • 185 g cocido → Martes cena (Tofu Don)\n\nEspera 2 min a que enfríe. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [],
    almacenamiento: [
      '❄️ CONGELADOR (sacado) — RES MARINADA (110 g): para almuerzo mañana',
      '📦 NEVERA — ARROZ (~475 g cocido): Mar desayuno 90 g + almuerzo 200 g + cena 185 g'
    ]
  },

  miercoles: {
    titulo: 'Miércoles — Prep del día',
    dia: 'miercoles',
    tiempo_min: 15,
    nota: 'Mañana: arrocera + descongelar pollo deshilachado. Sin prep de noche.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n190 g de arroz blanco crudo + 228 ml de agua fría.\n\n1. Coloca 190 g de arroz\n2. Agrega 228 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'DESCONGELA POLLO DESHILACHADO (MIN 5)\n\n48 g de pollo deshilachado cocido para almuerzo Soboro.\n\nOpciones:\n• Nevera: descongela la noche anterior\n• Rápido: agua fría 10 min en bolsa\n• Microondas: descongelar 2 min\n\nUsa para el almuerzo.',
        timer_segundos: null
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n190 g crudo rinde ~475 g cocidos. Divide en 3:\n  • 90 g cocido → Miércoles desayuno (Okayu Miso Tamago)\n  • 200 g cocido → Miércoles almuerzo (Egg Soboro)\n  • 185 g cocido → Miércoles cena (Sopa Miso)\n\nEspera 2 min a que enfríe. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [],
    almacenamiento: [
      '❄️ CONGELADOR (sacado) — POLLO DESHILACHADO (48 g): para almuerzo mañana',
      '📦 NEVERA — ARROZ (~475 g cocido): Mié desayuno 90 g + almuerzo 200 g + cena 185 g'
    ]
  },

  jueves: {
    titulo: 'Jueves — Prep del día',
    dia: 'jueves',
    tiempo_min: 15,
    nota: 'Mañana: arrocera + descongelar pollo. Sin prep de noche.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n115 g de arroz blanco crudo + 138 ml de agua fría.\n\n1. Coloca 115 g de arroz\n2. Agrega 138 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'DESCONGELA POLLO (MIN 5)\n\n108 g de pollo cocido cubos para almuerzo Teriyaki.\n\nOpciones:\n• Nevera: descongela la noche anterior\n• Rápido: agua fría 15 min en bolsa\n• Microondas: descongelar 5 min\n\nUsa para el almuerzo.',
        timer_segundos: null
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n115 g crudo rinde ~287 g cocidos. Divide en 2:\n  • 90 g cocido → Jueves desayuno (Okayu Miso Tamago)\n  • 197 g cocido → Jueves almuerzo (Chicken Teriyaki)\n\nEspera 2 min a que enfríe. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [],
    almacenamiento: [
      '❄️ CONGELADOR (sacado) — POLLO CUBOS (108 g): para almuerzo mañana',
      '📦 NEVERA — ARROZ (~287 g cocido): Jue desayuno 90 g + Jue almuerzo 197 g'
    ]
  },

  viernes: {
    titulo: 'Viernes — Prep del día',
    dia: 'viernes',
    tiempo_min: 15,
    nota: 'Mañana: arrocera + descongelar res marinada. Sin prep de noche.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n190 g de arroz blanco crudo + 228 ml de agua fría.\n\n1. Coloca 190 g de arroz\n2. Agrega 228 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'DESCONGELA RES MARINADA (MIN 5)\n\n110 g de res marinada cruda para almuerzo Gyudon.\n\nOpciones:\n• Nevera: descongela la noche anterior\n• Rápido: agua fría 15 min en bolsa\n• Microondas: descongelar 3 min\n\nUsa para el almuerzo.',
        timer_segundos: null
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n190 g crudo rinde ~475 g cocidos. Divide en 3:\n  • 90 g cocido → Viernes desayuno (Okayu Miso Tamago)\n  • 200 g cocido → Viernes almuerzo (Gyudon)\n  • 185 g cocido → Viernes cena (Tofu Don)\n\nEspera 2 min a que enfríe. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [],
    almacenamiento: [
      '❄️ CONGELADOR (sacado) — RES MARINADA (110 g): para almuerzo mañana',
      '📦 NEVERA — ARROZ (~475 g cocido): Vie desayuno 90 g + almuerzo 200 g + cena 185 g'
    ]
  },

  sabado: {
    titulo: 'Sábado — Prep del día + salmón fresco',
    dia: 'sabado',
    tiempo_min: 20,
    nota: 'Mañana: arrocera fresco + comprar salmón. Sin prep de noche.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n195 g de arroz blanco crudo + 234 ml de agua fría.\n\n1. Coloca 195 g de arroz\n2. Agrega 234 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'COMPRA SALMÓN FRESCO (MIN 5)\n\n130 g de filete de salmón FRESCO (NO congelado).\n\n• Pídelo en el mercado esta mañana: "130 g de salmón filete, con piel"\n• Guárdalo en el refrigerador hasta el momento de cocinar (almuerzo)\n• Cocina SIEMPRE el mismo día de la compra',
        timer_segundos: null
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n195 g crudo rinde ~487 g cocidos. Divide en 3:\n  • 90 g cocido → Sábado desayuno (Okayu Miso Tamago)\n  • 212 g cocido → Sábado almuerzo (Salmon Don)\n  • 185 g cocido → Sábado cena (Sopa Miso)\n\nEspera 2 min a que enfríe. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [],
    almacenamiento: [
      '🐟 REFRIGERADOR — SALMÓN FRESCO (130 g): para almuerzo de hoy (NO guardar)',
      '📦 NEVERA — ARROZ (~487 g cocido): Sáb desayuno 90 g + almuerzo 212 g + cena 185 g'
    ]
  },

  domingo: {
    titulo: 'Domingo — Prep del día (almuerzo libre)',
    dia: 'domingo',
    tiempo_min: 10,
    nota: 'Mañana: solo arrocera. Almuerzo es LIBRE — comes por fuera. Sin prep de noche.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n110 g de arroz blanco crudo + 132 ml de agua fría.\n\n1. Coloca 110 g de arroz\n2. Agrega 132 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 10)\n\n110 g crudo rinde ~275 g cocidos. Divide en 2:\n  • 90 g cocido → Domingo desayuno (Okayu Miso Tamago)\n  • 185 g cocido → Domingo cena (Sopa Miso)\n\n⚠️ Domingo ALMUERZO es LIBRE — no hay receta, comes por fuera. No preparamos arroz.\n\nEspera 2 min a que enfríe. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [],
    almacenamiento: [
      '📦 NEVERA — ARROZ (~275 g cocido): Domingo desayuno 90 g + Domingo cena 185 g',
      '✓ ALMUERZO LIBRE — no hay prep'
    ]
  }
};

export function getBatchCongelables() {
  return BATCH_CONGELABLES.domingo_noche;
}

export function getPrepDiario(dia) {
  return PREP_DIARIO[dia] ?? null;
}

export function getPrepDiarioList() {
  return Object.values(PREP_DIARIO);
}
