import { serviceItemsEn } from './partials/serviceItemsEn';
import { teamMembersEn } from './partials/teamMembersEn';

/**
 * English UI copy (i18n `translation` namespace).
 */
export const isOpen = Date.now() > new Date('2026-06-01').getTime();

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
      learnMore: 'Learn more',
      viewDetails: 'View Details',
      language: 'Language',
      toTop: 'To Top',
      allRightsReserved: 'All rights reserved.',
    },
    homepage: {
      heroTitlePrefix: isOpen ?  'Restore Your' : '',
      heroTitleMotion: isOpen ? 'Motion' : 'Kuna PT',
      heroTitleMiddle: isOpen ? 'Reclaim Your' : 'Opening',
      heroTitleLife: isOpen ? 'Life' : 'Soon',
      heroDescription:
        'Expert physical therapy tailored to your unique needs. We combine advanced techniques with compassionate care to help you move without pain.' + (isOpen ? '' : ' We will be opening in June 2026.'),
      ourServices: 'Our Services',
      ourExpertise: 'Our Expertise',
      servicesHeadline: 'Comprehensive Care for Every Body',
      servicesSub:
        'We offer a wide range of specialized services to address your specific goals and challenges.',
      visitUs: 'Visit Us',
      findKuna: 'Find Kuna PT',
      locationSub:
        'Conveniently located on Meridian Road, with hours designed to fit your schedule.',
      aboutKuna: 'About Kuna PT',
      aboutHeadline: 'Your Partner in Long-Term Health and Mobility',
      aboutBody: [
        'We believe physical therapy should be personal, purposeful, and empowering. We live and breathe helping you meet your goals. Every visit is one-on-one with a licensed physical therapist start to finish. You receive the focused attention and expert care you deserve. We emphasize individualized plans and hands-on treatment tailored to your goals. No running through the same 3 boring routine exercises every visit.',
        'We are your best destination for physical therapy, whether you\'re recovering from surgery, trying to avoid a surgery, managing chronic pain, or finding answers to new aches and pains. And you might even make some friends that feel like family while you\'re here.',
      ],
      // aboutBullet1: 'Doctorate-level physical therapists',
      // aboutBullet2: 'One-on-one personalized sessions',
      // aboutBullet3: 'State-of-the-art rehabilitation equipment',
      // aboutBullet4: 'Evidence-based treatment protocols',
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
        'Welcome to Kuna Physical Therapy, where your recovery is our priority. Explore our expert services and compassionate care.',
      services:
        'Explore our comprehensive range of physical therapy services designed to help you recover and thrive.',
      team: 'Meet the clinicians dedicated to your recovery at Kuna Physical Therapy.',
      testimonials:
        'Read the reviews of real patients. Share your own experience with Kuna Physical Therapy.',
      bookAppointment: 'Schedule your physical therapy session with our expert clinicians.',
    },
    clinic: {
      mapsEmbedTitle: 'Kuna Physical Therapy location on Google Maps',
      ourLocation: 'Kuna Physical Therapy',
      hours: 'Hours',
      callUs: 'Call Us',
      weekdayLine: 'Mon-Fri: 7:00 AM - 6:30 PM',
      saturdayLine: 'Sat-Sun: Closed',
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
        'From elite athletes to geriatric wellness, we provide expert care for every stage of life and every type of injury.',
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
        serviceSlug: 'balance-and-gait',
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
      legal:
        "By submitting, you agree to our privacy policy. We'll contact you within 24 hours.",
    },
    notFound: {
      title: '404 - Page Not Found',
      body:
        "Oops! We're not sure how you got here, but this page doesn't exist. Sorry!",
      home: 'Home Page',
    },
  },
} as const;
