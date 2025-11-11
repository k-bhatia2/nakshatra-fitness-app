
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardHeader, CardContent } from '../components/ui/Card';

const GymPage: React.FC = () => {
  const { user } = useAuth();
  return (
     <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Gym Management</h1>
      </CardHeader>
      <CardContent>
        <p>This is the Gym page. Content here would be tailored for the <span className="font-bold">{user?.role}</span> role.</p>
        {user?.role === 'USER' && <p>Users see announcements, offers, and gym hours.</p>}
        {user?.role === 'OWNER' && <p>Owners can edit gym details and manage announcements.</p>}
        {user?.role === 'ADMIN' && <p>Admins can approve or suspend gyms.</p>}
      </CardContent>
    </Card>
  );
};

export default GymPage;
