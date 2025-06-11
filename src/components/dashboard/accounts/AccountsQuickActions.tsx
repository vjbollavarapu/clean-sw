
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Plus, FileText, CreditCard, BarChart3, Download, Calculator } from 'lucide-react';

const AccountsQuickActions = () => {
  const actions = [
    {
      icon: Plus,
      label: 'Add Transaction',
      description: 'Record new income or expense',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: FileText,
      label: 'Generate Report',
      description: 'Create financial summary',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Calculator,
      label: 'Tax Calculator',
      description: 'Estimate tax obligations',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      icon: Download,
      label: 'Export Data',
      description: 'Download transactions',
      color: 'bg-orange-500 hover:bg-orange-600'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action, index) => (
          <Button 
            key={index}
            variant="outline" 
            className="w-full justify-start h-auto p-4"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg text-white ${action.color}`}>
                <action.icon className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="font-medium">{action.label}</p>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default AccountsQuickActions;
