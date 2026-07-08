import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { teamMembers } from '../data/team';
import HelmetHelper from '../components/HelmetHelper';
import TeamMemberPreviewCard from '../components/TeamMemberPreviewCard';
import { useEffect } from 'react';

export default function TeamPage() {
  // Instead of loading page, we will just redirect to clark-day
  useEffect(() => {
    window.location.replace('/team/clark-day');
  }, []);

  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-12 pb-24">
      <HelmetHelper title={t('common.ourTeam')} description={t('meta.team')} />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-slate-900"
          >
            {t('team.titleLine1')}{' '}
            <span className="text-gradient-blue-brand">{t('team.titleAccent')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl"
          >
            {t('team.intro')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group h-full"
            >
              <TeamMemberPreviewCard
                member={member}
                ctaKey="team.viewBio"
                cardClassName="rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all overflow-hidden"
                bodyClassName="p-8"
                titleClassName="text-2xl font-bold text-slate-900 mb-1"
                credentialsClassName="text-brand-600 font-semibold text-m"
                roleClassName="text-slate-500 font-medium text-sm mb-3"
                taglineClassName="text-slate-600 leading-relaxed mb-6"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
