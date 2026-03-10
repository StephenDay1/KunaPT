import { 
  ChevronRight, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Star, 
  HeartPulse,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { services } from '../data/services';

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredServices = services.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-50 rounded-l-[100px] hidden lg:block" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                Trusted by 2,000+ Patients
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1]">
                Restore Your <span className="text-brand-600 italic">Motion</span>, Reclaim Your Life.
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Expert physical therapy tailored to your unique needs. We combine advanced techniques with compassionate care to help you move without pain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-brand-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-200 flex items-center justify-center gap-2 group"
                >
                  Start Your Recovery
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link 
                  to="/services"
                  className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Our Services
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-500 font-medium">4.9/5 from Google Reviews</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/pt-clinic/800/1000" 
                  alt="Physical Therapy Session" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stats Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                    <HeartPulse className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">98%</p>
                    <p className="text-sm text-slate-500 font-medium">Success Rate</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Comprehensive Care for Every Body</h3>
            <p className="text-slate-600 text-lg">We offer a wide range of specialized services to address your specific goals and challenges.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-brand-100 transition-all group"
              >
                <Link to={`/services/${service.slug}`} className="block">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors mb-6">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                  <span className="text-brand-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all shadow-xl"
            >
              View All Services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://picsum.photos/seed/pt-1/400/500" 
                  alt="Clinic" 
                  className="rounded-3xl shadow-lg mt-12"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://picsum.photos/seed/pt-2/400/500" 
                  alt="Therapist" 
                  className="rounded-3xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-600 rounded-full flex items-center justify-center text-white border-8 border-slate-50 shadow-xl">
                <span className="text-2xl font-bold">15+ Yrs</span>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm">About Apex PT</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Your Partner in Long-Term Health and Mobility</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Founded in 2009, Apex Physical Therapy was born out of a desire to provide more than just standard rehabilitation. We believe in a holistic approach that treats the person, not just the injury.
              </p>
              <div className="space-y-4">
                {[
                  "Doctorate-level physical therapists",
                  "One-on-one personalized sessions",
                  "State-of-the-art rehabilitation equipment",
                  "Evidence-based treatment protocols"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-brand-100 p-1 rounded-full text-brand-600">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button className="text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more about our team <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">What Our Patients Say</h3>
              <p className="text-slate-600 text-lg mt-4">
                We've helped thousands of patients reclaim their mobility and live pain-free lives. Read their stories and see why Apex PT is the trusted choice for physical therapy.
              </p>
            </div>
            <Link 
              to="/testimonials"
              className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-700 transition-all shadow-xl"
            >
              Read All Reviews
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                text: "The team at Apex helped me get back to running after a serious knee injury. Their personalized approach made all the difference.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                text: "Professional, knowledgeable, and genuinely caring. I've been to several clinics, but the results here were far superior.",
                rating: 5,
              },
              {
                name: "Elena Rodriguez",
                text: "After my shoulder surgery, I was worried about my range of motion. Thanks to their post-op care, I'm back to 100%.",
                rating: 5,
              },
            ].map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative group hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="flex text-amber-400 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-bold text-slate-900">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-bold text-slate-900">4.9/5 Rating</span>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <a 
              href="https://google.com/search?q=Apex+Physical+Therapy+Reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors font-medium"
            >
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4" />
              Verified Google Reviews
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-400 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-brand-400 font-bold uppercase tracking-widest text-sm">Get In Touch</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight">Ready to Start Your Journey?</h3>
              <p className="text-slate-400 text-lg">
                Contact us today to schedule your initial evaluation. Our team is ready to help you find the path to recovery.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl text-brand-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Our Location</p>
                    <p className="text-slate-400">123 Wellness Way, Suite 200<br />Healthville, ST 54321</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl text-brand-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Call Us</p>
                    <p className="text-slate-400">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl text-brand-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-xl">Hours</p>
                    <p className="text-slate-400">Mon-Fri: 7:00 AM - 7:00 PM<br />Sat: 8:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl">
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
                      {services.map(s => (
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
                  <button className="w-full bg-brand-600 text-white py-5 rounded-2xl text-lg font-bold shadow-xl hover:bg-brand-700 transition-all active:scale-95">
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
      </section>
    </div>
  );
}
