
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { sampleInventory } from '../../data/sampleData';

const ProcurementDashboard = () => {
  const lowStockItems = sampleInventory.filter(item => item.quantity <= item.minQuantity);
  const totalInventoryValue = sampleInventory.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Inventory Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Items:</span>
                <span className="font-bold">{sampleInventory.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Low Stock Items:</span>
                <span className="font-bold text-destructive">{lowStockItems.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Value:</span>
                <span className="font-bold">${totalInventoryValue.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {lowStockItems.map(item => (
                <div key={item.id} className="p-2 border rounded bg-destructive/10">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <span className="text-destructive font-bold">
                      {item.quantity}/{item.minQuantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProcurementDashboard;
