import { X } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { siteBanner } from '../data/siteBanner';

type NotificationBannerProps = {
  onDismiss: () => void;
};

export default function NotificationBanner({ onDismiss }: NotificationBannerProps) {
  const { t } = useTranslation();
  const message = t(siteBanner.textKey);
  const buttonLabel = t(siteBanner.buttonTextKey);

  const buttonClassName =
    'shrink-0 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-brand-700 shadow-sm transition-all hover:bg-brand-50 active:scale-95 sm:text-sm';

  return (
    <div
      role="region"
      aria-label={t('banner.ariaLabel')}
      className="relative border-b border-brand-700/20 bg-brand-blue-primary text-white"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-2.5 pr-12 sm:gap-4 sm:px-6 sm:pr-14">
        <p className="text-center text-sm font-medium leading-snug sm:text-[0.9375rem]">
          {message}
        </p>
        {siteBanner.buttonTo ? (
          <Link to={siteBanner.buttonTo} className={buttonClassName}>
            {buttonLabel}
          </Link>
        ) : siteBanner.buttonHref ? (
          <a
            href={siteBanner.buttonHref}
            className={buttonClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonLabel}
          </a>
        ) : null}
      </div>
      <button
        type="button"
        onClick={onDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/90 transition-colors hover:bg-white/15 hover:text-white sm:right-3"
        aria-label={t('banner.dismiss')}
      >
        <X className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );
}
