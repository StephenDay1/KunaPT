import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  CLINIC_ADDRESS,
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_TEL,
  CLINIC_FAX_NUMBER,
} from '../data/clinicInfo';
import { useMapsLinks } from '../utils/useMapsLinks';

interface ClinicInfoCardsProps {
  className?: string;
  /**
   * Extra class(es) appended to each card (e.g. `flex-1` on the home page).
   * Useful because the surrounding layout differs between pages.
   */
  cardClassName?: string;
}

export default function ClinicInfoCards({ className = '', cardClassName = '' }: ClinicInfoCardsProps) {
  const { t } = useTranslation();
  const cardClass = `p-8 rounded-3xl bg-white border border-slate-100 shadow-sm${cardClassName ? ` ${cardClassName}` : ''}`;
  const { directionsUrl } = useMapsLinks();

  return (
    <div className={className}>
      <div className={cardClass}>
        <div className="flex items-center gap-4 h-full">
          <div className="bg-brand-100 p-3 rounded-2xl text-brand-600">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="font-bold text-xl text-slate-900">{t('clinic.ourLocation')}</p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-brand-600 transition-colors"
            >
              <span>{CLINIC_ADDRESS.line1}</span>
              <br/>
              <span className="inline-flex items-center gap-2">
                {CLINIC_ADDRESS.line2}
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className={cardClass}>
        <div className="flex items-center gap-4 h-full">
          <div className="bg-brand-100 p-3 rounded-2xl text-brand-600">
            <Clock className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="font-bold text-xl text-slate-900">{t('clinic.hours')}</p>
            <p className="text-slate-600">
              {t('clinic.lineOne')}
              <br />
              {t('clinic.lineTwo')}
            </p>
          </div>
        </div>
      </div>

      <div className={cardClass}>
        <div className="flex items-center gap-4 h-full">
          <div className="bg-brand-100 p-3 rounded-2xl text-brand-600">
            <Phone className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="font-bold text-xl text-slate-900">{t('clinic.callUs')}</p>
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="text-slate-600 hover:text-brand-600 transition-colors font-medium"
            >
              {CLINIC_PHONE_DISPLAY}
            </a>
            <p className="text-slate-600">Fax: {CLINIC_FAX_NUMBER}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

