
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Eye, Edit, Calendar, MapPin, DollarSign } from 'lucide-react';
import { ServiceOrder } from '@/types';

// Sample data for demonstration
const sampleOrders: ServiceOrder[] = [
  {
    id: '1',
    clientId: 'client-1',
    clientName: 'ABC Corporation',
    serviceType: 'Office Cleaning',
    status: 'pending',
    assignedEmployees: ['emp-1', 'emp-2'],
    scheduledDate: '2024-06-15T09:00:00Z',
    amount: 250.00,
    location: '123 Business St, Downtown',
    notes: 'Weekly office cleaning service'
  },
  {
    id: '2',
    clientId: 'client-2',
    clientName: 'XYZ Restaurant',
    serviceType: 'Deep Kitchen Cleaning',
    status: 'in-progress',
    assignedEmployees: ['emp-3'],
    scheduledDate: '2024-06-14T14:00:00Z',
    amount: 450.00,
    location: '456 Food Ave, Restaurant District'
  },
  {
    id: '3',
    clientId: 'client-3',
    clientName: 'Tech Startup Inc',
    serviceType: 'Carpet Cleaning',
    status: 'completed',
    assignedEmployees: ['emp-1'],
    scheduledDate: '2024-06-12T10:00:00Z',
    completedDate: '2024-06-12T15:30:00Z',
    amount: 180.00,
    location: '789 Innovation Blvd, Tech Park'
  }
];

const ServiceOrders = () => {
  const [orders] = useState<ServiceOrder[]>(sampleOrders);

  const getStatusBadge = (status: ServiceOrder['status']) => {
    const statusConfig = {
      pending: { variant: 'secondary' as const, label: 'Pending' },
      'in-progress': { variant: 'default' as const, label: 'In Progress' },
      completed: { variant: 'outline' as const, label: 'Completed' },
      cancelled: { variant: 'destructive' as const, label: 'Cancelled' }
    };

    const config = statusConfig[status];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Service Orders</h1>
          <p className="text-muted-foreground">Manage and track all service orders</p>
        </div>
        <Button asChild>
          <Link to="/orders/new">
            <Plus className="mr-2 h-4 w-4" />
            New Order
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Service Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Scheduled Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">#{order.id}</TableCell>
                  <TableCell>{order.clientName}</TableCell>
                  <TableCell>{order.serviceType}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {formatDate(order.scheduledDate)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      ${order.amount.toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 max-w-32 truncate">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      {order.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/orders/${order.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/orders/${order.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
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

export default ServiceOrders;
