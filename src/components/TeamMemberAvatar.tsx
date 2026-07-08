import type { TeamMember } from '../data/team';
import { teamMemberAvatarImageStyle } from '../utils/teamMemberAvatar';

interface TeamMemberAvatarProps {
  member: TeamMember;
  className?: string;
}

export default function TeamMemberAvatar({
  member,
  className = 'w-11 h-11 rounded-full',
}: TeamMemberAvatarProps) {
  return (
    <span className={`inline-block shrink-0 overflow-hidden bg-slate-100 ${className}`}>
      <img
        src={member.imageUrl}
        alt=""
        aria-hidden
        className="h-full w-full"
        style={teamMemberAvatarImageStyle(member)}
      />
    </span>
  );
}
