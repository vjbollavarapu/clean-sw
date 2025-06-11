
import React from 'react';
import RevenueChart from './dashboard/RevenueChart';
import PaymentMethodsChart from './dashboard/PaymentMethodsChart';
import ClientSegmentsChart from './dashboard/ClientSegmentsChart';
import OverdueInvoicesList from './dashboard/OverdueInvoicesList';
import BillingMetrics from './dashboard/BillingMetrics';
import QuickActions from './dashboard/QuickActions';

const BillingDashboard = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Left Column - Main Charts */}
      <div className="lg:col-span-2 space-y-6">
        <RevenueChart />

        <div className="grid gap-6 md:grid-cols-2">
          <PaymentMethodsChart />
          <ClientSegmentsChart />
        </div>
      </div>

      {/* Right Column - Summary & Alerts */}
      <div className="space-y-6">
        <OverdueInvoicesList />
        <BillingMetrics />
        <QuickActions />
      </div>
    </div>
  );
};

export default BillingDashboard;
