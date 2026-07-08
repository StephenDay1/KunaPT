/**
 * FAQ page copy (Spanish).
 */
export const faqPageEs = {
  titleLine1: 'Preguntas',
  titleAccent: 'frecuentes',
  subtitle:
    'Información práctica sobre seguros, visitas y cómo trabajamos con usted en Kuna Physical Therapy.',
  footerPrompt: '¿No encontró lo que buscaba?',
  footerLink: 'Contáctenos',
  /** Entradas del FAQ en orden de visualización. */
  items: [
    {
      slug: 'insurance',
      question: '¿Qué seguros aceptan?',
      answer: [
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
      ],
    },
    {
      slug: 'one-on-one',
      question: '¿Será atención uno a uno con un terapeuta?',
      answer:
        'Si. 100% del tiempo. Cada visita es uno a uno con un fisioterapeuta licenciado de principio a fin. Ademas, su atencion la realiza el mismo terapeuta durante todo su plan de tratamiento; no se le ira cambiando entre distintos terapeutas.',
    },
  ],
} as const;
