import {
  HeartPulse,
  Brain,
  Zap,
  Bone,
  Baby,
  Timer,
  Scale,
  Briefcase,
  Volleyball,
  Smile,
  SportShoe
} from 'lucide-react';
import { Service } from '../types';

/**
 * Service routes, icons, and preview images only; titles and descriptions are in i18n (`serviceItems.*`).
 */
export const services: Service[] = [
  // { slug: 'abdominal-adhesions', icon: <Stethoscope className="w-6 h-6" /> },
  // { slug: 'lymphedema-therapy', icon: <HeartPulse className="w-6 h-6" /> },
  // { slug: 'industrial-rehab', icon: <ShieldCheck className="w-6 h-6" /> },
  {
    slug: 'post-surgical-rehab',
    icon: <Timer className="w-6 h-6" />,
    imgUrl: '/services/post-surg.png',
  },
  {
    slug: 'sports-rehab',
    icon: <Volleyball className="w-6 h-6" />,
    imgUrl: '/services/sports-rehab.png',
  },
  {
    slug: 'chronic-pain',
    icon: <HeartPulse className="w-6 h-6" />,
    imgUrl: '/services/chronic-pain.png',
  },
  {
    slug: 'running-performance',
    icon: <SportShoe className="w-6 h-6" />,
    imgUrl: '/services/running-performance.png',
  },
  {
    slug: 'tmj',
    icon: <Smile className="w-6 h-6" />,
    imgUrl: '/services/tmj.png',
  },
  {
    slug: 'balance-and-gait',
    icon: <Scale className="w-6 h-6" />,
    imgUrl: '/services/balance-and-gait.png',
  },
  {
    slug: 'headaches',
    icon: <Brain className="w-6 h-6" />,
    imgUrl: '/services/headaches.png',
  },
  {
    slug: 'arthritis',
    icon: <Bone className="w-6 h-6" />,
    imgUrl: '/services/arthritis.png',
  },
  {
    slug: 'pediatric-pt',
    icon: <Baby className="w-6 h-6" />,
    imgUrl: '/services/pediatric.png',
  },
  {
    slug: 'workers-compensation',
    icon: <Briefcase className="w-6 h-6" />,
    imgUrl: '/services/workers-comp.png',
  },
  {
    slug: 'dry-needling',
    icon: <Zap className="w-6 h-6" />,
    imgUrl: '/services/dry-needling.png',
  },
];
