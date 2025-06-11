
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Client } from '../types';

interface ClientsStatsProps {
  clients: Client[];
}

const ClientsStats: React.FC<ClientsStatsProps> = ({ clients }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{clients.length}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">
            {clients.filter(client => client.status === 'active').length}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">
            {formatCurrency(clients.reduce((sum, client) => sum + client.totalSpent, 0))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-600">
            {clients.reduce((sum, client) => sum + client.serviceHistory, 0)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientsStats;
