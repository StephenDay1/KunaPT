import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './Navbar';
import NotificationBanner from './NotificationBanner';
import { bannerDismissStorageKey, siteBanner } from '../data/siteBanner';

function readDismissed(bannerId: string) {
  try {
    return sessionStorage.getItem(bannerDismissStorageKey(bannerId)) === '1';
  } catch {
    return false;
  }
}

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [dismissed, setDismissed] = useState(() =>
    siteBanner.enabled ? readDismissed(siteBanner.id) : true
  );

  const showBanner = siteBanner.enabled && !dismissed;

  const syncHeaderHeight = () => {
    const height = headerRef.current?.offsetHeight ?? 0;
    document.documentElement.style.setProperty('--site-header-height', `${height}px`);
    window.dispatchEvent(
      new CustomEvent('site-header-height-change', { detail: { height } })
    );
  };

  useLayoutEffect(() => {
    syncHeaderHeight();
  }, [showBanner]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const observer = new ResizeObserver(() => syncHeaderHeight());
    observer.observe(header);
    window.addEventListener('resize', syncHeaderHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncHeaderHeight);
    };
  }, [showBanner]);

  const handleDismiss = () => {
    try {
      sessionStorage.setItem(bannerDismissStorageKey(siteBanner.id), '1');
    } catch {
      // Ignore storage failures (private mode, etc.); in-memory dismiss still works.
    }
    setDismissed(true);
  };

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
        <AnimatePresence initial={false} onExitComplete={syncHeaderHeight}>
          {showBanner && (
            <motion.div
              key={siteBanner.id}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <NotificationBanner onDismiss={handleDismiss} />
            </motion.div>
          )}
        </AnimatePresence>
        
      </header>
      {/* Matches fixed header height so page content isn't covered. */}
      <div aria-hidden className="h-(--site-header-height,5.25rem) shrink-0" />
    </>
  );
}
