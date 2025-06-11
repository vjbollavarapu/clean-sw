
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RevenueChartProps {
  data: Array<{
    month: string;
    revenue: number;
    expenses: number;
    profit: number;
  }>;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Revenue Trends
        </CardTitle>
        <CardDescription>Monthly revenue, expenses, and profit analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} />
            <Line type="monotone" dataKey="profit" stroke="#ffc658" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
