import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { services } from '../data/services';
import HelmetHelper from '../components/HelmetHelper';
import ServicePreviewCard from '../components/ServicePreviewCard';

export default function ServicesPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-32 pb-24">
      <HelmetHelper title={t('common.services')} description={t('meta.services')} />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-slate-900"
          >
            {t('servicesPage.titleLine1')}{' '}
            <span className="text-gradient-blue-brand">{t('servicesPage.titleAccent')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl"
          >
            {t('servicesPage.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group h-full"
            >
              <ServicePreviewCard
                service={service}
                ctaKey="common.viewDetails"
                cardClassName="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all"
                iconClassName="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors"
                titleClassName="text-2xl font-bold text-slate-900 mb-3"
                descriptionClassName="text-slate-600 leading-relaxed mb-6"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
