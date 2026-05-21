import { useEffect } from 'react';

/** Injects JSON-LD into document.head (React 19 does not hoist inline scripts). */
export function useJsonLdScript(scriptId: string, jsonLd: object) {
  const serialized = JSON.stringify(jsonLd);

  useEffect(() => {
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = serialized;

    return () => {
      script?.remove();
    };
  }, [scriptId, serialized]);
}
