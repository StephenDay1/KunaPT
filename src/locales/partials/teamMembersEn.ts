/**
 * Team member copy (English) keyed by member slug. Names and photos live in `data/team.ts`.
 */
export type TeamMemberCopy = {
  // credentialsPreview: string[];
  credentials: string[];
  bookeable: boolean;
  languages: string;
  certifications: string[];
  role: string;
  tagline: string;
  bio: string[];
};

export const teamMembersEn: Record<string, TeamMemberCopy> = {
  'clark-day': {
    // credentialsPreview: [
    //   'Spanish',
    //   'Running Analysis',
    //   'Dry Needling',
    //   'BFR',
    //   'Barbell Rehab',
    // ],
    role: 'Physical Therapist',
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
      'Clark\'s approach to care is shaped not only by his education, but by his own journey. Through multiple knee, arm, and back surgeries, he gained firsthand understanding of the physical and mental challenges that come with injury and recovery. This perspective strengthens his commitment to help others return to the activities they love.',
      'Clark lives the active lifestyle he encourages in his patients. He enjoys big game and waterfowl hunting, as well as running, hiking, and camping throughout Idaho. Fall is his favorite season-not only for hunting but also for cheering on the Boise State football team. A passionate sports fan, he closely follows college football and enjoys watching the NHL and NBA.',
      'Outside the clinic, he spends his time with his wife and two young children, often outdoors, at the city park, or strolling around Scheels!',
    ],
  },
};
