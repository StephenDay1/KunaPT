import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { teamMembers } from '../data/team';

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-slate-900"
          >
            Our <span className="text-gradient-blue-brand">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl"
          >
            Meet the clinicians dedicated to your recovery. Bios below are templates—replace names, photos, and text
            with your staff when ready.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all overflow-hidden group"
            >
              <Link to={`/team/${member.slug}`} className="block">
                <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={member.imageUrl}
                    alt={`${member.name}, ${member.role}`}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h2>
                  <p className="text-brand-600 font-semibold text-m"> {member.credentials}</p>
                  <p className="text-slate-500 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{member.tagline}</p>
                  <span className="text-brand-600 font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View bio <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
