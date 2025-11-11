
import React from 'react';
import { KpiCardData } from '../../types';
import { Card, CardContent } from './Card';
import Icon from './Icon';

interface KpiCardProps {
  data: KpiCardData;
}

const KpiCard: React.FC<KpiCardProps> = ({ data }) => {
  const { title, value, icon, delta } = data;

  const renderDelta = () => {
    if (delta === undefined) return null;
    const isPositive = delta >= 0;
    return (
      <div className={`flex items-center text-xs font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        <Icon name={isPositive ? 'TrendingUp' : 'TrendingDown'} className="h-3 w-3 mr-1" />
        {isPositive ? '+' : ''}{delta.toFixed(1)}%
      </div>
    );
  };

  return (
    <Card>
      <CardContent className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="text-3xl font-bold text-black mt-1">{value}</p>
          <div className="mt-2">{renderDelta()}</div>
        </div>
        {icon && (
          <div className="bg-primary/10 text-primary p-3 rounded-full">
            <Icon name={icon} className="h-6 w-6" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default KpiCard;
