
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Calendar, MapPin, Users, MessageSquare, Phone } from 'lucide-react';

const ActiveServices = () => {
  const activeServices = [
    {
      id: 1,
      type: 'Weekly Office Cleaning',
      scheduledDate: '2024-06-15T09:00:00Z',
      location: 'Main Office - All Floors',
      assignedTeam: ['John Smith', 'Sarah Johnson'],
      status: 'scheduled',
      notes: 'Focus on conference rooms and kitchen area',
      estimatedDuration: '4 hours',
      contactNumber: '+1 (555) 123-4567'
    },
    {
      id: 2,
      type: 'Deep Carpet Cleaning',
      scheduledDate: '2024-06-16T14:00:00Z',
      location: 'Reception Area & Lobby',
      assignedTeam: ['Mike Wilson'],
      status: 'in-progress',
      notes: 'High-traffic areas need extra attention',
      estimatedDuration: '2 hours',
      contactNumber: '+1 (555) 123-4568'
    },
    {
      id: 3,
      type: 'Window Cleaning',
      scheduledDate: '2024-06-18T08:00:00Z',
      location: 'Exterior Windows - Building A',
      assignedTeam: ['Alex Chen', 'Maria Garcia'],
      status: 'scheduled',
      notes: 'Weather dependent - will reschedule if rain',
      estimatedDuration: '6 hours',
      contactNumber: '+1 (555) 123-4569'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      scheduled: { variant: 'secondary' as const, label: 'Scheduled' },
      'in-progress': { variant: 'default' as const, label: 'In Progress' },
      'on-hold': { variant: 'outline' as const, label: 'On Hold' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.scheduled;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Active Services</h2>
        <Badge variant="outline">{activeServices.length} Active</Badge>
      </div>

      <div className="grid gap-6">
        {activeServices.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{service.type}</CardTitle>
                {getStatusBadge(service.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium">Scheduled:</span>
                    <span className="ml-1">{formatDateTime(service.scheduledDate)}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium">Location:</span>
                    <span className="ml-1">{service.location}</span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium">Team:</span>
                    <span className="ml-1">{service.assignedTeam.join(', ')}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="font-medium">Duration:</span>
                    <span className="ml-1">{service.estimatedDuration}</span>
                  </div>

                  <div className="text-sm">
                    <span className="font-medium">Contact:</span>
                    <span className="ml-1">{service.contactNumber}</span>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                  </div>
                </div>
              </div>

              {service.notes && (
                <div className="border-t pt-3">
                  <p className="text-sm">
                    <span className="font-medium">Notes:</span>
                    <span className="ml-1 text-muted-foreground">{service.notes}</span>
                  </p>
                </div>
              )}

              <div className="flex space-x-2 pt-2">
                <Button size="sm">View Details</Button>
                <Button size="sm" variant="outline">Reschedule</Button>
                <Button size="sm" variant="outline">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActiveServices;
