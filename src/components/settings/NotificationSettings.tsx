
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Mail, Bell, MessageSquare, Send, Save, TestTube } from 'lucide-react';

const NotificationSettings = () => {
  const [emailSettings, setEmailSettings] = useState({
    smtpServer: 'smtp.gmail.com',
    smtpPort: 587,
    smtpUsername: 'notifications@cleansw.com',
    smtpPassword: '••••••••',
    enableSSL: true,
    fromName: 'CleanSW System',
    fromEmail: 'noreply@cleansw.com'
  });

  const [notificationTypes, setNotificationTypes] = useState([
    {
      id: 'user_registration',
      name: 'User Registration',
      description: 'New user account created',
      email: true,
      system: true,
      mobile: false
    },
    {
      id: 'service_order',
      name: 'Service Orders',
      description: 'New service orders and updates',
      email: true,
      system: true,
      mobile: true
    },
    {
      id: 'payment_received',
      name: 'Payment Received',
      description: 'Payment confirmations',
      email: true,
      system: true,
      mobile: false
    },
    {
      id: 'system_alerts',
      name: 'System Alerts',
      description: 'Critical system notifications',
      email: true,
      system: true,
      mobile: true
    },
    {
      id: 'maintenance',
      name: 'Maintenance',
      description: 'Scheduled maintenance notifications',
      email: true,
      system: false,
      mobile: false
    }
  ]);

  const handleEmailSettingChange = (key: string, value: any) => {
    setEmailSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleNotificationChange = (id: string, type: string, value: boolean) => {
    setNotificationTypes(prev => prev.map(notification => 
      notification.id === id 
        ? { ...notification, [type]: value }
        : notification
    ));
  };

  const handleSave = () => {
    console.log('Saving notification settings:', { emailSettings, notificationTypes });
    // Here you would typically save to backend
  };

  const testEmailConnection = () => {
    console.log('Testing email connection...');
    // Here you would test the SMTP connection
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Email Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Email Configuration
          </CardTitle>
          <CardDescription>SMTP server settings for sending emails</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="smtpServer">SMTP Server</Label>
              <Input
                id="smtpServer"
                value={emailSettings.smtpServer}
                onChange={(e) => handleEmailSettingChange('smtpServer', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpPort">Port</Label>
              <Input
                id="smtpPort"
                type="number"
                value={emailSettings.smtpPort}
                onChange={(e) => handleEmailSettingChange('smtpPort', parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="smtpUsername">Username</Label>
            <Input
              id="smtpUsername"
              value={emailSettings.smtpUsername}
              onChange={(e) => handleEmailSettingChange('smtpUsername', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="smtpPassword">Password</Label>
            <Input
              id="smtpPassword"
              type="password"
              value={emailSettings.smtpPassword}
              onChange={(e) => handleEmailSettingChange('smtpPassword', e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label>Enable SSL/TLS</Label>
            <Switch
              checked={emailSettings.enableSSL}
              onCheckedChange={(checked) => handleEmailSettingChange('enableSSL', checked)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fromName">From Name</Label>
              <Input
                id="fromName"
                value={emailSettings.fromName}
                onChange={(e) => handleEmailSettingChange('fromName', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fromEmail">From Email</Label>
              <Input
                id="fromEmail"
                type="email"
                value={emailSettings.fromEmail}
                onChange={(e) => handleEmailSettingChange('fromEmail', e.target.value)}
              />
            </div>
          </div>
          <Button variant="outline" className="w-full" onClick={testEmailConnection}>
            <TestTube className="h-4 w-4 mr-2" />
            Test Connection
          </Button>
        </CardContent>
      </Card>

      {/* Notification Templates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Email Templates
          </CardTitle>
          <CardDescription>Customize notification email templates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="templateType">Template Type</Label>
            <Select defaultValue="welcome">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="welcome">Welcome Email</SelectItem>
                <SelectItem value="order_confirmation">Order Confirmation</SelectItem>
                <SelectItem value="password_reset">Password Reset</SelectItem>
                <SelectItem value="system_alert">System Alert</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="emailSubject">Email Subject</Label>
            <Input
              id="emailSubject"
              placeholder="Welcome to CleanSW!"
              defaultValue="Welcome to CleanSW!"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="emailBody">Email Body</Label>
            <Textarea
              id="emailBody"
              rows={6}
              placeholder="Enter email template content..."
              defaultValue="Welcome to CleanSW! Your account has been successfully created."
            />
          </div>
          <Button variant="outline" className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Preview Template
          </Button>
        </CardContent>
      </Card>

      {/* Notification Types */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Types
          </CardTitle>
          <CardDescription>Configure which notifications to send and through which channels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notificationTypes.map((notification) => (
              <div key={notification.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{notification.name}</h4>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center justify-between">
                    <Label>Email</Label>
                    <Switch
                      checked={notification.email}
                      onCheckedChange={(checked) => handleNotificationChange(notification.id, 'email', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>System</Label>
                    <Switch
                      checked={notification.system}
                      onCheckedChange={(checked) => handleNotificationChange(notification.id, 'system', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Mobile</Label>
                    <Switch
                      checked={notification.mobile}
                      onCheckedChange={(checked) => handleNotificationChange(notification.id, 'mobile', checked)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Card className="md:col-span-2">
        <CardContent className="pt-6">
          <Button onClick={handleSave} className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Save Notification Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationSettings;
