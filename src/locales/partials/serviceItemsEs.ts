/**
 * Service copy (Spanish) keyed by service slug.
 */
export const serviceItemsEs: Record<string, {
  title: string;
  description: string;
  longDescription: string | string[];
  benefits: string[];
  treatments: string[];
}> = {
  'workers-compensation': {
    title: 'Compensación de trabajo',
    description:
      'Tratamiento personalizado para lesiones relacionadas con el trabajo para volver al trabajo de forma segura y confiable.',
    longDescription:
      'Nuestros servicios de fisioterapia de compensación laboral están diseñados para ayudarle a recuperarse de forma segura, recuperar fuerza y volver al trabajo con confianza. Nuestro equipo se especializa en tratar lesiones relacionadas con el trabajo como lesiones, espasmos, lesiones de estrés repetitivo y condiciones posquirúrgicas. A través de planes de tratamiento individualizados, cuidado práctico y programas de ejercicio progresivos, nos centramos en restaurar la movilidad, reducir el dolor y prevenir re-lesiones. También incorporamos entrenamiento específico para el trabajo y evaluaciones funcionales para asegurarnos de que esté realmente listo para volver al trabajo. Entendemos el proceso de compensación laboral y estamos aquí para guiarle en cada paso del camino—para que pueda centrarse en la curación y volver a lo que hace mejor.',
    benefits: [
      'Recuperación segura y rápida',
      'Fuerza y movilidad restauradas',
      'Volver al trabajo con confianza',
    ],
    treatments: [
      'Planes de tratamiento individualizados',
      'Entrenamiento específico para el trabajo',
      'Evaluaciones funcionales',
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
    longDescription: [
      'Cefaleas crónicas son una de las quejas más comunes que llevan a los pacientes al doctor. Hay seis categorías diferentes de cefaleas, no asociadas con una condición médica subyacente:',
      'Cefaleas cervicogénicas: el dolor generalmente comienza en uno de los lados del cuello y se mueve hacia adelante sobre la cabeza',
      'Cefaleas de cluster: el tipo de cefalea más intolerable con dolor generalmente en la parte frontal de la cabeza cerca de un ojo',
      'Cefaleas crónicas paroxísticas hemianalíticas: dolor generalmente en la parte frontal de la cabeza cerca de un ojo y se extiende hacia el cuello',
      'Cefaleas tensionales: cefaleas generalizadas clásicas generalmente descritas como presión o estrechez',
      'Cefaleas sin aura migraña: comienzan como un dolor apagado, generalmente pulsante, en la parte frontal de la cabeza en un lado (a veces cambiando) con dolor que va desde leve a severo',
      'Cefaleas con aura migraña: misma que las migrañas sin aura pero con síntomas de advertencia antes del inicio completo de la cefalea',
    ],
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
    longDescription: [
        'La cincuenta porciento de nosotros tendrá artritis de rodilla antes de los 85 años, según el Centro de Control de Enfermedades. Y un cuarto de nosotros desarrollará artritis de cadera antes de los 85 años. La artritis es un hecho del envejecimiento, pero más de 50 millones de estadounidenses de todas las edades sufren esta enfermedad debilitante.',
        'Porque la artritis es generalmente el resultado del desgaste de la cartílago en las articulaciones. Cuando este cartílago se rasga en el espacio de la articulación causa inflamación dolorosa. A medida que esto empeora, las tejidos alrededor de la articulación se tensan y debilitan, resultando en una limitación de la amplitud de movimiento. El movimiento eficiente es esencial no solo para aliviar el dolor de la artritis sino también para minimizar el daño continuo a sus articulaciones.',
        'La terapia física correcta le permitirá vivir con artritis sin dolor constante y sin constante medicación. Su terapeuta trabajará con usted para restaurar su amplitud de movimiento, mejorar su activación muscular para soportar sus articulaciones, mejorar el movimiento y la función y enseñarle a moverse eficientemente para proteger sus articulaciones.',
        'La terapia física le ayudará a romper el ciclo de dolor. Trabajando con su terapeuta físico en una base uno a uno, cambiará de un sufridor de artritis a alguien que vive sin dolor con artritis.',
      ],
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
    longDescription: [
      'La carrera es el único ejercicio que no requiere equipo especial ni lugar. Pero, aunque es un ejercicio simple, también es propenso a lesiones. Sin embargo, la tasa de lesiones para los corredores es del 80%. Esto significa que casi ocho de cada diez personas que pasan por tu día de carrera, o en el próximo 10K, se lesionarán este año.',
      'Mucha gente piensa que si compran un buen par de zapatos, se calientan y se enfrían después de la carrera, podrán evitar lesiones. Pero la carrera le daña a pesar de que con un par de zapatos caros, una buena calentación y una buena descompresión, podría evitarse.',
      'La técnica adecuada puede prevenir lesiones y también mejorar la velocidad y el rendimiento. Algunos cambios simples en la técnica de carrera pueden hacer toda la diferencia en su capacidad para correr sin lesiones, pero también para mejorar su rendimiento. Nuestros terapeutas son corredores y atletas también, entendemos su amor por la carrera y su motivación. Su terapeuta realizará un análisis de video de su técnica de carrera y trabajará con usted para hacer cambios inmediatos en su forma, cambios que le mantendrán en la carretera por años.',
    ],
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
      'Mejorar tus habilidades de caminar - técnicamente conocidas como tu "marcha" - y tu equilibrio son desafíos interrelacionados. La terapia física le ayudará a dominar ambos habilidades para disminuir su riesgo de lesión, al mismo tiempo que el equilibrio y la marcha están inextricablemente relacionados porque tienden a impactarse mutuamente. Incluso si no piensa que está en peligro de caer, el general ralentizamiento que está atribuyendo a la vejez podría ser algo más. Piense en el equilibrio como un taburete de tres patas con las patas siendo los ojos, los oídos y los pies. Si falta una pata, entonces el taburete se derrumba.',
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
    longDescription: [
        'La masaje, el estiramiento y el ejercicio no fijarán el dolor crónico por sí solos. Las terapias manuales especializadas son necesarias para tratar sus nervios inflamados. Estos nervios se han inflado con inflamación que viaja a lo largo de la longitud de todo el nervio y hacia sus miembros, causando dolor muscular, contracturas, dolor y肿胀关节, quemazón y hasta sensación de punzada. El nervio inflamado realmente se filtra en los tejidos causando incluso más dolor.',
        'Lo mejor que podemos ofrecer es esperanza a los pacientes con dolor crónico. Hay intervenciones de terapia física que pueden tratar o incluso eliminar el dolor y restaurar su capacidad de funcionar sin la necesidad de cirugía o medicinas. Con un plan de terapia personalizado, su terapeuta utilizará la combinación correcta de técnicas y enfoques para tratar su dolor crónico.',
      ],
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
    longDescription: [
      'El dolor de la ATM ocurre cuando hay un problema con la articulación temporomandibular; la "bisagra" que conecta su mandíbula con su cráneo. Esto puede causar no solo dolor de la mandíbula sino también dolor facial, dolor de cabeza y dolor de cuello.',
      'A menudo, alguien que sufre de dolor de cuello o dolor de cabeza no incluso se da cuenta de que el problema podría estar en la mandíbula. Y muchas veces aquellos con dolor de ATM no se dan cuenta de que es la ATM la que está causando su dolor de cuello o dolor de espalda. Los pacientes que sufren dolor de ATM pueden encontrar alivio temporal de masaje, manipulación cervical, acupuntura y hasta botox, pero estos son caros y los efectos solo duran temporalmente.',
    ],
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
    longDescription: [
      'La lesión ocasional es una parte natural de la competencia deportiva. La recuperación es relativamente simple - tome descanso por un mes o dos y puede recuperarse de casi cualquier lesión deportiva. Lo que un atleta competitivo necesita, sin embargo, es un plan de rehabilitación planificado que lo lleve de la lesión a un rendimiento deportivo completo. Le ayudaremos a recuperarse más rápido y a prepararse para competir.',
      'A través de terapia manual y actividad adecuada, su terapeuta le ayudará a reducir su dolor, mejorar su movilidad y recuperar completamente su función mecánica lo antes posible. Su plan de rehabilitación puede comenzar con terapia acuática y terapia manual, progresando hacia un programa funcional deportivo específico. A través de este plan específico, personalizado, podrá volver a competir con confianza en su cuerpo.',
    ],
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
    longDescription: [
      'La recuperación tras la cirugía es una fase crítica. Creemos que la libertad de movimiento es la base de una vida saludable y satisfactoria. Su terapeuta le trabajará uno a uno y le personalizará su tratamiento especialmente para usted y sus necesidades de recuperación.',
    ],
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
    longDescription: [
      'Los niños pueden beneficiarse de los servicios de fisioterapia para una variedad de condiciones o lesiones, desde lesiones deportivas ortopédicas hasta condiciones congénitas que afectan el movimiento, la movilidad y la coordinación. La fisioterapia pediátrica se basa en intervenciones funcionales que a menudo son juegos o actividades basadas para incorporar técnicas de terapia efectivas en un entorno interactivo divertido para cada niño. La fisioterapia pediátrica puede comenzar en niños tan jóvenes como recién nacidos y puede abarcar todas las etapas de crecimiento y desarrollo a través de la infancia y la adolescencia.',
    ],
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
