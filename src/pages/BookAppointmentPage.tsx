import { useTranslation } from 'react-i18next';
import { Clock, MapPin, Phone, ExternalLink } from 'lucide-react';
import { services } from '../data/services';
import {
  CLINIC_ADDRESS,
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_TEL,
  getGoogleMapsDirectionsUrl,
} from '../data/clinicInfo';
import HelmetHelper from '../components/HelmetHelper';

export default function BookAppointmentPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50">
      <HelmetHelper title={t('common.bookAppointment')} description={t('meta.bookAppointment')} />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1]">
                {t('bookPage.title')}
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">{t('bookPage.intro')}</p>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 p-3 rounded-2xl text-brand-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-xl text-slate-900">{t('clinic.ourLocation')}</p>
                    <a
                      href={getGoogleMapsDirectionsUrl(CLINIC_ADDRESS.mapsQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-brand-600 transition-colors"
                    >
                      <span>{CLINIC_ADDRESS.line1}</span>
                      <br />
                      <span className="inline-flex items-center gap-2">
                        {CLINIC_ADDRESS.line2}
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 p-3 rounded-2xl text-brand-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-xl text-slate-900">{t('clinic.hours')}</p>
                    <p className="text-slate-600">
                      {t('clinic.weekdayLine')}
                      <br />
                      {t('clinic.saturdayLine')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t('bookPage.fullName')}</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t('bookPage.email')}</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('bookPage.phone')}</label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('bookPage.reason')}</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none">
                  <option value="">{t('bookPage.selectService')}</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {t(`serviceItems.${s.slug}.title`)}
                    </option>
                  ))}
                  <option value="other">{t('bookPage.other')}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('bookPage.message')}</label>
                <textarea
                  rows={4}
                  placeholder={t('bookPage.messagePh')}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                />
              </div>
              <button className="w-full bg-brand-cta text-white py-5 rounded-2xl text-lg font-bold shadow-xl transition-all hover:brightness-110 active:brightness-95 active:scale-95">
                {t('bookPage.sendRequest')}
              </button>
              <p className="text-center text-xs text-slate-400">{t('bookPage.legal')}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
