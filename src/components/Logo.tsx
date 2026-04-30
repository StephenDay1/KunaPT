type LogoProps = {
  className?: string;
};

/** logo asset served from /public */
export default function Logo({ className }: LogoProps) {
  return (
    <img
      style={{ padding: '0.25rem'}}
      src="/kuna-logo-3-line.svg"
      alt="Kuna Physical Therapy"
      className={className}
      decoding="async"
    />
  );
}
