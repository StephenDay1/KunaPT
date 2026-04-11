import { Clock, MapPin, Phone, ExternalLink } from 'lucide-react';
import { services } from '../data/services';
import {
  CLINIC_ADDRESS,
  CLINIC_HOURS,
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_TEL,
  getGoogleMapsDirectionsUrl,
} from '../data/clinicInfo';
import HelmetHelper from '../components/CanonicalHelper';
import { pageInfo } from '../data/pageInfo';

export default function BookAppointmentPage() {
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Reason for Visit</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none">
                  <option>Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug}>{s.title}</option>
                  ))}
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Tell us a bit about your condition..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-brand-cta text-white py-5 rounded-2xl text-lg font-bold shadow-xl transition-all hover:brightness-110 active:brightness-95 active:scale-95">
                Send Request
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

