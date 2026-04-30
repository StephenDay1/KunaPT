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
    imgUrl: 'https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    slug: 'sports-rehab',
    icon: <Volleyball className="w-6 h-6" />,
    imgUrl: 'https://images.pexels.com/photos/6456291/pexels-photo-6456291.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    slug: 'chronic-pain',
    icon: <HeartPulse className="w-6 h-6" />,
    imgUrl: 'https://images.pexels.com/photos/5793971/pexels-photo-5793971.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    slug: 'running-performance',
    icon: <SportShoe className="w-6 h-6" />,
    imgUrl: 'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    slug: 'tmj',
    icon: <Smile className="w-6 h-6" />,
    imgUrl: 'https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    slug: 'balance-and-gait',
    icon: <Scale className="w-6 h-6" />,
    imgUrl: 'https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    slug: 'headaches',
    icon: <Brain className="w-6 h-6" />,
    imgUrl: 'https://images.pexels.com/photos/7088485/pexels-photo-7088485.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    slug: 'arthritis',
    icon: <Bone className="w-6 h-6" />,
    imgUrl: 'https://images.pexels.com/photos/4506102/pexels-photo-4506102.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    slug: 'pediatric-pt',
    icon: <Baby className="w-6 h-6" />,
    imgUrl: 'https://images.pexels.com/photos/8613318/pexels-photo-8613318.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    slug: 'workers-compensation',
    icon: <Briefcase className="w-6 h-6" />,
    imgUrl: 'https://images.pexels.com/photos/7298748/pexels-photo-7298748.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    slug: 'dry-needling',
    icon: <Zap className="w-6 h-6" />,
    imgUrl: 'https://images.pexels.com/photos/6975179/pexels-photo-6975179.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];
