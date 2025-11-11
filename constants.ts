
import { NavItem, Role } from './types';

export const ROLE_CONFIGS = {
  [Role.USER]: {
    color: 'bg-blue-500',
    label: 'USER',
  },
  [Role.OWNER]: {
    color: 'bg-green-500',
    label: 'OWNER',
  },
  [Role.ADMIN]: {
    color: 'bg-purple-600',
    label: 'ADMIN',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { path: '/dashboard', label: 'Dashboard', icon: 'LayoutDashboard', roles: [Role.USER, Role.OWNER, Role.ADMIN] },
  { path: '/gym', label: 'Gym', icon: 'Building2', roles: [Role.USER, Role.OWNER, Role.ADMIN] },
  { path: '/workouts', label: 'Workouts', icon: 'Dumbbell', roles: [Role.USER, Role.OWNER] },
  { path: '/reports', label: 'Reports', icon: 'BarChart3', roles: [Role.USER, Role.OWNER, Role.ADMIN] },
  { path: '/content', label: 'Content', icon: 'ShoppingBag', roles: [Role.USER, Role.OWNER] },
];
