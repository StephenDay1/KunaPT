import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { services } from '../data/services';
import HelmetHelper from '../components/HelmetHelper';
import ClinicInfoCards from '../components/ClinicInfoCards';

interface AppointmentFormValues {
  fullName: string;
  email: string;
  phone: string;
  reasonForVisit: string;
  message: string;
  website: string;
}

const initialValues: AppointmentFormValues = {
  fullName: '',
  email: '',
  phone: '',
  reasonForVisit: '',
  message: '',
  website: '',
};

/** Formats typed/pasted digits as (123) 456-7890; stores that string in form state for display. */
function formatUSPhoneInput(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  const len = digits.length;
  if (len === 0) return '';
  if (len <= 3) return len < 3 ? `(${digits}` : `(${digits})`;
  if (len <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

/** Places the caret after the nth digit in a formatted phone string. */
function phoneCaretFromDigitsIndex(formatted: string, digitsBeforeCaret: number): number {
  if (digitsBeforeCaret <= 0) return 0;
  let seenDigits = 0;
  for (let i = 0; i < formatted.length; i += 1) {
    if (/\d/.test(formatted[i])) {
      seenDigits += 1;
      if (seenDigits === digitsBeforeCaret) return i + 1;
    }
  }
  return formatted.length;
}

/**
 * When Backspace would delete only the ")" at the end of a lone "(XXX)" (nothing after),
 * erase the ")" and the last area-code digit together so editing feels natural.
 */
function phoneAfterBackspaceEraseClosingParen(value: string, selectionStart: number, selectionEnd: number): string | null {
  if (selectionStart !== selectionEnd || selectionStart === 0) return null;
  const deleteIndex = selectionStart - 1;
  if (value[deleteIndex] !== ')') return null;
  if (value.slice(deleteIndex + 1).length > 0) return null;
  const beforeParen = value.slice(0, deleteIndex);
  const m = beforeParen.match(/^\((\d{3})$/);
  if (!m) return null;
  return formatUSPhoneInput(m[1].slice(0, -1));
}

function reasonForVisitFromQuery(from: string | null): string {
  if (!from) return '';
  return services.some((s) => s.slug === from) ? from : '';
}

export default function BookAppointmentPage() {
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState<AppointmentFormValues>(() => ({
    ...initialValues,
    reasonForVisit: reasonForVisitFromQuery(searchParams.get('from')),
  }));
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const pendingPhoneCaretRef = useRef<number | null>(null);

  const bookingApiUrl = import.meta.env.VITE_BOOKING_API_URL ?? '/api/book-appointment';

  const handleChange = (field: keyof AppointmentFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (pendingPhoneCaretRef.current === null || !phoneInputRef.current) return;
    const caret = pendingPhoneCaretRef.current;
    phoneInputRef.current.setSelectionRange(caret, caret);
    pendingPhoneCaretRef.current = null;
  }, [values.phone]);

  const handlePhoneChange = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const selectionStart = input.selectionStart ?? input.value.length;
    const digitsBeforeCaret = input.value.slice(0, selectionStart).replace(/\D/g, '').length;
    const formatted = formatUSPhoneInput(input.value);
    pendingPhoneCaretRef.current = phoneCaretFromDigitsIndex(formatted, digitsBeforeCaret);
    handleChange('phone', formatted);
  };

  const handlePhoneKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Backspace') return;
    const input = event.currentTarget;
    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    const next = phoneAfterBackspaceEraseClosingParen(values.phone, start, end);
    if (next === null) return;
    event.preventDefault();
    handleChange('phone', next);
    const caret = next.length;
    setTimeout(() => {
      input.focus();
      input.setSelectionRange(caret, caret);
    }, 0);
  };

  const validate = () => {
    if (!values.fullName.trim() || !values.email.trim() || !values.phone.trim() || !values.reasonForVisit.trim()) {
      return 'Please complete all required fields.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email.trim())) {
      return 'Please use a valid email address.';
    }

    return '';
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting || isSuccess) {
      return;
    }
    setErrorMessage('');

    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(bookingApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || 'Unable to submit request right now. Please try again.');
      }

      setValues(initialValues);
      setIsSuccess(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to submit request right now. Please try again.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };
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

            <ClinicInfoCards className="space-y-6" />
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden"
                value={values.website}
                onChange={(event) => handleChange('website', event.target.value)}
                name="website"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t('bookPage.fullName')}</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={values.fullName}
                    onChange={(event) => handleChange('fullName', event.target.value)}
                    autoComplete="name"
                    required
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t('bookPage.email')}</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={values.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    autoComplete="email"
                    required
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('bookPage.phone')}</label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  ref={phoneInputRef}
                  value={values.phone}
                  onChange={handlePhoneChange}
                  onKeyDown={handlePhoneKeyDown}
                  autoComplete="tel"
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">{t('bookPage.reason')}</label>
                <select
                  value={values.reasonForVisit}
                  onChange={(event) => handleChange('reasonForVisit', event.target.value)}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none"
                >
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
                  value={values.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                />
              </div>
              {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}
              {/* {isSuccess ? (
                <p className="text-sm text-emerald-700">
                  {t('bookPage.success')}
                </p>
              ) : null} */}
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full bg-brand-cta text-white py-5 rounded-2xl text-lg font-bold shadow-xl transition-all hover:brightness-110 active:brightness-95 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSuccess ? t('bookPage.success') : isSubmitting ? t('bookPage.sending') : t('bookPage.sendRequest')}
              </button>
              <p className="text-center text-xs text-slate-400">{t('bookPage.legal')}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
