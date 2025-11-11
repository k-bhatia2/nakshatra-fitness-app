
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AppShell from './components/layout/AppShell';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import GymPage from './pages/GymPage';
import WorkoutsPage from './pages/WorkoutsPage';
import ReportsPage from './pages/ReportsPage';
import ContentPage from './pages/ContentPage';
import NotFoundPage from './pages/NotFoundPage';
import { Role } from './types';
import { NAV_ITEMS } from './constants';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

const Main: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <LoginPage />;
  }
  
  const allowedRoutes = NAV_ITEMS.filter(item => item.roles.includes(user.role));

  return (
    <HashRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to={allowedRoutes[0]?.path || '/dashboard'} replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {allowedRoutes.find(r => r.path === '/gym') && <Route path="/gym" element={<GymPage />} />}
          {allowedRoutes.find(r => r.path === '/workouts') && <Route path="/workouts" element={<WorkoutsPage />} />}
          {allowedRoutes.find(r => r.path === '/reports') && <Route path="/reports" element={<ReportsPage />} />}
          {allowedRoutes.find(r => r.path === '/content') && <Route path="/content" element={<ContentPage />} />}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </HashRouter>
  );
};

export default App;
