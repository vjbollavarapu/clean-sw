
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Receipt, Clock, AlertTriangle, CheckCircle, Calendar } from 'lucide-react';

const AccountsPayable = () => {
  // Mock A/P data - in a real app this would come from props or API
  const payables = [
    {
      id: 'BILL-001',
      vendor: 'Office Supplies Co',
      amount: 2500,
      dueDate: '2024-12-18',
      status: 'pending',
      description: 'Office supplies and equipment'
    },
    {
      id: 'BILL-002',
      vendor: 'Cleaning Solutions Ltd',
      amount: 1800,
      dueDate: '2024-12-12',
      status: 'overdue',
      description: 'Monthly cleaning supplies'
    },
    {
      id: 'BILL-003',
      vendor: 'Tech Equipment Inc',
      amount: 15000,
      dueDate: '2024-12-25',
      status: 'approved',
      description: 'Computer hardware upgrade'
    },
    {
      id: 'BILL-004',
      vendor: 'Utility Company',
      amount: 850,
      dueDate: '2024-12-15',
      status: 'pending',
      description: 'Monthly utility bill'
    },
    {
      id: 'BILL-005',
      vendor: 'Marketing Agency',
      amount: 5500,
      dueDate: '2024-12-30',
      status: 'draft',
      description: 'Digital marketing campaign'
    }
  ];

  const totalPayables = payables.reduce((sum, p) => sum + p.amount, 0);
  const overdueAmount = payables.filter(p => p.status === 'overdue').reduce((sum, p) => sum + p.amount, 0);
  const pendingAmount = payables.filter(p => p.status === 'pending' || p.status === 'approved').reduce((sum, p) => sum + p.amount, 0);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'overdue':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'draft':
        return <Calendar className="h-4 w-4 text-gray-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'overdue':
        return 'destructive';
      case 'approved':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'draft':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Receipt className="h-5 w-5" />
          <CardTitle>Accounts Payable</CardTitle>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Pay Bills
          </Button>
          <Button variant="outline" size="sm">
            Schedule Payments
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-orange-50 rounded-lg">
            <p className="text-sm text-muted-foreground">Total A/P</p>
            <p className="text-2xl font-bold text-orange-600">${totalPayables.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">${pendingAmount.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-muted-foreground">Overdue</p>
            <p className="text-2xl font-bold text-red-600">${overdueAmount.toLocaleString()}</p>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bill ID</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payables.map((payable) => (
              <TableRow key={payable.id}>
                <TableCell className="font-medium">{payable.id}</TableCell>
                <TableCell>{payable.vendor}</TableCell>
                <TableCell className="max-w-xs truncate">{payable.description}</TableCell>
                <TableCell className="text-right font-bold">${payable.amount.toLocaleString()}</TableCell>
                <TableCell>{new Date(payable.dueDate).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(payable.status)}
                    <Badge variant={getStatusColor(payable.status) as any}>
                      {payable.status}
                    </Badge>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AccountsPayable;
