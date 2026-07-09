import { X } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import type { PagePopupConfig } from '../data/pagePopups';

type PagePopupProps = {
  popup: PagePopupConfig;
  onDismiss: () => void;
};

const popupSizeClassName =
  'w-[min(72vw,280px)] sm:w-80 md:w-96 lg:w-[28rem]';

const buttonClassName =
  'block w-full rounded-xl bg-brand-cta px-4 py-3 text-center text-sm font-bold text-white transition-all hover:brightness-110 active:brightness-95 sm:text-base';

function PagePopupButton({
  popup,
  label,
}: {
  popup: PagePopupConfig;
  label: string;
}) {
  if (popup.buttonTo) {
    return (
      <Link to={popup.buttonTo} className={buttonClassName}>
        {label}
      </Link>
    );
  }

  if (popup.buttonHref) {
    return (
      <a
        href={popup.buttonHref}
        className={buttonClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return null;
}

export default function PagePopup({ popup, onDismiss }: PagePopupProps) {
  const { t } = useTranslation();
  const hasImage = Boolean(popup.imageUrl);
  const hasButton = Boolean(popup.buttonTextKey && (popup.buttonTo || popup.buttonHref));
  const buttonLabel = popup.buttonTextKey ? t(popup.buttonTextKey) : '';
  const ariaLabel = popup.titleKey ? t(popup.titleKey) : t('pagePopups.ariaLabel');

  return (
    <div
      role="dialog"
      aria-label={ariaLabel}
      className={`relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl ${popupSizeClassName}`}
    >
      {hasImage ? (
        <img
          src={popup.imageUrl}
          alt={popup.altKey ? t(popup.altKey) : ''}
          className="block h-auto w-full"
        />
      ) : (
        <div className="space-y-3 p-6 pr-12">
          {popup.titleKey ? (
            <h2 className="font-serif text-2xl font-bold leading-tight text-slate-900">
              {t(popup.titleKey)}
            </h2>
          ) : null}
          {popup.descriptionKey ? (
            <p className="text-base leading-relaxed text-slate-600">{t(popup.descriptionKey)}</p>
          ) : null}
        </div>
      )}
      {hasButton ? (
        <div className={hasImage ? 'border-t border-slate-100 p-4' : 'px-6 pb-6 pr-12 pt-0'}>
          <PagePopupButton popup={popup} label={buttonLabel} />
        </div>
      ) : null}
      <button
        type="button"
        onClick={onDismiss}
        className={`absolute right-2 top-2 rounded-full p-1.5 transition-colors ${
          hasImage
            ? 'bg-slate-900/70 text-white hover:bg-slate-900'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
        }`}
        aria-label={t('pagePopups.dismiss')}
      >
        <X className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
