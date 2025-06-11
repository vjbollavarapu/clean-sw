
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Clock, FileText, MessageSquare, Settings, Calendar, Bell } from 'lucide-react';

const EmployeeQuickActions = () => {
  const quickActions = [
    { icon: Clock, label: 'Clock In/Out', action: () => console.log('Clock in/out clicked') },
    { icon: FileText, label: 'Submit Report', action: () => console.log('Submit report clicked') },
    { icon: MessageSquare, label: 'Request Leave', action: () => console.log('Request leave clicked') },
    { icon: Calendar, label: 'Schedule Meeting', action: () => console.log('Schedule meeting clicked') },
    { icon: Bell, label: 'Notifications', action: () => console.log('Notifications clicked') },
    { icon: Settings, label: 'Profile Settings', action: () => console.log('Profile settings clicked') },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-16 flex flex-col items-center justify-center space-y-1"
              onClick={action.action}
            >
              <action.icon className="h-5 w-5" />
              <span className="text-xs">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeeQuickActions;
