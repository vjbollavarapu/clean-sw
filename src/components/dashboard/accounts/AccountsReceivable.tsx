
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { CreditCard, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const AccountsReceivable = () => {
  // Mock A/R data - in a real app this would come from props or API
  const receivables = [
    {
      id: 'INV-001',
      customer: 'ABC Corporation',
      amount: 15000,
      dueDate: '2024-12-15',
      status: 'overdue',
      daysPastDue: 15
    },
    {
      id: 'INV-002',
      customer: 'XYZ Industries',
      amount: 8500,
      dueDate: '2024-12-20',
      status: 'current',
      daysPastDue: 0
    },
    {
      id: 'INV-003',
      customer: 'Tech Solutions Ltd',
      amount: 12000,
      dueDate: '2024-12-10',
      status: 'overdue',
      daysPastDue: 20
    },
    {
      id: 'INV-004',
      customer: 'Global Services Inc',
      amount: 5500,
      dueDate: '2024-12-25',
      status: 'current',
      daysPastDue: 0
    },
    {
      id: 'INV-005',
      customer: 'Innovation Partners',
      amount: 9200,
      dueDate: '2024-12-18',
      status: 'pending',
      daysPastDue: 0
    }
  ];

  const totalReceivables = receivables.reduce((sum, r) => sum + r.amount, 0);
  const overdueAmount = receivables.filter(r => r.status === 'overdue').reduce((sum, r) => sum + r.amount, 0);
  const currentAmount = receivables.filter(r => r.status === 'current').reduce((sum, r) => sum + r.amount, 0);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'overdue':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'current':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'overdue':
        return 'destructive';
      case 'current':
        return 'default';
      case 'pending':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          <CardTitle>Accounts Receivable</CardTitle>
        </div>
        <Button variant="outline" size="sm">
          Generate Statements
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-muted-foreground">Total A/R</p>
            <p className="text-2xl font-bold text-blue-600">${totalReceivables.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-muted-foreground">Current</p>
            <p className="text-2xl font-bold text-green-600">${currentAmount.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-muted-foreground">Overdue</p>
            <p className="text-2xl font-bold text-red-600">${overdueAmount.toLocaleString()}</p>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Days Past Due</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {receivables.map((receivable) => (
              <TableRow key={receivable.id}>
                <TableCell className="font-medium">{receivable.id}</TableCell>
                <TableCell>{receivable.customer}</TableCell>
                <TableCell className="text-right font-bold">${receivable.amount.toLocaleString()}</TableCell>
                <TableCell>{new Date(receivable.dueDate).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(receivable.status)}
                    <Badge variant={getStatusColor(receivable.status) as any}>
                      {receivable.status}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  {receivable.daysPastDue > 0 ? (
                    <span className="text-red-600 font-medium">{receivable.daysPastDue} days</span>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AccountsReceivable;
