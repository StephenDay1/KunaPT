type LogoProps = {
  className?: string;
};

const LOGO_FONT = 'Cinzel, serif';

/** Wordmark SVG — Cinzel is loaded via index.html (CSS @import is stripped by Vite). */
export default function Logo({ className }: LogoProps) {
  return (
    <img
      style={{ padding: '0.25rem'}}
      // src="/kuna-logo-alternate-3-line.jpg"
      src="/kuna-logo-alternate-3-line.jpg"
      alt="Kuna Physical Therapy"
      className={className}
      decoding="async"
    />

  //   <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   viewBox="0 0 405 200"
  //   role="img"
  //   aria-label="Kuna Physical Therapy"
  //   className={className}
  //   style={{ padding: '0.25rem' }}
  // >
  //   <title>Kuna Physical Therapy</title>
  //   <text
  //     fill="#578B25"
  //     fontFamily={LOGO_FONT}
  //     fontSize={58.9}
  //     fontWeight={550}
  //     x={8.2}
  //     y={50}
  //   >
  //     Kuna
  //   </text>
  //   <text
  //     fill="#2A6B99"
  //     fontFamily={LOGO_FONT}
  //     fontSize={85.4}
  //     fontWeight={600}
  //     x={0}
  //     y={120}
  //   >
  //     Physical
  //   </text>
  //   <text
  //     fill="#2A6B99"
  //     fontFamily={LOGO_FONT}
  //     fontSize={86.6}
  //     fontWeight={600}
  //     x={8.2}
  //     y={190}
  //   >
  //     Therapy
  //   </text>
  // </svg>
  );
}
