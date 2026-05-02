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
      heroTitlePrefix: 'Potenciando su',
      heroTitleMotion: 'crecimiento',
      heroTitleMiddle: 'es nuestra',
      heroTitleLife: 'misión',
      heroDescription:
        'Somos su mejor destino para la fisioterapia, ya sea que esté recuperándose de una cirugía, tratando de evitar una cirugía, manejando el dolor crónico o encontrando respuestas a nuevos dolores y molestias. Y puede incluso hacer algunos amigos que se sientan como familia mientras está aquí.' + (isOpen ? '' : ' Abriremos en junio de 2026.'),
      ourServices: 'Nuestros servicios',
      ourExpertise: 'Nuestra experiencia',
      servicesHeadline: 'Atención integral para todo tipo de cuerpos',
      servicesSub:
        'Ofrecemos una amplia gama de servicios especializados para sus objetivos y desafíos.',
      visitUs: 'Visítenos',
      findKuna: 'Encuentre a Kuna PT',
      locationSub:
        'Ubicación cómoda en Meridian Road, con horario pensado para su rutina.',
      aboutKuna: 'Acerca de Kuna PT',
      aboutHeadline: '¿Por qué elegir Kuna Physical Therapy?',
      aboutBody: [
        'Creemos que la fisioterapia debe ser personal, útil y enriquecedora. Vivimos y respiramos ayudando a que usted logre sus objetivos. Cada visita es uno a uno con un fisioterapeuta licenciado de principio a fin. Usted recibe la atención enfocada y el cuidado experto que merece. Nos centramos en planes individualizados y tratamientos prácticos adaptados a sus objetivos. No corra a través de los mismos ejercicios aburridos y repetitivos cada visita.',
      ],
      aboutTeamCta: 'Conozca más a nuestro equipo',
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
        'Explore nuestro amplio abanico de servicios de fisioterapia para recuperar y sentirse mejor.',
      team: 'Conozca a los clínicos dedicados a su recuperación en Kuna Physical Therapy.',
      testimonials:
        'Lea opiniones reales. Comparta su experiencia con Kuna Physical Therapy.',
      bookAppointment: 'Programe su sesión de fisioterapia con nuestros clínicos.',
    },
    clinic: {
      mapsEmbedTitle: 'Ubicación de Kuna Physical Therapy en Google Maps',
      ourLocation: 'Kuna Physical Therapy',
      hours: 'Horario',
      callUs: 'Llámenos',
      weekdayLine: 'Lun-Vie: 7:00 a.m. - 6:30 p.m.',
      saturdayLine: 'Sáb-Dom: Cerrado',
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
        'Conozca a los clínicos dedicados a su recuperación.',
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
        serviceSlug: 'balance-and-gait',
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
      legal:
        'Al enviar, acepta nuestra política de privacidad. Nos pondremos en contacto en un plazo de 24 horas.',
    },
    notFound: {
      title: '404 - Página no encontrada',
      body:
        '¡Ups! No sabemos cómo llegó aquí, pero esta página no existe. ¡Cuídese!',
      home: 'Página de inicio',
    },
  },
} as const;
