
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Switch } from '../../ui/switch';
import { Settings, Check } from 'lucide-react';

const AutoPaySettings = () => {
  const [autoPayEnabled, setAutoPayEnabled] = useState(true);

  return (
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
  );
};

export default AutoPaySettings;
