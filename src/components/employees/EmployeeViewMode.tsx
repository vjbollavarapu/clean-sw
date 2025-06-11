
import React from 'react';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Employee } from '../../types';

interface EmployeeViewModeProps {
  employee: Employee;
}

const EmployeeViewMode: React.FC<EmployeeViewModeProps> = ({ employee }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getStatusBadge = (status: Employee['status']) => {
    const variants = {
      active: 'default',
      inactive: 'secondary',
      'on-leave': 'destructive'
    } as const;
    
    return <Badge variant={variants[status]}>{status.replace('-', ' ')}</Badge>;
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Name</Label>
          <p className="text-sm">{employee.name}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Status</Label>
          <div className="mt-1">
            {getStatusBadge(employee.status)}
          </div>
        </div>
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Email</Label>
          <p className="text-sm">{employee.email}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Phone</Label>
          <p className="text-sm">{employee.phone}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Position</Label>
          <p className="text-sm">{employee.position}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Department</Label>
          <p className="text-sm">{employee.department}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Hire Date</Label>
          <p className="text-sm">{formatDate(employee.hireDate)}</p>
        </div>
        <div>
          <Label className="text-sm font-medium text-muted-foreground">Salary</Label>
          <p className="text-sm">{formatCurrency(employee.salary)}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeViewMode;
