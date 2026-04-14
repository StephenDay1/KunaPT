import { ChevronRight } from "lucide-react";
import { Link } from 'react-router';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl mb-10 md:text-7xl font-serif font-bold text-slate-900 text-center leading-[1.1]">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-slate-600 max-w-lg text-center leading-relaxed mb-8">
            Oops! We're not sure how you got here, but this page doesn't exist.  Sorry!
        </p>
        <Link
            to="/"
            className="bg-brand-cta text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-brand-200 hover:brightness-110 active:brightness-95 flex items-center justify-center gap-2 group"
        >
            Home Page
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
    </div>
  );
}