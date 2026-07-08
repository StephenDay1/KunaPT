/**
 * Team member copy (English) keyed by member slug. Names and photos live in `data/team.ts`.
 */
export type TeamMemberCopy = {
  // credentialsPreview: string[];
  credentials: string[];
  title: string;
  bookeable: boolean;
  languages: string;
  certifications: string[];
  role: string;
  tagline: string;
  bio: string[];
};

export const teamMembersEn: Record<string, TeamMemberCopy> = {
  'clark-day': {
    role: 'Physical Therapist',
    title: 'DPT, OCS',
    bookeable: true,
    credentials: [
      'Board Certified Orthopedic Clinical Specialist (OCS)',
    ],
    languages: 'Fluent in Spanish',
    certifications: [
      'Running Analysis',
      'Dry Needling',
      'Blood Flow Restriction (BFR)',
      'Barbell Rehab',
    ],
    tagline: `Clark brings a combination of advanced clinical training, personal experience, and genuine passion to his work as a physical therapist.`,
    bio: [
      'Clark is a Meridian, Idaho native and Mountain View High School graduate who went on to earn a Bachelor\'s degree in Exercise and Wellness from Brigham Young University. He later completed his Doctor of Physical Therapy at Pacific University in Portland, Oregon, followed by an Orthopedic Residency. This led him to obtain  his Orthopedic Clinical Specialist (OCS) certification—an elite distinction achieved by only about 6% of physical therapists nationwide.',
      'Clark\'s approach to care is shaped not only by his education, but by his own journey. Through multiple surgeries (knees, arms, and back) he gained firsthand understanding of the physical and mental challenges that come with injury and recovery. This perspective strengthens his commitment to help others return to the activities they love.',
      'Clark lives the active lifestyle he encourages in his patients. He enjoys big game and waterfowl hunting, as well as running, hiking, and camping throughout Idaho. Fall is his favorite season-not only for hunting but also for cheering on the Boise State football team. A passionate sports fan, he closely follows college football and enjoys watching the NHL and NBA.',
      'Outside the clinic, he spends his time with his wife and two young children, often outdoors, at the city park, or strolling around Scheels!',
    ],
  },
  'ireland-hatfield': {
    role: 'Office Manager',
    title: '',
    bookeable: false,
    credentials: [],
    languages: '',
    certifications: [],
    tagline: `Ireland\'s goal is to make every patient feel welcomed, cared for, and comfortable from the moment they contact our office.  She\'s here to make sure your experience is as easy and stress-free as possible.`,
    bio: [
      'Hi! I\'m Ireland, the Office Manager at Kuna Physical Therapy. My goal is to make every patient feel welcomed, cared for, and comfortable from the moment they contact our office. Whether I\'m helping schedule appointments, answering insurance questions, coordinating referrals, or simply greeting you with a smile, I want your experience to be as easy and stress-free as possible.',
      'I love getting to know our patients and being a friendly face throughout their rehabilitation journey. I believe that great healthcare starts with genuine relationships, and I\'m passionate about creating a positive, supportive environment where everyone feels heard and valued. Behind the scenes, I work hard to keep our clinic running smoothly so our therapists can focus on what they do best—helping you get back to doing what you love.',
      'When I\'m not at the clinic, you\'ll usually find me spending time with my family, reading, gardening, or enjoying everything our Idaho community has to offer. I\'m grateful to be part of the Kuna Physical Therapy team and look forward to welcoming you into our clinic!',
    ],
  },
};