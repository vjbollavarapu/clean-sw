
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { sampleServiceOrders, sampleClients } from '../../data/sampleData';

interface ClientDashboardProps {
  user: any;
}

const ClientDashboard = ({ user }: ClientDashboardProps) => {
  const myOrders = sampleServiceOrders.filter(order => order.clientId === user.id);
  const clientData = sampleClients.find(c => c.id === user.id);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Account Summary</CardTitle>
          </CardHeader>
          <CardContent>
            {clientData && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Services:</span>
                  <span className="font-bold">{clientData.serviceHistory}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Spent:</span>
                  <span className="font-bold">${clientData.totalSpent.toLocaleString()}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {myOrders.map(order => (
                <div key={order.id} className="p-2 border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{order.serviceType}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.scheduledDate).toLocaleDateString()}
                      </p>
                    </div>
                    <span className="font-bold">${order.amount}</span>
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

export default ClientDashboard;
