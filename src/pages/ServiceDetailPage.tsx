import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronLeft, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';
import { services } from '../data/services';
import HelmetHelper from '../components/CanonicalHelper';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <HelmetHelper 
        title = { service.title } 
        description = { service.description }
      />
      <div className="container mx-auto px-6">
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 font-medium mb-12 transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to all services
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
                {service.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {service.longDescription}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
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
                <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">Our Approach</h3>
                <ul className="space-y-4">
                  {service.treatments.map((treatment, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 shrink-0 text-xs font-bold">
                        {i + 1}
                      </div>
                      <span className="text-slate-700 font-medium">{treatment}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              {/* <div className="bg-slate-900 text-white p-8 rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full -mr-16 -mt-16 blur-3xl" />
                <h4 className="text-2xl font-bold mb-4 relative z-10">Schedule an Evaluation</h4> */}
                <Link 
                  to="/book-appointment"
                  className="w-full bg-brand-cta text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:brightness-110 active:brightness-95 group"
                >
                  Book Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              {/* </div> */}

              <div className="bg-white border border-slate-100 p-8 rounded-[40px] shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Other Services</h4>
                <div className="space-y-4">
                  {services
                    .filter(s => s.slug !== service.slug)
                    .slice(0, 5)
                    .map(s => (
                      <Link 
                        key={s.slug} 
                        to={`/services/${s.slug}`}
                        className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group"
                      >
                        <span className="font-medium text-slate-700 group-hover:text-brand-600">{s.title}</span>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-600" />
                      </Link>
                    ))}
                </div>
                <Link 
                  to="/services" 
                  className="block text-center mt-6 text-brand-600 font-bold text-sm hover:underline"
                >
                  View all services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
