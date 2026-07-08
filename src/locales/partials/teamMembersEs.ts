/**
 * Team member copy (Spanish) keyed by member slug.
 */
import type { TeamMemberCopy } from './teamMembersEn';

export const teamMembersEs: Record<string, TeamMemberCopy> = {
  'clark-day': {
    role: 'Fisioterapeuta',
    title: 'DPT, OCS',
    bookeable: true,
    credentials: [
      'Especialista Clínico Ortopédico certificado (OCS)',
    ],
    languages: 'Habla español',
    certifications: [
      'Análisis de carrera',
      'Punción seca',
      'Restricción de flujo sanguíneo (BFR)',
      'Rehabilitación con pesas',
    ],
    tagline:
      'Clark aporta a su trabajo como fisioterapeuta una combinación de formación clínica avanzada, experiencia personal y pasión genuina.',
    bio: [
      'Clark es originario de Meridian, Idaho, y se graduó de Mountain View High School. Obtuvo una licenciatura en Ejercicio y Bienestar en la Universidad Brigham Young y completó su Doctorado en Fisioterapia en Pacific University en Portland, Oregón, seguido de una residencia en ortopedia. Esto le llevó a obtener la certificación de Especialista Clínico Ortopédico (OCS), una distinción de élite lograda solo por alrededor del 6% de los fisioterapeutas en todo el país.',
      'Su enfoque de atención está moldeado no solo por su educación, sino también por su propia experiencia. Tras varias cirugías (de rodilla, brazo y espalda) adquirió de primera mano una comprensión de los retos físicos y mentales que conllevan la lesión y la recuperación. Esta perspectiva fortalece su compromiso de ayudar a otros a volver a las actividades que aman.',
      'Clark vive el estilo de vida activo que promueve con sus pacientes. Disfruta de la caza mayor y de aves acuáticas, además de correr, hacer senderismo y acampar por Idaho. El otoño es su estación favorita, tanto para la caza como para animar al equipo de fútbol americano de Boise State. Es un apasionado de los deportes y sigue de cerca el fútbol universitario, la NHL y la NBA.',
      'Fuera de la clínica pasa tiempo con su esposa y sus dos hijos pequeños, a menudo al aire libre, en el parque de la ciudad o paseando por Scheels.',
    ],
  },
  'ireland-hatfield': {
    role: 'Administradora de oficina',
    title: '',
    bookeable: false,
    credentials: [],
    languages: '',
    certifications: [],
    tagline:
      'El deseo de Ireland es que cada paciente se sienta bienvenido, cuidado y cómodo desde el momento en que contacta nuestra oficina. Está aquí para que su experiencia sea lo más fácil y libre de estrés posible.',
    bio: [
      'Ireland es la administradora de oficina de Kuna Physical Therapy. Su objetivo es que cada paciente se sienta bienvenido, cuidado y cómodo desde el momento en que contacta nuestra oficina. Ya sea ayudándole a programar citas, respondiendo preguntas sobre seguros, coordinando referidos o simplemente recibiéndole con una sonrisa, ella quiere que su experiencia sea lo más fácil y libre de estrés posible.',
      'Me encanta conocer a nuestros pacientes y ser una cara amigable a lo largo de su proceso de rehabilitación. Creo que una buena atención médica comienza con relaciones genuinas, y me apasiona crear un ambiente positivo y de apoyo donde todos se sientan escuchados y valorados. Detrás de escena, ella trabaja duro para mantener la clínica funcionando sin problemas para que nuestros terapeutas puedan concentrarse en lo que mejor saben hacer: ayudarle a volver a hacer lo que ama.',
      'Cuando no está en la clínica, normalmente la pasa con su familia, leyendo, trabajando en el jardín o disfrutando de todo lo que nuestra comunidad de Idaho tiene para ofrecer. Ella es agradecida de ser parte del equipo de Kuna Physical Therapy y espera darle la bienvenida a nuestra clínica.',
    ],
  },
};
