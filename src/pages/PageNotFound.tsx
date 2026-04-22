import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function PageNotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl mb-10 md:text-7xl font-serif font-bold text-slate-900 text-center leading-[1.1]">
        {t('notFound.title')}
      </h1>
      <p className="text-lg text-slate-600 max-w-lg text-center leading-relaxed mb-8">
        {t('notFound.body')}
      </p>
      <Link
        to="/"
        className="bg-brand-cta text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-brand-200 hover:brightness-110 active:brightness-95 flex items-center justify-center gap-2 group"
      >
        {t('notFound.home')}
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
