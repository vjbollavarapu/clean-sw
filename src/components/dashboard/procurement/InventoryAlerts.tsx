
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { AlertTriangle, Package, ShoppingCart } from 'lucide-react';

interface InventoryAlertsProps {
  inventory: any[];
}

const InventoryAlerts: React.FC<InventoryAlertsProps> = ({ inventory }) => {
  const lowStockItems = inventory.filter(item => item.quantity <= item.minQuantity);
  const criticalItems = inventory.filter(item => item.quantity === 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          Inventory Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {criticalItems.length > 0 && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <h4 className="font-semibold text-destructive mb-2">Critical - Out of Stock</h4>
              <div className="space-y-2">
                {criticalItems.slice(0, 3).map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <Button size="sm" variant="destructive">
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      Order Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {lowStockItems.length > 0 && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Low Stock Items</h4>
              <div className="space-y-2">
                {lowStockItems.slice(0, 5).map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Current: {item.quantity} | Min: {item.minQuantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium text-yellow-800">
                        {item.quantity}/{item.minQuantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {lowStockItems.length === 0 && criticalItems.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Package className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>All inventory levels are healthy!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryAlerts;
