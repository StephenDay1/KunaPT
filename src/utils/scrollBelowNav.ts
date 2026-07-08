/**
 * Gap above an in-page anchor so the fixed site header (optional banner + navbar)
 * does not cover the target. Extra px avoids tight clipping under the header.
 */
const EXTRA_SCROLL_GAP_PX = 24;
const FALLBACK_HEADER_HEIGHT_PX = 84;

export function getFixedHeaderScrollOffsetPx() {
  if (typeof document === 'undefined') {
    return FALLBACK_HEADER_HEIGHT_PX + EXTRA_SCROLL_GAP_PX;
  }

  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--site-header-height')
    .trim();
  const headerHeight = Number.parseFloat(raw);

  return (
    (Number.isFinite(headerHeight) && headerHeight > 0
      ? headerHeight
      : FALLBACK_HEADER_HEIGHT_PX) + EXTRA_SCROLL_GAP_PX
  );
}

/** Prefer `getFixedHeaderScrollOffsetPx()` when the banner may be visible. */
export const FIXED_NAV_SCROLL_OFFSET_PX = FALLBACK_HEADER_HEIGHT_PX + EXTRA_SCROLL_GAP_PX;

export function scrollElementBelowFixedNav(
  el: HTMLElement,
  behavior: ScrollBehavior = 'smooth'
) {
  const top =
    el.getBoundingClientRect().top + window.scrollY - getFixedHeaderScrollOffsetPx();
  window.scrollTo({ top: Math.max(0, top), behavior });
}
