type LogoProps = {
  className?: string;
};

const LOGO_SRC = '/kuna-logo-final-3-line.svg';
// const LOGO_SRC = '/kuna-logo-alternate-3-line-wordmark.svg';

/**
 * Loads the logo SVG as a document (not an img). Required so Cinzel @font-face
 * inside the SVG file can load; <img src="*.svg"> blocks that.
 */
export default function Logo({ className }: LogoProps) {
  return (
    <object
      type="image/svg+xml"
      data={LOGO_SRC}
      aria-label="Kuna Physical Therapy"
      className={className}
      style={{ padding: '0.1rem', pointerEvents: 'none' }}
    >
      Kuna Physical Therapy
    </object>
  );
}
