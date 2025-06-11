
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { AlertTriangle } from 'lucide-react';

const OverdueInvoicesList = () => {
  const overdueInvoices = [
    { id: 'INV-2024-0142', client: 'TechCorp Solutions', amount: 4500, daysPastDue: 15, risk: 'medium' },
    { id: 'INV-2024-0138', client: 'Global Industries', amount: 2800, daysPastDue: 8, risk: 'low' },
    { id: 'INV-2024-0135', client: 'StartupXYZ', amount: 1200, daysPastDue: 32, risk: 'high' }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  const getRiskBadge = (risk: string) => {
    const riskConfig = {
      low: { variant: 'default' as const, label: 'Low Risk', color: 'text-green-600' },
      medium: { variant: 'secondary' as const, label: 'Medium Risk', color: 'text-yellow-600' },
      high: { variant: 'destructive' as const, label: 'High Risk', color: 'text-red-600' }
    };

    const config = riskConfig[risk as keyof typeof riskConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
          Overdue Invoices
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {overdueInvoices.map((invoice) => (
          <div key={invoice.id} className="border rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">{invoice.id}</span>
              {getRiskBadge(invoice.risk)}
            </div>
            <p className="text-sm text-muted-foreground">{invoice.client}</p>
            <div className="flex items-center justify-between">
              <span className="font-bold">{formatCurrency(invoice.amount)}</span>
              <span className="text-xs text-red-600">{invoice.daysPastDue} days overdue</span>
            </div>
            <Button size="sm" className="w-full">
              Send Reminder
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default OverdueInvoicesList;
