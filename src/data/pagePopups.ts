import { normalizePathname } from '../utils/urlPath';

/**
 * Page-specific promotional popups (bottom-right corner).
 *
 * Add or remove entries in `pagePopups` to control which routes show a popup.
 * Set `enabled: false` to hide without deleting the config.
 * Change `id` when you want a dismissed popup to appear again for visitors.
 *
 * Each popup needs either `imageUrl` (+ `altKey`) or `titleKey` / `descriptionKey`
 * for text-only content. Use `paths` to target one or more routes.
 * Optional CTA: `buttonTextKey` with `buttonTo` (in-app) or `buttonHref` (external).
 */
export type PagePopupConfig = {
  enabled: boolean;
  /** Stable id used for dismiss persistence (sessionStorage). */
  id: string;
  /** Normalized pathnames (no trailing slash), e.g. `/services/dry-needling`. */
  paths: string[];
  imageUrl?: string;
  /** i18n key for the image alt text. Required when `imageUrl` is set. */
  altKey?: string;
  /** i18n key for title. Shown instead of an image when `imageUrl` is unset. */
  titleKey?: string;
  /** i18n key for description. Shown instead of an image when `imageUrl` is unset. */
  descriptionKey?: string;
  /** i18n key for an optional CTA button label. */
  buttonTextKey?: string;
  /** In-app route for the CTA (React Router). Prefer this for internal links. */
  buttonTo?: string;
  /** External URL for the CTA. Used when `buttonTo` is unset. */
  buttonHref?: string;
};

export const pagePopups: PagePopupConfig[] = [];

export function pagePopupDismissStorageKey(popupId: string) {
  return `kunapt:page-popup-dismissed:${popupId}`;
}

export function getPagePopupForPath(pathname: string): PagePopupConfig | undefined {
  const normalized = normalizePathname(pathname);
  return pagePopups.find(
    (popup) => popup.enabled && popup.paths.some((path) => normalizePathname(path) === normalized)
  );
}
