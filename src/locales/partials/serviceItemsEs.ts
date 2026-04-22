/**
 * Service copy (Spanish) keyed by service slug.
 */
export const serviceItemsEs: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  treatments: string[];
}> = {
  'abdominal-adhesions': {
    title: 'Adherencias abdominales',
    description:
      'Movilización visceral especializada para reducir cicatrices internas y mejorar la salud digestiva.',
    longDescription:
      'Las adherencias abdominales son bandas de tejido cicatricial que se forman entre tejidos y órganos abdominales. Pueden causar dolor, hinchazón y problemas digestivos. Nuestros fisioterapeutas utilizan técnicas suaves de movilización visceral para mejorar la movilidad de los órganos y reducir las molestias.',
    benefits: [
      'Menos dolor abdominal',
      'Mejor digestión',
      'Mayor movilidad',
      'Menos hinchazón',
    ],
    treatments: [
      'Movilización visceral',
      'Liberación miofascial',
      'Educación postural',
      'Estabilización del core',
    ],
  },
  'industrial-rehab': {
    title: 'Rehabilitación industrial',
    description:
      'Acondicionamiento específico para el trabajo que ayuda a los empleados a regresar de forma segura y eficiente.',
    longDescription:
      'Nuestro programa de rehabilitación industrial está diseñado para trabajadores lesionados en el empleo. Nos enfocamos en acondicionamiento laboral, ergonomía y evaluaciones de capacidad funcional para un regreso al trabajo seguro y sostenible.',
    benefits: [
      'Regreso seguro al trabajo',
      'Menor riesgo de nueva lesión',
      'Mayor resistencia física',
      'Conciencia ergonómica',
    ],
    treatments: [
      'Acondicionamiento para el trabajo',
      'Evaluaciones de capacidad funcional',
      'Evaluaciones ergonómicas',
      'Entrenamiento en mecánica de levantamiento',
    ],
  },
  'lymphedema-therapy': {
    title: 'Terapia del linfedema',
    description:
      'Drenaje linfático manual y terapia de compresión para controlar la hinchazón y mejorar la circulación.',
    longDescription:
      'El linfedema es una afección de hinchazón crónica, a menudo en brazos o piernas. Nuestros terapeutas certificados utilizan terapia descongestiva completa (CDT) para controlar la hinchazón, prevenir infecciones y mejorar la calidad de vida.',
    benefits: [
      'Menos hinchazón',
      'Mejor salud de la piel',
      'Mayor amplitud de movimiento',
      'Prevención de infecciones',
    ],
    treatments: [
      'Drenaje linfático manual',
      'Vendajes de compresión',
      'Ejercicios descongestivos',
      'Educación en cuidado de la piel',
    ],
  },
  'dry-needling': {
    title: 'Punción seca (dry needling)',
    description:
      'Terapia de puntos gatillo con agujas finas para liberar tensión muscular y reducir el dolor.',
    longDescription:
      'La punción seca trata el dolor musculoesquelético y los problemas de movimiento. Consiste en insertar una aguja fina en un punto gatillo del músculo para liberar tensión, mejorar el flujo sanguíneo y disminuir el dolor.',
    benefits: [
      'Alivio del dolor inmediato',
      'Mejor función muscular',
      'Mayor amplitud de movimiento',
      'Recuperación más rápida',
    ],
    treatments: [
      'Punción seca de puntos gatillo',
      'Estimulación eléctrica (opcional)',
      'Ejercicios correctivos',
      'Movilización de tejidos blandos',
    ],
  },
  headaches: {
    title: 'Cefaleas',
    description:
      'Tratamiento especializado para cefaleas tensionales y migrañas mediante terapia cervical y de la mandíbula.',
    longDescription:
      'Muchas cefaleas se deben a tensión en el cuello, la mandíbula o la parte superior de la espalda. Identificamos la causa y utilizamos terapia manual y ejercicios correctivos para un alivio duradero.',
    benefits: [
      'Menos frecuencia de cefaleas',
      'Menor intensidad del dolor',
      'Mayor movilidad cervical',
      'Mejor calidad del sueño',
    ],
    treatments: [
      'Movilización cervical',
      'Evaluación ATM',
      'Corrección postural',
      'Técnicas de manejo del estrés',
    ],
  },
  arthritis: {
    title: 'Artritis',
    description:
      'Ejercicio personalizado y estrategias de protección articular para controlar el dolor y mantener la movilidad.',
    longDescription:
      'La artritis puede dificultar las actividades diarias. Ayudamos a manejar dolor y rigidez con ejercicio de bajo impacto, protección articular y terapia manual para que siga activo e independiente.',
    benefits: [
      'Menos dolor articular',
      'Mejor movilidad articular',
      'Más fuerza',
      'Mejor calidad de vida',
    ],
    treatments: [
      'Programas de ejercicio de bajo impacto',
      'Movilización articular',
      'Recomendaciones de terapia acuática',
      'Entrenamiento con dispositivos de ayuda',
    ],
  },
  'running-performance': {
    title: 'Rendimiento en carrera',
    description:
      'Análisis de la marcha y entrenamiento de fuerza para mejorar la eficiencia y prevenir lesiones por running.',
    longDescription:
      'Tanto si recién empieza como si es deportista de élite, nuestro programa le ayuda a correr mejor y más lejos. Usamos análisis de marcha en vídeo para corregir ineficiencias y un plan de fuerza y movilidad a medida.',
    benefits: [
      'Mayor eficiencia al correr',
      'Menor riesgo de lesión',
      'Más velocidad y potencia',
      'Mejor recuperación',
    ],
    treatments: [
      'Análisis de marcha en vídeo',
      'Fuerza específica para corredores',
      'Asesoría en calzado',
      'Manejo de la carga de entrenamiento',
    ],
  },
  'balance-and-gait': {
    title: 'Equilibrio y marcha',
    description:
      'Prevención de caídas y entrenamiento de movilidad para mayor estabilidad y confianza al moverse.',
    longDescription:
      'Los problemas de equilibrio y marcha pueden provocar caídas y pérdida de independencia. Evaluamos las causas de la inestabilidad y diseñamos un plan para mejorar su equilibrio y confianza.',
    benefits: [
      'Menor riesgo de caídas',
      'Más confianza',
      'Velocidad al caminar mejorada',
      'Mayor independencia',
    ],
    treatments: [
      'Entrenamiento de equilibrio',
      'Rehabilitación vestibular',
      'Entrenamiento de la marcha',
      'Ejercicios de fuerza y flexibilidad',
    ],
  },
  'chronic-pain': {
    title: 'Dolor crónico',
    description:
      'Estrategias basadas en evidencia para controlar y reducir el dolor a largo plazo.',
    longDescription:
      'El dolor crónico es complejo. Combinamos ejercicio terapéutico, terapia manual y educación en neurociencia del dolor para que entienda su dolor y vuelva a las actividades que ama.',
    benefits: [
      'Mejor manejo del dolor',
      'Mayor nivel de actividad',
      'Mejor comprensión del dolor',
      'Menor dependencia de medicación',
    ],
    treatments: [
      'Educación en neurociencia del dolor',
      'Imágenes motoras graduadas',
      'Ejercicio terapéutico',
      'Terapia manual',
    ],
  },
  tmj: {
    title: 'ATM (articulación temporomandibular)',
    description:
      'Terapia especializada para dolor, chasquidos y disfunción de la mandíbula mediante técnicas manuales.',
    longDescription:
      'Los trastornos de la ATM pueden causar dolor mandibular, chasquidos y dificultad al comer. Utilizamos técnicas intraorales y extraorales para restaurar la función y reducir el dolor.',
    benefits: [
      'Menos dolor mandibular',
      'Mejor apertura de la boca',
      'Menos chasquidos',
      'Menos tensión facial',
    ],
    treatments: [
      'Terapia manual intraoral',
      'Tratamiento de la columna cervical',
      'Ejercicios para la mandíbula',
      'Técnicas de relajación',
    ],
  },
  'sports-rehab': {
    title: 'Rehabilitación deportiva',
    description:
      'Programas para que los deportistas se recuperen de lesiones y vuelvan al máximo rendimiento.',
    longDescription:
      'Entendemos las exigencias del deporte. Nuestro programa restaura fuerza, potencia y agilidad para que regrese al campo o la cancha de forma segura y lo antes posible.',
    benefits: [
      'Regreso más rápido al deporte',
      'Mejor rendimiento',
      'Menor riesgo de recidiva',
      'Más fuerza y potencia',
    ],
    treatments: [
      'Ejercicios específicos del deporte',
      'Entrenamiento pliométrico',
      'Circuitos de agilidad',
      'Terapia manual',
    ],
  },
  'post-surgical-rehab': {
    title: 'Rehabilitación posquirúrgica',
    description:
      'Rehabilitación integral para una recuperación óptima tras cirugías ortopédicas.',
    longDescription:
      'La recuperación tras la cirugía es una fase crítica. Trabajamos con su cirujano en un plan basado en protocolos para el mejor resultado posible.',
    benefits: [
      'Mejores resultados quirúrgicos',
      'Menos tejido cicatricial',
      'Mayor amplitud de movimiento',
      'Recuperación más rápida',
    ],
    treatments: [
      'Ejercicio según protocolo',
      'Educación en cuidado de la incisión',
      'Terapia manual',
      'Manejo de la hinchazón',
    ],
  },
  'pediatric-pt': {
    title: 'Fisioterapia pediátrica',
    description:
      'Terapia divertida y efectiva para niños: motricidad, fuerza y desarrollo.',
    longDescription:
      'Los niños no son adultos en miniatura. Usamos el juego para ayudar a alcanzar hitos del desarrollo y mejorar la función física.',
    benefits: [
      'Mejores habilidades motoras',
      'Más fuerza y coordinación',
      'Mejor progreso en el desarrollo',
      'Mayor participación en el juego',
    ],
    treatments: [
      'Ejercicio basado en el juego',
      'Entrenamiento en hitos del desarrollo',
      'Equilibrio y coordinación',
      'Educación familiar',
    ],
  },
};
