import { ReactNode } from 'react';

/** Text for each `slug` lives in i18n under `translation.serviceItems.<slug>`. */
export interface Service {
  slug: string;
  icon: ReactNode;
}
