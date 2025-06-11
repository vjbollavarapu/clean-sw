
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  createdAt: string;
}

interface RecentUsersCardProps {
  recentUsers: User[];
}

const RecentUsersCard = ({ recentUsers }: RecentUsersCardProps) => {
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Administrator': return 'bg-red-100 text-red-800';
      case 'Management': return 'bg-purple-100 text-purple-800';
      case 'HR Manager': return 'bg-blue-100 text-blue-800';
      case 'Employee': return 'bg-green-100 text-green-800';
      case 'Client': return 'bg-orange-100 text-orange-800';
      case 'Procurement': return 'bg-cyan-100 text-cyan-800';
      case 'Accounts': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recently Added Users</CardTitle>
        <CardDescription>Latest user registrations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentUsers.map(user => (
            <div key={user.id} className="flex items-center justify-between p-3 border rounded">
              <div className="flex items-center gap-3">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    {user.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-medium text-sm">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="secondary" className={getRoleBadgeColor(user.role)}>
                  {user.role}
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentUsersCard;
