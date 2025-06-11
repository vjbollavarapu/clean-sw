
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { sampleServiceOrders } from '../../data/sampleData';

interface EmployeeDashboardProps {
  user: any;
}

const EmployeeDashboard = ({ user }: EmployeeDashboardProps) => {
  const myTasks = sampleServiceOrders.filter(order => 
    order.assignedEmployees.includes(user.id)
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>My Assigned Tasks</CardTitle>
          <CardDescription>Current service orders assigned to you</CardDescription>
        </CardHeader>
        <CardContent>
          {myTasks.length > 0 ? (
            <div className="space-y-2">
              {myTasks.map(task => (
                <div key={task.id} className="p-4 border rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{task.serviceType}</h4>
                      <p className="text-sm text-muted-foreground">{task.clientName}</p>
                      <p className="text-sm text-muted-foreground">{task.location}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      task.status === 'completed' ? 'bg-green-100 text-green-800' :
                      task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No tasks assigned currently.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeDashboard;
