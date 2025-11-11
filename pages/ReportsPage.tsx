
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardHeader, CardContent } from '../components/ui/Card';

const ReportsPage: React.FC = () => {
  const { user } = useAuth();
  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Reports</h1>
      </CardHeader>
      <CardContent>
         <p>This is the Reports page. Content here would be tailored for the <span className="font-bold">{user?.role}</span> role.</p>
         {user?.role === 'USER' && <p>Users see their personal check-in history.</p>}
         {user?.role === 'OWNER' && <p>Owners see attendance trends and member activity.</p>}
         {user?.role === 'ADMIN' && <p>Admins see platform-wide analytics.</p>}
      </CardContent>
    </Card>
  );
};

export default ReportsPage;
