import { Link } from 'react-router';
import Logo from './Logo';

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
            <Logo className="block h-11 w-auto object-contain object-left sm:h-12" />
          </Link>

          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'HIPAA Notice'].map((item) => (
              <a key={item} href="#" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">{item}</a>
            ))}
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Kuna Physical Therapy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
