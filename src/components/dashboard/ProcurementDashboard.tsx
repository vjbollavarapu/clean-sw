
import React from 'react';
import { sampleInventory } from '../../data/sampleData';
import ProcurementMetrics from './procurement/ProcurementMetrics';
import SupplierOverview from './procurement/SupplierOverview';
import PurchaseOrderSummary from './procurement/PurchaseOrderSummary';
import InventoryAlerts from './procurement/InventoryAlerts';

const ProcurementDashboard = () => {
  return (
    <div className="space-y-6">
      <ProcurementMetrics inventory={sampleInventory} />
      
      <div className="grid gap-6 lg:grid-cols-2">
        <InventoryAlerts inventory={sampleInventory} />
        <SupplierOverview />
      </div>
      
      <PurchaseOrderSummary />
    </div>
  );
};

export default ProcurementDashboard;
