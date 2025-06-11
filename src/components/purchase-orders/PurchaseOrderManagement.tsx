
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Search, Filter, Plus, FileText, Eye, Edit, Trash2, Download, Calendar } from 'lucide-react';

const PurchaseOrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [supplierFilter, setSupplierFilter] = useState('all');

  const purchaseOrders = [
    {
      id: 'PO-2024-0156',
      supplier: 'ChemClean Supplies',
      description: 'Monthly cleaning supplies order',
      amount: 2450,
      status: 'pending',
      requestedDate: '2024-06-15',
      requiredDate: '2024-06-25',
      requestedBy: 'John Smith',
      category: 'Cleaning Supplies',
      items: 8
    },
    {
      id: 'PO-2024-0157',
      supplier: 'Equipment Masters',
      description: 'New vacuum cleaners and equipment',
      amount: 8900,
      status: 'approved',
      requestedDate: '2024-06-14',
      requiredDate: '2024-06-20',
      requestedBy: 'Sarah Johnson',
      category: 'Equipment',
      items: 3
    },
    {
      id: 'PO-2024-0158',
      supplier: 'Uniform Solutions',
      description: 'Staff uniforms - Q2 order',
      amount: 1200,
      status: 'delivered',
      requestedDate: '2024-06-12',
      requiredDate: '2024-06-18',
      requestedBy: 'Mike Wilson',
      category: 'Uniforms',
      items: 15
    },
    {
      id: 'PO-2024-0159',
      supplier: 'Office Plus',
      description: 'Office supplies and stationery',
      amount: 560,
      status: 'pending',
      requestedDate: '2024-06-11',
      requiredDate: '2024-06-21',
      requestedBy: 'Emily Davis',
      category: 'Office Supplies',
      items: 12
    },
    {
      id: 'PO-2024-0160',
      supplier: 'Safety First Inc',
      description: 'Safety equipment and PPE',
      amount: 1800,
      status: 'approved',
      requestedDate: '2024-06-10',
      requiredDate: '2024-06-22',
      requestedBy: 'Robert Brown',
      category: 'Safety Equipment',
      items: 6
    }
  ];

  const suppliers = Array.from(new Set(purchaseOrders.map(po => po.supplier)));

  const filteredOrders = purchaseOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    const matchesSupplier = supplierFilter === 'all' || order.supplier === supplierFilter;
    
    return matchesSearch && matchesStatus && matchesSupplier;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { variant: 'secondary' as const, label: 'Pending' },
      approved: { variant: 'default' as const, label: 'Approved' },
      delivered: { variant: 'default' as const, label: 'Delivered' },
      cancelled: { variant: 'destructive' as const, label: 'Cancelled' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Purchase Order Management
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Purchase Order
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search purchase orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>

            <Select value={supplierFilter} onValueChange={setSupplierFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Supplier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Suppliers</SelectItem>
                {suppliers.map(supplier => (
                  <SelectItem key={supplier} value={supplier}>
                    {supplier}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Purchase Orders Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Requested Date</TableHead>
                <TableHead>Required Date</TableHead>
                <TableHead>Requested By</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.supplier}</TableCell>
                  <TableCell className="max-w-48 truncate">{order.description}</TableCell>
                  <TableCell className="font-medium">{formatCurrency(order.amount)}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>{new Date(order.requestedDate).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(order.requiredDate).toLocaleDateString()}</TableCell>
                  <TableCell>{order.requestedBy}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Download className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-destructive">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Showing {filteredOrders.length} of {purchaseOrders.length} purchase orders</span>
            <span>Total Value: {formatCurrency(filteredOrders.reduce((sum, order) => sum + order.amount, 0))}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PurchaseOrderManagement;
