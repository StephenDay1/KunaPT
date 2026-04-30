import {
  Activity,
  HeartPulse,
  Award,
  Brain,
  Zap,
  Bone,
  Baby,
  Timer,
  Scale,
  Briefcase,
} from 'lucide-react';
import { Service } from '../types';

/**
 * Service routes and icons only; titles and descriptions are in i18n (`serviceItems.*`).
 */
export const services: Service[] = [
  // { slug: 'abdominal-adhesions', icon: <Stethoscope className="w-6 h-6" /> },
  // { slug: 'lymphedema-therapy', icon: <HeartPulse className="w-6 h-6" /> },
  // { slug: 'industrial-rehab', icon: <ShieldCheck className="w-6 h-6" /> },
  { slug: 'dry-needling', icon: <Zap className="w-6 h-6" /> },
  { slug: 'headaches', icon: <Brain className="w-6 h-6" /> },
  { slug: 'arthritis', icon: <Bone className="w-6 h-6" /> },
  { slug: 'running-performance', icon: <Activity className="w-6 h-6" /> },
  { slug: 'balance-and-gait', icon: <Scale className="w-6 h-6" /> },
  { slug: 'chronic-pain', icon: <HeartPulse className="w-6 h-6" /> },
  { slug: 'tmj', icon: <Award className="w-6 h-6" /> },
  { slug: 'sports-rehab', icon: <Activity className="w-6 h-6" /> },
  { slug: 'post-surgical-rehab', icon: <Timer className="w-6 h-6" /> },
  { slug: 'pediatric-pt', icon: <Baby className="w-6 h-6" /> },
  { slug: 'workers-compensation', icon: <Briefcase className="w-6 h-6" /> },
];
