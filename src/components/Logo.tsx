type LogoProps = {
  className?: string;
};

/** logo asset served from /public */
export default function Logo({ className }: LogoProps) {
  return (
    <img
      style={{ paddingLeft: '0.25rem' }}
      src="/kuna-logo-2.svg"
      alt="Kuna Physical Therapy"
      className={className}
      decoding="async"
    />
  );
}
