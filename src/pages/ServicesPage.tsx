import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { services } from '../data/services';
import HelmetHelper from '../components/HelmetHelper';
import { pageInfo } from '../data/pageInfo';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <HelmetHelper 
        title = { pageInfo.services.title }
        description = { pageInfo.services.description }
      />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-slate-900"
          >
            Our Specialized <span className="text-gradient-blue-brand">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl"
          >
            From elite athletes to geriatric wellness, we provide expert care for every stage of life and every type of injury.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all group"
            >
              <Link to={`/services/${service.slug}`} className="block">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <span className="text-brand-600 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
