import { useState, useEffect } from 'react';
import { Activity, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '../data/services';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on location change
  useEffect(() => {
    setIsServicesDropdownOpen(false);
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/#contact' },
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' || isMenuOpen ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="bg-brand-600 p-1.5 rounded-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">KUNA<span className="text-brand-600">PT</span></span>
        </Link>

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
            to="/#contact"
            onClick={() => handleLinkClick('/#contact')}
            className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-slate-900 hover:text-brand-600 transition-colors relative z-50" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden overflow-y-auto"
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
                to="/#contact"
                onClick={() => handleLinkClick('/#contact')}
                className="bg-brand-600 text-white py-4 rounded-2xl text-lg font-bold shadow-lg text-center mt-4"
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
