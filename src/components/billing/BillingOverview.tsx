
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, CreditCard, Download, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';

const BillingOverview = () => {
  const monthlySpendData = [
    { month: 'Jan', amount: 2800, services: 2400, products: 400 },
    { month: 'Feb', amount: 3200, services: 2700, products: 500 },
    { month: 'Mar', amount: 2900, services: 2500, products: 400 },
    { month: 'Apr', amount: 3100, services: 2600, products: 500 },
    { month: 'May', amount: 3350, services: 2850, products: 500 },
    { month: 'Jun', amount: 3200, services: 2700, products: 500 }
  ];

  const serviceBreakdown = [
    { name: 'Regular Cleaning', value: 1800, color: '#3b82f6' },
    { name: 'Deep Cleaning', value: 650, color: '#10b981' },
    { name: 'Window Cleaning', value: 250, color: '#f59e0b' },
    { name: 'Supplies & Products', value: 500, color: '#ef4444' }
  ];

  const upcomingPayments = [
    {
      id: 1,
      description: 'Monthly Cleaning Services',
      amount: 2700,
      dueDate: '2024-06-20',
      status: 'due',
      invoiceNumber: 'INV-2024-0156'
    },
    {
      id: 2,
      description: 'Deep Cleaning Service',
      amount: 450,
      dueDate: '2024-06-25',
      status: 'upcoming',
      invoiceNumber: 'INV-2024-0157'
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
      due: { variant: 'destructive' as const, label: 'Due Now' },
      upcoming: { variant: 'secondary' as const, label: 'Upcoming' },
      overdue: { variant: 'destructive' as const, label: 'Overdue' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.upcoming;
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
              Monthly Spending Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlySpendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [formatCurrency(value as number), name]} />
                  <Bar dataKey="services" fill="hsl(var(--primary))" name="Services" radius={4} />
                  <Bar dataKey="products" fill="hsl(var(--secondary))" name="Products" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Cost Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-6">
              <div className="h-48 w-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serviceBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {serviceBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => formatCurrency(value as number)} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {serviceBreakdown.map((item) => (
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

      {/* Right Column - Upcoming Payments & Actions */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Upcoming Payments
              <AlertTriangle className="h-4 w-4 text-orange-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingPayments.map((payment) => (
              <div key={payment.id} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{payment.description}</h4>
                  {getStatusBadge(payment.status)}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  Due: {new Date(payment.dueDate).toLocaleDateString()}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-lg">{formatCurrency(payment.amount)}</span>
                  <span className="text-xs text-muted-foreground">{payment.invoiceNumber}</span>
                </div>
                <Button size="sm" className="w-full">
                  <CreditCard className="h-3 w-3 mr-1" />
                  Pay Now
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
              <Download className="h-4 w-4 mr-2" />
              Download Statement
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <CreditCard className="h-4 w-4 mr-2" />
              Update Payment Method
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <DollarSign className="h-4 w-4 mr-2" />
              View Billing History
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Report Billing Issue
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BillingOverview;
