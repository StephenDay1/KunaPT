import { Link } from 'react-router';
import Logo from './Logo';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link
            to="/"
            className="flex shrink-0 items-center outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            aria-label="Kuna Physical Therapy home"
          >
            <Logo className="block h-11 w-auto object-contain object-left sm:h-20" />
          </Link>

          {/* <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'HIPAA Notice'].map((item) => (
              <a key={item} href="#" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">{item}</a>
            ))}
          </div> */}

            
          <div className="flex flex-col items-center cursor-pointer group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            {/* Up arrow */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1 text-slate-500 group-hover:text-brand-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg> */}
            <ChevronUp className="w-5 h-5 mb-1 text-slate-500 group-hover:text-brand-600 group-hover:-translate-y-1 transition-all" />
            <p className="text-sm text-slate-500 group-hover:text-brand-600 transition-colors">To Top</p>
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Kuna Physical Therapy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
