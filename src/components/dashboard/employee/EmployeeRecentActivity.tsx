
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { CheckCircle, Clock, FileText, User } from 'lucide-react';

interface Activity {
  id: string;
  action: string;
  description: string;
  time: string;
}

interface EmployeeRecentActivityProps {
  recentActivities: Activity[];
}

const EmployeeRecentActivity = ({ recentActivities }: EmployeeRecentActivityProps) => {
  const getActivityIcon = (action: string) => {
    switch (action.toLowerCase()) {
      case 'completed task':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'started task':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'submitted timesheet':
        return <FileText className="h-4 w-4 text-purple-600" />;
      default:
        return <User className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Activity</CardTitle>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="mt-1">
                {getActivityIcon(activity.action)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{activity.action}</p>
                <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeeRecentActivity;
