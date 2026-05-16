import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { TeamMember } from '../data/team';

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

  // const credentials = t(`teamMembers.${member.slug}.credentialsPreview`, { returnObjects: true }) as string[];
  const credentials = t(`teamMembers.${member.slug}.credentials`, { returnObjects: true }) as string[];
  const certifications = t(`teamMembers.${member.slug}.certifications`, { returnObjects: true }) as string[];
  return (
    <div className={`rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all overflow-hidden h-full flex flex-col`}>
      <Link to={`/team/${member.slug}`} className="block h-full flex flex-col">
        <div className="aspect-[4/5] overflow-hidden bg-slate-100">
          <img
            src={member.imageUrl}
            alt={`${member.name}, ${t(`teamMembers.${member.slug}.role`)}`}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
        <div className={`p-8 flex flex-col flex-1`}>
          <p className={`text-slate-500 font-medium text-sm`}>{t(`teamMembers.${member.slug}.role`)} {t(`teamMembers.${member.slug}.languages`) ? `| ${t(`teamMembers.${member.slug}.languages`)}` : ''}</p>
          <h2 className={`text-2xl font-bold text-slate-900 mb-1`}>{member.name}</h2>
          <p className="text-slate-600 leading-relaxed mb-3">{t(`teamMembers.${member.slug}.tagline`)}</p>
          {certifications.length > 0 && (
            <>
            <p className="text-brand-600 mb-0 font-bold uppercase tracking-widest text-sm">{t('teamDetail.certifications')}</p>
            <ul className="list-disc list-inside text-m text-slate-600 leading-relaxed mb-0">
              {certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
            </>
          )}
          <span className="text-brand-600 font-bold mt-auto pt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
            {t(ctaKey)} <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </div>
  );
}
