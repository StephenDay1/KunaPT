/**
 * Service copy (English) keyed by service slug. Icons live in `data/services.tsx`.
 */
export const serviceItemsEn: Record<string, {
  title: string;
  description: string;
  longDescription: string | string[];
  benefits: string[];
  treatments: string[];
}> = {
  'workers-compensation': {
    title: 'Worker\'s Comp',
    description:
      'Personalized treatment for work related injuries to get you back to work safely and confidently.',
    longDescription: [
      'A workplace injury can disrupt more than just your job—it can impact your daily routine, independence, and overall well-being. Our workers\' compensation rehabilitation services are designed to help you recover safely, restore function, and return to work with confidence.',
      'We understand the unique demands of job-related injuries and take an individualized, goal-oriented approach to your care. After a thorough evaluation, we create a treatment plan focused on reducing pain, improving strength and mobility, and preparing you for the physical requirements of your specific job.',
      'Treatment may include hands-on therapy, targeted exercise, and functional training that simulates real work tasks to ensure a safe and sustainable return. We also emphasize proper body mechanics and injury prevention strategies to help reduce the risk of re-injury.',
      'Our team works closely with physicians, case managers, and employers to ensure clear communication and a smooth recovery process. Whether your goal is to return to full duty or modified work, we\'re here to support you every step of the way.',
    ],
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
    longDescription: [
      'Dry needling is a skilled, evidence-based technique used by physical therapists to relieve pain, reduce muscle tension, and improve movement. It involves the use of a thin, sterile needle to target trigger points—tight, sensitive areas within muscle that can contribute to pain and dysfunction.',
      'This treatment can be highly effective for a variety of conditions, including muscle strains, neck and back pain, headaches, and sports-related injuries. By releasing tension within the muscle, dry needling helps improve blood flow, decrease pain, and restore more normal movement patterns.',
      'At our clinic, dry needling is always integrated into a comprehensive treatment plan tailored to your specific needs. It\'s often combined with hands-on therapy, corrective exercise, and movement retraining to ensure lasting results—not just temporary relief.',
      'If you\'re dealing with persistent muscle tightness or pain that hasn\'t improved with other treatments, dry needling may be a valuable option to help you move and feel better.',
    ],
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
    longDescription: [
      'Headaches can interfere with your work, sleep, and ability to enjoy everyday life. Whether you\'re dealing with tension headaches, cervicogenic headaches, or recurring migraines, physical therapy can help address the root causes—not just mask the symptoms.',
      'Many headaches are driven by issues in the neck, poor posture, muscle tension, and movement patterns developed over time. Our approach starts with a thorough, individualized evaluation to understand what\'s contributing to your symptoms. From there, we create a treatment plan tailored specifically to you.',
      'Care may include hands-on therapy to improve joint mobility and reduce muscle tension, targeted exercises to restore strength and flexibility, and postural training to relieve strain throughout the day. We also focus on education—helping you recognize triggers, manage symptoms, and prevent future headaches.',
      'If headaches are limiting your day-to-day life, you don\'t have to just push through. With the right treatment plan, lasting relief is possible—and we\'re here to help you get there.',
    ],
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
    longDescription: [
      'Arthritis can make everyday activities—walking, bending, gripping, or staying active—feel more difficult and painful. And it doesn’t only affect the “old,” as people in the younger years can be affected as well. While arthritis is a common condition, the right treatment can make a meaningful difference in how you move and feel.',
      'Surgery, and joint replacements, are NOT always the only option to get out of pain.',
      'At our Kuna Physical Therapy, we take an individualized approach to managing arthritis and protecting long-term joint health. We evaluate your mobility, strength, joint mechanics, and daily movement patterns to understand how arthritis is impacting you. From there, we build a personalized plan designed to reduce pain, improve flexibility, and support better function.',
      'We use hands-on therapy to improve joint mobility, exercises and targeted strengthening to support and stretching to offload affected joints, and guided movement strategies to keep you active without unnecessary strain. We also provide education on activity modification, flare-up management, and long-term strategies to help you stay in control of your symptoms.',
      'Arthritis doesn\'t have to limit your lifestyle. With the right guidance and consistency, you can continue doing the things you enjoy—with less pain and more confidence.',
    ],
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
    longDescription: [
      "Running is the one exercise that requires no special equipment or locale. But while it is a simple exercise it is also prone to injury. Yet, the injury rate for runners is about 80%. That means that almost 8 of the ten people you pass on your daily runs, or at the next 10K will be injured this year.",
      "Many people think that if they just buy a good, usually expensive, pair of shoes, warm up, and cool down after their run, they will avoid injury. But running takes its toll whether with an instantaneous injury to your ankle, knee, or muscle or the result of years of accumulating damage to your joints.",
      "Good technique can prevent injury and also improve speed and performance. A few simple changes in running form can make all the difference in your ability to run without injury but also to improve your performance. Our therapists are runners and athletes too, we understand your love of the run and your drive. Your therapist will perform a video analysis of your running technique and work with you to make immediate changes to your form, changes that will keep you on the road for years to come."
    ],
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
  'balance-and-fall-prevention': {
    title: 'Balance and Fall Prevention',
    description:
      'Fall prevention and mobility training to improve stability and confidence in daily movement.',
    longDescription: [
      'Falls are one of the leading causes of injury among older adults, with 1 in 4 individuals over the age of 65 experiencing a fall each year. While common, falls are not a normal part of aging—and many are preventable with the right guidance and support.',
      'At our clinic, we take a proactive, individualized approach to fall prevention. We assess key factors such as balance, strength, mobility, gait mechanics, and environmental risks to identify what may be increasing your likelihood of falling. From there, we develop a personalized plan designed to improve stability, build confidence, and keep you safely moving.',
      'Our treatment focuses on targeted strength training, balance and coordination exercises, and functional movement strategies that translate directly into your daily life. We also provide education on home safety, footwear, and simple modifications that can significantly reduce fall risk.',
      'Whether you\'ve experienced a fall, feel unsteady on your feet, or simply want to stay active and independent, we\'re here to help you move with confidence and peace of mind.',
    ],
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
    longDescription: [
      'Living with chronic pain can be exhausting, frustrating, and disruptive to your daily life. Whether your pain has persisted for months or years, our goal is to help you move better, feel stronger, and regain control.',
      'At our clinic, we take a comprehensive and individualized approach to chronic pain. We understand that pain is complex and influenced by more than just injured tissues—it can involve movement patterns, lifestyle factors, and the nervous system. That’s why your care plan is tailored specifically to you.',
      'Through a combination of hands-on therapy, targeted exercise, and movement retraining, we work to reduce pain, improve mobility, and build lasting strength and resilience. Just as importantly, we provide education and practical strategies to help you better understand your pain, manage flare-ups, and stay active with confidence.',
      'Chronic pain doesn\'t have to define your life. With the right guidance and support, meaningful progress is possible—and we\'re here to help you every step of the way.',
    ],
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
    longDescription: [
      'Temporomandibular joint (TMJ) pain occurs when there is a problem with the joint; the "hinge" that connects your jaw to your skull. This can cause not only jaw pain but also facial pain, headaches, neck pain.',
      'Often someone suffering from neck pain, or headaches don\'t even realize that the problem might be in the jaw. And many times those with TMJ don\'t realize that it is the TMJ that\'s causing their neck or back pain. Patients who suffer from TMJ pain can find temporary relief from intra oral massage, spinal manipulation, and Dry Needling.',
    ],
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
    longDescription: [
      'Whether you\'re a weekend warrior, high school athlete, marathon runner, or triathlete, sports injuries can affect anyone at any level. At our clinic, we have experience treating a wide range of athletic injuries and helping individuals return to the activities they love—stronger and more confident than before.',
      'Our team is passionate about sports and active lifestyles, and we understand how frustrating it can be to be sidelined. Through a combination of hands-on therapy and individualized treatment plans, we focus on reducing pain, promoting tissue healing, improving strength and coordination, and minimizing the risk of future injury.',
      'As people explore new sports and recreational activities, it\'s common to experience new aches and pains along the way. Don\'t let uncertainty or fear hold you back from staying active. We offer FREE sports injury screenings to help you better understand your condition. Our orthopedic residency-trained physical therapists will evaluate your movement, determine your readiness to return to activity, and guide you through the best next steps—whether that\'s a safe return to sport or a more comprehensive plan of care.',
    ],
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
    longDescription: [
      'Orthopedic surgery is rarely something you plan for—but when it becomes part of your journey, the road back can feel overwhelming. Whether your surgery stems from a sports injury, an accident, or the natural wear and tear of life, the interruption to your routine can be both physically and emotionally challenging.',
      'At Kuna Physical Therapy, we understand that these moments can feel like major setbacks. We will be your champion as you write your comeback story!',
      'With firsthand experience in post-surgical recovery, our team knows how critical the rehabilitation process is to your long-term success. We provide one-on-one, hands-on care focused on restoring motion, reducing pain, rebuilding strength, and improving coordination and balance. Most importantly, we\'re committed to helping you return to the activities that define who you are.',
      'We also maintain strong relationships with surgeons throughout the Treasure Valley and prioritize clear, consistent communication throughout your recovery. By working closely with your surgical team, we ensure a coordinated approach that keeps you progressing safely and effectively every step of the way.',
      'Your setback doesn\'t define you. Your comeback does.',
      'We have extensive experience guiding patients through recovery from a wide range of orthopedic procedures, including:',
      '- ACL, MCL, meniscus, and other knee surgeries',
      '- Total joint replacements (knee, hip, shoulder, ankle)',
      '- Spinal surgeries, including lumbar, cervical, and thoracic fusions and laminectomies',
      '- Rotator cuff, labral, biceps, and other shoulder repairs',
      '- Hip labral repairs and impingement procedures',
      '- Foot surgeries, including bunionectomies and Lapiplasty',
      '- Fracture repairs and post-traumatic care',
      '- And many other orthopedic procedures',
    ],
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
    longDescription: [
      'Children grow, move, and develop in unique ways—and sometimes they need a little extra support along the way. Our pediatric physical therapy services are designed to help children of all ages build strength, improve coordination, and reach important developmental milestones in a fun, supportive environment.',
      'Treatment sessions are engaging and play-based, helping children stay motivated while developing skills like balance, coordination, strength, and confidence in movement. We also provide guidance and education for parents to support progress at home and in daily activities.',
      'Our goal is simple: to help your child move better, grow stronger, and participate fully in the activities they love.',
    ],
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
