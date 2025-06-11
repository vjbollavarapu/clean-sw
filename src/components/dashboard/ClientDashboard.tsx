
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { sampleServiceOrders, sampleClients } from '../../data/sampleData';
import ClientServiceRequest from './client/ClientServiceRequest';
import ClientBillingOverview from './client/ClientBillingOverview';
import ClientUpcomingAppointments from './client/ClientUpcomingAppointments';
import ClientServiceHistory from './client/ClientServiceHistory';
import ClientQuickActions from './client/ClientQuickActions';
import ClientContractInfo from './client/ClientContractInfo';
import ClientAssignedCleaners from './client/ClientAssignedCleaners';
import ClientProductOrdering from './client/ClientProductOrdering';
import ClientExecutiveContact from './client/ClientExecutiveContact';
import ClientLocationManagement from './client/ClientLocationManagement';

interface ClientDashboardProps {
  user: any;
}

const ClientDashboard = ({ user }: ClientDashboardProps) => {
  const myOrders = sampleServiceOrders.filter(order => order.clientId === user.id);
  const clientData = sampleClients.find(c => c.id === user.id);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h2>
        <p className="text-muted-foreground">
          Manage your cleaning contract, assigned staff, and service requirements from your dashboard.
        </p>
      </div>

      {/* Key Metrics Row */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Contract Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Active</div>
            <p className="text-xs text-muted-foreground">12 months remaining</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Assigned Cleaners</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">8</div>
            <p className="text-xs text-muted-foreground">Across 3 locations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">3</div>
            <p className="text-xs text-muted-foreground">Under contract</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$8,500</div>
            <p className="text-xs text-muted-foreground">Services + Products</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <ClientContractInfo />
          <ClientAssignedCleaners />
          <ClientLocationManagement />
          <ClientProductOrdering />
          <ClientServiceHistory />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ClientExecutiveContact />
          <ClientQuickActions />
          <ClientUpcomingAppointments />
          <ClientBillingOverview />
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
