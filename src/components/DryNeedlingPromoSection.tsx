import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { bookAppointmentPath } from '../utils/bookAppointment';

export default function DryNeedlingPromoSection() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-20"
      aria-label={t('serviceDetail.dryNeedlingPromo.ariaLabel')}
    >
      <div className="mx-auto max-w-lg overflow-hidden rounded-[40px] border border-slate-100 bg-white shadow-sm">
        <img
          src="/services/dry-needling-promo.png"
          alt={t('serviceDetail.dryNeedlingPromo.alt')}
          className="block h-auto w-full"
          loading="lazy"
        />
        <div className="md:block hidden border-t border-slate-100 p-6">
          <Link
            to={bookAppointmentPath('dry-needling')}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-cta py-4 font-bold text-white transition-all hover:brightness-110 active:brightness-95 group"
          >
            {t('serviceDetail.dryNeedlingPromo.button')}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
