import { ReactNode } from 'react';

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: ReactNode;
  benefits: string[];
  treatments: string[];
}
