import { useState, useMemo, useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HelmetHelper from '../components/HelmetHelper';
import { CLINIC_PHONE_DISPLAY } from '../data/clinicInfo';
import { scrollElementBelowFixedNav } from '../utils/scrollBelowNav';

type FaqItem = { slug: string; question: string; answer: string };

function injectPhone(answer: string) {
  return answer.replace(/\{\{phone\}\}/g, CLINIC_PHONE_DISPLAY);
}

export default function FAQPage() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prevHashRef = useRef<string | null>(null);
  const pendingHashScrollRef = useRef(false);

  const items = useMemo(() => {
    const raw = t('faqPage.items', { returnObjects: true });
    if (!Array.isArray(raw)) return [];
    return raw as FaqItem[];
  }, [t, i18n.language]);

  useLayoutEffect(() => {
    if (!items.length) return;
    const rawHash = location.hash;
    const slug = rawHash.slice(1);
    const prev = prevHashRef.current;

    if (slug) {
      const idx = items.findIndex((i) => i.slug === slug);
      setOpenIndex(idx >= 0 ? idx : 0);
      pendingHashScrollRef.current = true;
    } else {
      pendingHashScrollRef.current = false;
      if (prev !== null && prev !== '') {
        setOpenIndex(null);
      } else if (prev === null) {
        setOpenIndex(0);
      }
    }
    prevHashRef.current = rawHash;
  }, [items, location.hash]);

  useEffect(() => {
    const slug = location.hash.slice(1);
    if (!pendingHashScrollRef.current || !slug || openIndex === null) return;

    const activeItem = items[openIndex];
    if (!activeItem || activeItem.slug !== slug) return;

    // Scroll once after accordion transitions settle; avoids overshoot corrections.
    const timeoutId = window.setTimeout(() => {
      const element = document.getElementById(slug);
      if (element) scrollElementBelowFixedNav(element, 'smooth');
      pendingHashScrollRef.current = false;
    }, 260);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [items, location.hash, openIndex]);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50">
      <HelmetHelper title={t('common.faq')} description={t('meta.faq')} />
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-14 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-slate-900"
          >
            {t('faqPage.titleLine1')}{' '}
            <span className="text-gradient-blue-brand">{t('faqPage.titleAccent')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-slate-600 text-lg md:text-xl leading-relaxed"
          >
            {t('faqPage.subtitle')}
          </motion.p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answer = injectPhone(item.answer);

            return (
              <motion.div
                key={item.slug}
                id={item.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  id={`faq-trigger-${item.slug}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.slug}`}
                  onClick={() => {
                    if (isOpen) {
                      pendingHashScrollRef.current = false;
                      setOpenIndex(null);
                      navigate(
                        { pathname: location.pathname, search: location.search, hash: '' },
                        { replace: true }
                      );
                    } else {
                      pendingHashScrollRef.current = true;
                      setOpenIndex(index);
                      navigate(
                        {
                          pathname: location.pathname,
                          search: location.search,
                          hash: item.slug,
                        },
                        { replace: true }
                      );
                    }
                  }}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-slate-900 hover:bg-slate-50/80 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${item.slug}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.slug}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed">
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-12 text-center text-slate-600"
        >
          {t('faqPage.footerPrompt')}{' '}
          <Link
            to="/book-appointment"
            className="font-semibold text-brand-600 hover:text-brand-700 underline-offset-2 hover:underline"
          >
            {t('faqPage.footerLink')}
          </Link>
        </motion.p>
      </div>
    </div>
  );
}
