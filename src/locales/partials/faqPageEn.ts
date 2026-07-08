/**
 * FAQ page copy (English).
 */
export const faqPageEn = {
  titleLine1: 'Frequently Asked',
  titleAccent: 'Questions',
  subtitle:
    'Practical answers about insurance, visits, and how we work with you at Kuna Physical Therapy.',
  footerPrompt: 'Didn\'t find an answer to your question?',
  footerLink: 'Contact us',
  /** FAQ entries in display order. */
  items: [
    {
      slug: 'insurance',
      question: 'What insurances are accepted?',
      answer: [
        'We accept many major insurance providers, such as Blue Cross/Blue Shield, Select Health, Cigna, Aetna, United Healthcare, Medicare, Medicaid, Tricare, Champ VA, Micron, Medicare Advantage and Replacement plans, Pacific Source, Motor Vehicle Accidents (we do not accept 3rd party insurance), Workman\'s Comp.',
        'Don\'t see your insurance on this list? Give us a call and we\'ll be happy to help determine if we are in-network with your insurance policy.',
      ],
    },
    {
      slug: 'referral',
      question: 'Do I need a referral from my doctor?',
      answer:
        'It depends.  Idaho is a direct access state, which means you can start physical therapy without a referral or prescription from your doctor. However, some insurance plans may require a referral or prescription.  It\'s best to give us a call to discuss your specific situation.',
    },
    {
      slug: 'walk-ins',
      question: 'Do you accept walk-ins?',
      answer:
        'We recommend scheduling your visit ahead of time so we can reserve one-on-one time with a therapist. If you have an urgent need, please call us; we will do our best to offer a same-day appointment when our schedule allows.',
    },
    {
      slug: 'scheduling',
      question: 'How do I schedule an appointment?',
      answer:
        'You can submit a request through our online booking form, or call us directly at {{phone}}. Our team will follow up to confirm the best time for your initial evaluation.',
    },
    {
      slug: 'first-visit',
      question: 'What should I expect on my first visit?',
      answer:
        'Your first session is typically a comprehensive evaluation: we discuss the root cause of your symptoms, assess movement and strength, and outline a personalized plan. You will leave with a clear understanding of the next steps toward recovery.',
    },
    {
      slug: 'what-to-bring',
      question: 'What should I bring?',
      answer: [
        '- Photo ID',
        '- Insurance card (if applicable)',
        '- Imaging reports or paperwork related to your condition',
        '- Comfortable clothing that allows you to move while letting us assess the area(s) we are treating',
        '- Footwear that allows you to move freely; you may be asked to remove it for some exercises',
        '- Any other relevant information you think we should know',
      ],
    },
    {
      slug: 'one-on-one',
      question: 'Will I work one-on-one with a therapist?',
      answer:
        'Yes! 100% of the time! Every visit is one-on-one with a licensed physical therapist from start to finish.  Your care will also be carried out by the same therapist for the duration of your treatment plan - you won\'t be shuffled around to different therapists.',
    },
  ],
} as const;
