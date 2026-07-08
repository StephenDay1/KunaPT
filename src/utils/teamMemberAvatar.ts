import type { CSSProperties } from 'react';
import type { TeamMember } from '../data/team';

/** Styles for a square avatar crop centered on `imageFocus`, with uniform scaling only. */
export function teamMemberAvatarImageStyle(member: TeamMember): CSSProperties {
  const { centerX, centerY, zoomWidth } = member.imageFocus;
  const scale = zoomWidth / 100;

  return {
    objectFit: 'cover',
    objectPosition: `${centerX}% ${centerY}%`,
    transform: `scale(${scale})`,
    transformOrigin: `${centerX}% ${centerY}%`,
  };
}
