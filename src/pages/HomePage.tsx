import { 
  ChevronRight, 
  Star, 
  ExternalLink
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useRef, useState } from 'react';
import { services } from '../data/services';
import ServicePreviewCard from '../components/ServicePreviewCard';
import {
  CLINIC_ADDRESS,
  getGoogleMapsEmbedUrl,
  OPENING_DATE,
} from '../data/clinicInfo';
import HelmetHelper from '../components/HelmetHelper';
import ClinicInfoCards from '../components/ClinicInfoCards';

export default function HomePage() {
  const { t } = useTranslation();
  const featuredServices = services.slice(0, 4);
  const translatedHeroDescription = t('homepage.heroDescription', { returnObjects: true });
  const heroDescriptionParagraphs = Array.isArray(translatedHeroDescription)
    ? translatedHeroDescription
    : [translatedHeroDescription];
  const aboutBodyRaw = t('homepage.aboutBody', { returnObjects: true });
  const aboutParagraphs = Array.isArray(aboutBodyRaw) ? aboutBodyRaw : [aboutBodyRaw];
  const heroImagePaths = [
    'stock/angels-landing.jpg',
    // 'stock/red-castle.jpg',
    'stock/man-hiking.JPG',
    // 'stock/nature6.jpg',
    'stock/hunting.jpg',
    'stock/kayaking.jpeg',
    // 'stock/nature7.jpg',
    'stock/hawaii.JPG',
    'stock/timpanogos.JPG',
  ].map((path) => `${import.meta.env.BASE_URL}${path}`);
  const [failedHeroImagePaths, setFailedHeroImagePaths] = useState<string[]>([]);
  const availableHeroImagePaths = useMemo(
    () => heroImagePaths.filter((path) => !failedHeroImagePaths.includes(path)),
    [heroImagePaths, failedHeroImagePaths]
  );
  const fallbackHeroImagePath =
    heroImagePaths.find((path) => !availableHeroImagePaths.includes(path)) ?? heroImagePaths[0] ?? '';
  const activeHeroImagePaths = availableHeroImagePaths.length > 0 ? availableHeroImagePaths : [fallbackHeroImagePath];
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
  const currentHeroImagePath = activeHeroImagePaths[currentHeroImageIndex] ?? activeHeroImagePaths[0] ?? '';
  const currentHeroImageFileName = currentHeroImagePath.split('/').pop() ?? currentHeroImagePath;
  const showHeroImageFallback = availableHeroImagePaths.length === 0;

  useEffect(() => {
    if (currentHeroImageIndex >= activeHeroImagePaths.length) {
      setCurrentHeroImageIndex(0);
    }
  }, [activeHeroImagePaths.length, currentHeroImageIndex]);

  useEffect(() => {
    if (activeHeroImagePaths.length <= 1 || showHeroImageFallback) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentHeroImageIndex((previousIndex) => (previousIndex + 1) % activeHeroImagePaths.length);
    }, 7000); // 7 seconds

    return () => {
      window.clearInterval(intervalId);
    };
  }, [activeHeroImagePaths.length, showHeroImageFallback]);

  const handleHeroImageError = (failedPath: string) => {
    setFailedHeroImagePaths((previousFailedPaths) => {
      if (previousFailedPaths.includes(failedPath)) {
        return previousFailedPaths;
      }

      return [...previousFailedPaths, failedPath];
    });
  };

  const heroBookRef = useRef<HTMLAnchorElement>(null);
  const [showStickyHeroBookCta, setShowStickyHeroBookCta] = useState(false);

  useEffect(() => {
    const element = heroBookRef.current;
    if (!element) {
      return;
    }

    const rootMargin = () =>
      window.matchMedia('(min-width: 768px)').matches
        ? '-84px 0px 0px 0px'
        : '-80px 0px 0px 0px';

    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        ([entry]) => {
          setShowStickyHeroBookCta(!entry.isIntersecting);
        },
        { threshold: 0, rootMargin: rootMargin() }
      );
      observer.observe(element);
    };

    setupObserver();
    const breakpointQuery = window.matchMedia('(min-width: 768px)');
    breakpointQuery.addEventListener('change', setupObserver);
    window.addEventListener('resize', setupObserver);

    return () => {
      breakpointQuery.removeEventListener('change', setupObserver);
      window.removeEventListener('resize', setupObserver);
      observer?.disconnect();
    };
  }, []);

  const heroBookButtonClassName =
    'bg-brand-cta text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-brand-200 hover:brightness-110 active:brightness-95 flex items-center justify-center gap-2 group';

  return (
    <div className="min-h-screen">
      <HelmetHelper description={t('meta.homeDescription')} />
      <AnimatePresence>
        {showStickyHeroBookCta && (
          <motion.div
            key="sticky-hero-book-cta"
            role="presentation"
            className="fixed top-20 left-0 right-0 z-30 border-b border-slate-200/80 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/80 md:hidden"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="mx-auto flex max-w-lg justify-center">
              <Link
                to="/book-appointment"
                className={`${heroBookButtonClassName} w-full max-w-sm text-base shadow-lg sm:px-8 sm:py-3.5`}
              >
                {t('common.bookAppointment')}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-50 rounded-l-[100px] hidden lg:block" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-8"
            >
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                Trusted by 2,000+ Patients
              </div> */}
              <h1 className="text-5xl md:text-5xl font-serif font-bold text-slate-900 leading-[1.1]">
                {t('homepage.heroTitlePrefix')} <span className="text-gradient-green-brand">{t('homepage.heroTitleMotion')}</span>. {t('homepage.heroTitleMiddle')} <span className="text-gradient-blue-brand">{t('homepage.heroTitleLife')}</span>.
              </h1>
              <div className="space-y-4 max-w-lg">
                {heroDescriptionParagraphs.map((paragraph, index) => (
                  <p key={`homepage-hero-description-${index}`} className="text-lg text-slate-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  ref={heroBookRef}
                  to="/book-appointment"
                  className={heroBookButtonClassName}
                >
                  {t('common.bookAppointment')}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/services"
                  className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  {t('homepage.ourServices')}
                </Link>
              </div>
              {/* Google Ratings */}
              {/* <div className="flex items-center gap-6 pt-4 hidden">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-500 font-medium">4.9/5 from Google Reviews</p>
                </div>
              </div> */}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 relative lg:pt-6"
            >
              {/* <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl h-[min(38vh,300px)] sm:h-[min(40vh,340px)] lg:h-[min(48vh,400px)] w-full">
                <img 
                  src="./kuna-logo-icon.svg" 
                  alt="Physical Therapy Session" 
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div> */}
              <div className="relative z-10 rounded-[40px] overflow-hidden h-72 sm:h-80 lg:h-[580px] w-full">
                {showHeroImageFallback ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-700 text-sm font-medium px-4 text-center">
                    Unable to load hero image ({currentHeroImageFileName})
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentHeroImagePath}
                      src={currentHeroImagePath}
                      alt={`Physical Therapy Session - ${currentHeroImageFileName}`}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                      onError={() => handleHeroImageError(currentHeroImagePath)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    />
                  </AnimatePresence>
                )}
              </div>
              {/* Floating Stats Card */}
              {/* <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                    <HeartPulse className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">98%</p>
                    <p className="text-sm text-slate-500 font-medium">Success Rate</p>
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="./stock/therapy1.jpg" 
                  alt="Clinic" 
                  className="rounded-3xl shadow-lg mt-12"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="./stock/therapy5.jpg" 
                  alt="Therapist" 
                  className="rounded-3xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Show age of clinic, but this will only show up 3 years from now... */}
              {(new Date().getTime() - OPENING_DATE.getTime()) > (3 * 365 * 24 * 60 * 60 * 1000) && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-600 rounded-full flex items-center justify-center text-white border-8 border-slate-50 shadow-xl">
                <span className="text-2xl font-bold">{Math.floor((new Date().getTime() - OPENING_DATE.getTime()) / (365 * 24 * 60 * 60 * 1000))}+ Yrs</span>
              </div>}
            </div>

            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm">{t('homepage.aboutKuna')}</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">{t('homepage.aboutHeadline')}</h3>
              <div className="space-y-4">
                {aboutParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-slate-600 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* <div className="space-y-4">
                {[
                  t('homepage.aboutBullet1'),
                  t('homepage.aboutBullet2'),
                  t('homepage.aboutBullet3'),
                  t('homepage.aboutBullet4'),
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-brand-100 p-1 rounded-full text-brand-600">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div> */}
              <Link
                to="/team"
                className="inline-flex text-brand-600 font-bold items-center gap-2 hover:gap-3 transition-all"
              >
                {t('homepage.aboutTeamCta')} <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm">{t('homepage.ourExpertise')}</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">{t('homepage.servicesHeadline')}</h3>
            <p className="text-slate-600 text-lg">{t('homepage.servicesSub')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <ServicePreviewCard
                  service={service}
                  ctaKey="common.learnMore"
                  cardClassName="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-brand-100 transition-all"
                  iconClassName="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors mb-6"
                  titleClassName="text-xl font-bold text-slate-900 mb-3"
                  descriptionClassName="text-slate-600 leading-relaxed mb-4"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all shadow-xl"
            >
              {t('common.viewAllServices')}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm">{t('homepage.visitUs')}</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">{t('homepage.findKuna')}</h3>
            <p className="text-slate-600 text-lg">{t('homepage.locationSub')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-slate-200 bg-white h-[520px]">
              <iframe
                title={t('clinic.mapsEmbedTitle')}
                src={getGoogleMapsEmbedUrl(CLINIC_ADDRESS.mapsQuery)}
                width="100%"
                height="520"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <ClinicInfoCards
              className="h-[520px] flex flex-col gap-6"
              cardClassName="flex-1"
            />
          </div>
        </div>
      </section>

      {/* Still have questions? */}
      <section id="questions" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm">{t('homepage.stillHaveQuestions')}</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">{t('homepage.stillHaveQuestionsHeadline')}</h3>
            <p className="text-slate-600 text-lg">{t('homepage.stillHaveQuestionsSub')}</p>
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 bg-brand-cta text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:brightness-110 active:brightness-95"
            >
              {t('common.faq')}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      {false && <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">{t('homepage.successStories')}</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">{t('homepage.patientsSay')}</h3>
              {/* <p className="text-slate-600 text-lg mt-4">
                We've helped thousands of patients reclaim their mobility and live pain-free lives. Read their stories and see why Kuna PT is the trusted choice for physical therapy.
              </p> */}
            </div>
            <Link 
              to="/testimonials"
              className="inline-flex items-center gap-2 bg-brand-cta text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:brightness-110 active:brightness-95"
            >
              {t('homepage.readAllReviews')}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(['card1', 'card2', 'card3'] as const).map((cardKey, i) => (
              <motion.div 
                key={cardKey} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative group hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="flex text-amber-400 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">&ldquo;{t(`homeTeaser.${cardKey}.text`)}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-sm">
                    {t(`homeTeaser.${cardKey}.name`).charAt(0)}
                  </div>
                  <span className="font-bold text-slate-900">{t(`homeTeaser.${cardKey}.name`)}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-bold text-slate-900">{t('homepage.ratingText')}</span>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <a 
              href="https://google.com/search?q=Kuna+Physical+Therapy+Reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors font-medium"
            >
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4" />
              {t('homepage.verifiedGoogle')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>}
    </div>
  );
}
