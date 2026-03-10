import { 
  Activity, 
  Stethoscope, 
  HeartPulse, 
  Users, 
  Award, 
  Brain, 
  Zap, 
  Wind, 
  Bone, 
  Baby, 
  Timer, 
  Scale, 
  ShieldCheck 
} from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    slug: "abdominal-adhesions",
    title: "Abdominal Adhesions",
    description: "Specialized visceral mobilization to reduce internal scarring and improve digestive health.",
    longDescription: "Abdominal adhesions are bands of scar tissue that form between abdominal tissues and organs. They can cause pain, bloating, and digestive issues. Our specialized physical therapists use gentle visceral mobilization techniques to improve organ mobility and reduce discomfort.",
    icon: <Stethoscope className="w-6 h-6" />,
    benefits: ["Reduced abdominal pain", "Improved digestion", "Increased mobility", "Decreased bloating"],
    treatments: ["Visceral mobilization", "Myofascial release", "Postural education", "Core stabilization"]
  },
  {
    slug: "industrial-rehab",
    title: "Industrial Rehab",
    description: "Work-specific conditioning to help employees return to their jobs safely and efficiently.",
    longDescription: "Our industrial rehabilitation program is designed for workers who have been injured on the job. We focus on work-specific conditioning, ergonomic education, and functional capacity evaluations to ensure a safe and sustainable return to work.",
    icon: <ShieldCheck className="w-6 h-6" />,
    benefits: ["Safe return to work", "Reduced risk of re-injury", "Improved physical stamina", "Ergonomic awareness"],
    treatments: ["Work conditioning", "Functional capacity evaluations", "Ergonomic assessments", "Lifting mechanics training"]
  },
  {
    slug: "lymphedema-therapy",
    title: "Lymphedema Therapy",
    description: "Manual lymphatic drainage and compression therapy to manage swelling and improve circulation.",
    longDescription: "Lymphedema is a condition characterized by chronic swelling, often in the arms or legs. Our certified lymphedema therapists use Complete Decongestive Therapy (CDT) to manage swelling, prevent infection, and improve quality of life.",
    icon: <HeartPulse className="w-6 h-6" />,
    benefits: ["Reduced swelling", "Improved skin health", "Increased range of motion", "Infection prevention"],
    treatments: ["Manual lymphatic drainage", "Compression bandaging", "Decongestive exercises", "Skin care education"]
  },
  {
    slug: "dry-needling",
    title: "Dry Needling",
    description: "Targeted trigger point therapy using thin needles to release muscle tension and reduce pain.",
    longDescription: "Dry needling is a technique used to treat musculoskeletal pain and movement issues. It involves inserting a thin needle into a 'trigger point' in the muscle to release tension, improve blood flow, and decrease pain.",
    icon: <Zap className="w-6 h-6" />,
    benefits: ["Immediate pain relief", "Improved muscle function", "Increased range of motion", "Faster recovery"],
    treatments: ["Trigger point dry needling", "Electrical stimulation (optional)", "Corrective exercises", "Soft tissue mobilization"]
  },
  {
    slug: "headaches",
    title: "Headaches",
    description: "Specialized treatment for tension headaches and migraines through cervical and jaw therapy.",
    longDescription: "Many headaches are caused by tension in the neck, jaw, or upper back. Our therapists identify the root cause of your headaches and use manual therapy and corrective exercises to provide long-term relief.",
    icon: <Brain className="w-6 h-6" />,
    benefits: ["Reduced frequency of headaches", "Decreased intensity of pain", "Improved neck mobility", "Better sleep quality"],
    treatments: ["Cervical mobilization", "TMJ assessment", "Postural correction", "Stress management techniques"]
  },
  {
    slug: "arthritis",
    title: "Arthritis",
    description: "Personalized exercise and joint protection strategies to manage pain and maintain mobility.",
    longDescription: "Arthritis can make daily activities challenging. We help you manage joint pain and stiffness through low-impact exercise, joint protection strategies, and manual therapy to keep you active and independent.",
    icon: <Bone className="w-6 h-6" />,
    benefits: ["Reduced joint pain", "Improved joint mobility", "Increased strength", "Better quality of life"],
    treatments: ["Low-impact exercise programs", "Joint mobilization", "Aquatic therapy recommendations", "Assistive device training"]
  },
  {
    slug: "running-performance",
    title: "Running Performance",
    description: "Gait analysis and strength training to improve efficiency and prevent running-related injuries.",
    longDescription: "Whether you're a beginner or an elite athlete, our running performance program helps you run faster and further. We use video gait analysis to identify inefficiencies and provide a targeted strength and mobility plan.",
    icon: <Activity className="w-6 h-6" />,
    benefits: ["Improved running efficiency", "Reduced injury risk", "Increased speed and power", "Better recovery"],
    treatments: ["Video gait analysis", "Running-specific strength training", "Footwear consultation", "Training load management"]
  },
  {
    slug: "balance-and-gait",
    title: "Balance and Gait",
    description: "Fall prevention and mobility training to improve stability and confidence in daily movement.",
    longDescription: "Balance and gait issues can lead to falls and a loss of independence. Our comprehensive assessment identifies the factors contributing to instability, and we create a plan to improve your balance and confidence.",
    icon: <Scale className="w-6 h-6" />,
    benefits: ["Reduced fall risk", "Increased confidence", "Improved walking speed", "Greater independence"],
    treatments: ["Balance training", "Vestibular rehabilitation", "Gait training", "Strength and flexibility exercises"]
  },
  {
    slug: "chronic-pain",
    title: "Chronic Pain",
    description: "Evidence-based strategies to help you manage and reduce long-term pain conditions.",
    longDescription: "Chronic pain is complex. We use a combination of therapeutic exercise, manual therapy, and pain neuroscience education to help you understand your pain and get back to the activities you love.",
    icon: <HeartPulse className="w-6 h-6" />,
    benefits: ["Improved pain management", "Increased activity levels", "Better understanding of pain", "Reduced reliance on medication"],
    treatments: ["Pain neuroscience education", "Graded motor imagery", "Therapeutic exercise", "Manual therapy"]
  },
  {
    slug: "tmj",
    title: "TMJ",
    description: "Specialized therapy for jaw pain, clicking, and dysfunction through manual techniques.",
    longDescription: "Temporomandibular Joint (TMJ) disorders can cause jaw pain, clicking, and difficulty eating. Our specialized therapists use intra-oral and extra-oral techniques to restore normal jaw function and reduce pain.",
    icon: <Award className="w-6 h-6" />,
    benefits: ["Reduced jaw pain", "Improved jaw opening", "Decreased clicking and popping", "Reduced facial tension"],
    treatments: ["Intra-oral manual therapy", "Cervical spine treatment", "Jaw exercises", "Relaxation techniques"]
  },
  {
    slug: "sports-rehab",
    title: "Sports Rehab",
    description: "Specialized programs designed to help athletes recover from injuries and return to peak performance.",
    longDescription: "We understand the unique demands of athletes. Our sports rehabilitation program focuses on restoring strength, power, and agility to get you back on the field or court as quickly and safely as possible.",
    icon: <Activity className="w-6 h-6" />,
    benefits: ["Faster return to sport", "Improved athletic performance", "Reduced risk of re-injury", "Enhanced strength and power"],
    treatments: ["Sport-specific exercises", "Plyometric training", "Agility drills", "Manual therapy"]
  },
  {
    slug: "post-surgical-rehab",
    title: "Post-Surgical Rehab",
    description: "Comprehensive rehabilitation to ensure optimal recovery following orthopedic surgeries.",
    longDescription: "Recovery after surgery is a critical phase. We work closely with your surgeon to implement a protocol-based rehabilitation plan that ensures the best possible outcome for your procedure.",
    icon: <Timer className="w-6 h-6" />,
    benefits: ["Optimal surgical outcomes", "Reduced scar tissue", "Improved range of motion", "Faster recovery"],
    treatments: ["Protocol-based exercise", "Incision care education", "Manual therapy", "Swelling management"]
  },
  {
    slug: "pediatric-pt",
    title: "Pediatric Physical Therapy",
    description: "Fun and engaging therapy for children to improve motor skills, strength, and development.",
    longDescription: "Children aren't just small adults. Our pediatric physical therapy program uses play-based activities to help children reach their developmental milestones and improve their physical function.",
    icon: <Baby className="w-6 h-6" />,
    benefits: ["Improved motor skills", "Increased strength and coordination", "Enhanced developmental progress", "Greater participation in play"],
    treatments: ["Play-based exercise", "Developmental milestone training", "Balance and coordination activities", "Family education"]
  }
];
