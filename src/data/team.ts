export interface TeamMember {
  slug: string;
  name: string;
  credentials: string;
  role: string;
  imageUrl: string;
  tagline: string;
  bio: string[];
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'clark-day',
    name: 'Clark Day',
    credentials: 'DPT | OCS | Cert DN | Spanish',
    role: 'Physical Therapist',
    imageUrl: '/clark-day.jpg',
    tagline: 'A short description can go here, highlighting what you do best.',
    bio: [
      `Clark is a Meridian, Idaho native and Mountain View High School graduate who went on to earn a Bachelor's degree in Exercise and Wellness from Brigham Young University. He later completed his Doctor of Physical Therapy at Pacific University in Portland, Oregon, followed by an Orthopedic Residency and his Orthopedic Clinical Specialist (OCS) certification.`,
      `As avid outdoorsman, Clark enjoys big game and waterfowl hunting, as well as running, hiking, and camping throughout Idaho. Fall is his favorite season-not only for hunting but also for cheering on the Boise State Bronco football team. A passionate sports fan, he closely follows college football and enjoys watching the NBA.`,
      `Clark has had his fair share of experience with physical therapy-following multiple knee, arm, and back surgeries-giving him a deep understanding of his patients' challenges. He is committed to helping others return to the activities they love.`,
      `Outside the clinic, he spends his time with his wife and two young children, often outdoors, at the city park, or strolling around Scheels!`,
    ],
  },
  // {
  //   slug: 'therapist-two',
  //   name: 'Therapist Two',
  //   credentials: 'DPT, OCS',
  //   role: 'Physical Therapist',
  //   imageUrl: 'https://picsum.photos/seed/kuna-pt-team-2/600/750',
  //   tagline: 'Post-operative and chronic pain care.',
  //   bio: [
  //     'Template bio for Jordan Taylor. Update with board certifications, years of experience, and areas of focus.',
  //     'Optional second paragraph for patient-centered care and what patients can expect in sessions.',
  //   ],
  // },
  // {
  //   slug: 'therapist-three',
  //   name: 'Therapist Three',
  //   credentials: 'PT',
  //   role: 'Physical Therapist',
  //   imageUrl: 'https://picsum.photos/seed/kuna-pt-team-3/600/750',
  //   tagline: 'Balance, fall prevention, and wellness.',
  //   bio: [
  //     'Placeholder text for Sam Rivera. Swap in real education, licensure, and professional background.',
  //     'You can use this space for languages spoken, favorite activities outside the clinic, or mentorship roles.',
  //   ],
  // },
];

export function getTeamMemberBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return teamMembers.find((m) => m.slug === slug);
}
