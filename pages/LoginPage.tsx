
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Role } from '../types';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';

const LoginPage: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
            <div className="flex justify-center items-center mb-6 space-x-3">
                <Icon name="Target" className="h-10 w-10 text-primary" />
                <h1 className="text-3xl font-bold text-black">Nakshatra Fitness</h1>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-xl font-semibold text-center text-slate-700 mb-6">Select a Role to Sign In</h2>
                <div className="space-y-4">
                    <Button className="w-full" onClick={() => login(Role.USER)}>Sign in as Gym User</Button>
                    <Button className="w-full" onClick={() => login(Role.OWNER)}>Sign in as Gym Owner</Button>
                    <Button className="w-full" onClick={() => login(Role.ADMIN)}>Sign in as Nakshatra Admin</Button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;
