/**
 * Service copy (Spanish) keyed by service slug.
 */
export const serviceItemsEs: Record<string, {
  title: string;
  description: string;
  longDescription: string | string[];
  benefits: string[] | null;
  treatments: string[] | null;
}> = {
  'workers-compensation': {
    title: 'Compensación de trabajo',
    description:
      'Tratamiento personalizado para lesiones laborales para que vuelva al trabajo de forma segura y con confianza.',
    longDescription: [
      'Una lesión en el trabajo puede afectar mucho mas que su empleo: puede alterar su rutina diaria, su independencia y su bienestar general. Nuestros servicios de rehabilitacion por compensacion laboral estan diseñados para ayudarle a recuperarse de forma segura, restaurar su funcion y volver al trabajo con confianza.',
      'Entendemos las exigencias particulares de las lesiones laborales y aplicamos un enfoque individualizado y orientado a objetivos. Tras una evaluacion completa, creamos un plan de tratamiento centrado en reducir el dolor, mejorar la fuerza y la movilidad, y prepararle para las demandas fisicas de su puesto especifico.',
      'El tratamiento puede incluir terapia manual, ejercicio terapeutico y entrenamiento funcional que simula tareas reales de trabajo para asegurar un regreso seguro y sostenible. Tambien hacemos enfasis en la mecanica corporal adecuada y estrategias de prevencion para reducir el riesgo de una nueva lesion.',
      'Nuestro equipo colabora estrechamente con medicos, gestores de casos y empleadores para mantener una comunicacion clara y una recuperacion fluida. Ya sea que su objetivo sea volver a sus funciones completas o a trabajo modificado, estamos aqui para acompañarle en cada paso.',
    ],
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
    title: 'Puncion seca',
    description:
      'Terapia de puntos gatillo con agujas finas para liberar tensión muscular y reducir el dolor.',
    longDescription: [
      'La puncion seca es una tecnica especializada y basada en evidencia que utilizan los fisioterapeutas para aliviar el dolor, reducir la tension muscular y mejorar el movimiento. Consiste en el uso de una aguja fina y esteril para tratar puntos gatillo, que son zonas tensas y sensibles del musculo que pueden causar dolor y disfuncion.',
      'Este tratamiento puede ser muy efectivo para diversas condiciones, incluidas distensiones musculares, dolor de cuello y espalda, cefaleas y lesiones deportivas. Al liberar la tension muscular, la puncion seca ayuda a mejorar la circulacion, disminuir el dolor y restaurar patrones de movimiento mas normales.',
      'En nuestra clinica, la puncion seca siempre se integra en un plan de tratamiento completo y adaptado a sus necesidades. A menudo se combina con terapia manual, ejercicio correctivo y reeducacion del movimiento para lograr resultados duraderos, no solo alivio temporal.',
      'Si tiene tension muscular persistente o dolor que no ha mejorado con otros tratamientos, la puncion seca puede ser una opcion valiosa para ayudarle a moverse y sentirse mejor.',
    ],
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
      'Las cefaleas pueden afectar su trabajo, su descanso y su capacidad de disfrutar la vida diaria. Ya sean cefaleas tensionales, cervicogenicas o migrañas recurrentes, la fisioterapia puede ayudarle a tratar la causa de fondo, no solo a enmascarar los sintomas.',
      'Muchas cefaleas se relacionan con problemas cervicales, mala postura, tension muscular y patrones de movimiento desarrollados con el tiempo. Nuestro enfoque comienza con una evaluacion completa e individualizada para entender que esta contribuyendo a sus sintomas. A partir de ahi, elaboramos un plan de tratamiento adaptado especificamente a usted.',
      'La atencion puede incluir terapia manual para mejorar la movilidad articular y reducir tension muscular, ejercicios especificos para recuperar fuerza y flexibilidad, y entrenamiento postural para disminuir la carga durante el dia. Tambien priorizamos la educacion para ayudarle a identificar desencadenantes, manejar sintomas y prevenir futuras cefaleas.',
      'Si las cefaleas estan limitando su dia a dia, no tiene que seguir aguantandolas. Con el plan adecuado, es posible lograr alivio duradero, y estamos aqui para ayudarle a conseguirlo.',
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
      'La artritis puede hacer que actividades cotidianas como caminar, agacharse, agarrar objetos o mantenerse activo resulten mas dificiles y dolorosas. Y no solo afecta a personas mayores; tambien puede presentarse en personas jovenes. Aunque es una condicion comun, el tratamiento adecuado puede marcar una diferencia real en como se mueve y como se siente.',
      'La cirugia y los reemplazos articulares NO siempre son la unica opcion para salir del dolor.',
      'En Kuna Physical Therapy aplicamos un enfoque individualizado para el manejo de la artritis y la proteccion de la salud articular a largo plazo. Evaluamos su movilidad, fuerza, mecanica articular y patrones de movimiento diarios para entender como le afecta la artritis. A partir de ahi, diseñamos un plan personalizado para reducir dolor, mejorar flexibilidad y aumentar funcion.',
      'Utilizamos terapia manual para mejorar la movilidad articular, ejercicios y fortalecimiento especifico para descargar articulaciones afectadas, y estrategias de movimiento guiadas para mantenerle activo sin sobrecarga innecesaria. Tambien brindamos educacion sobre modificacion de actividad, manejo de brotes y estrategias a largo plazo para que mantenga control de sus sintomas.',
      'La artritis no tiene por que limitar su estilo de vida. Con la guia adecuada y constancia, puede seguir haciendo lo que disfruta, con menos dolor y mas confianza.',
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
      'Correr es uno de los pocos ejercicios que no requiere equipo especial ni un lugar especifico. Pero, aunque parece simple, tambien tiene alta incidencia de lesion. De hecho, la tasa de lesiones en corredores ronda el 80%. Eso significa que casi 8 de cada 10 personas en una carrera diaria o en un proximo 10K podrian lesionarse este año.',
      'Muchas personas piensan que con un buen par de tenis, calentar y enfriar despues de correr es suficiente para evitar lesiones. Pero correr somete al cuerpo a cargas importantes, ya sea por una lesion aguda de tobillo, rodilla o musculo, o por daño acumulado en articulaciones con los años.',
      'Una buena tecnica puede prevenir lesiones y tambien mejorar la velocidad y el rendimiento. Pequeños cambios en la forma de correr pueden marcar una gran diferencia para mantenerse sin lesiones y rendir mejor. Nuestros terapeutas tambien son corredores y atletas; entendemos su pasion por correr y su impulso por progresar. Su terapeuta realizara un analisis en video de su tecnica y trabajara con usted para hacer ajustes inmediatos que le mantengan corriendo durante años.',
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
  'balance-and-fall-prevention': {
    title: 'Equilibrio y prevencion de caidas',
    description:
      'Prevención de caídas y entrenamiento de movilidad para mayor estabilidad y confianza al moverse.',
    longDescription: [
      'Las caidas son una de las principales causas de lesion en adultos mayores, y 1 de cada 4 personas mayores de 65 años sufre una caida cada año. Aunque son frecuentes, las caidas no son una parte normal del envejecimiento y muchas se pueden prevenir con la orientacion y el apoyo adecuados.',
      'En nuestra clinica, aplicamos un enfoque preventivo e individualizado para reducir el riesgo de caidas. Evaluamos factores clave como equilibrio, fuerza, movilidad, mecanica de la marcha y riesgos del entorno para identificar que puede estar aumentando su probabilidad de caer. A partir de ahi, desarrollamos un plan personalizado para mejorar estabilidad, aumentar confianza y mantenerle en movimiento con seguridad.',
      'Nuestro tratamiento se centra en fortalecimiento especifico, ejercicios de equilibrio y coordinacion, y estrategias de movimiento funcional que se trasladan directamente a su vida diaria. Tambien ofrecemos educacion sobre seguridad en casa, calzado y ajustes sencillos que pueden reducir de forma importante el riesgo de caidas.',
      'Si ya tuvo una caida, se siente inestable al caminar o simplemente quiere mantenerse activo e independiente, estamos aqui para ayudarle a moverse con confianza y tranquilidad.',
    ],
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
      'Vivir con dolor cronico puede ser agotador, frustrante e interferir con su vida diaria. Ya sea que el dolor lleve meses o años, nuestro objetivo es ayudarle a moverse mejor, sentirse mas fuerte y recuperar el control.',
      'En nuestra clinica, tomamos un enfoque integral e individualizado para el dolor cronico. Entendemos que el dolor es complejo y no depende solo de tejidos lesionados; tambien puede estar influido por patrones de movimiento, factores de estilo de vida y el sistema nervioso. Por eso su plan de atencion se adapta especificamente a usted.',
      'Con una combinacion de terapia manual, ejercicio terapeutico y reeducacion del movimiento, trabajamos para reducir dolor, mejorar movilidad y desarrollar fuerza y resiliencia duraderas. Igual de importante, brindamos educacion y estrategias practicas para que entienda mejor su dolor, maneje brotes y se mantenga activo con confianza.',
      'El dolor cronico no tiene por que definir su vida. Con la guia y el apoyo adecuados, un progreso real es posible, y estamos aqui para acompañarle en cada paso.',
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
      'El dolor de la articulacion temporomandibular (ATM) ocurre cuando hay un problema en la articulacion que conecta la mandibula con el craneo. Esto puede provocar no solo dolor mandibular, sino tambien dolor facial, cefaleas y dolor cervical.',
      'Con frecuencia, las personas con dolor de cuello o cefaleas no se dan cuenta de que el origen puede estar en la mandibula. Y muchas veces quienes tienen dolor de ATM tampoco identifican que esta articulacion puede contribuir al dolor de cuello o espalda. Los pacientes con dolor de ATM pueden sentir alivio temporal con masaje intraoral, manipulacion espinal y puncion seca.',
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
      'Ya sea que sea un atleta de fin de semana, un atleta de secundaria, un corredor de maraton o un triatleta, las lesiones deportivas pueden afectar a cualquiera en cualquier nivel. En nuestra clinica, tenemos experiencia tratando una amplia gama de lesiones deportivas y ayudando a individuos a volver a las actividades que aman—mas fuerte y mas confiado que antes.',
      'Nuestro equipo es apasionado por el deporte y los estilos de vida activos, y entendemos lo frustrante que puede ser ser relegado. A traves de una combinacion de terapia manual y planes de tratamiento individualizados, nos centramos en reducir el dolor, promover la curacion del tejido, mejorar la fuerza y la coordinacion, y minimizar el riesgo de futuras lesiones.',
      'A medida que las personas exploran nuevos deportes y actividades recreativas, es comun experimentar nuevos dolores y molestias a lo largo del camino. No deje que la incertidumbre o el temor le impidan mantenerse activo. Ofrecemos evaluaciones GRATUITAS de lesiones deportivas para ayudarle a comprender mejor su condicion. Nuestros terapeutas fisicos con residencia en ortopedia evaluaran su movimiento, determinaran su preparacion para volver a la actividad, y le guiara a traves de los mejores pasos siguientes—ya sea un regreso seguro al deporte o un plan de atencion mas completo.',
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
      'La cirugía ortopédica rara vez es algo que uno planea, pero cuando forma parte de su proceso, el camino de regreso puede sentirse abrumador. Ya sea por una lesión deportiva, un accidente o el desgaste natural de la vida, esta interrupción de su rutina puede ser desafiante tanto física como emocionalmente.',
      'En Kuna Physical Therapy entendemos que estos momentos pueden sentirse como un gran retroceso. Seremos su respaldo mientras escribe su historia de regreso.',
      'Con experiencia directa en recuperación posquirúrgica, nuestro equipo sabe lo importante que es el proceso de rehabilitación para su éxito a largo plazo. Brindamos atención uno a uno, con enfoque manual, para recuperar movimiento, reducir dolor, reconstruir fuerza y mejorar coordinación y equilibrio. Lo más importante: estamos comprometidos a ayudarle a volver a las actividades que definen quién es usted.',
      'También mantenemos relaciones sólidas con cirujanos de todo Treasure Valley y priorizamos una comunicación clara y constante durante toda su recuperación. Al trabajar de cerca con su equipo quirúrgico, aseguramos un enfoque coordinado para que progrese de forma segura y efectiva en cada etapa.',
      'Su retroceso no le define. Su regreso, sí.',
      'Tenemos amplia experiencia guiando pacientes en la recuperación de una gran variedad de procedimientos ortopédicos, incluidos:',
      '- Cirugias de ACL, MCL, menisco y otras cirugias de rodilla',
      '- Reemplazos articulares totales (rodilla, cadera, hombro, tobillo)',
      '- Cirugias de columna, incluidas fusiones y laminectomias lumbares, cervicales y toracicas',
      '- Reparaciones de manguito rotador, labrum, biceps y otras reparaciones de hombro',
      '- Reparaciones de labrum de cadera y procedimientos por pinzamiento',
      '- Cirugias de pie, incluidas bunionectomias y Lapiplasty',
      '- Reparacion de fracturas y atencion postraumatica',
      '- Y muchos otros procedimientos ortopedicos',
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
      'Los niños crecen, se mueven y se desarrollan de maneras unicas, y a veces necesitan un poco de apoyo adicional en el proceso. Nuestros servicios de fisioterapia pediatrica estan diseñados para ayudar a niños de todas las edades a desarrollar fuerza, mejorar coordinacion y alcanzar hitos importantes del desarrollo en un entorno divertido y de apoyo.',
      'Las sesiones son dinamicas y basadas en el juego, para que los niños se mantengan motivados mientras desarrollan habilidades como equilibrio, coordinacion, fuerza y confianza en el movimiento. Tambien brindamos orientacion y educacion a los padres para reforzar el progreso en casa y en actividades diarias.',
      'Nuestro objetivo es simple: ayudar a su hijo a moverse mejor, fortalecerse y participar plenamente en las actividades que ama.',
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
  'neck-and-back': {
    title: 'Cuello, espalda y columna',
    description:
      'Ejercicio y tratamientos para la espalda y el cuello para ayudarle a moverse y sentirse mejor.',
    longDescription: [
      'El dolor de espalda, cuello y columna puede, literalmente, tomar el control de su vida: hace que movimientos simples se sientan limitados, reduce su actividad y agota su energía. ¡Y no es poco común! El 80% de las personas experimenta dolor de espalda y hasta el 70% dolor de cuello en algún momento. Ya sea que sus síntomas comenzaron por una lesión, muchas horas sentado o se hayan acumulado con el tiempo, nuestro equipo de fisioterapia está aquí para ayudarle a moverse y sentirse mejor con confianza.',
      'En nuestra clínica aplicamos un enfoque manual e individualizado para la columna. Cada visita es uno a uno con un fisioterapeuta licenciado que evaluará cómo se mueve, identificará la causa de fondo de su dolor y elaborará un plan adaptado específicamente a usted. El tratamiento puede incluir terapia manual para mejorar la movilidad, ejercicios específicos para recuperar fuerza y estabilidad, y educación para ayudarle a prevenir futuros brotes.',
      'Tratamos una amplia gama de condiciones, incluida ciática, lesiones de disco, rehabilitación quirúrgica, distensiones musculares, rigidez articular, dolor postural y problemas crónicos de columna. Nuestro objetivo no es solo reducir su dolor, sino ayudarle a volver a las actividades que ama con confianza, ya sea trabajar, hacer ejercicio o disfrutar del aire libre.',
      'No tiene que vivir con dolor de espalda o cuello. Permítanos ayudarle a dar el siguiente paso hacia un alivio duradero y un mejor movimiento.',
    ],
    benefits: null,
    treatments: null,
  },
  'shoulder': {
    title: 'Hombro',
    description:
      'Tratamiento personalizado para restaurar el movimiento y reducir el dolor en el hombro.',
    longDescription: [
      'El dolor de hombro se mete en casi todo: vestirse, alcanzar por encima de la cabeza o intentar levantar pesas y practicar deportes. Para algunos limita su rendimiento en el gimnasio o en la cancha. Para otros hace frustrantes las tareas cotidianas. De cualquier forma, puede impedirle vivir como quiere.',
      'En nuestra clínica recibirá atención uno a uno con un fisioterapeuta que se tomará el tiempo de entender sus metas y cómo el hombro le está limitando. Combinamos terapia manual con trabajo específico de fuerza y movilidad para restaurar el movimiento adecuado, reducir el dolor y construir resiliencia duradera, para que vuelva a su rutina, entrenamientos, deporte y pasatiempos.',
      'Tratamos una amplia gama de condiciones de hombro, incluidas lesiones del manguito rotador, desgarros labrales, pinzamiento y problemas de la articulación AC, inestabilidad y hombro congelado. En muchos casos, la fisioterapia puede ayudarle a evitar cirugía; si la necesita, le guiaremos en rehabilitación paso a paso.',
      'No tiene que adaptarse al dolor de hombro ni renunciar a lo que disfruta. Estamos aquí para ayudarle a volver, más fuerte, más capaz y con más confianza que antes.',
    ],
    benefits: null,
    treatments: null,
  },
  'hip-and-knee': {
    title: 'Cadera y rodilla',
    description:
      'Tratamientos específicos para cadera y rodilla para reducir el dolor y ayudarle a moverse mejor.',
    longDescription: [
      'El dolor de cadera y rodilla puede convertir las escaleras en una pesadilla. El senderismo puede ser insoportable. Y hasta pensar en caminar una cuadra o agacharse al inodoro puede hacerle temblar las piernas. Sea cual sea la actividad que el dolor de cadera o rodilla le impida disfrutar, no tiene que seguir así.',
      'En Kuna Physical Therapy entendemos este dolor porque también lo hemos vivido. Aquí recibirá atención uno a uno con un fisioterapeuta que se tomará el tiempo de entender sus metas y cómo la cadera o rodilla afectan su movimiento. Combinamos terapia manual con trabajo específico de fuerza, movilidad y estabilidad para restaurar la mecánica adecuada, reducir el dolor y construir resiliencia a largo plazo, para que vuelva a su vida, entrenamientos y actividades.',
      'Tratamos una amplia gama de condiciones, incluidas artritis, lesiones de tendones y ligamentos, lesiones de menisco, distensiones musculares y recuperación posquirúrgica. Su plan es totalmente individualizado, con un camino claro hacia mejor movilidad, fuerza y confianza.',
      'En muchos casos, la fisioterapia puede ayudarle a evitar cirugía. Si la necesita, le guiaremos en la recuperación paso a paso.',
      'No tiene que renunciar a lo que ama. Estamos aquí para ayudarle a moverse mejor, sentirse mejor y volver a lo que más importa.',
    ],
    benefits: null,
    treatments: null,
  },
  'foot-and-ankle': {
    title: 'Pie y tobillo',
    description:
      'Tratamientos específicos para pie y tobillo para ayudarle a caminar y correr sin dolor.',
    longDescription: [
      'El dolor de pie y tobillo puede hacer que cada paso sea un reto, ya sea durante la jornada laboral, en una caminata o al mantenerse activo con lo que disfruta. Desde dolor agudo con los primeros pasos por la mañana hasta molestias persistentes al correr, hacer senderismo o estar de pie, estos problemas pueden afectar rápidamente su calidad de vida.',
      'En nuestra clínica recibirá atención uno a uno con un fisioterapeuta que se tomará el tiempo de entender sus metas y cómo el dolor de pie o tobillo le limita. Combinamos terapia manual con trabajo específico de movilidad, fuerza y equilibrio para restaurar el movimiento adecuado, mejorar la estabilidad y reducir el dolor, para que vuelva a moverse con confianza.',
      'Tratamos una amplia gama de condiciones, incluida fascitis plantar, dolor del tendón de Aquiles, esguinces de tobillo, inestabilidad crónica, lesiones tendinosas y recuperación posquirúrgica. Su plan es totalmente individualizado, con un camino claro hacia mejor función y alivio a largo plazo.',
      'En muchos casos, la fisioterapia puede ayudarle a evitar cirugía y lesiones recurrentes. Si la necesita, le guiaremos en la recuperación paso a paso.',
      'No tiene que planificar su día alrededor del dolor de pie o tobillo. Estamos aquí para ayudarle a moverse mejor, sentirse mejor y volver a lo que ama.',
    ],
    benefits: null,
    treatments: null,
  },
};
