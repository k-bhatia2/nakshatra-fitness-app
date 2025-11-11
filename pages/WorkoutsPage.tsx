
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardHeader, CardContent } from '../components/ui/Card';

const WorkoutsPage: React.FC = () => {
   const { user } = useAuth();
  return (
    <Card>
      <CardHeader>
        <h1 className="text-xl font-bold">Workouts</h1>
      </CardHeader>
      <CardContent>
         <p>This is the Workouts page. Content here would be tailored for the <span className="font-bold">{user?.role}</span> role.</p>
         {user?.role === 'USER' && <p>Users see today's workout and their history.</p>}
         {user?.role === 'OWNER' && <p>Owners can build and assign workout plans.</p>}
      </CardContent>
    </Card>
  );
};

export default WorkoutsPage;
