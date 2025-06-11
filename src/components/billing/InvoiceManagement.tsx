
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { 
  Download, 
  Eye, 
  CreditCard, 
  Search, 
  Filter, 
  Calendar,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

const InvoiceManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const invoices = [
    {
      id: 'INV-2024-0156',
      date: '2024-06-15',
      dueDate: '2024-06-20',
      description: 'Monthly Cleaning Services - June 2024',
      amount: 2700.00,
      status: 'pending',
      serviceType: 'Regular Cleaning'
    },
    {
      id: 'INV-2024-0155',
      date: '2024-06-10',
      dueDate: '2024-06-15',
      description: 'Deep Cleaning Service - Conference Room A',
      amount: 450.00,
      status: 'paid',
      serviceType: 'Deep Cleaning'
    },
    {
      id: 'INV-2024-0154',
      date: '2024-05-28',
      dueDate: '2024-06-02',
      description: 'Window Cleaning - Building Exterior',
      amount: 650.00,
      status: 'overdue',
      serviceType: 'Window Cleaning'
    },
    {
      id: 'INV-2024-0153',
      date: '2024-05-15',
      dueDate: '2024-05-20',
      description: 'Monthly Cleaning Services - May 2024',
      amount: 2700.00,
      status: 'paid',
      serviceType: 'Regular Cleaning'
    },
    {
      id: 'INV-2024-0152',
      date: '2024-05-08',
      dueDate: '2024-05-13',
      description: 'Carpet Cleaning - Main Office',
      amount: 380.00,
      status: 'paid',
      serviceType: 'Carpet Cleaning'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      paid: { variant: 'default' as const, label: 'Paid', icon: CheckCircle, color: 'text-green-600' },
      pending: { variant: 'secondary' as const, label: 'Pending', icon: Clock, color: 'text-yellow-600' },
      overdue: { variant: 'destructive' as const, label: 'Overdue', icon: AlertCircle, color: 'text-red-600' }
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

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = 
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.serviceType.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const totalAmount = filteredInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const pendingAmount = filteredInvoices.filter(inv => inv.status === 'pending').reduce((sum, invoice) => sum + invoice.amount, 0);
  const overdueAmount = filteredInvoices.filter(inv => inv.status === 'overdue').reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Total Invoices</p>
                <p className="text-2xl font-bold">{filteredInvoices.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 bg-green-500 rounded" />
              <div>
                <p className="text-sm font-medium">Total Amount</p>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(totalAmount)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-yellow-500" />
              <div>
                <p className="text-sm font-medium">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{formatCurrency(pendingAmount)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Overdue</p>
                <p className="text-2xl font-bold text-red-600">{formatCurrency(overdueAmount)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Invoice Management</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search invoices..."
                  className="pl-8 pr-4 py-2 border border-input rounded-md text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-3 py-2 border border-input rounded-md text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice #</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{new Date(invoice.date).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{invoice.description}</p>
                      <p className="text-xs text-muted-foreground">{invoice.serviceType}</p>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{formatCurrency(invoice.amount)}</TableCell>
                  <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                      {invoice.status !== 'paid' && (
                        <Button size="sm">
                          <CreditCard className="h-3 w-3" />
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

export default InvoiceManagement;
