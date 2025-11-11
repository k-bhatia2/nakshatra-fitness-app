
import React from 'react';
import { Role } from '../../types';
import { ROLE_CONFIGS } from '../../constants';

interface RoleBadgeProps {
  role: Role;
}

const RoleBadge: React.FC<RoleBadgeProps> = ({ role }) => {
  const config = ROLE_CONFIGS[role];

  return (
    <span className={`px-2 py-0.5 text-xs font-semibold text-white rounded-full ${config.color}`}>
      {config.label}
    </span>
  );
};

export default RoleBadge;
