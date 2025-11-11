
import { IconName } from './components/ui/Icon';

export enum Role {
  USER = 'USER',
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
}

export interface User {
  id: string;
  firstName: string;
  role: Role;
  gyms: string[];
}

export interface KpiCardData {
  id: string;
  title: string;
  value: string | number;
  delta?: number;
  icon?: IconName;
  hint?: string;
  link?: string;
}

export interface ChartCardData {
  id: string;
  title: string;
  type: 'line' | 'bar' | 'area' | 'pie' | 'heatmap';
  dataset: any[];
  xKey?: string;
  yKey?: string;
  series?: { dataKey: string; name: string; color?: string }[];
  link?: string;
}

export interface SponsoredCardData {
  id: string;
  label: string;
  image: string;
  cta: string;
  href: string;
  provider: string;
  trackingId: string;
}

export interface TodayWorkoutPreview {
    title: string;
    items: string[];
}

export interface Renewal {
    memberId: string;
    name: string;
    daysLeft: number;
}

export interface SystemHealth {
    status: string;
    latencyMs: number;
    apiUptimePct: number;
}


// Role-specific dashboard payloads
export interface UserDashboardData {
  role: Role.USER;
  greetingName: string;
  kpis: KpiCardData[];
  charts: ChartCardData[];
  todayWorkoutPreview: TodayWorkoutPreview;
  sponsored: SponsoredCardData[];
}

export interface OwnerDashboardData {
  role: Role.OWNER;
  greetingName: string;
  kpis: KpiCardData[];
  charts: ChartCardData[];
  renewals: Renewal[];
}

export interface AdminDashboardData {
  role: Role.ADMIN;
  greetingName: string;
  kpis: KpiCardData[];
  charts: ChartCardData[];
  systemHealth: SystemHealth;
}

export type DashboardData = UserDashboardData | OwnerDashboardData | AdminDashboardData;

export interface NavItem {
    path: string;
    label: string;
    icon: IconName;
    roles: Role[];
}
