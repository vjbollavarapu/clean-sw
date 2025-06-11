
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { 
  Target,
  Clock,
  DollarSign,
  TrendingUp
} from 'lucide-react';

const BillingMetrics = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Metrics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4 text-blue-500" />
            <span className="text-sm">Collection Rate</span>
          </div>
          <span className="font-bold text-blue-600">94.2%</span>
        </div>
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-green-500" />
            <span className="text-sm">Avg Days to Pay</span>
          </div>
          <span className="font-bold text-green-600">18 days</span>
        </div>
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-purple-500" />
            <span className="text-sm">Monthly Recurring</span>
          </div>
          <span className="font-bold text-purple-600">$45,200</span>
        </div>
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-teal-500" />
            <span className="text-sm">Growth Rate</span>
          </div>
          <span className="font-bold text-teal-600">+8.3%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BillingMetrics;
