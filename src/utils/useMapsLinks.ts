import { useEffect, useMemo, useState } from 'react';
import {
  CLINIC_APPLE_MAPS_URL,
  CLINIC_GOOGLE_MAPS_URL,
} from '../data/clinicInfo';

function detectIsApplePlatform() {
  if (typeof navigator === 'undefined') return false;

  const ua = navigator.userAgent ?? '';
  // `navigator.userAgentData` is not available in all browsers.
  const platform =
    (navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform ??
    navigator.platform ??
    '';

  // iPadOS typically includes "iPad" in the UA even though the platform might be MacIntel.
  const isIOS = /iPad|iPhone|iPod/i.test(ua) || /iPad|iPhone|iPod/i.test(platform);
  const isMac = /Mac/i.test(platform) && !/iPhone|iPad|iPod/i.test(ua);

  return isIOS || isMac;
}

export function useMapsLinks() {
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    setIsApple(detectIsApplePlatform());
  }, []);

  return useMemo(
    () => ({
      isApple,
      // External links should open Apple Maps on Apple devices.
      directionsUrl: isApple ? CLINIC_APPLE_MAPS_URL : CLINIC_GOOGLE_MAPS_URL,
    }),
    [isApple]
  );
}

