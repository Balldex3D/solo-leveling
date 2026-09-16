export const PREP_DIARIO = {
  lunes: {
    titulo: 'Lunes — Prep del día',
    dia: 'lunes',
    tiempo_min: 30,
    nota: 'Mañana: arroz + proteína. Noche: marinada res para martes almuerzo.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n115 g de arroz blanco crudo + 138 ml de agua fría.\n\n1. Coloca 115 g de arroz en el recipiente\n2. Agrega 138 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'COCINA LA PROTEÍNA (MIN 10–20)\n\n135 g de pechuga de pollo cruda para almuerzo Teriyaki.\n\nTÉCNICA RENA WARE:\n1. Pon la sartén grande VACÍA Y SECA a FUEGO MEDIO-ALTO (6–7 de 9)\n2. Espera 2–3 minutos. Prueba: gotas de agua ruedan sin evaporarse = lista\n3. Agrega 7 g de ghee, debe derretirse en 2–3 seg\n4. Agrega el pollo; SIN revolver 2–3 min hasta bordes dorados\n5. Revuelve; cocina 3–4 min más\n6. Listo: exterior dorado, interior blanco firme\n\n📦 Contenedor: "POLLO CUBOS (108 g cocido) — Lunes almuerzo Teriyaki"\nA la NEVERA.',
        timer_segundos: 600
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n115 g crudo rinde ~287 g cocidos. Divide en 2 porciones:\n  • 90 g cocido → Lunes desayuno (Arroz Miso Tamago)\n  • 197 g cocido → Lunes almuerzo (Chicken Teriyaki)\n\nEspera 2 min a que enfríe un poco antes de tapar. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [
      {
        texto: 'MARINADA DE RES (MIN 10)\n\n110 g de res lomo/bola en tiras CRUDA — para Martes almuerzo (Gyudon).\n\nEn un tazón, mezcla:\n  • 7.5 ml de salsa de soya (~1.5 cucharaditas)\n  • 2.5 ml de mirin (~0.5 cucharadita)\n  • 5 g de jengibre — ralla fresco: retira piel con cuchillo y ralla\nRevuelve bien. Agrega las tiras de res y cubre completamente.\n\n1. Pasa todo (res + marinada) a contenedor hermético o bolsa\n2. Etiqueta: "RES MARINADA — Martes almuerzo Gyudon"\n3. A la NEVERA (NO congelador)\n\n⚠️ Dura máximo 2 días.',
        timer_segundos: null
      }
    ],
    almacenamiento: [
      '📦 NEVERA — POLLO CUBOS (~108 g cocido): 3 días → Lunes almuerzo (Teriyaki)',
      '❄️  NEVERA, NO CONGELADOR — RES MARINADA (110 g crudo): máximo 2 días → Martes almuerzo (Gyudon)',
      '📦 NEVERA — ARROZ (~287 g cocido): Lunes desayuno 90 g + Lunes almuerzo 197 g'
    ]
  },

  martes: {
    titulo: 'Martes — Prep del día',
    dia: 'martes',
    tiempo_min: 20,
    nota: 'Mañana: arroz + proteína (la res marinada de ayer). Sin prep de noche.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n190 g de arroz blanco crudo + 228 ml de agua fría.\n\n1. Coloca 190 g de arroz\n2. Agrega 228 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n190 g crudo rinde ~475 g cocidos. Divide en 3 porciones:\n  • 90 g cocido → Martes desayuno (Arroz Miso Tamago)\n  • 200 g cocido → Martes almuerzo (Gyudon)\n  • 185 g cocido → Martes cena (Tofu Don)\n\nEspera 2 min a que enfríe un poco antes de tapar. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [],
    almacenamiento: [
      '📦 NEVERA — ARROZ (~475 g cocido): Martes desayuno 90 g + Martes almuerzo 200 g + Martes cena 185 g',
      '❄️  NEVERA (de ayer) — RES MARINADA: para almuerzo de hoy (Gyudon)'
    ]
  },

  miercoles: {
    titulo: 'Miércoles — Prep del día',
    dia: 'miercoles',
    tiempo_min: 25,
    nota: 'Mañana: arroz + pollo deshilachado (del batch anterior). Sin prep de noche.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n190 g de arroz blanco crudo + 228 ml de agua fría.\n\n1. Coloca 190 g de arroz\n2. Agrega 228 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'PREPARA POLLO DESHILACHADO (MIN 5)\n\n60 g de pechuga cocida y desmenuzada (del batch del domingo/lunes).\n\nSi viene en trozos:\n1. Coloca en plato\n2. Con dos tenedores, tira en direcciones opuestas\n3. Deshébrala hasta quedar toda en hebras finas\n4. Coloca en contenedor',
        timer_segundos: null
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n190 g crudo rinde ~475 g cocidos. Divide en 3 porciones:\n  • 90 g cocido → Miércoles desayuno (Arroz Miso Tamago)\n  • 200 g cocido → Miércoles almuerzo (Egg Soboro)\n  • 185 g cocido → Miércoles cena (Sopa Miso)\n\nEspera 2 min a que enfríe un poco antes de tapar. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [],
    almacenamiento: [
      '📦 NEVERA — POLLO DESHILACHADO (~48 g cocido): Miércoles almuerzo (Soboro)',
      '📦 NEVERA — ARROZ (~475 g cocido): Miércoles desayuno 90 g + Miércoles almuerzo 200 g + Miércoles cena 185 g'
    ]
  },

  jueves: {
    titulo: 'Jueves — Prep del día',
    dia: 'jueves',
    tiempo_min: 30,
    nota: 'Mañana: arroz + proteína. Noche: marinada res para viernes almuerzo.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n115 g de arroz blanco crudo + 138 ml de agua fría.\n\n1. Coloca 115 g de arroz\n2. Agrega 138 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'COCINA LA PROTEÍNA (MIN 10–20)\n\n135 g de pechuga de pollo cruda para almuerzo Teriyaki.\n\nTÉCNICA RENA WARE:\n1. Pon la sartén grande VACÍA Y SECA a FUEGO MEDIO-ALTO (6–7 de 9)\n2. Espera 2–3 minutos. Prueba: gotas de agua ruedan sin evaporarse = lista\n3. Agrega 7 g de ghee, debe derretirse en 2–3 seg\n4. Agrega el pollo; SIN revolver 2–3 min hasta bordes dorados\n5. Revuelve; cocina 3–4 min más\n6. Listo: exterior dorado, interior blanco firme\n\n📦 Contenedor: "POLLO CUBOS (108 g cocido) — Jueves almuerzo Teriyaki"\nA la NEVERA.',
        timer_segundos: 600
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n115 g crudo rinde ~287 g cocidos. Divide en 2 porciones:\n  • 90 g cocido → Jueves desayuno (Arroz Miso Tamago)\n  • 197 g cocido → Jueves almuerzo (Chicken Teriyaki)\n\nEspera 2 min a que enfríe un poco antes de tapar. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [
      {
        texto: 'MARINADA DE RES (MIN 10)\n\n110 g de res lomo/bola en tiras CRUDA — para Viernes almuerzo (Gyudon).\n\nEn un tazón, mezcla:\n  • 7.5 ml de salsa de soya (~1.5 cucharaditas)\n  • 2.5 ml de mirin (~0.5 cucharadita)\n  • 5 g de jengibre — ralla fresco: retira piel con cuchillo y ralla\nRevuelve bien. Agrega las tiras de res y cubre completamente.\n\n1. Pasa todo (res + marinada) a contenedor hermético o bolsa\n2. Etiqueta: "RES MARINADA — Viernes almuerzo Gyudon"\n3. A la NEVERA (NO congelador)\n\n⚠️ Dura máximo 2 días.',
        timer_segundos: null
      }
    ],
    almacenamiento: [
      '📦 NEVERA — POLLO CUBOS (~108 g cocido): 3 días → Jueves almuerzo (Teriyaki)',
      '❄️  NEVERA, NO CONGELADOR — RES MARINADA (110 g crudo): máximo 2 días → Viernes almuerzo (Gyudon)',
      '📦 NEVERA — ARROZ (~287 g cocido): Jueves desayuno 90 g + Jueves almuerzo 197 g'
    ]
  },

  viernes: {
    titulo: 'Viernes — Prep del día',
    dia: 'viernes',
    tiempo_min: 20,
    nota: 'Mañana: arroz + proteína (la res marinada de ayer). Sin prep de noche.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n190 g de arroz blanco crudo + 228 ml de agua fría.\n\n1. Coloca 190 g de arroz\n2. Agrega 228 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n190 g crudo rinde ~475 g cocidos. Divide en 3 porciones:\n  • 90 g cocido → Viernes desayuno (Arroz Miso Tamago)\n  • 200 g cocido → Viernes almuerzo (Gyudon)\n  • 185 g cocido → Viernes cena (Tofu Don)\n\nEspera 2 min a que enfríe un poco antes de tapar. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [],
    almacenamiento: [
      '📦 NEVERA — ARROZ (~475 g cocido): Viernes desayuno 90 g + Viernes almuerzo 200 g + Viernes cena 185 g',
      '❄️  NEVERA (de ayer) — RES MARINADA: para almuerzo de hoy (Gyudon)'
    ]
  },

  sabado: {
    titulo: 'Sábado — Prep del día + salmón fresco',
    dia: 'sabado',
    tiempo_min: 25,
    nota: 'Mañana: arroz fresco (solo hoy) + comprar salmón. Sin prep de noche.',
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
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n195 g crudo rinde ~487 g cocidos. Divide en 3 porciones:\n  • 90 g cocido → Sábado desayuno (Arroz Miso Tamago)\n  • 212 g cocido → Sábado almuerzo (Salmon Don)\n  • 185 g cocido → Sábado cena (Sopa Miso)\n\nEspera 2 min a que enfríe un poco antes de tapar. A la NEVERA.',
        timer_segundos: null
      }
    ],
    tareas_noche: [],
    almacenamiento: [
      '🐟 REFRIGERADOR — SALMÓN FRESCO (130 g): para almuerzo de hoy (NO guardar para después)',
      '📦 NEVERA — ARROZ (~487 g cocido): Sábado desayuno 90 g + Sábado almuerzo 212 g + Sábado cena 185 g'
    ]
  },

  domingo: {
    titulo: 'Domingo — Prep del día (almuerzo libre)',
    dia: 'domingo',
    tiempo_min: 15,
    nota: 'Mañana: solo desayuno + cena. Almuerzo es LIBRE — comes por fuera. Sin prep de noche.',
    tareas_manana: [
      {
        texto: 'ENCIENDE LA ARROCERA (MIN 0)\n\n110 g de arroz blanco crudo + 132 ml de agua fría.\n\n1. Coloca 110 g de arroz\n2. Agrega 132 ml de agua fría\n3. Remueve y enciende\n4. Lista en ~20 min — cambiará sola a "Mantener caliente"',
        timer_segundos: null
      },
      {
        texto: 'DIVIDE Y GUARDA ARROZ (MIN 20)\n\n110 g crudo rinde ~275 g cocidos. Divide en 2 porciones:\n  • 90 g cocido → Domingo desayuno (Arroz Miso Tamago)\n  • 185 g cocido → Domingo cena (Sopa Miso)\n\n⚠️ Domingo ALMUERZO es LIBRE — no hay receta, comes por fuera. No preparamos arroz para esa comida.\n\nEspera 2 min a que enfríe un poco antes de tapar. A la NEVERA.',
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

export function getPrepDiario(dia) {
  return PREP_DIARIO[dia] ?? null;
}

export function getPrepDiarioList() {
  return Object.values(PREP_DIARIO);
}
