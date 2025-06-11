
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { sampleServiceOrders, sampleClients } from '../../data/sampleData';
import ClientServiceRequest from './client/ClientServiceRequest';
import ClientBillingOverview from './client/ClientBillingOverview';
import ClientUpcomingAppointments from './client/ClientUpcomingAppointments';
import ClientServiceHistory from './client/ClientServiceHistory';
import ClientQuickActions from './client/ClientQuickActions';

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
          Manage your cleaning services and track your account from your personal dashboard.
        </p>
      </div>

      {/* Key Metrics Row */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {clientData?.serviceHistory || 0}
            </div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ${clientData?.totalSpent.toLocaleString() || '0'}
            </div>
            <p className="text-xs text-muted-foreground">Lifetime value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {myOrders.filter(order => order.status === 'in-progress').length}
            </div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {myOrders.filter(order => order.status === 'pending').length}
            </div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <ClientUpcomingAppointments />
          <ClientServiceHistory />
          
          {/* Recent Services */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {myOrders.slice(0, 5).map(order => (
                  <div key={order.id} className="flex justify-between items-center p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div>
                      <p className="font-medium">{order.serviceType}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.scheduledDate).toLocaleDateString()} • {order.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${order.amount}</p>
                      <p className="text-sm text-muted-foreground capitalize">{order.status}</p>
                    </div>
                  </div>
                ))}
                {myOrders.length === 0 && (
                  <p className="text-center text-muted-foreground py-4">
                    No recent services found
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ClientQuickActions />
          <ClientServiceRequest />
          <ClientBillingOverview />
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
