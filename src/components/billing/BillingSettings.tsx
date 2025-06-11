
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { 
  CreditCard, 
  Bell, 
  Mail, 
  Calendar, 
  Settings, 
  Plus,
  Trash2,
  Edit,
  Check,
  AlertCircle
} from 'lucide-react';

const BillingSettings = () => {
  const [autoPayEnabled, setAutoPayEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [invoiceReminders, setInvoiceReminders] = useState(true);

  const paymentMethods = [
    {
      id: 1,
      type: 'Credit Card',
      brand: 'Visa',
      last4: '4567',
      expiry: '12/26',
      isDefault: true,
      isActive: true
    },
    {
      id: 2,
      type: 'Bank Account',
      brand: 'Checking',
      last4: '8901',
      expiry: '',
      isDefault: false,
      isActive: true
    }
  ];

  const billingContacts = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@company.com',
      role: 'Finance Manager',
      isPrimary: true
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      role: 'Accounts Payable',
      isPrimary: false
    }
  ];

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
    <div className="space-y-6">
      {/* Auto-Pay Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Auto-Pay Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">Automatic Payments</h4>
              <p className="text-sm text-muted-foreground">
                Automatically pay invoices on their due date using your default payment method
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Switch 
                checked={autoPayEnabled} 
                onCheckedChange={setAutoPayEnabled}
              />
              <Badge variant={autoPayEnabled ? "default" : "secondary"}>
                {autoPayEnabled ? "Enabled" : "Disabled"}
              </Badge>
            </div>
          </div>

          {autoPayEnabled && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">Auto-Pay Active</span>
              </div>
              <p className="text-sm text-green-700 mt-1">
                Payments will be automatically processed using Visa ****4567
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Payment Methods
            </CardTitle>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Method
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{method.brand} ****{method.last4}</span>
                    {method.isDefault && (
                      <Badge variant="outline">Default</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {method.type} {method.expiry && `• Expires ${method.expiry}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline">
                  <Edit className="h-3 w-3" />
                </Button>
                {!method.isDefault && (
                  <Button size="sm" variant="outline">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Notification Preferences */}
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

      {/* Billing Contacts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Billing Contacts
            </CardTitle>
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Contact
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {billingContacts.map((contact) => (
            <div key={contact.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{contact.name}</span>
                  {contact.isPrimary && (
                    <Badge variant="outline">Primary</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{contact.email}</p>
                <p className="text-xs text-muted-foreground">{contact.role}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline">
                  <Edit className="h-3 w-3" />
                </Button>
                {!contact.isPrimary && (
                  <Button size="sm" variant="outline">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Billing Address */}
      <Card>
        <CardHeader>
          <CardTitle>Billing Address</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 border rounded-lg">
            <div className="space-y-1">
              <p className="font-medium">ABC Corporation</p>
              <p className="text-sm text-muted-foreground">123 Business Ave, Suite 100</p>
              <p className="text-sm text-muted-foreground">New York, NY 10001</p>
              <p className="text-sm text-muted-foreground">United States</p>
            </div>
            <Button variant="outline" className="mt-3">
              <Edit className="h-3 w-3 mr-1" />
              Edit Address
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingSettings;
