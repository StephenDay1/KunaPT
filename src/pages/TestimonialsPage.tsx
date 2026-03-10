import { useState, FormEvent, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, MessageSquare, Send, ExternalLink, CheckCircle2, ChevronDown } from 'lucide-react';
import { services } from '../data/services';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  date: string;
  service?: string;
}

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "The team at Apex helped me get back to running after a serious knee injury. Their personalized approach made all the difference. I felt supported every step of the way.",
    rating: 5,
    date: "2 weeks ago",
    service: "Sports Rehab"
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "Professional, knowledgeable, and genuinely caring. I've been to several clinics, but the results here were far superior. The dry needling was a game changer for my chronic back pain.",
    rating: 5,
    date: "1 month ago",
    service: "Dry Needling"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    text: "After my shoulder surgery, I was worried about my range of motion. Thanks to their post-op care, I'm back to 100%. Highly recommend Apex PT!",
    rating: 5,
    date: "2 months ago",
    service: "Post-Surgical Rehab"
  },
  {
    id: 4,
    name: "David Thompson",
    text: "I suffered from chronic tension headaches for years. The cervical therapy I received here has significantly reduced my pain frequency. I can finally focus at work again.",
    rating: 5,
    date: "3 months ago",
    service: "Headaches"
  },
  {
    id: 5,
    name: "Linda Wu",
    text: "The pediatric therapists are amazing with children. They made my son's recovery feel like play, and he's made incredible progress with his motor skills.",
    rating: 5,
    date: "4 months ago",
    service: "Pediatric PT"
  },
  {
    id: 6,
    name: "James Wilson",
    text: "Excellent facility and even better staff. They really take the time to explain the 'why' behind every exercise. My balance has improved tremendously.",
    rating: 5,
    date: "5 months ago",
    service: "Balance and Gait"
  }
];

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    text: '',
    service: ''
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would be an API call
    const testimonial: Testimonial = {
      id: Date.now(),
      ...newReview,
      date: "Just now"
    };
    
    // For demo purposes, we'll just show a success message
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setNewReview({ name: '', rating: 5, text: '', service: '' });
    }, 5000);
  };

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wider"
          >
            <Star className="w-4 h-4 fill-current" />
            Patient Success Stories
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-slate-900"
          >
            Real Stories, Real <span className="text-brand-600 italic">Results</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            We take pride in helping our patients return to the activities they love. 
            Read about their journeys and share your own experience with us.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="pt-8"
          >
            <a 
              href="https://google.com/search?q=Apex+Physical+Therapy+Reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-50 hover:border-brand-200 transition-all group"
            >
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-5" />
              Leave a Review on Google
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Testimonials Grid */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i % 2 * 0.1 }}
                  className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all relative group"
                >
                  <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-50 group-hover:text-brand-50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex text-amber-400 mb-4">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 italic mb-6 leading-relaxed text-lg">"{t.text}"</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-lg">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{t.name}</p>
                          <p className="text-xs text-slate-400 font-medium">{t.date}</p>
                        </div>
                      </div>
                      {t.service && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-500 rounded-md">
                          {t.service}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Review Form Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="bg-slate-900 rounded-[40px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-brand-500 p-2 rounded-xl">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Share Your Story</h2>
                  </div>
                  
                  <p className="text-slate-400">
                    How was your experience at Apex PT? Your feedback helps us improve and helps others find the right care.
                  </p>

                  {formSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-emerald-500/20 border border-emerald-500/30 p-6 rounded-2xl text-center space-y-3"
                    >
                      <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                      <h3 className="text-xl font-bold text-white">Thank You!</h3>
                      <p className="text-emerald-100 text-sm">Your review has been submitted for moderation and will appear soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Name</label>
                        <input 
                          required
                          type="text" 
                          value={newReview.name}
                          onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                          placeholder="Full Name"
                          className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Rating</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setNewReview({...newReview, rating: star})}
                              className="focus:outline-none transition-transform active:scale-90"
                            >
                              <Star className={`w-6 h-6 ${star <= newReview.rating ? 'text-amber-400 fill-current' : 'text-slate-600'}`} />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Service Received</label>
                        <div className="relative" ref={dropdownRef}>
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all flex items-center justify-between group"
                          >
                            <span className={newReview.service ? 'text-white' : 'text-slate-500'}>
                              {newReview.service || 'Select a service'}
                            </span>
                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>

                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute z-50 w-full mt-2 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
                              >
                                <div className="max-h-60 overflow-y-auto py-2 custom-scrollbar">
                                  {services.map((service) => (
                                    <button
                                      key={service.slug}
                                      type="button"
                                      onClick={() => {
                                        setNewReview({...newReview, service: service.title});
                                        setIsDropdownOpen(false);
                                      }}
                                      className={`w-full px-5 py-3 text-left hover:bg-white/5 transition-colors flex items-center justify-between ${newReview.service === service.title ? 'text-brand-400 bg-white/5' : 'text-slate-300'}`}
                                    >
                                      <span>{service.title}</span>
                                      {newReview.service === service.title && <CheckCircle2 className="w-4 h-4" />}
                                    </button>
                                  ))}
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setNewReview({...newReview, service: 'General Wellness'});
                                      setIsDropdownOpen(false);
                                    }}
                                    className={`w-full px-5 py-3 text-left hover:bg-white/5 transition-colors flex items-center justify-between ${newReview.service === 'General Wellness' ? 'text-brand-400 bg-white/5' : 'text-slate-300'}`}
                                  >
                                    <span>General Wellness / Other</span>
                                    {newReview.service === 'General Wellness' && <CheckCircle2 className="w-4 h-4" />}
                                  </button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Experience</label>
                        <textarea 
                          required
                          rows={4}
                          value={newReview.text}
                          onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                          placeholder="Tell us about your recovery journey..."
                          className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none"
                        ></textarea>
                      </div>

                      <button className="w-full bg-brand-600 text-white py-4 rounded-2xl font-bold shadow-xl hover:bg-brand-700 transition-all flex items-center justify-center gap-2 group">
                        Submit Review
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
