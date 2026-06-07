type LogoVariant = 'full' | 'wordmark' | 'icon';

type LogoProps = {
  className?: string;
  variant?: LogoVariant;
};

const LOGO_SRC: Record<LogoVariant, string> = {
  full: '/kuna-logo-final-3-line.svg',
  wordmark: '/kuna-logo-final-3-line-wordmark.svg',
  icon: '/kuna-logo-icon.svg',
};

/**
 * Loads the logo SVG as a document (not an img). Required so Cinzel @font-face
 * inside the SVG file can load; <img src="*.svg"> blocks that.
 */
export default function Logo({ className, variant = 'full' }: LogoProps) {
  return (
    <object
      type="image/svg+xml"
      data={LOGO_SRC[variant]}
      aria-label="Kuna Physical Therapy"
      className={className}
      style={{ padding: '0.1rem', pointerEvents: 'none' }}
    >
      Kuna Physical Therapy
    </object>
  );
}
