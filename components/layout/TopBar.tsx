
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import RoleBadge from '../ui/RoleBadge';
import Icon from '../ui/Icon';
import { useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants';

const TopBar: React.FC = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const currentPage = NAV_ITEMS.find(item => item.path === location.pathname);
  const pageTitle = currentPage ? currentPage.label : 'Dashboard';

  if (!user) return null;

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-10 border-b border-slate-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
             <Icon name="Target" className="h-8 w-8 text-primary" />
             <span className="text-xl font-bold tracking-tight text-black">Nakshatra</span>
          </div>

          {/* Center: Page Title (md+) */}
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold text-black">{pageTitle}</h1>
          </div>

          {/* Right: User Menu */}
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-3 bg-slate-100 hover:bg-slate-200 transition-colors rounded-full p-1 pr-3"
            >
                <div className="h-8 w-8 rounded-full bg-slate-300 flex items-center justify-center">
                    <Icon name="User" className="h-5 w-5 text-slate-600" />
                </div>
                <div className="text-left hidden sm:block">
                    <p className="text-sm font-medium text-black">Hi, {user.firstName}</p>
                </div>
                <RoleBadge role={user.role} />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-20">
                <a href="#/profile" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Profile</a>
                {(user.role === 'USER' || user.role === 'OWNER') && (
                    <a href="#/switch-gym" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Switch Gym</a>
                )}
                <button 
                  onClick={logout} 
                  className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
