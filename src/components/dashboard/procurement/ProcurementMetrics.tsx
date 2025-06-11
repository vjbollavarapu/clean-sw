
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { TrendingUp, TrendingDown, Package, AlertTriangle } from 'lucide-react';

interface ProcurementMetricsProps {
  inventory: any[];
}

const ProcurementMetrics: React.FC<ProcurementMetricsProps> = ({ inventory }) => {
  const lowStockItems = inventory.filter(item => item.quantity <= item.minQuantity);
  const totalInventoryValue = inventory.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  const outOfStockItems = inventory.filter(item => item.quantity === 0);
  const totalItems = inventory.length;

  const metrics = [
    {
      title: 'Total Inventory Value',
      value: `$${totalInventoryValue.toLocaleString()}`,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Total Items',
      value: totalItems.toString(),
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Low Stock Items',
      value: lowStockItems.length.toString(),
      icon: AlertTriangle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Out of Stock',
      value: outOfStockItems.length.toString(),
      icon: TrendingDown,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
              </div>
              <div className={`p-3 rounded-full ${metric.bgColor}`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProcurementMetrics;
