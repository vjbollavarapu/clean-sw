
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const PaymentMethodsChart = () => {
  const paymentMethodData = [
    { name: 'Credit Card', value: 45, color: '#3b82f6' },
    { name: 'Bank Transfer', value: 30, color: '#10b981' },
    { name: 'Check', value: 15, color: '#f59e0b' },
    { name: 'Cash', value: 10, color: '#ef4444' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-6">
          <div className="h-32 w-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={paymentMethodData}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={60}
                  dataKey="value"
                >
                  {paymentMethodData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-1">
            {paymentMethodData.map((item) => (
              <div key={item.name} className="flex items-center space-x-2">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs">{item.name}</span>
                <span className="text-xs font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodsChart;
