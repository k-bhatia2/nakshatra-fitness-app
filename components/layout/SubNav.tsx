
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { NAV_ITEMS } from '../../constants';
import { Role } from '../../types';
import Icon from '../ui/Icon';

const SubNav: React.FC = () => {
    const { user } = useAuth();
    if (!user) return null;

    const allowedRoutes = NAV_ITEMS.filter(item => item.roles.includes(user.role as Role));

    return (
        <nav className="hidden md:block bg-white border-b border-slate-200">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex space-x-4">
                    {allowedRoutes.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center space-x-2 px-3 py-3 text-sm font-medium border-b-2 transition-colors duration-150 ease-out ` +
                                (isActive
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-slate-500 hover:text-black hover:border-slate-300')
                            }
                        >
                            <Icon name={item.icon} className="h-4 w-4" />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default SubNav;
