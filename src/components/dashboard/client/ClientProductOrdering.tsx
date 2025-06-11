
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Package, Plus, ShoppingCart, Truck } from 'lucide-react';

const ClientProductOrdering = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const recentOrders = [
    {
      id: 'PO-2024-001',
      date: '2024-06-10',
      items: ['Floor Cleaner (5L) x4', 'Microfiber Cloths x20', 'Vacuum Bags x10'],
      total: 245.50,
      status: 'delivered',
      deliveryDate: '2024-06-12'
    },
    {
      id: 'PO-2024-002',
      date: '2024-06-08',
      items: ['Industrial Scrubber Pads x12', 'Disinfectant (2L) x6'],
      total: 189.25,
      status: 'in-transit',
      deliveryDate: '2024-06-15'
    },
    {
      id: 'PO-2024-003',
      date: '2024-06-05',
      items: ['Carpet Cleaner Machine (Rental)', 'Spot Remover x3'],
      total: 420.00,
      status: 'pending',
      deliveryDate: '2024-06-18'
    }
  ];

  const availableProducts = [
    { id: 1, name: 'Multi-Surface Cleaner', category: 'Cleaning Solutions', price: 12.50, unit: '1L bottle' },
    { id: 2, name: 'Industrial Floor Scrubber', category: 'Equipment', price: 2500.00, unit: 'per unit' },
    { id: 3, name: 'Microfiber Cleaning Cloths', category: 'Supplies', price: 2.50, unit: 'per cloth' },
    { id: 4, name: 'HEPA Vacuum Filter', category: 'Supplies', price: 35.00, unit: 'per filter' },
    { id: 5, name: 'Glass Cleaner', category: 'Cleaning Solutions', price: 8.75, unit: '500ml bottle' },
    { id: 6, name: 'Carpet Cleaning Machine', category: 'Equipment Rental', price: 150.00, unit: 'per day' }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      delivered: 'default',
      'in-transit': 'secondary',
      pending: 'outline'
    } as const;
    
    return <Badge variant={variants[status as keyof typeof variants]}>{status.replace('-', ' ')}</Badge>;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Package className="h-5 w-5 mr-2" />
            Product Ordering
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1" />
            New Order
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-1 mb-4">
          <Button
            variant={activeTab === 'recent' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('recent')}
          >
            Recent Orders
          </Button>
          <Button
            variant={activeTab === 'catalog' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('catalog')}
          >
            Product Catalog
          </Button>
        </div>

        {activeTab === 'recent' && (
          <div className="space-y-4">
            {recentOrders.map(order => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">Ordered on {formatDate(order.date)}</p>
                  </div>
                  {getStatusBadge(order.status)}
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm">
                    <p className="font-medium mb-1">Items:</p>
                    <ul className="text-muted-foreground space-y-1">
                      {order.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Truck className="h-4 w-4" />
                      <span>Expected: {formatDate(order.deliveryDate)}</span>
                    </div>
                    <p className="font-medium">{formatCurrency(order.total)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="space-y-3">
            {availableProducts.map(product => (
              <div key={product.id} className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <p className="text-xs text-muted-foreground">{product.unit}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{formatCurrency(product.price)}</p>
                  <Button size="sm" variant="outline">
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ClientProductOrdering;
