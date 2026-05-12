/**
 * Team member copy (English) keyed by member slug. Names and photos live in `data/team.ts`.
 */
export type TeamMemberCopy = {
  credentials: string;
  role: string;
  tagline: string;
  bio: string[];
};

export const teamMembersEn: Record<string, TeamMemberCopy> = {
  'clark-day': {
    credentials: 'OCS | Cert DN | Español',
    role: 'Physical Therapist',
    tagline: `Clark is a Meridian, Idaho native with a Bachelor's degree in Exercise and Wellness from Brigham Young University and a Doctor of Physical Therapy from Pacific University in Portland, Oregon.`,
    bio: [
      `Clark is a Meridian, Idaho native and Mountain View High School graduate who went on to earn a Bachelor's degree in Exercise and Wellness from Brigham Young University. He later completed his Doctor of Physical Therapy at Pacific University in Portland, Oregon, followed by an Orthopedic Residency and his Orthopedic Clinical Specialist (OCS) certification.`,
      `As avid outdoorsman, Clark enjoys big game and waterfowl hunting, as well as running, hiking, and camping throughout Idaho. Fall is his favorite season-not only for hunting but also for cheering on the Boise State Bronco football team. A passionate sports fan, he closely follows college football and enjoys watching the NBA.`,
      `Clark has had his fair share of experience with physical therapy-following multiple knee, arm, and back surgeries-giving him a deep understanding of his patients' challenges. He is committed to helping others return to the activities they love.`,
      'Outside the clinic, he spends his time with his wife and two young children, often outdoors, at the city park, or strolling around Scheels!',
    ],
  },
};
