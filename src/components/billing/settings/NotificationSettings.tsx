
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Switch } from '../../ui/switch';
import { Bell, Mail } from 'lucide-react';

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [invoiceReminders, setInvoiceReminders] = useState(true);

  const notificationSettings = [
    {
      id: 'invoice_due',
      title: 'Invoice Due Reminders',
      description: 'Get notified 3 days before invoice due date',
      enabled: invoiceReminders,
      setter: setInvoiceReminders
    },
    {
      id: 'payment_confirmation',
      title: 'Payment Confirmations',
      description: 'Receive confirmation when payments are processed',
      enabled: emailNotifications,
      setter: setEmailNotifications
    },
    {
      id: 'failed_payment',
      title: 'Failed Payment Alerts',
      description: 'Immediate alerts for failed payment attempts',
      enabled: true,
      setter: () => {} // Always enabled
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell className="h-5 w-5 mr-2" />
          Notification Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notificationSettings.map((setting) => (
          <div key={setting.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">{setting.title}</h4>
              <p className="text-sm text-muted-foreground">{setting.description}</p>
            </div>
            <Switch 
              checked={setting.enabled} 
              onCheckedChange={setting.setter}
              disabled={setting.id === 'failed_payment'}
            />
          </div>
        ))}

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="h-4 w-4" />
              <span className="font-medium">Email Notifications</span>
            </div>
            <Switch 
              checked={emailNotifications} 
              onCheckedChange={setEmailNotifications}
            />
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Bell className="h-4 w-4" />
              <span className="font-medium">SMS Notifications</span>
            </div>
            <Switch 
              checked={smsNotifications} 
              onCheckedChange={setSmsNotifications}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
