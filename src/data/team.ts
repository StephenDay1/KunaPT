export interface TeamMember {
  slug: string;
  name: string;
  imageUrl: string;
}

/**
 * Name and photo are stable; copy for `slug` is under `translation.teamMembers.<slug>` in i18n.
 */
export const teamMembers: TeamMember[] = [
  {
    slug: 'clark-day',
    name: 'Clark Day, DPT',
    imageUrl: '/clark-day.jpg',
  },
];

export function getTeamMemberBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return teamMembers.find((m) => m.slug === slug);
}
