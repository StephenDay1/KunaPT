import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Service } from '../types';

interface ServicePreviewCardProps {
  service: Service;
  ctaKey: 'common.learnMore' | 'common.viewDetails';
  cardClassName: string;
  iconClassName: string;
  titleClassName: string;
  descriptionClassName: string;
}

export default function ServicePreviewCard({
  service,
  ctaKey,
  cardClassName,
  iconClassName,
  titleClassName,
  descriptionClassName,
}: ServicePreviewCardProps) {
  const { t } = useTranslation();

  return (
    <div className={`${cardClassName} h-full flex flex-col`}>
      <Link to={`/services/${service.slug}`} className="block h-full flex flex-col">
        <div className="overflow-hidden rounded-2xl mb-6 border border-slate-100">
          <img
            src={service.imgUrl}
            alt={t(`serviceItems.${service.slug}.title`)}
            className="w-full h-44 object-cover"
            loading="lazy"
          />
        </div>
        {/* <div className={iconClassName}>{service.icon}</div> */}
        <h2 className={titleClassName}>{t(`serviceItems.${service.slug}.title`)}</h2>
        <p className={`${descriptionClassName} flex-1`}>{t(`serviceItems.${service.slug}.description`)}</p>
        <span className="text-brand-600 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
          {t(ctaKey)} <ChevronRight className="w-4 h-4" />
        </span>
      </Link>
    </div>
  );
}
