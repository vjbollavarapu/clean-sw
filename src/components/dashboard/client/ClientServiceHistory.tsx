
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const ClientServiceHistory = () => {
  // Mock service history data for chart
  const chartData = [
    { month: 'Jan', services: 4, amount: 1200 },
    { month: 'Feb', services: 6, amount: 1800 },
    { month: 'Mar', services: 3, amount: 900 },
    { month: 'Apr', services: 8, amount: 2400 },
    { month: 'May', services: 5, amount: 1500 },
    { month: 'Jun', services: 7, amount: 2100 }
  ];

  const totalServices = chartData.reduce((sum, month) => sum + month.services, 0);
  const totalAmount = chartData.reduce((sum, month) => sum + month.amount, 0);
  const avgMonthly = Math.round(totalServices / chartData.length);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="h-5 w-5 mr-2" />
          Service History (Last 6 Months)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-muted rounded-lg">
            <p className="text-2xl font-bold text-primary">{totalServices}</p>
            <p className="text-sm text-muted-foreground">Total Services</p>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <p className="text-2xl font-bold text-green-600">{formatCurrency(totalAmount)}</p>
            <p className="text-sm text-muted-foreground">Total Spent</p>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <p className="text-2xl font-bold text-blue-600">{avgMonthly}</p>
            <p className="text-sm text-muted-foreground">Avg/Month</p>
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [
                  name === 'services' ? value : formatCurrency(value as number),
                  name === 'services' ? 'Services' : 'Amount'
                ]}
              />
              <Bar dataKey="services" fill="hsl(var(--primary))" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientServiceHistory;
