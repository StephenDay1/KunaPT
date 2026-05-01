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
    longDescription:
      'Our workers\' compensation physical therapy services are designed to help you recover safely, regain strength, and return to work with confidence. Our team specializes in treating work-related injuries such as strains, sprains, repetitive stress injuries, and post-surgical conditions. Through individualized treatment plans, hands-on care, and progressive exercise programs, we focus on restoring mobility, reducing pain, and preventing re-injury.',
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
      "Dry needling is very effective at reducing pain and can be an important part of a larger treatment plan for many musculoskeletal problem.",
      "Injury or continuous pain can result in the release of chemicals into the neuromuscular junction (the connection point between nerves and muscles). Overabundance of these chemicals at the neuromuscular junction leads to a continuous contraction of a muscle often called a knot or trigger point. These points can be self-sustaining and leave the body stuck in an ongoing cycle of tension and pain.",
      "Inserting a specialized needle into a trigger point can release the build-up of chemicals at the neuromuscular junction and break the pain cycle allowing the muscles to relax and reset. Furthermore, dry needling can improve circulation and aid in tissue remodeling (healing) following an injury."],
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
      'Chronic headaches are one of the most common complaints that lead patients to the doctor. There are six different categories of headaches, not associated with an underlying medical condition:',
      'Cervicogenic Headaches: the pain usually starts on one side of the neck and travels forward over the head',
      'Cluster Headaches: the most unbearable type of headache with pain usually in the front of the head near one eye',
      'Chronic Paroxysmal Hemicranias: pain usually in the front of the head near one eye and spreading to the neck',
      'Tension-Type Headaches: classic generalized headaches usually described as pressure or tightness',
      'Migraines Without Aura: start as a dull, usually throbbing headache at the front of the head on one side (sometimes shifting) with pain ranging from mild to severe',
      'Migraines With Aura: same as migraines without aura but with warning symptoms before full headache onset'
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
      "Half of us will have knee arthritis by the time we are 85, according to the Centers for Disease Control, and a quarter of us will develop hip arthritis. Arthritis is a fact of growing older, but over 50 million Americans of ALL ages suffer from this debilitating disease.",
      "Because arthritis is usually the result of wear and tear of the cartilage in the joints. When this cartilage is shaved off into the joint space it causes painful inflammation. As this gets worse the tissues around the joint will tighten and weaken resulting in limited range of motion. Efficient movement is essential to not only relieving arthritis pain but to minimize continued damage to your joints.",
      "The right physical therapy will allow you to live with arthritis without constant pain and without constant medication. Your therapist will work with you to restore your range of motion, improve your muscular activation to support your joints, enhance movement and function and teach you to move efficiently to protect your joints.",
      "Physical Therapy will help you break the cycle of pain. Working with your physical therapist on a one on one basis will change you from an arthritis sufferer to someone living pain-free with arthritis.",
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
  'balance-and-gait': {
    title: 'Balance and Gait',
    description:
      'Fall prevention and mobility training to improve stability and confidence in daily movement.',
    longDescription:
      'Improving your walking skills - technically known as your "gait" - and your balance are interrelated challenges. Physical therapy will help you master both of these skills to decrease your risk of injury, while at the same time Balance and gait are inextricably linked because they tend to impact one another. Even if you don\'t think you\'re in danger of falling down, the general slowing down you\'re attributing to aging could be something else. Think of balance as a three-legged stool with the legs being eyes, ears, and feet. If one leg is missing, then the whole stool topples over.',
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
      'Massage, stretching, and exercise will not fix chronic pain alone. Specialized manual therapy techniques are needed to treat your inflamed nerves. These nerves have become swollen with inflammation that travels down the length of the entire nerve and into your limbs, causing muscle soreness, cramps, joint pain and swelling, burning, and even numbness. The swollen nerve actually leaks into the tissues causing even further pain.',
      'The very best thing we can offer is hope to the chronic pain sufferer. There are physical therapy interventions that can treat or even completely eliminate pain and restore your ability to function without the need for surgery or drugs. With a tailor made therapy plan, your therapist will use the right combination of techniques and approaches to best treat your chronic pain.',
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
      'TMJ pain occurs when there is a problem with the temporomandibular joint; the "hinge" that connects your jaw to your skull. This can cause not only jaw pain but also facial pain, headaches, neck pain.',
      'Often someone suffering from neck pain, or headaches don\'t even realize that the problem might be in the jaw. And many times those with TMJ don\'t realize that it is the TMJ that\'s causing their neck or back pain. Patients who suffer from TMJ pain can find temporary relief from massage, spinal manipulation, acupuncture, and even botox but these are expensive and the effects only last temporarily.'
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
      'Occasional injury is a natural part of sports competition. Recovery is relatively simple - take it easy for a month or two and you can recover from almost any sports injury. What a competitive athlete needs though is a planned course of rehab taking you from injury to full athletic performance. We will help you recover faster and get you ready to compete.',
      'Through manual therapy and appropriate activity your therapist will help reduce your pain, improve mobility, and regain full mechanical function as soon as possible. Your rehabilitation plan may begin with aquatic therapy and manual therapy, progressing into a functional sport specific program. Through this specific, tailored plan you will be able to return to competition with full confidence in your body.',
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
    longDescription:
      'Recovery after surgery is a critical phase. We believe freedom of movement is the foundation of a healthy and satisfying life. Your therapist will work with you one-on-one and tailor your treatment especially for you and your recovery needs.',
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
      "Children can benefit from the services of a physical therapist for a variety of conditions or injuries, ranging from orthopedic sports injuries to congenital conditions that affect physical movements, mobility, and coordination. Pediatric physical therapy relies on functional interventions that are often play or game-based to incorporate effective therapy techniques into a fun interactive environment for each child. Pediatric physical therapy can begin in children as young as infants, and can encompass all ages of growth and development through childhood and into adolescence.",
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
