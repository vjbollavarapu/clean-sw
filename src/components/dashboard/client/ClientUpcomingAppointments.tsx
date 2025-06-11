
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { Calendar, Clock, MapPin, Users, Phone } from 'lucide-react';

const ClientUpcomingAppointments = () => {
  // Mock appointments data
  const appointments = [
    {
      id: '1',
      serviceType: 'Office Cleaning',
      date: '2024-06-15',
      time: '09:00 AM',
      duration: '2 hours',
      location: '123 Business Ave, Suite 400',
      team: ['John Smith', 'Mary Johnson'],
      status: 'confirmed'
    },
    {
      id: '2',
      serviceType: 'Deep Cleaning',
      date: '2024-06-18',
      time: '02:00 PM',
      duration: '4 hours',
      location: '456 Corporate Blvd, Floor 2',
      team: ['David Wilson', 'Sarah Brown', 'Mike Davis'],
      status: 'scheduled'
    },
    {
      id: '3',
      serviceType: 'Window Cleaning',
      date: '2024-06-22',
      time: '08:00 AM',
      duration: '3 hours',
      location: '789 Executive Dr, Building A',
      team: ['Alex Thompson'],
      status: 'pending'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      confirmed: 'default',
      scheduled: 'secondary',
      pending: 'outline'
    } as const;
    
    return <Badge variant={variants[status as keyof typeof variants]}>{status}</Badge>;
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Upcoming Appointments
          </div>
          <Button variant="outline" size="sm">
            View Calendar
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {appointments.length === 0 ? (
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No upcoming appointments</p>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map(appointment => (
              <div key={appointment.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium">{appointment.serviceType}</h4>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(appointment.date)}
                      <Clock className="h-4 w-4 ml-3 mr-1" />
                      {appointment.time}
                    </div>
                  </div>
                  {getStatusBadge(appointment.status)}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {appointment.location}
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    Duration: {appointment.duration}
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    Team: {appointment.team.join(', ')}
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Phone className="h-4 w-4 mr-1" />
                    Contact Team
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Reschedule
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ClientUpcomingAppointments;
