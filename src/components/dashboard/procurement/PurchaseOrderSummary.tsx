
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { ShoppingCart, Plus, Eye } from 'lucide-react';

const PurchaseOrderSummary: React.FC = () => {
  const purchaseOrders = [
    {
      id: 'PO-001',
      supplier: 'ChemClean Supplies',
      amount: 2500,
      status: 'pending',
      date: '2024-01-15',
      items: 5
    },
    {
      id: 'PO-002',
      supplier: 'Equipment Masters',
      amount: 1800,
      status: 'approved',
      date: '2024-01-14',
      items: 3
    },
    {
      id: 'PO-003',
      supplier: 'Uniform Solutions',
      amount: 950,
      status: 'delivered',
      date: '2024-01-12',
      items: 8
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'secondary',
      approved: 'default',
      delivered: 'default',
      cancelled: 'destructive'
    } as const;
    
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-blue-100 text-blue-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    } as const;
    
    return (
      <Badge variant={variants[status as keyof typeof variants]} className={colors[status as keyof typeof colors]}>
        {status}
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Recent Purchase Orders
          </CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New PO
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {purchaseOrders.map(order => (
            <div key={order.id} className="p-4 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{order.id}</h4>
                  <p className="text-sm text-muted-foreground">{order.supplier}</p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(order.status)}
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">${order.amount.toLocaleString()}</span>
                <span className="text-muted-foreground">{order.items} items</span>
                <span className="text-muted-foreground">
                  {new Date(order.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchaseOrderSummary;
