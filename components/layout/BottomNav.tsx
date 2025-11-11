
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { NAV_ITEMS } from '../../constants';
import { Role } from '../../types';
import Icon from '../ui/Icon';

const BottomNav: React.FC = () => {
    const { user } = useAuth();
    if (!user) return null;

    const allowedRoutes = NAV_ITEMS.filter(item => item.roles.includes(user.role as Role)).slice(0, 4);

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-200 shadow-t-md z-10">
            <div className="flex justify-around">
                {allowedRoutes.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center w-full pt-3 pb-2 text-xs font-medium transition-colors duration-150 ease-out ` +
                            (isActive ? 'text-primary' : 'text-slate-500 hover:text-black')
                        }
                    >
                        <Icon name={item.icon} className="h-6 w-6 mb-1" />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default BottomNav;
