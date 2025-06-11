
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, FileText, DollarSign, AlertTriangle, TrendingUp, Building, Clock, Package } from 'lucide-react';

const PurchaseOrderOverview = () => {
  const monthlyOrderData = [
    { month: 'Jan', orders: 15, value: 18500, approved: 12, pending: 3 },
    { month: 'Feb', orders: 18, value: 22000, approved: 15, pending: 3 },
    { month: 'Mar', orders: 22, value: 28000, approved: 19, pending: 3 },
    { month: 'Apr', orders: 20, value: 25000, approved: 17, pending: 3 },
    { month: 'May', orders: 25, value: 32000, approved: 21, pending: 4 },
    { month: 'Jun', orders: 28, value: 35000, approved: 24, pending: 4 }
  ];

  const categoryBreakdown = [
    { name: 'Cleaning Supplies', value: 45000, color: '#3b82f6' },
    { name: 'Equipment', value: 35000, color: '#10b981' },
    { name: 'Office Supplies', value: 25000, color: '#f59e0b' },
    { name: 'Maintenance', value: 20000, color: '#ef4444' }
  ];

  const recentOrders = [
    {
      id: 'PO-2024-0156',
      supplier: 'ChemClean Supplies',
      amount: 2450,
      status: 'pending',
      requestedDate: '2024-06-15',
      category: 'Cleaning Supplies'
    },
    {
      id: 'PO-2024-0157',
      supplier: 'Equipment Masters',
      amount: 8900,
      status: 'approved',
      requestedDate: '2024-06-14',
      category: 'Equipment'
    },
    {
      id: 'PO-2024-0158',
      supplier: 'Uniform Solutions',
      amount: 1200,
      status: 'delivered',
      requestedDate: '2024-06-12',
      category: 'Uniforms'
    },
    {
      id: 'PO-2024-0159',
      supplier: 'Office Plus',
      amount: 560,
      status: 'pending',
      requestedDate: '2024-06-11',
      category: 'Office Supplies'
    }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { variant: 'secondary' as const, label: 'Pending', color: 'text-orange-600' },
      approved: { variant: 'default' as const, label: 'Approved', color: 'text-blue-600' },
      delivered: { variant: 'default' as const, label: 'Delivered', color: 'text-green-600' },
      cancelled: { variant: 'destructive' as const, label: 'Cancelled', color: 'text-red-600' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Left Column - Charts */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Purchase Order Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyOrderData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => 
                    name === 'value' ? formatCurrency(value as number) : value
                  } />
                  <Bar dataKey="orders" fill="hsl(var(--primary))" name="Orders" radius={4} />
                  <Bar dataKey="value" fill="hsl(var(--secondary))" name="Value ($)" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-6">
              <div className="h-48 w-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {categoryBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => formatCurrency(value as number)} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {categoryBreakdown.map((item) => (
                  <div key={item.name} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}</span>
                    <span className="text-sm font-medium">{formatCurrency(item.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Recent Orders & Actions */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Purchase Orders
              <FileText className="h-4 w-4 text-blue-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{order.id}</h4>
                  {getStatusBadge(order.status)}
                </div>
                <p className="text-sm text-muted-foreground">{order.supplier}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(order.requestedDate).toLocaleDateString()}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-lg">{formatCurrency(order.amount)}</span>
                  <span className="text-xs text-muted-foreground">{order.category}</span>
                </div>
                <Button size="sm" variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="h-4 w-4 mr-2" />
              Create Purchase Order
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Building className="h-4 w-4 mr-2" />
              Manage Suppliers
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Package className="h-4 w-4 mr-2" />
              Check Inventory Levels
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <DollarSign className="h-4 w-4 mr-2" />
              View Budget Status
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Approval Queue
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PurchaseOrderOverview;
