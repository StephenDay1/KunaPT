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
    imgUrl: '/services/post-surg.jpg',
  },
  {
    slug: 'sports-rehab',
    icon: <Volleyball className="w-6 h-6" />,
    imgUrl: '/services/sports-rehab.jpg',
  },
  {
    slug: 'chronic-pain',
    icon: <HeartPulse className="w-6 h-6" />,
    imgUrl: '/services/chronic-pain.jpg',
  },
  {
    slug: 'running-performance',
    icon: <SportShoe className="w-6 h-6" />,
    imgUrl: '/services/running-performance.jpg',
  },
  {
    slug: 'tmj',
    icon: <Smile className="w-6 h-6" />,
    imgUrl: '/services/tmj.jpg',
  },
  {
    slug: 'balance-and-fall-prevention',
    icon: <Scale className="w-6 h-6" />,
    imgUrl: '/services/balance-and-fall-prevention.jpg',
  },
  {
    slug: 'headaches',
    icon: <Brain className="w-6 h-6" />,
    imgUrl: '/services/headaches.jpg',
  },
  {
    slug: 'arthritis',
    icon: <Bone className="w-6 h-6" />,
    imgUrl: '/services/arthritis.jpg',
  },
  {
    slug: 'pediatric-pt',
    icon: <Baby className="w-6 h-6" />,
    imgUrl: '/services/pediatric.jpg',
  },
  {
    slug: 'workers-compensation',
    icon: <Briefcase className="w-6 h-6" />,
    imgUrl: '/services/workers-comp.jpg',
  },
  {
    slug: 'dry-needling',
    icon: <Zap className="w-6 h-6" />,
    imgUrl: '/services/dry-needling.jpg',
  },
  // TODO: Add neck and back, shoulder, hip and knee, and foot and ankle.
  // Also treatment modailities - eg: dry needling, cupping, aistim/guasha, bloodflow restriction (BFR), kinisiotape, soft tissue work, manipulations, manual therapy, and mobilizations.
  {
    slug: 'neck-and-back',
    icon: <User className="w-6 h-6" />,
    imgUrl: '/services/neck-and-back.jpg',
  },
  {
    slug: 'shoulder',
    icon: <BicepsFlexed className="w-6 h-6" />,
    imgUrl: '/services/shoulder.jpg',
  },
  {
    slug: 'hip-and-knee',
    icon: <PersonStanding className="w-6 h-6" />,
    imgUrl: '/services/hip-and-knee.jpg',
  },
  {
    slug: 'foot-and-ankle',
    icon: <Footprints className="w-6 h-6" />,
    imgUrl: '/services/foot-and-ankle.jpg',
  },
];
