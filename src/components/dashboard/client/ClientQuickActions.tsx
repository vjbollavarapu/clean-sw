
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { 
  Plus, 
  FileText, 
  MessageSquare, 
  CreditCard, 
  Calendar, 
  Phone,
  Star,
  Download
} from 'lucide-react';

const ClientQuickActions = () => {
  const quickActions = [
    {
      icon: Plus,
      label: 'Request Service',
      description: 'Book a new cleaning service',
      action: () => console.log('Request service clicked'),
      variant: 'default' as const
    },
    {
      icon: Calendar,
      label: 'Schedule Appointment',
      description: 'View and manage appointments',
      action: () => console.log('Schedule appointment clicked'),
      variant: 'outline' as const
    },
    {
      icon: CreditCard,
      label: 'Make Payment',
      description: 'Pay outstanding invoices',
      action: () => console.log('Make payment clicked'),
      variant: 'outline' as const
    },
    {
      icon: FileText,
      label: 'View Invoices',
      description: 'Download billing documents',
      action: () => console.log('View invoices clicked'),
      variant: 'outline' as const
    },
    {
      icon: MessageSquare,
      label: 'Contact Support',
      description: 'Get help or ask questions',
      action: () => console.log('Contact support clicked'),
      variant: 'outline' as const
    },
    {
      icon: Star,
      label: 'Leave Review',
      description: 'Rate our service quality',
      action: () => console.log('Leave review clicked'),
      variant: 'outline' as const
    }
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
              variant={action.variant}
              className="h-20 flex flex-col items-center justify-center space-y-1 p-4"
              onClick={action.action}
            >
              <action.icon className="h-5 w-5" />
              <div className="text-center">
                <div className="text-xs font-medium">{action.label}</div>
                <div className="text-xs text-muted-foreground hidden sm:block">
                  {action.description}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientQuickActions;
