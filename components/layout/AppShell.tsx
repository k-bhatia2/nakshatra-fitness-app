
import React, { ReactNode } from 'react';
import TopBar from './TopBar';
import SubNav from './SubNav';
import BottomNav from './BottomNav';

interface AppShellProps {
  children: ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <TopBar />
      <SubNav />
      <main className="px-4 sm:px-6 lg:px-8 pt-4 pb-24 md:pb-8">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default AppShell;
