/**
 * Gap above an in-page anchor so the fixed navbar does not cover the target.
 * Navbar is `h-20` (80px) / `md:h-[5.25rem]` (84px); extra px avoids tight clipping.
 */
export const FIXED_NAV_SCROLL_OFFSET_PX = 108;

export function scrollElementBelowFixedNav(
  el: HTMLElement,
  behavior: ScrollBehavior = 'smooth'
) {
  const top = el.getBoundingClientRect().top + window.scrollY - FIXED_NAV_SCROLL_OFFSET_PX;
  window.scrollTo({ top: Math.max(0, top), behavior });
}
