import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';
import { services } from '../data/services';
import HelmetHelper from '../components/HelmetHelper';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const benefits = t(`serviceItems.${service.slug}.benefits`, { returnObjects: true }) as string[];
  const treatments = t(`serviceItems.${service.slug}.treatments`, { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <HelmetHelper
        title={t(`serviceItems.${service.slug}.title`)}
        description={t(`serviceItems.${service.slug}.description`)}
      />
      <div className="container mx-auto px-6">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 font-medium mb-12 transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          {t('serviceDetail.backToServices')}
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="w-20 h-20 bg-brand-100 rounded-3xl flex items-center justify-center text-brand-600">
                {service.icon}
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900">
                {t(`serviceItems.${service.slug}.title`)}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t(`serviceItems.${service.slug}.longDescription`)}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  {t('serviceDetail.keyBenefits')}
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  {t('serviceDetail.ourApproach')}
                </h3>
                <ul className="space-y-4">
                  {treatments.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0 text-xs font-bold">
                        {i + 1}
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <Link
                to="/book-appointment"
                className="w-full bg-brand-cta text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:brightness-110 active:brightness-95 group"
              >
                {t('common.bookAppointment')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="bg-white border border-slate-100 p-8 rounded-[40px] shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-6">{t('serviceDetail.otherServices')}</h4>
                <div className="space-y-4">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 5)
                    .map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group"
                      >
                        <span className="font-medium text-slate-700 group-hover:text-brand-600">
                          {t(`serviceItems.${s.slug}.title`)}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-600" />
                      </Link>
                    ))}
                </div>
                <Link
                  to="/services"
                  className="block text-center mt-6 text-brand-600 font-bold text-sm hover:underline"
                >
                  {t('serviceDetail.viewAllServices')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
