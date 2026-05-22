import { serviceItemsEn } from './partials/serviceItemsEn';
import { teamMembersEn } from './partials/teamMembersEn';
import { isOpen } from '../data/clinicInfo';

/**
 * English UI copy (i18n `translation` namespace).
 */
export const en = {
  translation: {
    common: {
      home: 'Home',
      about: 'About',
      ourTeam: 'Our Team',
      testimonials: 'Testimonials',
      services: 'Services',
      allServices: 'All Services',
      viewAllServices: 'View All Services',
      bookAppointment: 'Book Appointment',
      faq: 'FAQ',
      contact: 'Contact Us',
      learnMore: 'Learn more',
      viewDetails: 'View Details',
      language: 'Language',
      toTop: 'To Top',
      allRightsReserved: 'All rights reserved.',
    },
    homepage: {
      // Ideas: Your comeback story begins here
      // Specialists in movement, partners in recovery
      heroTitlePrefix: 'Specialists in',
      heroTitleMotion: 'movement',
      heroTitleMiddle: 'Partners in',
      heroTitleLife: 'recovery',
      // heroTitlePrefix: 'Powering your',
      // heroTitleMotion: 'growth',
      // heroTitleMiddle: 'is our',
      // heroTitleLife: 'mission',
      heroDescription: [
        'We are Kuna\'s best destination for one-on-one physical therapy treatment, whether you\'re recovering from surgery, trying to avoid a surgery, managing chronic pain, or finding answers to new aches and pains. And you might even make some friends that feel like family while you\'re here.' + (isOpen ? '' : ' We will be opening Summer 2026.'),
      ],
      ourServices: 'Our Services',
      ourExpertise: 'Our Expertise',
      servicesHeadline: 'Comprehensive Care for Every Body',
      servicesSub:
        'We offer a wide range of specialized services to address your specific goals and challenges.',
      visitUs: 'Visit Us',
      findKuna: 'Find Kuna Physical Therapy',
      locationSub:
        'Kuna Physical Therapy is conveniently located on Meridian Road, open early and late to accommodate scheduling for your busy life and work schedule!',
      aboutKuna: 'About Kuna Physical Therapy',
      aboutHeadline: 'Why choose Kuna Physical Therapy?',
      aboutBody: [
        'We believe physical therapy should be personal, purposeful, and empowering. We live and breathe helping you meet your goals. Every visit is one-on-one with a licensed physical therapist, start to finish. You receive the focused attention and expert care you deserve. We emphasize individualized plans and hands-on treatment tailored to your goals. No running through the same 3 boring routine exercises every visit.',
      ],
      // aboutBullet1: 'Doctorate-level physical therapists',
      // aboutBullet2: 'One-on-one personalized sessions',
      // aboutBullet3: 'State-of-the-art rehabilitation equipment',
      // aboutBullet4: 'Evidence-based treatment protocols',
      stillHaveQuestions: 'Still have questions?',
      stillHaveQuestionsHeadline: 'We\'re here to help',
      stillHaveQuestionsSub: `Feel free to visit our FAQ, and don't hesitate to reach out.`,
      aboutTeamCta: 'Learn more about our team',
      successStories: 'Success Stories',
      patientsSay: 'What Our Patients Say',
      readAllReviews: 'Read All Reviews',
      ratingText: '4.9/5 Rating',
      verifiedGoogle: 'Verified Google Reviews',
    },
    language: {
      english: 'English',
      spanish: 'Spanish',
    },
    meta: {
      siteName: 'Kuna Physical Therapy',
      titleTemplate: 'Kuna PT | {{page}}',
      homeDescription:
        'Kuna Physical Therapy is a specialized physical therapy clinic in Kuna, Idaho. We\'re your best destination for one-on-one physical therapy treatment.',
      services:
        'Explore our comprehensive range of physical therapy services in Kuna, Idaho, designed to help you recover and thrive.',
      team: 'Meet the clinicians dedicated to your recovery at Kuna Physical Therapy.',
      testimonials:
        'Read the reviews of real patients. Share your own experience with Kuna Physical Therapy.',
      bookAppointment: 'Schedule your physical therapy session with our expert clinicians.',
      faq:
        'Answers about insurance, scheduling, walk-ins, referrals, and what to expect at Kuna Physical Therapy.',
      notFound:
        'This page could not be found. Return to Kuna Physical Therapy for services, booking, and clinic information.',
    },
    faqPage: {
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
            'Don\'t see your insurance on this list? Give us a call and we\'ll be happy to help determine if we are in-network with your insurance policy.'],
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
          answer:
            [
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
    },
    clinic: {
      mapsEmbedTitle: 'Kuna Physical Therapy location on Google Maps',
      ourLocation: 'Kuna Physical Therapy',
      hours: 'Hours',
      callUs: 'Call Us',
      lineOne: 'Mon-Fri: 7:00 AM - 6:30 PM',
      lineTwo: 'Sat-Sun: Closed',
    },
    serviceItems: serviceItemsEn,
    serviceDetail: {
      backToServices: 'Back to all services',
      keyBenefits: 'Key Benefits',
      ourApproach: 'Our Approach',
      otherServices: 'Other Services',
      viewAllServices: 'View all services',
    },
    servicesPage: {
      titleLine1: 'Our Specialized',
      titleAccent: 'Services',
      subtitle:
        'From avid athletes to weekend warriors, children to older adults, and everyone in between. We are here to provide the expert level care you need for whatever you are going through.',
      freeScreening: 'Free Screening',
      freeScreeningSub: [
        'Have a sports injury or nagging pain, but aren\'t sure if you would benefit from PT? Call for a free injury screening where we will answer a few questions:',
        '- What\'s causing the pain?',
        '- Do you need further medical treatment?',
        '- Is physical therapy right for your medical condition?',
        '- How can Kuna Physical Therapy help you achieve your functional goals?',
      ],
      bookScreening: 'Schedule a Free Screening',
    },
    team: {
      titleLine1: 'Our',
      titleAccent: 'Team',
      intro: 'The people dedicated to your recovery who are eager to get to know you.',
      viewBio: 'View bio',
    },
    teamDetail: {
      back: 'Back to our team',
      bookWith: 'Book with {{name}}',
      otherMembers: 'Other team members',
      certifications: 'Certifications',
      profileSchemaRoleAtClinic: '{{role}} at {{clinicName}}, certified in {{credentials}}',
    },
    teamMembers: teamMembersEn,
    testimonialsPage: {
      badge: 'Patient Success Stories',
      titleLine1: 'Real Stories, Real',
      titleAccent: 'Results',
      intro:
        'We take pride in helping our patients return to the activities they love. Read about their journeys and share your own experience with us.',
      leaveReview: 'Leave a Review on Google',
      formTitle: 'Share Your Story',
      formIntro:
        'How was your experience at Kuna Physical Therapy? Your feedback helps us improve and helps others find the right care.',
      thankYou: 'Thank You!',
      thankYouSub:
        'Your review has been submitted for moderation and will appear soon.',
      yourName: 'Your Name',
      fullNamePh: 'Full Name',
      rating: 'Rating',
      serviceReceived: 'Service Received',
      selectService: 'Select a service',
      generalWellness: 'General Wellness / Other',
      yourExperience: 'Your Experience',
      experiencePh: 'Tell us about your recovery journey...',
      submit: 'Submit Review',
      justNow: 'Just now',
    },
    testimonialsReviews: {
      '1': {
        name: 'Sarah Jenkins',
        text:
          "The team at Kuna Physical Therapy helped me get back to running after a serious knee injury. Their personalized approach made all the difference. I felt supported every step of the way.",
        date: '2 weeks ago',
        serviceSlug: 'sports-rehab',
      },
      '2': {
        name: 'Michael Chen',
        text:
          "Professional, knowledgeable, and genuinely caring. I've been to several clinics, but the results here were far superior. The dry needling was a game changer for my chronic back pain.",
        date: '1 month ago',
        serviceSlug: 'dry-needling',
      },
      '3': {
        name: 'Elena Rodriguez',
        text:
          "After my shoulder surgery, I was worried about my range of motion. Thanks to their post-op care, I'm back to 100%. Highly recommend Kuna PT!",
        date: '2 months ago',
        serviceSlug: 'post-surgical-rehab',
      },
      '4': {
        name: 'David Thompson',
        text:
          'I suffered from chronic tension headaches for years. The cervical therapy I received here has significantly reduced my pain frequency. I can finally focus at work again.',
        date: '3 months ago',
        serviceSlug: 'headaches',
      },
      '5': {
        name: 'Linda Wu',
        text:
          "The pediatric therapists are amazing with children. They made my son's recovery feel like play, and he's made incredible progress with his motor skills.",
        date: '4 months ago',
        serviceSlug: 'pediatric-pt',
      },
      '6': {
        name: 'James Wilson',
        text:
          "Excellent facility and even better staff. They really take the time to explain the 'why' behind every exercise. My balance has improved tremendously.",
        date: '5 months ago',
        serviceSlug: 'balance-and-fall-prevention',
      },
    },
    homeTeaser: {
      card1: {
        name: 'Sarah Jenkins',
        text:
          'The team at Kuna Physical Therapy helped me get back to running after a serious knee injury. Their personalized approach made all the difference.',
      },
      card2: {
        name: 'Michael Chen',
        text:
          "Professional, knowledgeable, and genuinely caring. I've been to several clinics, but the results here were far superior.",
      },
      card3: {
        name: 'Elena Rodriguez',
        text:
          "After my shoulder surgery, I was worried about my range of motion. Thanks to their post-op care, I'm back to 100%.",
      },
    },
    bookPage: {
      title: 'Book an Appointment',
      intro:
        'Request an initial evaluation and our team will contact you to confirm the best time for your visit.',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      reason: 'Reason for Visit',
      selectService: 'Select a service',
      other: 'Other',
      message: 'Message (Optional)',
      messagePh: 'Tell us a bit about your condition...',
      sendRequest: 'Send Request',
      sending: 'Sending...',
      success: 'Thank you!',
      legal:
        "We'll contact you within 24 hours.",
    },
    notFound: {
      title: '404 - Page Not Found',
      body:
        "Oops! We're not sure how you got here, but this page doesn't exist. Sorry!",
      home: 'Home Page',
    },
  },
} as const;
