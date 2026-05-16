import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { teamMembers, getTeamMemberBySlug } from '../data/team';
import HelmetHelper from '../components/HelmetHelper';

export default function TeamMemberDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const member = getTeamMemberBySlug(slug);
  const others = teamMembers.filter((m) => m.slug !== slug);

  if (!member) {
    return <Navigate to="/team" replace />;
  }

  const bio = t(`teamMembers.${member.slug}.bio`, { returnObjects: true }) as string[];
  const credentials = t(`teamMembers.${member.slug}.credentials`, { returnObjects: true }) as string[];
  const certifications = t(`teamMembers.${member.slug}.certifications`, { returnObjects: true }) as string[];
  const languages = t(`teamMembers.${member.slug}.languages`, { returnObjects: true }) as string[];
  const firstName = member.name.split(' ')[0] ?? member.name;
  const metaDescription = t(`teamMembers.${member.slug}.tagline`);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <HelmetHelper title={member.name} description={metaDescription} />
      <div className="container mx-auto px-6">
        {/* TODO: Add back in when we have more team members */}
        {false && <Link
          to="/team"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 font-medium mb-12 transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          {t('teamDetail.back')}
        </Link>}

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-2/5 shrink-0"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src={member.imageUrl}
                alt={`${member.name}, ${t(`teamMembers.${member.slug}.role`)}`}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <div className="lg:flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="space-y-4"
            >
              <p className="text-brand-600 font-bold uppercase tracking-widest text-sm">
                {t(`teamMembers.${member.slug}.role`)}
              </p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900">{member.name}</h1>
              {credentials.map((credential) => (
                <p key={credential} className="mb-0 text-m text-slate-600">
                  {credential}
                </p>
              ))}
              {languages && (
                <p className="mb-0 text-m text-slate-600">
                  {languages}
                </p>
              )}
              {certifications.length > 0 && (
                <>
                <p className="text-brand-600 mt-3 mb-0 font-bold uppercase tracking-widest text-sm">{t('teamDetail.certifications')}</p>
                <ul className="list-disc list-inside text-m text-slate-600 leading-relaxed mb-0">
                  {certifications.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
                </>
              )}
            </motion.div>

            {t(`teamMembers.${member.slug}.bookeable`) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center gap-2 bg-brand-cta text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:brightness-110 active:brightness-95 group"
                >
                  {t('teamDetail.bookWith', { name: firstName })}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-lg text-slate-600 leading-relaxed"
            >
              {bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-24 pt-16 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{t('teamDetail.otherMembers')}</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              {others.map((m) => (
                <Link
                  key={m.slug}
                  to={`/team/${m.slug}`}
                  className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 hover:border-brand-100 transition-colors group"
                >
                  <span className="font-medium text-slate-700 group-hover:text-brand-600">
                    {m.name} <br /> {t(`teamMembers.${m.slug}.credentials`)}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-600 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
