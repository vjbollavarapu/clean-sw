
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { InventoryItem } from '../types';
import { Package, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';

interface InventoryStatsProps {
  inventory: InventoryItem[];
}

const InventoryStats: React.FC<InventoryStatsProps> = ({ inventory }) => {
  const totalItems = inventory.length;
  const lowStockItems = inventory.filter(item => item.quantity <= item.minQuantity).length;
  const outOfStockItems = inventory.filter(item => item.quantity === 0).length;
  const totalValue = inventory.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Items</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalItems}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
          <AlertTriangle className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-600">{lowStockItems}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
          <TrendingUp className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">{outOfStockItems}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          <DollarSign className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">{formatCurrency(totalValue)}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryStats;
