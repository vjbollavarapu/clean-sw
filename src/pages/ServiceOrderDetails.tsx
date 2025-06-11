
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, MapPin, DollarSign, User, Clock, FileText, Edit } from 'lucide-react';
import { ServiceOrder } from '@/types';

// Sample data - in a real app this would come from an API
const sampleOrder: ServiceOrder = {
  id: '1',
  clientId: 'client-1',
  clientName: 'ABC Corporation',
  serviceType: 'Office Cleaning',
  status: 'pending',
  assignedEmployees: ['emp-1', 'emp-2'],
  scheduledDate: '2024-06-15T09:00:00Z',
  amount: 250.00,
  location: '123 Business St, Downtown, City 12345',
  notes: 'Weekly office cleaning service. Please focus on conference rooms and kitchen area. Access code: 1234.'
};

const ServiceOrderDetails = () => {
  const { id } = useParams();
  const [order] = useState<ServiceOrder>(sampleOrder);

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
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/orders">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Service Order #{order.id}</h1>
            <p className="text-muted-foreground">View and manage service order details</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link to={`/orders/${id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Order
            </Link>
          </Button>
          {getStatusBadge(order.status)}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    Client
                  </div>
                  <p className="font-medium">{order.clientName}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    Service Type
                  </div>
                  <p className="font-medium">{order.serviceType}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Scheduled Date
                  </div>
                  <p className="font-medium">{formatDate(order.scheduledDate)}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    Service Amount
                  </div>
                  <p className="font-medium text-lg">{formatCurrency(order.amount)}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Service Location
                </div>
                <p className="font-medium">{order.location}</p>
              </div>

              {order.notes && (
                <>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      Notes
                    </div>
                    <p className="text-sm bg-muted p-3 rounded-md">{order.notes}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {order.completedDate && (
            <Card>
              <CardHeader>
                <CardTitle>Completion Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  Completed On
                </div>
                <p className="font-medium">{formatDate(order.completedDate)}</p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                Assign Employees
              </Button>
              <Button className="w-full" variant="outline">
                Update Status
              </Button>
              <Button className="w-full" variant="outline">
                Send Invoice
              </Button>
              <Button className="w-full" variant="outline">
                Contact Client
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assigned Staff</CardTitle>
            </CardHeader>
            <CardContent>
              {order.assignedEmployees.length > 0 ? (
                <div className="space-y-2">
                  {order.assignedEmployees.map((employeeId, index) => (
                    <div key={employeeId} className="text-sm">
                      Employee {index + 1} (ID: {employeeId})
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No employees assigned yet</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceOrderDetails;
