
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Shield } from 'lucide-react';

interface RoleDistributionProps {
  roleDistribution: Record<string, number>;
  totalUsers: number;
}

const RoleDistributionCard = ({ roleDistribution, totalUsers }: RoleDistributionProps) => {
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
        <CardTitle>Role Distribution</CardTitle>
        <CardDescription>Users by role across the system</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {Object.entries(roleDistribution).map(([role, count]) => (
            <div key={role} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">{role}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{count} users</span>
                <Badge variant="secondary" className={getRoleBadgeColor(role)}>
                  {Math.round((count / totalUsers) * 100)}%
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RoleDistributionCard;
