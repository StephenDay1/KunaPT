import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { TeamMember } from '../data/team';
import TeamMemberAvatar from './TeamMemberAvatar';

interface TeamMemberPreviewCardProps {
  member: TeamMember;
  ctaKey: 'team.viewBio';
  cardClassName: string;
  bodyClassName: string;
  titleClassName: string;
  credentialsClassName: string;
  roleClassName: string;
  taglineClassName: string;
}

export default function TeamMemberPreviewCard({
  member,
  ctaKey,
}: TeamMemberPreviewCardProps) {
  const { t } = useTranslation();

  const role = t(`teamMembers.${member.slug}.role`);
  const languages = t(`teamMembers.${member.slug}.languages`);
  const title = t(`teamMembers.${member.slug}.title`);
  const tagline = t(`teamMembers.${member.slug}.tagline`);
  const certifications = t(`teamMembers.${member.slug}.certifications`, { returnObjects: true }) as string[];

  const roleLine = `${role}${languages ? ` | ${languages}` : ''}`;
  const nameLine = `${member.name}${title ? `, ${title}` : ''}`;

  return (
    <div className="rounded-2xl md:rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all overflow-hidden h-full flex flex-col">
      <Link to={`/team/${member.slug}`} className="h-full flex flex-col">
        <div className="hidden md:block aspect-4/5 overflow-hidden bg-slate-100">
          <img
            src={member.imageUrl}
            alt={`${member.name}, ${role}`}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
        <div className="p-4 md:p-8 flex flex-col flex-1">
          <div className="flex gap-4 items-start">
            <TeamMemberAvatar
              member={member}
              className="md:hidden w-30 h-30 rounded-2xl shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-slate-500 font-medium text-xs md:text-sm">{roleLine}</p>
              <h2 className="text-lg md:text-2xl font-bold text-slate-900 mb-1">{nameLine}</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">{tagline}</p>
            </div>
          </div>
          {certifications.length > 0 && (
            <div className="mt-3 md:mt-4">
              <p className="text-brand-600 mb-1 font-bold uppercase tracking-widest text-xs md:text-sm">
                {t('teamDetail.certifications')}
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-slate-600 leading-relaxed">
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>
          )}
          <span className="text-brand-600 font-bold text-sm md:text-base mt-auto pt-3 md:pt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
            {t(ctaKey)} <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </div>
  );
}
