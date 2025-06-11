
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { sampleServiceOrders, sampleFinancialRecords } from '../../data/sampleData';

const ManagementDashboard = () => {
  const ordersInProgress = sampleServiceOrders.filter(o => o.status === 'in-progress').length;
  const pendingOrders = sampleServiceOrders.filter(o => o.status === 'pending').length;
  const monthlyRevenue = sampleFinancialRecords
    .filter(r => r.type === 'income' && r.date.startsWith('2024-06'))
    .reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Orders in Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ordersInProgress}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingOrders}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${monthlyRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Service Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {sampleServiceOrders.slice(0, 3).map(order => (
              <div key={order.id} className="flex justify-between items-center p-2 border-b">
                <div>
                  <p className="font-medium">{order.clientName}</p>
                  <p className="text-sm text-muted-foreground">{order.serviceType}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${
                  order.status === 'completed' ? 'bg-green-100 text-green-800' :
                  order.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagementDashboard;
