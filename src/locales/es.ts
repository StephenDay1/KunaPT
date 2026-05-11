import { serviceItemsEs } from './partials/serviceItemsEs';
import { teamMembersEs } from './partials/teamMembersEs';

import { isOpen } from '../data/clinicInfo';

/**
 * Spanish UI copy (i18n `translation` namespace).
 */
export const es = {
  translation: {
    common: {
      home: 'Inicio',
      about: 'Acerca de',
      ourTeam: 'Nuestro equipo',
      testimonials: 'Testimonios',
      services: 'Servicios',
      allServices: 'Todos los servicios',
      viewAllServices: 'Ver todos los servicios',
      bookAppointment: 'Programar una cita',
      faq: 'Preguntas frecuentes',
      learnMore: 'Más información',
      viewDetails: 'Ver detalles',
      language: 'Idioma',
      toTop: 'Volver arriba',
      allRightsReserved: 'Todos los derechos reservados.',
    },
    homepage: {
      // heroTitlePrefix: isOpen ? 'Recupera tu' : '',
      // heroTitleMotion: isOpen ? 'movimiento' : 'Kuna PT',
      // heroTitleMiddle: isOpen ? 'y recupera tu' : 'Abriremos',
      // heroTitleLife: isOpen ? 'vida' : 'pronto',
      heroTitlePrefix: 'Especialistas en',
      heroTitleMotion: 'movimiento',
      heroTitleMiddle: 'Aliados en su',
      heroTitleLife: 'recuperacion',
      heroDescription:
        'Somos su mejor destino para la fisioterapia, ya sea que esté recuperándose de una cirugía, tratando de evitar una cirugía, manejando el dolor crónico o encontrando respuestas a nuevos dolores y molestias. Y puede incluso hacer algunos amigos que se sientan como familia mientras está aquí.' + (isOpen ? '' : ' Abriremos en junio de 2026.'),
      ourServices: 'Nuestros servicios',
      ourExpertise: 'Nuestra experiencia',
      servicesHeadline: 'Atención integral para todo tipo de cuerpos',
      servicesSub:
        'Ofrecemos una amplia gama de servicios especializados para sus objetivos y desafíos.',
      visitUs: 'Visítenos',
      findKuna: 'Encuentre a Kuna Physical Therapy',
      locationSub:
        'Kuna Physical Therapy está convenientemente ubicado en Meridian Road, abierto temprano y tarde para acomodar visitas antes y despues del trabajo.',
      aboutKuna: 'Acerca de Kuna Physical Therapy',
      aboutHeadline: '¿Por qué elegir Kuna Physical Therapy?',
      aboutBody: [
        'Creemos que la fisioterapia debe ser personal, con proposito y empoderadora. Vivimos y respiramos para ayudarle a alcanzar sus objetivos. Cada visita es uno a uno con un fisioterapeuta licenciado, de principio a fin. Usted recibe la atencion enfocada y el cuidado experto que merece. Priorizamos planes individualizados y tratamiento manual adaptado a sus metas. Nada de repetir los mismos 3 ejercicios aburridos en cada visita.',
      ],
      stillHaveQuestions: 'Todavia tiene preguntas?',
      stillHaveQuestionsHeadline: 'Estamos aquí para ayudar',
      stillHaveQuestionsSub: 'Nuestro equipo está dedicado a proporcionarle el mejor cuidado posible. Si tiene cualquier pregunta, no dude en consultar nuestra página de preguntas frecuentes o contactarnos.',
      aboutTeamCta: 'Conozca mas sobre nuestro equipo',
      successStories: 'Historias de éxito',
      patientsSay: 'Lo que dicen nuestros pacientes',
      readAllReviews: 'Ver todas las reseñas',
      ratingText: 'Calificación 4,9/5',
      verifiedGoogle: 'Reseñas verificadas en Google',
    },
    language: {
      english: 'Inglés',
      spanish: 'Español',
    },
    meta: {
      siteName: 'Kuna Physical Therapy',
      titleTemplate: 'Kuna PT | {{page}}',
      homeDescription:
        'Bienvenido a Kuna Physical Therapy, donde su recuperación es lo primero. Conozca nuestros servicios y nuestra atención cercana.',
      services:
        'Explore nuestro amplio abanico de servicios de fisioterapia en Kuna, Idaho, para recuperar y sentirse mejor.',
      team: 'Conozca a los clínicos dedicados a su recuperación en Kuna Physical Therapy.',
      testimonials:
        'Lea opiniones reales. Comparta su experiencia con Kuna Physical Therapy.',
      bookAppointment: 'Programe su sesión de fisioterapia con nuestros clínicos.',
      faq:
        'Respuestas sobre seguros, citas, visitas sin cita y qué esperar en Kuna Physical Therapy.',
      notFound:
        'No encontramos esta página. Vuelva a Kuna Physical Therapy para servicios, citas e información de la clínica.',
    },
    faqPage: {
      titleLine1: 'Preguntas',
      titleAccent: 'frecuentes',
      subtitle:
        'Información práctica sobre seguros, visitas y cómo trabajamos con usted en Kuna Physical Therapy.',
      footerPrompt: '¿No encontró lo que buscaba?',
      footerLink: 'Contactenos',
      /** Entradas del FAQ en orden de visualización. */
      items: [
        {
          slug: 'insurance',
          question: '¿Qué seguros aceptan?',
          answer:
            [
              'Aceptamos muchos proveedores de seguros importantes, como Blue Cross/Blue Shield, Select Health, Cigna, Aetna, United Healthcare, Medicare, Medicaid, Tricare, Champ VA, Micron, Medicare Advantage y planes de reemplazo, Pacific Source, Accidentes de transito (no aceptamos seguros de terceros) y Compensacion laboral.',
              'No ve su seguro en esta lista? Llamenos y con gusto le ayudaremos a confirmar si estamos dentro de la red de su poliza.',
            ],
        },
        {
          slug: 'referral',
          question: '¿Necesito referido o receta de mi médico?',
          answer:
            'Depende. Idaho permite acceso directo, es decir, puede iniciar fisioterapia sin referido ni receta. Sin embargo, algunos planes de seguro sí los exigen. Lo mejor es llamarnos para comentar su caso concreto.',
        },
        {
          slug: 'walk-ins',
          question: '¿Aceptan visitas sin cita?',
          answer:
            'Recomendamos programar con anticipación para reservar tiempo uno a uno con un terapeuta. Si tiene una necesidad urgente, llámenos; haremos lo posible por ofrecerle cita el mismo día según disponibilidad.',
        },
        {
          slug: 'scheduling',
          question: '¿Cómo pido una cita?',
          answer:
            'Puede enviar una solicitud con nuestro formulario en línea o llamarnos al {{phone}}. Nuestro equipo le contactará para confirmar el mejor horario para su evaluación inicial.',
        },
        {
          slug: 'first-visit',
          question: '¿Qué debo esperar en la primera visita?',
          answer:
            'La primera sesion suele ser una evaluacion integral: conversamos sobre la causa de fondo de sus sintomas, evaluamos movimiento y fuerza, y definimos un plan personalizado. Se ira con claridad sobre los siguientes pasos hacia su recuperacion.',
        },
        {
          slug: 'what-to-bring',
          question: '¿Qué debo traer?',
          answer: [
            '- Identificación con foto',
            '- Tarjeta de seguro (si aplica)',
            '- Informes o documentos relacionados con su condición',
            '- Ropa cómoda que permita ver y mover la zona que trataremos',
            '- Zapatos que permitan moverse libremente; puede ser necesario quitarlos para algunos ejercicios',
            '- Cualquier otra información relevante que piense que debemos tener en cuenta',
          ]
        },
        {
          slug: 'one-on-one',
          question: '¿Será atención uno a uno con un terapeuta?',
          answer:
            'Si. 100% del tiempo. Cada visita es uno a uno con un fisioterapeuta licenciado de principio a fin. Ademas, su atencion la realiza el mismo terapeuta durante todo su plan de tratamiento; no se le ira cambiando entre distintos terapeutas.',
        },
      ],
    },
    clinic: {
      mapsEmbedTitle: 'Ubicación de Kuna Physical Therapy en Google Maps',
      ourLocation: 'Kuna Physical Therapy',
      hours: 'Horario',
      callUs: 'Llámenos',
      lineOne: 'Lun-Vie: 7:00 a.m. - 6:30 p.m.',
      lineTwo: 'Sáb-Dom: Cerrado',
    },
    serviceItems: serviceItemsEs,
    serviceDetail: {
      backToServices: 'Volver a todos los servicios',
      keyBenefits: 'Beneficios clave',
      ourApproach: 'Nuestro enfoque',
      otherServices: 'Otros servicios',
      viewAllServices: 'Ver todos los servicios',
    },
    servicesPage: {
      titleLine1: 'Nuestros',
      titleAccent: 'Servicios',
      subtitle:
        'Desde deportistas de alto nivel hasta el bienestar en la tercera edad, ofrecemos atención experta en cada etapa y tipo de lesión.',
    },
    team: {
      titleLine1: 'Nuestro',
      titleAccent: 'Equipo',
      intro:
        'Las personas dedicadas a su recuperacion y con muchas ganas de conocerle.',
      viewBio: 'Ver biografía',
    },
    teamDetail: {
      back: 'Volver a nuestro equipo',
      bookWith: 'Programar con {{name}}',
      otherMembers: 'Otros miembros del equipo',
    },
    teamMembers: teamMembersEs,
    testimonialsPage: {
      badge: 'Historias de éxito de pacientes',
      titleLine1: 'Historias reales,',
      titleAccent: 'resultados reales',
      intro:
        'Nos enorgullece ayudar a nuestros pacientes a volver a lo que aman. Lea sus experiencias y comparta la suya con nosotros.',
      leaveReview: 'Dejar una reseña en Google',
      formTitle: 'Comparta su historia',
      formIntro:
        '¿Cómo fue su experiencia en Kuna Physical Therapy? Sus comentarios nos ayudan a mejorar y a que otros encuentren la atención adecuada.',
      thankYou: '¡Gracias!',
      thankYouSub:
        'Su reseña se envió a moderación y aparecerá pronto.',
      yourName: 'Su nombre',
      fullNamePh: 'Nombre completo',
      rating: 'Calificación',
      serviceReceived: 'Servicio recibido',
      selectService: 'Seleccione un servicio',
      generalWellness: 'Bienestar general / otro',
      yourExperience: 'Su experiencia',
      experiencePh: 'Cuéntenos su proceso de recuperación...',
      submit: 'Enviar reseña',
      justNow: 'Ahora mismo',
    },
    testimonialsReviews: {
      '1': {
        name: 'Sarah Jenkins',
        text:
          'En Kuna Physical Therapy me ayudaron a volver a correr tras una lesión seriosa de rodilla. El trato personalizado marcó la diferencia. Me sentí acompañada en cada paso.',
        date: 'Hace 2 semanas',
        serviceSlug: 'sports-rehab',
      },
      '2': {
        name: 'Michael Chen',
        text:
          'Profesionales, expertos y de verdad cercanos. He estado en otras clínicas, pero aquí los resultados superaron con creces. La punción seca cambió mi dolor de espalda crónico.',
        date: 'Hace 1 mes',
        serviceSlug: 'dry-needling',
      },
      '3': {
        name: 'Elena Rodríguez',
        text:
          'Tras la cirugía de hombro, me preocupaba la movilidad. Con su atención posoperatoria volví al 100%. ¡Recomiendo Kuna PT!',
        date: 'Hace 2 meses',
        serviceSlug: 'post-surgical-rehab',
      },
      '4': {
        name: 'David Thompson',
        text:
          'Años con cefaleas tensionales. La terapia cervical redujo muchísimo la frecuencia del dolor. Por fin me concentro en el trabajo.',
        date: 'Hace 3 meses',
        serviceSlug: 'headaches',
      },
      '5': {
        name: 'Linda Wu',
        text:
          'Los terapeutas pediátricos son un encanto. Hicieron la recuperación de mi hijo como un juego y progresó muchísimo en motricidad.',
        date: 'Hace 4 meses',
        serviceSlug: 'pediatric-pt',
      },
      '6': {
        name: 'James Wilson',
        text:
          'Instalaciones excelentes y un equipo aún mejor. Explican el porqué de cada ejercicio. Mi equilibrio mejoró de forma notable.',
        date: 'Hace 5 meses',
        serviceSlug: 'balance-and-fall-prevention',
      },
    },
    homeTeaser: {
      card1: {
        name: 'Sarah Jenkins',
        text:
          'Kuna Physical Therapy me ayudó a volver a correr tras una lesión de rodilla. El enfoque personalizado marcó la diferencia.',
      },
      card2: {
        name: 'Michael Chen',
        text:
          'Profesionales, expertos y cercanos. He estado en varias clínicas, pero los resultados aquí fueron superiores.',
      },
      card3: {
        name: 'Elena Rodríguez',
        text:
          'Tras la cirugía de hombro, temía perder movilidad. Con su cuidado posoperatorio volví al 100%.',
      },
    },
    bookPage: {
      title: 'Programar una cita',
      intro:
        'Solicite una evaluación inicial; nuestro equipo le contactará para confirmar el mejor horario para su visita.',
      fullName: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      reason: 'Motivo de la visita',
      selectService: 'Seleccione un servicio',
      other: 'Otro',
      message: 'Mensaje (opcional)',
      messagePh: 'Cuéntenos un poco sobre su condición...',
      sendRequest: 'Enviar solicitud',
      sending: 'Enviando...',
      success: '¡Gracias!',
      legal:
        'Nos pondremos en contacto en un plazo de 24 horas.',
    },
    notFound: {
      title: '404 - Página no encontrada',
      body:
        '¡Ups! No sabemos cómo llegó aquí, pero esta página no existe. ¡Cuídese!',
      home: 'Página de inicio',
    },
  },
} as const;
