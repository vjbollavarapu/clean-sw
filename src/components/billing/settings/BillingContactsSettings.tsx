
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { Mail, Plus, Edit, Trash2 } from 'lucide-react';

const BillingContactsSettings = () => {
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

  return (
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
  );
};

export default BillingContactsSettings;
