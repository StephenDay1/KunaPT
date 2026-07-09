import { useState } from 'react';
import { useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import PagePopup from './PagePopup';
import {
  getPagePopupForPath,
  pagePopupDismissStorageKey,
} from '../data/pagePopups';

function readDismissed(popupId: string) {
  try {
    return sessionStorage.getItem(pagePopupDismissStorageKey(popupId)) === '1';
  } catch {
    return false;
  }
}

export default function PagePopupHost() {
  const { pathname } = useLocation();
  const popup = getPagePopupForPath(pathname);
  const [dismissedIds, setDismissedIds] = useState(() => new Set<string>());

  const isDismissed =
    popup !== undefined && (dismissedIds.has(popup.id) || readDismissed(popup.id));
  const showPopup = popup !== undefined && !isDismissed;

  const handleDismiss = () => {
    if (!popup) return;

    try {
      sessionStorage.setItem(pagePopupDismissStorageKey(popup.id), '1');
    } catch {
      // Ignore storage failures (private mode, etc.); in-memory dismiss still works.
    }

    setDismissedIds((prev) => new Set(prev).add(popup.id));
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          key={popup.id}
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6"
        >
          <PagePopup popup={popup} onDismiss={handleDismiss} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
