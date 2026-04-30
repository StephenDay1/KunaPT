/**
 * Service copy (English) keyed by service slug. Icons live in `data/services.tsx`.
 */
export const serviceItemsEn: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  treatments: string[];
}> = {
  'workers-compensation': {
    title: 'Worker\'s Comp',
    description:
      'Personalized treatment for work related injuries to get you back to work safely and confidently.',
    longDescription:
      'Getting hurt on the job can be stressful—not just physically, but financially and emotionally. Our workers\' compensation physical therapy services are designed to help you recover safely, regain strength, and return to work with confidence. We work closely with your physician, employer, and case manager to ensure a smooth, coordinated plan of care tailored to your specific job demands. Our team specializes in treating work-related injuries such as strains, sprains, repetitive stress injuries, and post-surgical conditions. Through individualized treatment plans, hands-on care, and progressive exercise programs, we focus on restoring mobility, reducing pain, and preventing re-injury. We also incorporate job-specific training and functional assessments to make sure you\'re truly ready to get back to work. We understand the workers\' compensation process and are here to help guide you every step of the way—so you can focus on healing and getting back to what you do best.',
    benefits: [
      'Safe and quick recovery',
      'Restored strength and mobility',
      'Return to work with confidence',
    ],
    treatments: [
      'Individualized treatment plans',
      'Job-specific training',
      'Functional assessments',
    ],
  },
  'dry-needling': {
    title: 'Dry Needling',
    description:
      'Targeted trigger point therapy using thin needles to release muscle tension and reduce pain.',
    longDescription:
      "Dry needling is a technique used to treat musculoskeletal pain and movement issues. It involves inserting a thin needle into a 'trigger point' in the muscle to release tension, improve blood flow, and decrease pain.",
    benefits: [
      'Immediate pain relief',
      'Improved muscle function',
      'Increased range of motion',
      'Faster recovery',
    ],
    treatments: [
      'Trigger point dry needling',
      'Electrical stimulation (optional)',
      'Corrective exercises',
      'Soft tissue mobilization',
    ],
  },
  headaches: {
    title: 'Headaches',
    description:
      'Specialized treatment for tension headaches and migraines through cervical and jaw therapy.',
    longDescription:
      'Many headaches are caused by tension in the neck, jaw, or upper back. Our therapists identify the root cause of your headaches and use manual therapy and corrective exercises to provide long-term relief.',
    benefits: [
      'Reduced frequency of headaches',
      'Decreased intensity of pain',
      'Improved neck mobility',
      'Better sleep quality',
    ],
    treatments: [
      'Cervical mobilization',
      'TMJ assessment',
      'Postural correction',
      'Stress management techniques',
    ],
  },
  arthritis: {
    title: 'Arthritis',
    description:
      'Personalized exercise and joint protection strategies to manage pain and maintain mobility.',
    longDescription:
      'Arthritis can make daily activities challenging. We help you manage joint pain and stiffness through low-impact exercise, joint protection strategies, and manual therapy to keep you active and independent.',
    benefits: [
      'Reduced joint pain',
      'Improved joint mobility',
      'Increased strength',
      'Better quality of life',
    ],
    treatments: [
      'Low-impact exercise programs',
      'Joint mobilization',
      'Aquatic therapy recommendations',
      'Assistive device training',
    ],
  },
  'running-performance': {
    title: 'Running Performance',
    description:
      'Gait analysis and strength training to improve efficiency and prevent running-related injuries.',
    longDescription:
      "Whether you're a beginner or an elite athlete, our running performance program helps you run faster and further. We use video gait analysis to identify inefficiencies and provide a targeted strength and mobility plan.",
    benefits: [
      'Improved running efficiency',
      'Reduced injury risk',
      'Increased speed and power',
      'Better recovery',
    ],
    treatments: [
      'Video gait analysis',
      'Running-specific strength training',
      'Footwear consultation',
      'Training load management',
    ],
  },
  'balance-and-gait': {
    title: 'Balance and Gait',
    description:
      'Fall prevention and mobility training to improve stability and confidence in daily movement.',
    longDescription:
      'Balance and gait issues can lead to falls and a loss of independence. Our comprehensive assessment identifies the factors contributing to instability, and we create a plan to improve your balance and confidence.',
    benefits: [
      'Reduced fall risk',
      'Increased confidence',
      'Improved walking speed',
      'Greater independence',
    ],
    treatments: [
      'Balance training',
      'Vestibular rehabilitation',
      'Gait training',
      'Strength and flexibility exercises',
    ],
  },
  'chronic-pain': {
    title: 'Chronic Pain',
    description:
      'Evidence-based strategies to help you manage and reduce long-term pain conditions.',
    longDescription:
      'Chronic pain is complex. We use a combination of therapeutic exercise, manual therapy, and pain neuroscience education to help you understand your pain and get back to the activities you love.',
    benefits: [
      'Improved pain management',
      'Increased activity levels',
      'Better understanding of pain',
      'Reduced reliance on medication',
    ],
    treatments: [
      'Pain neuroscience education',
      'Graded motor imagery',
      'Therapeutic exercise',
      'Manual therapy',
    ],
  },
  tmj: {
    title: 'TMJ',
    description:
      'Specialized therapy for jaw pain, clicking, and dysfunction through manual techniques.',
    longDescription:
      'Temporomandibular Joint (TMJ) disorders can cause jaw pain, clicking, and difficulty eating. Our specialized therapists use intra-oral and extra-oral techniques to restore normal jaw function and reduce pain.',
    benefits: [
      'Reduced jaw pain',
      'Improved jaw opening',
      'Decreased clicking and popping',
      'Reduced facial tension',
    ],
    treatments: [
      'Intra-oral manual therapy',
      'Cervical spine treatment',
      'Jaw exercises',
      'Relaxation techniques',
    ],
  },
  'sports-rehab': {
    title: 'Sports Rehab',
    description:
      'Specialized programs designed to help athletes recover from injuries and return to peak performance.',
    longDescription:
      'We understand the unique demands of athletes. Our sports rehabilitation program focuses on restoring strength, power, and agility to get you back on the field or court as quickly and safely as possible.',
    benefits: [
      'Faster return to sport',
      'Improved athletic performance',
      'Reduced risk of re-injury',
      'Enhanced strength and power',
    ],
    treatments: [
      'Sport-specific exercises',
      'Plyometric training',
      'Agility drills',
      'Manual therapy',
    ],
  },
  'post-surgical-rehab': {
    title: 'Post-Surgical Rehab',
    description:
      'Comprehensive rehabilitation to ensure optimal recovery following orthopedic surgeries.',
    longDescription:
      'Recovery after surgery is a critical phase. We work closely with your surgeon to implement a protocol-based rehabilitation plan that ensures the best possible outcome for your procedure.',
    benefits: [
      'Optimal surgical outcomes',
      'Reduced scar tissue',
      'Improved range of motion',
      'Faster recovery',
    ],
    treatments: [
      'Protocol-based exercise',
      'Incision care education',
      'Manual therapy',
      'Swelling management',
    ],
  },
  'pediatric-pt': {
    title: 'Pediatric Physical Therapy',
    description:
      'Fun and engaging therapy for children to improve motor skills, strength, and development.',
    longDescription:
      "Children aren't just small adults. Our pediatric physical therapy program uses play-based activities to help children reach their developmental milestones and improve their physical function.",
    benefits: [
      'Improved motor skills',
      'Increased strength and coordination',
      'Enhanced developmental progress',
      'Greater participation in play',
    ],
    treatments: [
      'Play-based exercise',
      'Developmental milestone training',
      'Balance and coordination activities',
      'Family education',
    ],
  },
};
