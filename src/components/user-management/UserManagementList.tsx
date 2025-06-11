
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Mail, Phone } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  phone?: string;
  avatar?: string;
  isActive: boolean;
}

interface UserManagementListProps {
  users: User[];
}

const UserManagementList = ({ users }: UserManagementListProps) => {
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
        <CardTitle>User Management</CardTitle>
        <CardDescription>All system users and their details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {users.map(user => (
            <div key={user.id} className="flex items-center justify-between p-4 border rounded hover:bg-muted/50">
              <div className="flex items-center gap-4">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    {user.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{user.name}</span>
                    <Badge 
                      variant={user.isActive ? "secondary" : "destructive"}
                      className={user.isActive ? "bg-green-100 text-green-800" : ""}
                    >
                      {user.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {user.email}
                    </div>
                    {user.phone && (
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {user.phone}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className={getRoleBadgeColor(user.role)}>
                  {user.role}
                </Badge>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserManagementList;
