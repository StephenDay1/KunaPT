import { Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-1 rounded-md">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">APEX<span className="text-brand-600">PT</span></span>
          </div>
          
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'HIPAA Notice'].map((item) => (
              <a key={item} href="#" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">{item}</a>
            ))}
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Apex Physical Therapy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
