
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Edit } from 'lucide-react';

const BillingAddressSettings = () => {
  return (
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
  );
};

export default BillingAddressSettings;
