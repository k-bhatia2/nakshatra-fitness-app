import React from 'react';
import {
  LayoutDashboard, BarChart3, Building2, Dumbbell, ShoppingBag, User, Target,
  CreditCard, Users, Activity, Star, UserRound, Timer, TrendingUp, TrendingDown,
  ChevronUp, ChevronDown, CheckCircle2, XCircle
} from 'lucide-react';

const icons = {
  LayoutDashboard,
  BarChart3,
  Building2,
  Dumbbell,
  ShoppingBag,
  User,
  Target,
  CreditCard,
  Users,
  Activity,
  Star,
  UserRound,
  Timer,
  TrendingUp,
  TrendingDown,
  ChevronUp,
  ChevronDown,
  CheckCircle2,
  XCircle
};

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) {
    return null; // or a fallback icon
  }
  return <LucideIcon className={className} />;
};

export default Icon;