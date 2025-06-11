
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { sampleEmployees } from '../../data/sampleData';

const HRDashboard = () => {
  const totalEmployees = sampleEmployees.length;
  const averageSalary = sampleEmployees.reduce((sum, e) => sum + e.salary, 0) / totalEmployees;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Employee Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Employees:</span>
              <span className="font-bold">{totalEmployees}</span>
            </div>
            <div className="flex justify-between">
              <span>Average Salary:</span>
              <span className="font-bold">${averageSalary.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {sampleEmployees.map(employee => (
              <div key={employee.id} className="flex justify-between items-center p-2 border-b">
                <div>
                  <p className="font-medium">{employee.name}</p>
                  <p className="text-sm text-muted-foreground">{employee.position}</p>
                </div>
                <span className="text-sm">${employee.salary.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRDashboard;
