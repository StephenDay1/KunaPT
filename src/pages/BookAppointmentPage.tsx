import { FormEvent, useState } from 'react';
import { Clock, MapPin, Phone, ExternalLink } from 'lucide-react';
import { services } from '../data/services';
import {
  CLINIC_ADDRESS,
  CLINIC_HOURS,
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_TEL,
  getGoogleMapsDirectionsUrl,
} from '../data/clinicInfo';
import HelmetHelper from '../components/HelmetHelper';
import { pageInfo } from '../data/pageInfo';

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

export default function BookAppointmentPage() {
  const [values, setValues] = useState<AppointmentFormValues>(initialValues);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const bookingApiUrl = import.meta.env.VITE_BOOKING_API_URL ?? '/api/book-appointment';

  const handleChange = (field: keyof AppointmentFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
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
    setIsSuccess(false);
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

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50">
      <HelmetHelper 
        title = { pageInfo.bookAppointment.title }
        description = { pageInfo.bookAppointment.description }
      />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1]">
                Book an Appointment
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Request an initial evaluation and our team will contact you to confirm the best time for your visit.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 p-3 rounded-2xl text-brand-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-xl text-slate-900">Our Location</p>
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
                    <p className="font-bold text-xl text-slate-900">Hours</p>
                    <p className="text-slate-600">
                      {CLINIC_HOURS.weekdayLabel}: {CLINIC_HOURS.weekdayHours}
                      <br />
                      {CLINIC_HOURS.saturdayLabel}: {CLINIC_HOURS.saturdayHours}
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
                    <p className="font-bold text-xl text-slate-900">Call Us</p>
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
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
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
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
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
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={values.phone}
                  onChange={(event) => handleChange('phone', event.target.value)}
                  autoComplete="tel"
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Reason for Visit</label>
                <select
                  value={values.reasonForVisit}
                  onChange={(event) => handleChange('reasonForVisit', event.target.value)}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Tell us a bit about your condition..."
                  value={values.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}
              {isSuccess ? (
                <p className="text-sm text-emerald-700">
                  Thank you. Your request has been sent and our team will contact you shortly.
                </p>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-cta text-white py-5 rounded-2xl text-lg font-bold shadow-xl transition-all hover:brightness-110 active:brightness-95 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Request'}
              </button>
              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to our privacy policy. We'll contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

