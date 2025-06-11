
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Employee } from '../../../types';

interface HREmployeeActivityProps {
  employees: Employee[];
}

const HREmployeeActivity = ({ employees }: HREmployeeActivityProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Employee Activity</CardTitle>
        <Button variant="outline" size="sm">Manage</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {employees.slice(0, 5).map(employee => (
            <div key={employee.id} className="flex justify-between items-center p-3 border rounded-lg">
              <div>
                <p className="font-medium">{employee.name}</p>
                <p className="text-sm text-muted-foreground">{employee.position}</p>
                <p className="text-xs text-muted-foreground">{employee.department}</p>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <Badge variant={employee.status === 'active' ? 'default' : 'secondary'}>
                  {employee.status}
                </Badge>
                <span className="text-sm font-medium">${employee.salary.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HREmployeeActivity;
