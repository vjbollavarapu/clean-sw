import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Use password123 for any user.');
    }
  };

  const demoLogins = [
    { role: 'Administrator', email: 'admin@cleaningco.com' },
    { role: 'Management', email: 'manager@cleaningco.com' },
    { role: 'HR Manager', email: 'hr@cleaningco.com' },
    { role: 'Employee', email: 'employee1@cleaningco.com' },
    { role: 'Client', email: 'client@business.com' },
    { role: 'Procurement', email: 'procurement@cleaningco.com' },
    { role: 'Accounts', email: 'accounts@cleaningco.com' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to CleanSW
          </Link>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">CleanSW Login</CardTitle>
            <CardDescription>Access your cleaning services management system</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Demo Accounts</CardTitle>
            <CardDescription>Use password: password123</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {demoLogins.map((demo) => (
                <Button
                  key={demo.email}
                  variant="outline"
                  onClick={() => {
                    setEmail(demo.email);
                    setPassword('password123');
                  }}
                  className="justify-start text-sm"
                >
                  <span className="font-semibold mr-2">{demo.role}:</span>
                  <span className="text-muted-foreground">{demo.email}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
