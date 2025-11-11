
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 ease-out ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`p-4 border-b border-slate-100 ${className}`}>{children}</div>;
};


export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
