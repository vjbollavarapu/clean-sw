
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const RevenueChart = () => {
  const monthlyRevenueData = [
    { month: 'Jan', revenue: 18500, invoices: 45, paid: 40, overdue: 3 },
    { month: 'Feb', revenue: 22300, invoices: 52, paid: 48, overdue: 2 },
    { month: 'Mar', revenue: 19800, invoices: 48, paid: 45, overdue: 1 },
    { month: 'Apr', revenue: 25600, invoices: 58, paid: 54, overdue: 2 },
    { month: 'May', revenue: 28200, invoices: 64, paid: 59, overdue: 3 },
    { month: 'Jun', revenue: 31500, invoices: 72, paid: 68, overdue: 2 }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Revenue Trend</span>
          <Badge variant="outline" className="bg-green-50 text-green-700">
            <TrendingUp className="h-3 w-3 mr-1" />
            +12.5% vs last period
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value, name) => [
                name === 'revenue' ? formatCurrency(value as number) : value,
                name === 'revenue' ? 'Revenue' : name
              ]} />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="hsl(var(--primary))" 
                fill="hsl(var(--primary))" 
                fillOpacity={0.1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
