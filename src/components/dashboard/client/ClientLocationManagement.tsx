
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { MapPin, Users, Clock, Settings } from 'lucide-react';

const ClientLocationManagement = () => {
  const locations = [
    {
      id: 'loc-1',
      name: 'Main Office - Building A',
      address: '123 Business Plaza, Downtown',
      size: '15,000 sq ft',
      cleaners: 3,
      shifts: ['Morning', 'Evening'],
      status: 'active',
      lastService: '2024-06-11T08:00:00Z',
      nextService: '2024-06-12T06:00:00Z'
    },
    {
      id: 'loc-2',
      name: 'Warehouse Facility',
      address: '456 Industrial Way, Eastside',
      size: '25,000 sq ft',
      cleaners: 2,
      shifts: ['Night'],
      status: 'active',
      lastService: '2024-06-10T22:00:00Z',
      nextService: '2024-06-11T22:00:00Z'
    },
    {
      id: 'loc-3',
      name: 'Retail Store Downtown',
      address: '789 Shopping Street, City Center',
      size: '3,500 sq ft',
      cleaners: 1,
      shifts: ['Morning'],
      status: 'maintenance',
      lastService: '2024-06-09T05:00:00Z',
      nextService: '2024-06-13T05:00:00Z'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'default',
      maintenance: 'secondary',
      suspended: 'destructive'
    } as const;
    
    return <Badge variant={variants[status as keyof typeof variants]}>{status}</Badge>;
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Location Management
          </div>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-1" />
            Manage
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {locations.map(location => (
            <div key={location.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium">{location.name}</h4>
                  <p className="text-sm text-muted-foreground">{location.address}</p>
                  <p className="text-xs text-muted-foreground mt-1">{location.size}</p>
                </div>
                {getStatusBadge(location.status)}
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{location.cleaners} Cleaners Assigned</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{location.shifts.join(', ')} Shifts</span>
                </div>
              </div>

              <div className="border-t pt-3 text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">Last Service:</span>
                  <span>{formatDateTime(location.lastService)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next Service:</span>
                  <span className="font-medium">{formatDateTime(location.nextService)}</span>
                </div>
              </div>

              {location.status === 'maintenance' && (
                <div className="mt-3 p-2 bg-muted rounded text-sm">
                  <span className="text-muted-foreground">
                    Location under maintenance. Service suspended until equipment repair is complete.
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientLocationManagement;
