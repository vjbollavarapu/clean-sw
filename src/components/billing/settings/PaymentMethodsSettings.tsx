
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { CreditCard, Plus, Edit, Trash2 } from 'lucide-react';

const PaymentMethodsSettings = () => {
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

  return (
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
  );
};

export default PaymentMethodsSettings;
