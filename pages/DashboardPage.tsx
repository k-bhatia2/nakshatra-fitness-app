
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useApi } from '../hooks/useApi';
import { getDashboardData } from '../services/api';
import KpiCard from '../components/ui/KpiCard';
import ChartCard from '../components/ui/ChartCard';
import SponsoredCard from '../components/ui/SponsoredCard';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import Icon from '../components/ui/Icon';
import { DashboardData, Role } from '../types';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { data, isLoading, error } = useApi<DashboardData>(() => getDashboardData(user!.role));

  if (isLoading) {
    return <div className="text-center p-10">Loading Dashboard...</div>;
  }

  if (error || !data) {
    return <div className="text-center p-10 text-red-500">Failed to load dashboard data.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* KPI Cards */}
      {data.kpis.map(kpi => <KpiCard key={kpi.id} data={kpi} />)}

      {/* Role-specific components */}
      {data.role === Role.USER && data.todayWorkoutPreview && (
         <Card>
            <CardHeader><h3 className="font-semibold text-black">Today's Workout</h3></CardHeader>
            <CardContent>
                <h4 className="font-medium text-primary">{data.todayWorkoutPreview.title}</h4>
                <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                    {data.todayWorkoutPreview.items.map(item => <li key={item}>{item}</li>)}
                </ul>
            </CardContent>
        </Card>
      )}

      {data.role === Role.OWNER && data.renewals.length > 0 && (
        <Card>
            <CardHeader><h3 className="font-semibold text-black">Renewals Due Soon</h3></CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {data.renewals.map(r => (
                        <li key={r.memberId} className="text-sm flex justify-between">
                            <span>{r.name}</span>
                            <span className="font-medium text-red-500">{r.daysLeft} days left</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
      )}

      {data.role === Role.ADMIN && data.systemHealth && (
        <Card>
            <CardHeader><h3 className="font-semibold text-black">System Health</h3></CardHeader>
            <CardContent className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                    <span>Status</span>
                    <span className="font-medium text-green-600 flex items-center"><Icon name="CheckCircle2" className="w-4 h-4 mr-1"/>{data.systemHealth.status}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span>API Latency</span>
                    <span className="font-medium">{data.systemHealth.latencyMs}ms</span>
                </div>
                 <div className="flex items-center justify-between">
                    <span>Uptime</span>
                    <span className="font-medium">{data.systemHealth.apiUptimePct}%</span>
                </div>
            </CardContent>
        </Card>
      )}


      {/* Chart Cards */}
      {data.charts.map(chart => <ChartCard key={chart.id} data={chart} />)}
      
      {/* Sponsored Cards (User only) */}
      {data.role === Role.USER && data.sponsored.map(ad => <SponsoredCard key={ad.id} data={ad} />)}
    </div>
  );
};

export default DashboardPage;
