import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '../data/services';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Close dropdowns on location change
  useEffect(() => {
    setIsServicesDropdownOpen(false);
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const handleLinkClick = (path: string) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = path;
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 md:h-[4.75rem] items-stretch bg-white">
      <Link
        to="/"
        className="flex h-full max-h-full shrink-0 cursor-pointer items-end overflow-hidden bg-white leading-none outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
        aria-label="Kuna Physical Therapy home"
      >
        <Logo className="block max-h-full w-auto object-contain object-left object-bottom" />
      </Link>

      <div className="flex min-w-0 flex-1 items-center justify-end gap-3 pl-2 pr-4 md:gap-8 md:pr-6">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Home</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${location.pathname.startsWith('/services') ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'}`}
              onClick={() => window.location.href = '/services'}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-2"
                >
                  <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
                    <Link 
                      to="/services" 
                      className="block px-6 py-3 text-sm font-bold text-brand-600 hover:bg-brand-50 transition-colors border-b border-slate-50"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link 
                        key={service.slug} 
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-3 px-6 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-600 transition-colors"
                      >
                        <span className="text-brand-400">{service.icon}</span>
                        <span className="truncate">{service.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.filter(l => l.name !== 'Home').map((link) => (
            link.path.startsWith('/#') ? (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link.path)}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </button>
            ) : (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          <Link 
            to="/book-appointment"
            className="bg-brand-cta text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:brightness-110 active:brightness-95 active:scale-95"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden shrink-0 p-2 -mr-2 text-slate-900 hover:text-brand-600 transition-colors relative z-50"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white pt-16 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-slate-800 py-2">Home</Link>
              
              {/* Mobile Services Accordion */}
              <div>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-2xl font-semibold text-slate-800 py-2"
                >
                  Services
                  <ChevronDown className={`w-6 h-6 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-3 mt-2"
                    >
                      <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-brand-600 py-1">View All Services</Link>
                      {services.map((service) => (
                        <Link 
                          key={service.slug} 
                          to={`/services/${service.slug}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-lg text-slate-600 py-1"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.filter(l => l.name !== 'Home').map((link) => (
                link.path.startsWith('/#') ? (
                  <button 
                    key={link.name} 
                    onClick={() => handleLinkClick(link.path)}
                    className="text-2xl font-semibold text-slate-800 py-2 text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-semibold text-slate-800 py-2"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link 
                to="/book-appointment"
                className="bg-brand-cta text-white py-4 rounded-2xl text-lg font-bold shadow-lg text-center mt-4 transition-all hover:brightness-110 active:brightness-95"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
