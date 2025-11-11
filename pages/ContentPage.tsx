
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardHeader, CardContent } from '../components/ui/Card';

const ContentPage: React.FC = () => {
  const { user } = useAuth();
  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Featured Content</h1>
      </CardHeader>
      <CardContent>
        <p>This is the Content page. Content here would be tailored for the <span className="font-bold">{user?.role}</span> role.</p>
        <p className="mt-2 text-sm text-slate-600">Note: This page is hidden for Admins, so you should only see this as a User or Owner.</p>
        {user?.role === 'USER' && <p>Users see sponsored content and offers.</p>}
        {user?.role === 'OWNER' && <p>Owners see a preview of sponsored placements in their gym.</p>}
      </CardContent>
    </Card>
  );
};

export default ContentPage;
