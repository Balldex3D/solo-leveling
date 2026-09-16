export const RECETAS = {
  okayu_miso_tamago: {
    id: 'okayu_miso_tamago',
    nombre: 'Arroz Miso Tamago',
    foto_url: null,
    tipo: 'desayuno',
    rango: null,
    cuando: 'Desayuno — Todos los días (~08:45)',
    tiempo_min: 8,
    kcal: 291, proteina_g: 9.7, grasa_g: 13.8, carbo_g: 31,
    ajuste_fase1: null,
    regla_especial: 'El miso NUNCA se hierve — se disuelve en agua caliente aparte, no en olla al fuego.',
    ingredientes: [
      { nombre: 'Arroz blanco (del batch)', crudo: '35 g', cocido: '~90 g', kcal: 123, p: 2.2, g: 0.3, c: 27 },
      { nombre: 'Huevo', crudo: '1 ud (50 g)', kcal: 70, p: 6, g: 5, c: 0.5 },
      { nombre: 'Ghee (cocción)', crudo: '3 g', kcal: 27, p: 0, g: 3, c: 0 },
      { nombre: 'Pasta miso', crudo: '10 g', kcal: 18, p: 1, g: 0.5, c: 2.5 },
      { nombre: 'Cebolla larga', crudo: '10 g', kcal: 3, p: 0, g: 0, c: 0.5 },
      { nombre: 'Nori (tiras)', crudo: '2 g', kcal: 5, p: 0.5, g: 0, c: 0.5 },
      { nombre: 'Aceite sésamo', crudo: '5 ml', kcal: 45, p: 0, g: 5, c: 0 }
    ],
    pasos: [
      'PASO 1 — Arroz: Saca del batch 90 g de arroz cocido (la porción del desayuno de la nevera). Ponlo en el microondas en un bowl: calienta 1 minuto. Revuelve con cuchara. Si aún no sale vapor, 30 segundos más. Debe salir vapor caliente al acercarte. Déjalo en el bowl.',
      'PASO 2 — Miso (mientras calienta el arroz): En una taza, pon 100 ml de agua. Calienta en el microondas 45 segundos. Agrega 10 g de pasta miso y revuelve con cucharita hasta que no queden grumos. Esta es tu mini sopa de miso del desayuno. Déjala a un lado.',
      { texto: 'PASO 3 — Huevo revuelto: Pon tu sartén Rena Ware PEQUEÑA a fuego MEDIO. Espera 2 minutos VACÍA Y SECA. PRUEBA: Echa 2-3 gotas de agua con los dedos — si las gotas RUEDAN como bolitas sin evaporarse al instante, la sartén está lista. Si se evaporan al toque = muy caliente, baja el fuego y espera 30 seg. Con la sartén lista, agrega una pizca de ghee (o 3 ml de aceite). Rompe el huevo en la sartén. Con espátula de madera, revuelve constantemente en movimientos circulares a fuego MEDIO-BAJO durante 2 minutos. El huevo debe quedar en trozos FIRMES Y OPACOS, completamente amarillo, sin partes brillantes o líquidas.', timer_segundos: 120 },
      'PASO 4 — Arma y sirve: Coloca el huevo revuelto encima del arroz caliente en el bowl. Pica 10 g de cebolla larga en aros finos (~2-3 mm). Corta 2 g de nori con tijera en tiras delgadas. Rocía 5 ml de aceite de sésamo CRUDO por encima del arroz y el huevo. Espolvorea cebolla y nori. Toma la mini sopa de miso al lado o viértela encima del arroz como salsa. Sirve de inmediato.'
    ]
  },

  batido_post_entreno: {
    id: 'batido_post_entreno',
    nombre: 'Batido post-entreno',
    foto_url: null,
    tipo: 'batido',
    rango: null,
    cuando: 'Todos los días, justo después de entrenar (~10:30)',
    tiempo_min: 4,
    kcal: 513, proteina_g: 40.2, grasa_g: 13.5, carbo_g: 61,
    ajuste_fase1: null,
    regla_especial: null,
    ingredientes: [
      { nombre: 'Whey Isolate', crudo: '35 g', kcal: 130, p: 30, g: 1, c: 1 },
      { nombre: 'Crema de arroz (Primor)', crudo: '40 g', kcal: 144, p: 3.2, g: 0, c: 32 },
      { nombre: 'Banano', crudo: '100 g (1 ud)', kcal: 89, p: 1, g: 0, c: 23 },
      { nombre: 'Mantequilla de maní', crudo: '25 g', kcal: 150, p: 6, g: 12.5, c: 5 },
      { nombre: 'Creatina', crudo: '5 g', kcal: 0, p: 0, g: 0, c: 0 },
      { nombre: 'Agua', crudo: '400 ml', kcal: 0, p: 0, g: 0, c: 0 }
    ],
    pasos: [
      'PREPARA LA ESTACIÓN: Antes de empezar nada, coloca la licuadora limpia y SECA sobre la mesa. Verifica que esté enchufada y que funcione. Ten la GRAMERA DIGITAL a mano. Todo listo = puedes empezar. Esto evita atrasos después de entrenar cuando tienes hambre.',
      'PESA CADA INGREDIENTE: Usa la gramera digital ANTES de licuar. NUNCA a ojo ni con cucharas (es impreciso). Pesa: 35 g de whey isolate (polvo de proteína), 40 g de crema de arroz (polvo café claro), 5 g de creatina (polvo blanco, si la usas), 25 g de mantequilla de maní (pasta, del tarro), y 100 g de banano PELADO. Si tu banano pesa 105 g o 95 g, corta un pedacito para llegar a 100 g exactos.',
      'MIDE EL AGUA: Necesitas 400 ml de agua FRÍA. Usa las marcas de mL del vaso de la licuadora si tiene, o una jarra medidora. El agua fría hace que el batido salga más frío y refrescante.',
      'VIERTE EN ORDEN EN LA LICUADORA: Esto es IMPORTANTE porque el whey isolate tiende a formar grumos. Orden: (1) agua primero, (2) whey isolate, (3) crema de arroz, (4) creatina (si la usas). Los polvos se van al agua, no al aire.',
      { texto: 'PRIMER PULSO — VELOCIDAD BAJA: Licúa a la VELOCIDAD MÁS BAJA (botón al mínimo) durante 10 SEGUNDOS EXACTOS. Cronometra con tu celular. Este pulso corto y suave mezcla el whey SIN formar grumos. Si licúas a velocidad alta desde el inicio, el whey se apelmaza y salen bolitas duras que no se deshacen.', timer_segundos: 10 },
      'AGREGA FRUTAS Y GRASAS: Destapa la licuadora. Toma el banano y pártelo en 2-3 trozos (no lo pongas entero, se atasca). Agrega también los 25 g de mantequilla de maní (una cucharada colmada aprox).',
      { texto: 'SEGUNDO PULSO — VELOCIDAD ALTA: Licúa a la VELOCIDAD MÁS ALTA (botón al máximo) durante 20 SEGUNDOS EXACTOS. La mezcla debe quedar COMPLETAMENTE LISA, de color CAFÉ CLARO UNIFORME (no hay manchas blancas de whey sin mezclar ni café oscuro), y NO DEBEN VERSE ni un solo trocito de banano flotando. Si ves grumos o trocitos de banano, licúa 5 segundos más y revisa. Repite si es necesario.', timer_segundos: 20 },
      'SIRVE DE INMEDIATO: Vierte en un vaso grande (MÍNIMO 500 ml). TÓMATELO DENTRO DE LOS SIGUIENTES 15-20 MINUTOS. Pasados 30 minutos, la crema de arroz empieza a ESPESARSE (se vuelve muy espeso, casi como un pudín) y la mezcla se SEPARA (el agua se va al fondo, los polvos suben). Si esperas mucho, queda desagradable de tomar.',
      'LAVA LA LICUADORA INMEDIATAMENTE: Enjuaga con agua tibia (no fría, el maní es graso) y lava bien. Si dejas secar la mantequilla de maní dentro, se pega DURO y es muy difícil de limpiar después. Unos 2 minutos de limpieza ahora te ahorran frustraciones después.'
    ]
  },

  chicken_teriyaki_don: {
    id: 'chicken_teriyaki_don',
    nombre: 'Chicken Teriyaki Don',
    foto_url: null,
    tipo: 'almuerzo',
    rango: 'B',
    cuando: 'Almuerzo — Lunes y Jueves',
    tiempo_min: 12,
    kcal: 633, proteina_g: 40.6, grasa_g: 18.2, carbo_g: 71.6,
    ajuste_fase1: { descripcion: 'Arroz sube de 60 g a 80 g crudo (ya incluido en kcal).', delta_kcal: 70, delta_p: 1.3, delta_g: 0.2, delta_c: 15.5 },
    regla_especial: null,
    ingredientes: [
      { nombre: 'Arroz blanco', crudo: '80 g', cocido: '200 g', kcal: 280, p: 5.1, g: 0.7, c: 61.6 },
      { nombre: 'Pechuga de pollo (del batch)', crudo: '135 g', cocido: '108 g', kcal: 160, p: 32, g: 3, c: 0 },
      { nombre: 'Ghee (cocción)', crudo: '7 g', kcal: 63, p: 0, g: 7, c: 0 },
      { nombre: 'Espinaca', crudo: '50 g', cocido: '40 g', kcal: 12, p: 1.5, g: 0, c: 1 },
      { nombre: 'Salsa soya', crudo: '15 ml', kcal: 10, p: 1, g: 0, c: 1 },
      { nombre: 'Mirin', crudo: '10 ml', kcal: 24, p: 0, g: 0, c: 5 },
      { nombre: 'Jengibre rallado', crudo: '5 g', kcal: 4, p: 0, g: 0, c: 1 },
      { nombre: 'Aceite sésamo (topping)', crudo: '5 ml', kcal: 45, p: 0, g: 5, c: 0 },
      { nombre: 'Sésamo semillas', crudo: '5 g', kcal: 30, p: 1, g: 2.5, c: 1 },
      { nombre: 'Cebolla larga', crudo: '15 g', kcal: 5, p: 0, g: 0, c: 1 }
    ],
    pasos: [
      'PASO 1: Saca del refrigerador el pollo ya cocido del batch. Si viene en un bloque, pesa 108 g (cocido) en la gramera. Colócalo en un plato a temperatura ambiente mientras preparas la sartén.',
      'PASO 2: Pon tu sartén Rena Ware grande (la más grande que tengas) a FUEGO MEDIO (posición 5 de 9) VACÍA Y SECA durante 2-3 minutos. PRUEBA DE AGUA: Echa 2-3 gotas de agua con los dedos — si ruedan como bolitas sin evaporarse al instante = lista. Si se evaporan al toque = muy caliente, baja el fuego y espera 30 seg.',
      'PASO 3: Con la sartén lista, agrega 7 g de ghee (aproximadamente 1 cucharadita colmada). Debe derretirse en 5 segundos. Si ves humo, el fuego está muy alto — bájalo.',
      { texto: 'PASO 4: Agrega el pollo cocido a la sartén. Con una espátula de madera o silicona, muévelo cada 15-20 segundos. Cocina 2 minutos. El pollo debe verse DORADO (café claro por fuera, no gris). Si está frío por dentro al probar, 30 segundos más.', timer_segundos: 120 },
      { texto: 'PASO 5: Sin sacar el pollo, agrega a la sartén: 15 ml de salsa de soya (aproximadamente 1 cucharada), 10 ml de mirin (aproximadamente 2 cucharaditas), y 5 g de jengibre rallado fresco. SUBE A FUEGO MEDIO-ALTO (posición 6-7). Revuelve SIN PARAR durante 1 minuto. El líquido debe burbujear y reducirse: al principio hay bastante líquido, al terminar debe verse un glaseado brillante pegado al pollo.', timer_segundos: 60 },
      { texto: 'PASO 6: Pasa TODO el pollo con su salsa a un plato limpio. En la MISMA sartén (sin lavar, para aprovechar los sabores), agrega 50 g de espinaca. Fresca: lávala y sécala bien antes. Congelada: directo. REVUELVE SIN PARAR 1 minuto a fuego MEDIO. La espinaca debe cambiar a verde oscuro brillante y verse marchita (más pequeña, blanda). No pases de 1 minuto o queda aguada.', timer_segundos: 60 },
      'PASO 7 — Arroz (hazlo AHORA, justo antes de armar el bowl): Saca 200 g de arroz cocido del batch (nevera o congelador). En microondas: calienta 2 minutos revolviendo a mitad de camino. El arroz debe estar HUMEANTE (vapor caliente saliendo) cuando lo saques.',
      'PASO 8 — Arma el bowl inmediatamente: Coloca el arroz CALIENTE en la BASE del bowl. Encima del arroz, coloca todo el pollo con su glaseado teriyaki en el centro. A un lado, coloca la espinaca marchita.',
      'PASO 9 — Toppings finales: Espolvorea 5 g de semillas de sésamo. Pica 15 g de cebolla larga (parte verde) en aros finos de ~2-3 mm y espolvorea. Rocía 5 ml de aceite de sésamo CRUDO (va al final, NO se cocina) por encima de todo. Sirve de inmediato.'
    ]
  },

  gyudon: {
    id: 'gyudon',
    nombre: 'Gyudon — Beef Bowl',
    foto_url: null,
    tipo: 'almuerzo',
    rango: 'B',
    cuando: 'Almuerzo — Martes y Viernes',
    tiempo_min: 10,
    kcal: 653, proteina_g: 35.6, grasa_g: 23.2, carbo_g: 72.1,
    ajuste_fase1: null,
    regla_especial: null,
    ingredientes: [
      { nombre: 'Arroz blanco', crudo: '80 g', cocido: '200 g', kcal: 280, p: 5.1, g: 0.7, c: 61.6 },
      { nombre: 'Res lomo (tiras, marinada)', crudo: '110 g', cocido: '88 g', kcal: 180, p: 22, g: 10, c: 0 },
      { nombre: 'Huevo', crudo: '1 ud (50 g)', kcal: 70, p: 6, g: 5, c: 0.5 },
      { nombre: 'Cebolla larga', crudo: '30 g', kcal: 10, p: 0.5, g: 0, c: 2 },
      { nombre: 'Ghee (cocción)', crudo: '5 g', kcal: 45, p: 0, g: 5, c: 0 },
      { nombre: 'Salsa soya', crudo: '15 ml', kcal: 10, p: 1, g: 0, c: 1 },
      { nombre: 'Mirin', crudo: '10 ml', kcal: 24, p: 0, g: 0, c: 5 },
      { nombre: 'Jengibre rallado', crudo: '5 g', kcal: 4, p: 0, g: 0, c: 1 },
      { nombre: 'Sésamo semillas', crudo: '5 g', kcal: 30, p: 1, g: 2.5, c: 1 }
    ],
    pasos: [
      'PASO 1: Saca del refrigerador la res en tiras (ya marinada, 110 g). Colócala en un plato a temperatura ambiente mientras preparas la sartén.',
      'PASO 2: Pon tu sartén Rena Ware grande a FUEGO ALTO (posición 7-8 de 9) VACÍA Y SECA durante 3 minutos. La res necesita sartén muy caliente para sellarse. PRUEBA DE AGUA: Echa 2-3 gotas de agua — deben rebotar y evaporarse rápido (no rolar como bolitas, porque a fuego alto el Leidenfrost no se da igual — simplemente deben danzar y evaporarse en segundos). Con la sartén caliente, agrega 5 g de ghee. Debe derretirse en 2-3 segundos y humear levemente. Si no se derrite rápido, espera 1 minuto más.',
      { texto: 'PASO 3 — SELLAR: Agrega TODA la res con su marinada. NO REVUELVAS NADA durante 90 segundos exactos. El lado en contacto con la sartén pasa de rojo/rosado a CAFÉ OSCURO. No toques durante ese tiempo.', timer_segundos: 90 },
      { texto: 'PASO 4: VOLTEA TODAS las tiras. Sella el otro lado 90 segundos más. Debe verse CAFÉ OSCURO por fuera. Si cortas una tira, el interior debe verse rosado pálido (término medio), no rojo brillante (crudo). Si ves rojo, 30 segundos más por lado.', timer_segundos: 90 },
      { texto: 'PASO 5: BAJA A FUEGO MEDIO (posición 5). Pica 30 g de cebolla larga (toda, parte blanca y verde) en trozos medianos. Agrega a la sartén junto con 5 g de jengibre rallado fresco. REVUELVE SIN PARAR 2 minutos. La cebolla debe verse TRANSLÚCIDA (casi transparente, como de vidrio) y blanda.', timer_segundos: 120 },
      { texto: 'PASO 6: Agrega 15 ml de salsa de soya (1 cucharada) y 10 ml de mirin (2 cucharaditas). SUBE A FUEGO MEDIO-ALTO (posición 6-7). Revuelve SIN PARAR 1 minuto. El líquido se reduce y queda espeso y brillante pegado a la carne. Pasa TODA la carne con su salsa a un plato limpio.', timer_segundos: 60 },
      { texto: 'PASO 7 — Huevo revuelto (en la MISMA sartén, limpia con papel): Baja a FUEGO MEDIO-BAJO (posición 3-4). Rompe 1 huevo en un tazón y bátelo con tenedor 20 segundos. Vierte en la sartén. Revuelve constantemente con espátula durante 2 minutos. El huevo debe quedar en trozos FIRMES Y OPACOS, color amarillo parejo, sin partes brillantes ni líquidas.', timer_segundos: 120 },
      'PASO 8 — Arroz (hazlo AHORA, justo antes de armar): Saca 200 g de arroz cocido del batch. En microondas: 1-2 minutos revolviendo a mitad. Debe salir vapor caliente.',
      'PASO 9 — Arma el bowl inmediatamente: Coloca el arroz CALIENTE en la BASE. Encima, toda la carne con su glaseado en el centro. Encima de la carne, el huevo revuelto. Espolvorea 5 g de semillas de sésamo. Sirve de inmediato.'
    ]
  },

  egg_soboro_don: {
    id: 'egg_soboro_don',
    nombre: 'Egg Soboro Don',
    foto_url: null,
    tipo: 'almuerzo',
    rango: 'B',
    cuando: 'Almuerzo — Miércoles',
    tiempo_min: 10,
    kcal: 698, proteina_g: 38.6, grasa_g: 27.7, carbo_g: 71.1,
    ajuste_fase1: { descripcion: 'Arroz sube de 60 g a 80 g crudo (ya incluido en kcal).', delta_kcal: 70, delta_p: 1.3, delta_g: 0.2, delta_c: 15.5 },
    regla_especial: null,
    ingredientes: [
      { nombre: 'Arroz blanco', crudo: '80 g', cocido: '200 g', kcal: 280, p: 5.1, g: 0.7, c: 61.6 },
      { nombre: 'Huevos', crudo: '3 ud (150 g)', kcal: 210, p: 18, g: 15, c: 1.5 },
      { nombre: 'Ghee (cocción)', crudo: '3 g', kcal: 27, p: 0, g: 3, c: 0 },
      { nombre: 'Pechuga desmenuzada (del batch)', crudo: '60 g', cocido: '48 g', kcal: 70, p: 14, g: 1.5, c: 0 },
      { nombre: 'Salsa soya', crudo: '10 ml', kcal: 7, p: 0.5, g: 0, c: 1 },
      { nombre: 'Mirin', crudo: '10 ml', kcal: 24, p: 0, g: 0, c: 5 },
      { nombre: 'Aceite sésamo', crudo: '5 ml', kcal: 45, p: 0, g: 5, c: 0 },
      { nombre: 'Cebolla larga', crudo: '15 g', kcal: 5, p: 0, g: 0, c: 1 },
      { nombre: 'Sésamo semillas', crudo: '5 g', kcal: 30, p: 1, g: 2.5, c: 1 }
    ],
    pasos: [
      'En un bowl mediano, rompe 3 huevos. Agrega 10 ml de salsa de soya (aproximadamente 2 cucharaditas) y 10 ml de mirin (aproximadamente 2 cucharaditas). Con un tenedor, BATE bien hasta que el color sea AMARILLO PAREJO en toda la mezcla. NO deben verse vetas blancas de clara sin batir. Tarda ~1 minuto de batido constante.',
      'TÉCNICA RENA WARE PARA HUEVOS: Pon tu sartén Rena Ware (mediana) a FUEGO MEDIO-BAJO (posición 3-4 de 9) VACÍA Y SECA durante 2 minutos. PRUEBA: Echa 2-3 gotas de agua con los dedos — si ruedan como bolitas = lista. Si se evaporan al instante = muy caliente, baja el fuego. Con la sartén lista, agrega una pizca de ghee (aproximadamente 3 g). Esto es CLAVE en acero inoxidable para que el huevo no se pegue.',
      'Vierte TODO el huevo batido en la sartén. Verás que empieza a coagularse por los bordes.',
      { texto: 'INMEDIATAMENTE empieza a REVOLVER SIN PARAR. Usa 3-4 palillos de madera juntos o dos tenedores, como si estuvieras "desmenuzando" el huevo mientras se cocina. El movimiento debe ser RÁPIDO y CONSTANTE durante 3 MINUTOS EXACTOS. NO pares de mover, ni un segundo. Si paras, el huevo se pega en trozos grandes (tortilla). Debe quedar en GRANITOS PEQUEÑOS E IRREGULARES, un poco húmedos pero NO líquidos.', timer_segundos: 180 },
      'Apenas ya NO VEAS HUEVO LÍQUIDO BRILLANTE en la mezcla (a los ~3 minutos), RETIRA DEL FUEGO INMEDIATAMENTE. Coloca la sartén en un lugar seguro.',
      'Saca 48 g de pechuga de pollo ya cocida y desmenuzada del batch. Si viene en un bloque, pesa 48 g. Si está DESMENUZADA, úsala tal cual. Si está en trozos, deshébrala con dos tenedores tirando suavemente en direcciones opuestas hasta que quede toda deshilachada.',
      'Saca 200 g de arroz cocido del batch (nevera o congelador). En microondas: calienta 2 minutos revolviendo a mitad de camino. En sartén: calienta a fuego medio 2-3 minutos removiendo. El arroz debe estar HUMEANTE.',
      'Arma el bowl: En un bowl grande, coloca 200 g de arroz caliente en la BASE. Divide mentalmente el arroz en dos mitades. En UNA MITAD, coloca todo el huevo soboro (los granitos que acabas de cocinar). En la OTRA MITAD, coloca todo el pollo desmenuzado. Los dos colores deben verse separados (amarillo de huevo, blanco/café del pollo).',
      'Termina: Rocía 5 ml de aceite de sésamo CRUDO (NO cocido) sobre el bowl completo. Pica 15 g de cebolla larga (solo la parte verde, si prefieres) en aros finos de aproximadamente 2-3 mm y espolvorea. Espolvorea 5 g de semillas de sésamo. Sirve de inmediato mientras está caliente.'
    ]
  },

  tamagoyaki_don: {
    id: 'tamagoyaki_don',
    nombre: 'Tamagoyaki Don',
    foto_url: null,
    tipo: 'almuerzo',
    rango: 'C',
    cuando: 'Almuerzo — Domingo',
    tiempo_min: 15,
    kcal: 632, proteina_g: 24.6, grasa_g: 28.2, carbo_g: 68.1,
    ajuste_fase1: { descripcion: 'Arroz sube de 60 g a 80 g crudo (ya incluido en kcal).', delta_kcal: 70, delta_p: 1.3, delta_g: 0.2, delta_c: 15.5 },
    regla_especial: null,
    ingredientes: [
      { nombre: 'Arroz blanco (del batch)', crudo: '80 g', cocido: '200 g', kcal: 280, p: 5.1, g: 0.7, c: 61.6 },
      { nombre: 'Huevos', crudo: '3 ud (150 g)', kcal: 210, p: 18, g: 15, c: 1.5 },
      { nombre: 'Ghee (cocción)', crudo: '5 g', kcal: 45, p: 0, g: 5, c: 0 },
      { nombre: 'Salsa soya', crudo: '10 ml', kcal: 7, p: 0.5, g: 0, c: 1 },
      { nombre: 'Mirin', crudo: '5 ml', kcal: 12, p: 0, g: 0, c: 2.5 },
      { nombre: 'Aceite sésamo (topping)', crudo: '5 ml', kcal: 45, p: 0, g: 5, c: 0 },
      { nombre: 'Sésamo semillas', crudo: '5 g', kcal: 30, p: 1, g: 2.5, c: 1 },
      { nombre: 'Cebolla larga', crudo: '10 g', kcal: 3, p: 0, g: 0, c: 0.5 }
    ],
    pasos: [
      'PASO 1 — Huevo primero (el arroz va DESPUÉS para que no se enfríe): En un tazón mediano, rompe 3 huevos. Agrega 10 ml de salsa de soya y 5 ml de mirin. Con un tenedor, BATE bien hasta que el color sea AMARILLO PAREJO, sin rayas de clara. Tarda ~1 minuto.',
      { texto: 'PASO 2 — Técnica Rena Ware para huevo suave: Pon tu sartén Rena Ware pequeña a FUEGO MEDIO-BAJO (posición 3-4 de 9) VACÍA Y SECA durante 2 minutos. PRUEBA: Echa 2-3 gotas de agua — si ruedan como bolitas = lista. Agrega 5 g de ghee. Vierte TODA la mezcla de huevo. Espera 20 segundos SIN MOVER — los bordes empezarán a ponerse opacos. Con espátula de madera, dobla suavemente los bordes hacia el centro. Repite cada 20-30 segundos, siempre suave y lento. Cocina ~2-3 minutos en total. El huevo debe quedar en CAPAS FIRMES Y OPACAS (no debe verse brillante ni líquido). Retira del fuego cuando esté todo opaco y firme.', timer_segundos: 150 },
      'PASO 3 — Arroz (hazlo AHORA para que no se enfríe): Saca 200 g de arroz cocido del batch. En microondas: 2 minutos revolviendo a mitad. Debe estar HUMEANTE. Coloca en bowl grande.',
      'PASO 4 — Arma inmediatamente: Coloca el huevo ENCIMA del arroz caliente. Termina con: 5 g de semillas de sésamo espolvoreadas, 10 g de cebolla larga en aros finos de ~2-3 mm, y 5 ml de aceite de sésamo CRUDO rociado por encima. Sirve de inmediato.'
    ]
  },

  salmon_don: {
    id: 'salmon_don',
    nombre: 'Salmon Don',
    foto_url: null,
    tipo: 'almuerzo',
    rango: 'A',
    cuando: 'Almuerzo — Sábado',
    tiempo_min: 15,
    kcal: 711, proteina_g: 35.1, grasa_g: 29.9, carbo_g: 70.3,
    ajuste_fase1: { descripcion: 'Arroz sube de 65 g a 85 g crudo, aceite de oliva de 5 ml a 10 ml (ya incluido en kcal).', delta_kcal: 115, delta_p: 1.3, delta_g: 5.1, delta_c: 15.6 },
    regla_especial: null,
    ingredientes: [
      { nombre: 'Arroz blanco', crudo: '85 g', cocido: '~213 g', kcal: 299, p: 5.6, g: 0.4, c: 66.3 },
      { nombre: 'Salmón filete', crudo: '130 g', cocido: '105 g', kcal: 265, p: 26, g: 17, c: 0 },
      { nombre: 'Sal + pimienta negra', crudo: 'pizca', kcal: 0, p: 0, g: 0, c: 0 },
      { nombre: 'Espinaca', crudo: '50 g', cocido: '40 g', kcal: 12, p: 1.5, g: 0, c: 1 },
      { nombre: 'Aceite oliva (topping)', crudo: '10 ml', kcal: 90, p: 0, g: 10, c: 0 },
      { nombre: 'Salsa soya', crudo: '10 ml', kcal: 7, p: 0.5, g: 0, c: 1 },
      { nombre: 'Nori (tiras)', crudo: '2 g', kcal: 5, p: 0.5, g: 0, c: 0.5 },
      { nombre: 'Sésamo semillas', crudo: '5 g', kcal: 30, p: 1, g: 2.5, c: 1 },
      { nombre: 'Cebolla larga', crudo: '10 g', kcal: 3, p: 0, g: 0, c: 0.5 }
    ],
    pasos: [
      'PRIMERO — Precalienta tu Oster CKSTAF40WDDF: (1) Conecta la air fryer. (2) Presiona el botón de TEMPERATURA (°C/°F) y con las flechas sube hasta 180°C. (3) Presiona el botón de TIEMPO y con las flechas pon 3 MINUTOS. (4) Presiona el botón de encendido/START. La air fryer calentará sola. Mientras se precalienta, prepara el salmón.',
      'Saca el filete de salmón (130 g) del refrigerador. Con papel de cocina LIMPIO, seca bien por AMBOS lados (parte de piel y parte de carne). Si queda húmedo no dora bien en la air fryer.',
      'Sazona el salmón: Usando ¼ de cucharadita de sal (aproximadamente 1.5 g) y un molino de pimienta fresca, espolvorea por ambos lados. Usa 6-8 vueltas del molino de pimienta (no cuentes, aproximadamente). Frota suavemente con los dedos para que se distribuya bien. Estos condimentos NO suman calorías relevantes.',
      'Coloca el salmón en la CANASTA de la air fryer (NO en la bandeja inferior). Si el filete tiene piel, coloca con la PIEL HACIA ABAJO. No pongas nada más encima ni alrededor del salmón.',
      { texto: 'Cocina en tu Oster CKSTAF40WDDF: Presiona TEMPERATURA → 180°C. Presiona TIEMPO → 10 MINUTOS. Presiona START. NO ABRAS antes de los 10 minutos. NO VOLTEES el salmón. A los 10 minutos, abre y verifica: Presiona suavemente con un tenedor. Debe separarse FÁCILMENTE en láminas. El CENTRO debe verse OPACO (rosado-anaranjado sólido, sin brillo vidrioso). Si el centro todavía se ve translúcido (brillante como agua), vuelve a poner: TIEMPO → 3 MINUTOS → START.', timer_segundos: 600 },
      { texto: 'Mientras el salmón se cocina en la air fryer, prepara la espinaca (minuto 2-3): En una sartén pequeña, SIN ACEITE NI GHEE (completamente seca), a fuego MEDIO, coloca 50 g de espinaca. Si es CONGELADA, colócala directo. Si es FRESCA de bolsa, lava bien, pica en trozos medianos y sécala con papel. REVUELVE SIN PARAR durante 1 minuto exacto. La espinaca debe cambiar a VERDE OSCURO BRILLANTE y verse MARCHITA (pierde volumen, se ve más pequeña, blanda). NO pases de 1 minuto.', timer_segundos: 60 },
      'Cocina el ARROZ FRESCO mientras se cocinan las otras cosas: En una ARROCERA, coloca 85 g de arroz blanco crudo. Agrega ~100-130 ml de agua fría (proporción 1:1.2 a 1:1.5). Por ejemplo, 105 ml de agua. Enciende la arrocera. Ella misma cambiará a "Mantener caliente" cuando esté lista. El arroz rendirá aproximadamente 213 g cocido. ESTE ARROZ ES FRESCO, NO viene del batch.',
      'Cuando el salmón está listo (opaco en el centro), arma el bowl: En un bowl grande, coloca ~213 g de arroz CALIENTE en la BASE. Encima del arroz, coloca la espinaca marchita. Encima de la espinaca, coloca el salmón entero o en 2-3 trozos grandes.',
      'Termina con los toppings: Rocía 10 ml de salsa de soya (aproximadamente 2 cucharaditas) sobre el salmón. Corta 2 g de nori (alga, viene en hoja seca) en tiras finas usando tijera: dobla la hoja por la mitad un par de veces y corta franjas de aproximadamente 0.5 cm de ancho por 4-5 cm de largo. Espolvorea el nori. Espolvorea 5 g de semillas de sésamo. Pica 10 g de cebolla larga en aros finos de aproximadamente 2-3 mm y espolvorea. Finalmente, rocía 10 ml de aceite de oliva CRUDO (NO se cocina, va al final para mantener su sabor) por encima de TODO.',
      'IMPORTANTE — Control de cocción del salmón: Si después de los 10 minutos el salmón no se separa fácil en láminas o el centro todavía se ve translúcido (brillante, no opaco), el pescado NO está cocido. Vuelve a meter en la air fryer otros 2-3 minutos. NO te apresures — un pescado crudo por dentro es peligroso. Es mejor cocinarlo un poco de más que de menos.'
    ]
  },

  miso_udon_huevo: {
    id: 'miso_udon_huevo',
    nombre: 'Miso Udon + Huevo',
    foto_url: null,
    tipo: 'cena',
    rango: 'B',
    cuando: 'Cena — Lunes y Jueves',
    tiempo_min: 10,
    kcal: 682, proteina_g: 31.1, grasa_g: 23.9, carbo_g: 85.4,
    ajuste_fase1: null,
    regla_especial: 'El miso se disuelve SIEMPRE fuera del fuego — hervirlo destruye los probióticos vivos y amarga el sabor.',
    ingredientes: [
      { nombre: 'Fideos udon', crudo: '100 g seco', cocido: '220 g', kcal: 350, p: 9, g: 1, c: 75 },
      { nombre: 'Pasta miso', crudo: '20 g', kcal: 35, p: 2, g: 1, c: 5 },
      { nombre: 'Huevos', crudo: '2 ud (100 g)', kcal: 140, p: 12, g: 10, c: 1 },
      { nombre: 'Ghee (cocción)', crudo: '3 g', kcal: 27, p: 0, g: 3, c: 0 },
      { nombre: 'Espinaca', crudo: '40 g', cocido: '30 g', kcal: 10, p: 1, g: 0, c: 1 },
      { nombre: 'Tofu Mori-Nu Silken', crudo: '80 g', kcal: 47, p: 6.6, g: 1.9, c: 1.9 },
      { nombre: 'Aceite sésamo', crudo: '7 ml', kcal: 63, p: 0, g: 7, c: 0 },
      { nombre: 'Nori', crudo: '2 g', kcal: 5, p: 0.5, g: 0, c: 0.5 },
      { nombre: 'Cebolla larga', crudo: '15 g', kcal: 5, p: 0, g: 0, c: 1 }
    ],
    pasos: [
      'Hierve 500 ml de agua en una olla grande a fuego ALTO. Sabrás que está lista cuando ves burbujas grandes subiendo rápido desde el fondo.',
      { texto: 'Agrega 100 g de fideos udon SECOS (vienen en paquete). Revuelve bien para que no se peguen. Desde que el agua vuelve a hervir, cocina exactamente 3 minutos cronometrando con tu celular.', timer_segundos: 180 },
      { texto: 'Agrega 40 g de espinaca. Si es CONGELADA: mete directo congelada. Si es FRESCA de bolsa: lava, pica en trozos medianos, sécala bien con papel. Cocina 1 minuto más removiendo.', timer_segundos: 60 },
      'RETIRA LA OLLA DEL FUEGO COMPLETAMENTE. Colócala lejos de la estufa. NO HIERVAS MÁS — si hierves el miso se destruye.',
      'En un cucharón pequeño, disuelve 20 g de pasta miso: Vierte un poco del caldo caliente (no hirviendo) en el cucharón, agrega el miso y revuelve con una cuchara hasta que no queden grumos (tarda ~30 seg). Vierte todo de vuelta a la olla revolviendo lentamente.',
      'Prepara el huevo revuelto: Rompe 2 huevos en un tazón, bate con tenedor 20 segundos. En tu sartén Rena Ware PEQUEÑA a FUEGO MEDIO-BAJO (posición 3-4): calienta 2 minutos vacía y seca, prueba de agua (gotas que ruedan), agrega una pizca de ghee. Vierte los huevos batidos. Revuelve constantemente con espátula durante 2-3 minutos hasta que estén FIRMES Y OPACOS, sin partes brillantes ni líquidas.',
      'Agrega 80 g de tofu Mori-Nu del contenedor del batch. El tofu Silken es DELICADO: agrégalo con una cuchara sin grandes movimientos. Deja reposar 30 segundos sin mover la olla para que se temple.',
      'Sirve en un bowl hondo: Vierte la sopa con fideos, espinaca y tofu. Coloca el huevo (pochéado o revuelto) encima. Termina con: 2 g de nori cortado en tiras finas con tijera (~0.5 cm de ancho x 4-5 cm de largo), 15 g de cebolla larga cortada en aros finos (~2-3 mm de grosor), y 7 ml de aceite de sésamo CRUDO rociado por encima (el aceite NO se cocina, va al final para que mantenga su sabor).'
    ]
  },

  tofu_don_espinaca: {
    id: 'tofu_don_espinaca',
    nombre: 'Tofu Don + Espinaca',
    foto_url: null,
    tipo: 'cena',
    rango: 'B',
    cuando: 'Cena — Martes y Viernes',
    tiempo_min: 15,
    kcal: 673, proteina_g: 31.8, grasa_g: 27.6, carbo_g: 74.5,
    ajuste_fase1: null,
    regla_especial: null,
    ingredientes: [
      { nombre: 'Arroz blanco', crudo: '75 g', cocido: '188 g', kcal: 263, p: 5.3, g: 0.4, c: 58.5 },
      { nombre: 'Tofu Mori-Nu Silken (cubos)', crudo: '200 g', kcal: 118, p: 16.5, g: 4.7, c: 4.7 },
      { nombre: 'Almidón de maíz (maicena)', crudo: '8 g', kcal: 30, p: 0, g: 0, c: 7.3 },
      { nombre: 'Huevo', crudo: '1 ud (50 g)', kcal: 70, p: 6, g: 5, c: 0.5 },
      { nombre: 'Espinaca', crudo: '60 g', cocido: '45 g', kcal: 14, p: 2, g: 0, c: 1 },
      { nombre: 'Ghee (cocción)', crudo: '10 g', kcal: 90, p: 0, g: 10, c: 0 },
      { nombre: 'Salsa soya', crudo: '15 ml', kcal: 10, p: 1, g: 0, c: 1 },
      { nombre: 'Aceite sésamo (topping)', crudo: '5 ml', kcal: 45, p: 0, g: 5, c: 0 },
      { nombre: 'Sésamo semillas', crudo: '5 g', kcal: 30, p: 1, g: 2.5, c: 1 },
      { nombre: 'Cebolla larga', crudo: '10 g', kcal: 3, p: 0, g: 0, c: 0.5 }
    ],
    pasos: [
      'PASO 1: Escurre el tofu (esto tarda 15 minutos así que hazlo primero). Abre la caja del tofu Mori-Nu. Coloca el bloque ENTERO sobre 3-4 capas de papel de cocina limpio. Déjalo reposar 15 minutos EXACTOS sin mover, sin presionar, sin poner nada encima. Esto elimina el agua que tiene adentro.',
      'Mientras escurre el tofu, prepara la espinaca: Si es CONGELADA (bolsa del congelador), úsala tal cual. Si es FRESCA de bolsa, lava bien bajo agua fría, pica en trozos medianos (no demasiado pequeños o se deshacen) y sécala muy bien con papel de cocina.',
      'Pasados los 15 minutos, corta el tofu en cubos de 2 cm: Coloca la tabla sobre una superficie estable. Con un cuchillo bien afilado, haz cortes limpios y seguros. El tofu Silken es delicado — no presiones el cuchillo, déjalo hacer el trabajo. Si un cubo se desmorona un poco, está bien, colócalo igual en la sartén.',
      'Pasa el tofu por maicena JUSTO ANTES de freír (no antes, o se humedece y no dora): En un plato hondo, coloca 8 g de almidón de maíz. Toma cada cubo delicadamente y pásalo por la maicena cubriéndolo por todos los lados. Sacude el exceso suavemente. El tofu debe verse cubierto de polvillo blanco.',
      'TÉCNICA RENA WARE para el tofu: Pon tu sartén Rena Ware grande a FUEGO MEDIO (posición 5 de 9) VACÍA Y SECA durante 2-3 minutos. PRUEBA: Echa 2-3 gotas de agua con los dedos — si ruedan como bolitas sin evaporarse al instante = lista. Con la sartén lista, agrega 10 g de ghee (1 cucharadita colmada). Debe derretirse en 5 segundos y verse brillante. Si ves humo, baja el fuego y espera 30 seg.',
      'Coloca los cubos de tofu en la sartén SIN QUE SE TOQUEN entre sí (si no caben todos, hazlo en 2 tandas, 4-5 cubos por tanda). NO revuelvas ni toques durante los primeros 2 minutos — esto deja que se dore el lado inferior. Verás que se pone café oscuro.',
      { texto: 'Gira cada cubo con una espátula de plástico LENTAMENTE. Cocina 2 minutos más. Vuelve a girar para que dore otro lado. Repite hasta que TODOS los lados estén dorados (café claro a café oscuro). En total tarda unos 8-10 minutos. El tofu debe verse dorado en todos lados, firme pero no quemado.', timer_segundos: 600 },
      { texto: 'Cuando termines el tofu, prepara la espinaca en la sartén Rena Ware PEQUEÑA: Ya está caliente si la usaste antes — si no, calienta 2 min a fuego MEDIO. Coloca 60 g de espinaca directamente (fresca: lávala y sécala bien antes; congelada: directo). Agrega 1/2 cucharadita de ghee. Mueve SIN PARAR durante 1 minuto, hasta que esté MARCHITA (verde oscuro brillante, más pequeña, blanda). No pases de 1 minuto o queda aguada.', timer_segundos: 60 },
      { texto: 'Huevo revuelto (en la MISMA sartén pequeña, limpia con papel): Baja a FUEGO MEDIO-BAJO (posición 3-4). La sartén ya está caliente del paso anterior, así que no necesitas precalentar de nuevo. Agrega una pizca de ghee si queda muy seca. Rompe 1 huevo en tazón, bate 20 seg, vierte en la sartén. Revuelve constantemente con espátula 2 minutos. Debe quedar FIRME Y OPACO, color amarillo parejo, sin partes brillantes ni líquidas.', timer_segundos: 120 },
      'Recalienta el arroz (188 g cocido) del batch: En microondas 1-2 minutos (revolviendo a mitad de camino) o en sartén a fuego medio 2-3 minutos removiendo. Debe estar HUMEANTE (con vaho caliente saliendo).',
      'Arma el bowl: Primero coloca 188 g de arroz caliente en la BASE. Encima del arroz, coloca los cubos de tofu dorados en el CENTRO. A un lado, coloca la espinaca marchita. Encima de todo, coloca el huevo frito.',
      'Termina: Rocía 15 ml de salsa de soya (aproximadamente 1 cucharada) sobre el tofu. Rocía 5 ml de aceite de sésamo CRUDO (NO cocido, va al final) por encima. Espolvorea 5 g de semillas de sésamo. Pica 10 g de cebolla larga en aros finos de aproximadamente 2-3 mm y espolvorea encima. Sirve CALIENTE.'
    ]
  },

  sopa_miso_arroz_tofu: {
    id: 'sopa_miso_arroz_tofu',
    nombre: 'Tofu Tamago Miso Shiru Teishoku',
    foto_url: null,
    tipo: 'cena',
    rango: 'C',
    cuando: 'Cena — Miércoles, Sábado y Domingo',
    tiempo_min: 8,
    kcal: 551, proteina_g: 25.2, grasa_g: 19.2, carbo_g: 69.3,
    ajuste_fase1: null,
    regla_especial: 'El miso se disuelve SIEMPRE fuera del fuego. Arroz se sirve en bowl aparte (no mezclado).',
    ingredientes: [
      { nombre: 'Arroz blanco', crudo: '75 g', cocido: '188 g', kcal: 263, p: 5.3, g: 0.4, c: 58.5 },
      { nombre: 'Pasta miso', crudo: '20 g', kcal: 35, p: 2, g: 1, c: 5 },
      { nombre: 'Tofu Mori-Nu Silken (cubos)', crudo: '120 g', kcal: 71, p: 9.9, g: 2.8, c: 2.8 },
      { nombre: 'Huevo', crudo: '1 ud (50 g)', kcal: 70, p: 6, g: 5, c: 0.5 },
      { nombre: 'Ghee (cocción)', crudo: '3 g', kcal: 27, p: 0, g: 3, c: 0 },
      { nombre: 'Espinaca', crudo: '50 g', cocido: '40 g', kcal: 12, p: 1.5, g: 0, c: 1 },
      { nombre: 'Nori', crudo: '2 g', kcal: 5, p: 0.5, g: 0, c: 0.5 },
      { nombre: 'Aceite sésamo', crudo: '7 ml', kcal: 63, p: 0, g: 7, c: 0 },
      { nombre: 'Cebolla larga', crudo: '15 g', kcal: 5, p: 0, g: 0, c: 1 }
    ],
    pasos: [
      'Prepara el tofu PRIMERO (esto es importante para que no se apresure): Abre la caja del tofu Mori-Nu. Con un cuchillo bien afilado, corta el bloque en cubos de 2 cm. Usa movimientos lentos y seguros — el tofu es delicado y se desmorona. Coloca los cubos en un plato aparte.',
      'Prepara la espinaca: Si es CONGELADA, úsala directo. Si es FRESCA de bolsa, lava bien bajo agua fría, pica en trozos medianos y sécala con papel de cocina.',
      'Hierve 400 ml de agua en una olla a fuego ALTO. Sabrás que está lista cuando ves burbujas grandes subiendo rápido.',
      { texto: 'Agrega la espinaca (50 g, ya preparada). Cocina 30 segundos. LUEGO agrega suavemente los cubos de tofu con una cuchara (NO los dejes caer, colócalos delicadamente). Cocina 1 minuto más. El tofu NO debe hervir, solo debe templarse.', timer_segundos: 90 },
      'RETIRA LA OLLA DEL FUEGO COMPLETAMENTE. Coloca lejos de la estufa. El miso se debe disolver SIN que hierva.',
      'En un cucharón pequeño, disuelve 20 g de pasta miso: Vierte un poco del caldo caliente en el cucharón, agrega el miso, y revuelve con cuchara hasta que NO queden grumos (tarda ~30 seg). Vierte TODO de vuelta a la olla, revolviendo lentamente.',
      'Prepara el huevo revuelto mientras se templa la sopa: Rompe 1 huevo en un tazón, bate con tenedor 20 seg. En tu sartén Rena Ware pequeña: calienta 2 min a fuego MEDIO-BAJO vacía y seca, prueba de agua (gotas que ruedan), agrega pizca de ghee. Vierte el huevo batido. Revuelve constantemente 2 minutos hasta que esté FIRME Y OPACO, sin partes brillantes ni líquidas.',
      { texto: 'Recalienta el arroz (188 g cocido) del batch: saca del refrigerador y calienta en microondas 1 minuto o en sartén a fuego medio 2-3 minutos removiendo. El arroz debe estar HUMEANTE.', timer_segundos: 180 },
      'Sirve: En un bowl hondo, vierte la sopa (con tofu y espinaca). En un bowl APARTE al lado, sirve el arroz caliente. NO MEZCLES el arroz con la sopa, se deshace. Coloca el huevo pochéado o revuelto ENCIMA de la sopa.',
      'Termina: Corta 2 g de nori (alga) en tiras finas con tijera (~0.5 cm de ancho x 4-5 cm de largo). Pica 15 g de cebolla larga en aros finos de aproximadamente 2-3 mm. Rocía 7 ml de aceite de sésamo CRUDO por encima (el aceite NO se cocina, va al final para mantener su sabor). Sirve de inmediato mientras la sopa está caliente.'
    ]
  }
};

export function pasosNormalizados(receta) {
  return receta.pasos.map((paso, i) => typeof paso === 'string'
    ? { n: i + 1, texto: paso, timer_segundos: null }
    : { n: i + 1, texto: paso.texto, timer_segundos: paso.timer_segundos ?? null });
}

export const getReceta = (id) => RECETAS[id] ?? null;
