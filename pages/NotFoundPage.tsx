
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="text-center w-full max-w-md">
        <CardContent className="p-8">
            <h1 className="text-6xl font-bold text-primary">404</h1>
            <h2 className="text-2xl font-semibold text-black mt-4">Page Not Found</h2>
            <p className="text-slate-500 mt-2">Sorry, the page you are looking for does not exist.</p>
            <Link to="/dashboard">
                <Button className="mt-6">Go to Dashboard</Button>
            </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;
