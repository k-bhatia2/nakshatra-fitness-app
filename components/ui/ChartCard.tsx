
import React from 'react';
import { ResponsiveContainer, LineChart, BarChart, AreaChart, Line, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartCardData } from '../../types';
import { Card, CardHeader, CardContent } from './Card';

interface ChartCardProps {
  data: ChartCardData;
}

const ChartCard: React.FC<ChartCardProps> = ({ data }) => {
  const { title, type, dataset, xKey, series } = data;

  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={dataset}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey={xKey} tick={{ fontSize: 12 }} stroke="#666" />
            <YAxis tick={{ fontSize: 12 }} stroke="#666" />
            <Tooltip />
            <Legend />
            {series?.map(s => <Line key={s.dataKey} type="monotone" dataKey={s.dataKey} name={s.name} stroke={s.color || "#8D3180"} strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />)}
          </LineChart>
        );
      case 'bar':
        return (
          <BarChart data={dataset}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey={xKey} tick={{ fontSize: 12 }} stroke="#666" />
            <YAxis tick={{ fontSize: 12 }} stroke="#666" />
            <Tooltip />
            <Legend />
            {series?.map(s => <Bar key={s.dataKey} dataKey={s.dataKey} name={s.name} fill={s.color || "#8D3180"} />)}
          </BarChart>
        );
      case 'area':
          return (
            <AreaChart data={dataset}>
                <defs>
                    <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8D3180" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8D3180" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey={xKey} tick={{ fontSize: 12 }} stroke="#666" />
                <YAxis tick={{ fontSize: 12 }} stroke="#666" />
                <Tooltip />
                <Legend />
                {series?.map(s => <Area key={s.dataKey} type="monotone" dataKey={s.dataKey} name={s.name} stroke={s.color || "#8D3180"} fill="url(#colorArea)" />)}
            </AreaChart>
          );
      default:
        return <p>Chart type "{type}" not supported.</p>;
    }
  };

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <h3 className="font-semibold text-black">{title}</h3>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartCard;
