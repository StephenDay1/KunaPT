type LogoProps = {
  className?: string;
};

/** South Boise logo asset served from /public */
export default function Logo({ className }: LogoProps) {
  return (
    <img
      src="/south-boise-logo.png"
      alt="Kuna Physical Therapy"
      className={className}
      decoding="async"
    />
  );
}
