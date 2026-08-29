import {
  HeartPulse,
  Brain,
  Zap,
  Bone,
  Baby,
  Scale,
  Briefcase,
  Volleyball,
  Smile,
  SportShoe,
  BriefcaseMedical,
  Footprints,
  PersonStanding,
  User,
  BicepsFlexed,
} from 'lucide-react';
import { Service } from '../types';

/**
 * Service routes, icons, and preview images only; titles and descriptions are in i18n (`serviceItems.*`).
 */
export const services: Service[] = [
  {
    slug: 'post-surgical-rehab',
    icon: <BriefcaseMedical className="w-6 h-6" />,
    imgUrl: '/services/post-surg.webp',
  },
  {
    slug: 'sports-rehab',
    icon: <Volleyball className="w-6 h-6" />,
    imgUrl: '/services/sports-rehab.webp',
  },
  {
    slug: 'neck-and-back',
    icon: <User className="w-6 h-6" />,
    imgUrl: '/services/neck-and-back.webp',
  },
  {
    slug: 'running-performance',
    icon: <SportShoe className="w-6 h-6" />,
    imgUrl: '/services/running-performance.webp',
  },
  {
    slug: 'hip-and-knee',
    icon: <PersonStanding className="w-6 h-6" />,
    imgUrl: '/services/hip-and-knee.webp',
  },
  {
    slug: 'foot-and-ankle',
    icon: <Footprints className="w-6 h-6" />,
    imgUrl: '/services/foot-and-ankle.webp',
  },
  {
    slug: 'shoulder',
    icon: <BicepsFlexed className="w-6 h-6" />,
    imgUrl: '/services/shoulder.webp',
  },
  {
    slug: 'balance-and-fall-prevention',
    icon: <Scale className="w-6 h-6" />,
    imgUrl: '/services/balance-and-fall-prevention.webp',
  },
  {
    slug: 'arthritis',
    icon: <Bone className="w-6 h-6" />,
    imgUrl: '/services/arthritis.webp',
  },
  {
    slug: 'chronic-pain',
    icon: <HeartPulse className="w-6 h-6" />,
    imgUrl: '/services/chronic-pain.webp',
  },
  {
    slug: 'pediatric-pt',
    icon: <Baby className="w-6 h-6" />,
    imgUrl: '/services/pediatric.webp',
  },
  {
    slug: 'headaches',
    icon: <Brain className="w-6 h-6" />,
    imgUrl: '/services/headaches.webp',
  },
  {
    slug: 'tmj',
    icon: <Smile className="w-6 h-6" />,
    imgUrl: '/services/tmj.webp',
  },
  {
    slug: 'workers-compensation',
    icon: <Briefcase className="w-6 h-6" />,
    imgUrl: '/services/workers-comp.webp',
  },
  {
    slug: 'dry-needling',
    icon: <Zap className="w-6 h-6" />,
    imgUrl: '/services/dry-needling.webp',
  },
];
