
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { DollarSign, FileText, Clock, CreditCard } from 'lucide-react';

const ClientBillingOverview = () => {
  // Mock billing data
  const billingData = {
    currentBalance: 2450.00,
    lastPayment: {
      amount: 750.00,
      date: '2024-06-05',
      method: 'Credit Card'
    },
    nextDue: {
      amount: 850.00,
      date: '2024-06-20'
    },
    recentInvoices: [
      { id: 'INV-2024-001', amount: 750.00, date: '2024-06-01', status: 'paid' },
      { id: 'INV-2024-002', amount: 850.00, date: '2024-06-15', status: 'pending' },
      { id: 'INV-2024-003', amount: 920.00, date: '2024-06-25', status: 'draft' }
    ]
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      paid: 'default',
      pending: 'destructive',
      draft: 'secondary'
    } as const;
    
    return <Badge variant={variants[status as keyof typeof variants]}>{status}</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <DollarSign className="h-5 w-5 mr-2" />
          Billing Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Balance</p>
                <p className="text-2xl font-bold">{formatCurrency(billingData.currentBalance)}</p>
              </div>
              <CreditCard className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Next Due</p>
                <p className="text-2xl font-bold text-destructive">{formatCurrency(billingData.nextDue.amount)}</p>
                <p className="text-xs text-muted-foreground">{billingData.nextDue.date}</p>
              </div>
              <Clock className="h-8 w-8 text-destructive" />
            </div>
          </div>
        </div>

        {/* Last Payment */}
        <div className="p-4 border rounded-lg">
          <h4 className="font-medium mb-2">Last Payment</h4>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">{formatCurrency(billingData.lastPayment.amount)}</p>
              <p className="text-sm text-muted-foreground">{billingData.lastPayment.date} • {billingData.lastPayment.method}</p>
            </div>
            <Badge variant="outline">Completed</Badge>
          </div>
        </div>

        {/* Recent Invoices */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium">Recent Invoices</h4>
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-1" />
              View All
            </Button>
          </div>
          <div className="space-y-2">
            {billingData.recentInvoices.map(invoice => (
              <div key={invoice.id} className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{invoice.id}</p>
                  <p className="text-sm text-muted-foreground">{invoice.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{formatCurrency(invoice.amount)}</p>
                  {getStatusBadge(invoice.status)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full">
          <CreditCard className="h-4 w-4 mr-2" />
          Make Payment
        </Button>
      </CardContent>
    </Card>
  );
};

export default ClientBillingOverview;
