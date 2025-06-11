
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { 
  CreditCard, 
  Download, 
  Search, 
  Filter, 
  Calendar,
  CheckCircle,
  RefreshCw,
  AlertTriangle,
  DollarSign
} from 'lucide-react';

const PaymentHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [methodFilter, setMethodFilter] = useState('all');

  const payments = [
    {
      id: 'PAY-2024-0078',
      date: '2024-06-10',
      invoiceId: 'INV-2024-0155',
      amount: 450.00,
      method: 'Credit Card',
      cardLast4: '4567',
      status: 'completed',
      description: 'Deep Cleaning Service',
      transactionId: 'TXN-ABC123'
    },
    {
      id: 'PAY-2024-0077',
      date: '2024-05-20',
      invoiceId: 'INV-2024-0153',
      amount: 2700.00,
      method: 'Bank Transfer',
      cardLast4: '',
      status: 'completed',
      description: 'Monthly Cleaning Services - May',
      transactionId: 'TXN-XYZ789'
    },
    {
      id: 'PAY-2024-0076',
      date: '2024-05-13',
      invoiceId: 'INV-2024-0152',
      amount: 380.00,
      method: 'Credit Card',
      cardLast4: '4567',
      status: 'completed',
      description: 'Carpet Cleaning Service',
      transactionId: 'TXN-DEF456'
    },
    {
      id: 'PAY-2024-0075',
      date: '2024-04-22',
      invoiceId: 'INV-2024-0148',
      amount: 2700.00,
      method: 'Credit Card',
      cardLast4: '4567',
      status: 'completed',
      description: 'Monthly Cleaning Services - April',
      transactionId: 'TXN-GHI789'
    },
    {
      id: 'PAY-2024-0074',
      date: '2024-04-15',
      invoiceId: 'INV-2024-0147',
      amount: 650.00,
      method: 'Bank Transfer',
      cardLast4: '',
      status: 'failed',
      description: 'Window Cleaning Service',
      transactionId: 'TXN-JKL012'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { variant: 'default' as const, label: 'Completed', icon: CheckCircle, color: 'text-green-600' },
      pending: { variant: 'secondary' as const, label: 'Pending', icon: RefreshCw, color: 'text-yellow-600' },
      failed: { variant: 'destructive' as const, label: 'Failed', icon: AlertTriangle, color: 'text-red-600' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    const Icon = config.icon;
    return (
      <Badge variant={config.variant} className="flex items-center space-x-1">
        <Icon className="h-3 w-3" />
        <span>{config.label}</span>
      </Badge>
    );
  };

  const getPaymentMethodDisplay = (method: string, cardLast4: string) => {
    if (method === 'Credit Card' && cardLast4) {
      return `${method} ****${cardLast4}`;
    }
    return method;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = 
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.invoiceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesMethod = methodFilter === 'all' || payment.method.toLowerCase() === methodFilter.toLowerCase();
    
    return matchesSearch && matchesMethod;
  });

  const totalPaid = filteredPayments.filter(p => p.status === 'completed').reduce((sum, payment) => sum + payment.amount, 0);
  const failedPayments = filteredPayments.filter(p => p.status === 'failed').length;
  const completedPayments = filteredPayments.filter(p => p.status === 'completed').length;

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Total Paid</p>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(totalPaid)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Completed</p>
                <p className="text-2xl font-bold text-blue-600">{completedPayments}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Failed</p>
                <p className="text-2xl font-bold text-red-600">{failedPayments}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Avg Payment</p>
                <p className="text-2xl font-bold text-purple-600">
                  {formatCurrency(completedPayments > 0 ? totalPaid / completedPayments : 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment History Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Payment History</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search payments..."
                  className="pl-8 pr-4 py-2 border border-input rounded-md text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-3 py-2 border border-input rounded-md text-sm"
                value={methodFilter}
                onChange={(e) => setMethodFilter(e.target.value)}
              >
                <option value="all">All Methods</option>
                <option value="credit card">Credit Card</option>
                <option value="bank transfer">Bank Transfer</option>
              </select>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Invoice</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Button variant="link" className="p-0 h-auto text-sm">
                      {payment.invoiceId}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{payment.description}</p>
                      <p className="text-xs text-muted-foreground">{payment.transactionId}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <CreditCard className="h-3 w-3" />
                      <span className="text-sm">{getPaymentMethodDisplay(payment.method, payment.cardLast4)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{formatCurrency(payment.amount)}</TableCell>
                  <TableCell>{getStatusBadge(payment.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                      {payment.status === 'failed' && (
                        <Button size="sm" variant="outline">
                          <RefreshCw className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentHistory;
