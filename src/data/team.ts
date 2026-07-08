export interface TeamMemberImageFocus {
  /** Horizontal focus point as a percentage of the image (0–100) */
  centerX: number;
  /** Vertical focus point as a percentage of the image (0–100) */
  centerY: number;
  /** Zoom level as a percentage; 100 = default crop, 200 = 2× zoom on the focus point */
  zoomWidth: number;
}

export interface TeamMember {
  slug: string;
  name: string;
  imageUrl: string;
  imageFocus: TeamMemberImageFocus;
}

/**
 * Name and photo are stable; copy for `slug` is under `translation.teamMembers.<slug>` in i18n.
 */
export const teamMembers: TeamMember[] = [
  {
    slug: 'clark-day',
    name: 'Clark Day',
    imageUrl: '/team/clark-day.jpg',
    imageFocus: {
      centerX: 48,
      centerY: 13,
      zoomWidth: 200,
    },
  },
  {
    slug: 'ireland-hatfield',
    name: 'Ireland Hatfield',
    imageUrl: '/team/ireland-hatfield.jpeg',
    imageFocus: {
      centerX: 40,
      centerY: 35,
      zoomWidth: 180,
    },
  },
];

export function getTeamMemberBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return teamMembers.find((m) => m.slug === slug);
}
