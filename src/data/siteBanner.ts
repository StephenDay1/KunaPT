/**
 * Site-wide notification banner (top of every page).
 *
 * Customize copy via `src/locales/en.ts` / `es.ts` (`banner` keys).
 * Change `id` when you want a new message to show again for visitors
 * who dismissed a previous banner.
 *
 * Set `enabled: false` to hide the banner without removing the component.
 */
export type SiteBannerConfig = {
  enabled: boolean;
  /** Stable id used for dismiss persistence (sessionStorage). */
  id: string;
  /** i18n key for the banner body text. */
  textKey: string;
  /** i18n key for the CTA label. */
  buttonTextKey: string;
  /** In-app route for the CTA (React Router). Prefer this for internal links. */
  buttonTo?: string;
  /** External URL for the CTA. Used when `buttonTo` is unset. */
  buttonHref?: string;
};

export const siteBanner: SiteBannerConfig = {
  enabled: true,
  id: 'now-open-2026',
  textKey: 'banner.message',
  buttonTextKey: 'banner.button',
  buttonTo: '/book-appointment',
};

export function bannerDismissStorageKey(bannerId: string) {
  return `kunapt:banner-dismissed:${bannerId}`;
}
