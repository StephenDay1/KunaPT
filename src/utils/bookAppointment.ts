/** Path for the book-appointment route; optional `from` for attribution and form prefill. */
export function bookAppointmentPath(from?: string): string {
  if (!from) return '/book-appointment';
  return `/book-appointment?from=${encodeURIComponent(from)}`;
}
