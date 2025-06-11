
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { Users, MapPin, Clock, Phone } from 'lucide-react';

const ClientAssignedCleaners = () => {
  const assignedCleaners = [
    {
      id: 'cleaner-1',
      name: 'Maria Rodriguez',
      location: 'Main Office - Building A',
      shift: 'Morning (6 AM - 2 PM)',
      phone: '+1 (555) 123-4567',
      specialization: 'Office Cleaning',
      status: 'active',
      rating: 4.8
    },
    {
      id: 'cleaner-2',
      name: 'James Wilson',
      location: 'Main Office - Building A',
      shift: 'Evening (2 PM - 10 PM)',
      phone: '+1 (555) 234-5678',
      specialization: 'Deep Cleaning',
      status: 'active',
      rating: 4.9
    },
    {
      id: 'cleaner-3',
      name: 'Sofia Chen',
      location: 'Warehouse Facility',
      shift: 'Night (10 PM - 6 AM)',
      phone: '+1 (555) 345-6789',
      specialization: 'Industrial Cleaning',
      status: 'active',
      rating: 4.7
    },
    {
      id: 'cleaner-4',
      name: 'David Brown',
      location: 'Retail Store Downtown',
      shift: 'Morning (5 AM - 1 PM)',
      phone: '+1 (555) 456-7890',
      specialization: 'Retail Cleaning',
      status: 'on-leave',
      rating: 4.6
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'default',
      'on-leave': 'secondary',
      transferred: 'outline'
    } as const;
    
    return <Badge variant={variants[status as keyof typeof variants]}>{status.replace('-', ' ')}</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Assigned Cleaners
          </div>
          <Button variant="outline" size="sm">
            Request Transfer
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assignedCleaners.map(cleaner => (
            <div key={cleaner.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium">{cleaner.name}</h4>
                  <p className="text-sm text-muted-foreground">{cleaner.specialization}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm">Rating:</span>
                    <span className="text-sm font-medium text-yellow-600">★ {cleaner.rating}</span>
                  </div>
                </div>
                {getStatusBadge(cleaner.status)}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{cleaner.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{cleaner.shift}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{cleaner.phone}</span>
                </div>
              </div>

              {cleaner.status === 'on-leave' && (
                <div className="mt-3 p-2 bg-muted rounded text-sm">
                  <span className="text-muted-foreground">On leave until June 25, 2024. Temporary replacement assigned.</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientAssignedCleaners;
