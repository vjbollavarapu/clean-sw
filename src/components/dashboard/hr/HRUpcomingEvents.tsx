
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { AlertTriangle } from 'lucide-react';

interface UpcomingEvent {
  type: 'review' | 'anniversary';
  employee: string;
  date: string;
  department?: string;
  years?: number;
}

interface HRUpcomingEventsProps {
  upcomingEvents: UpcomingEvent[];
}

const HRUpcomingEvents = ({ upcomingEvents }: HRUpcomingEventsProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Upcoming Reviews & Anniversaries
        </CardTitle>
        <Button variant="outline" size="sm">Calendar View</Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  event.type === 'review' ? 'bg-blue-500' : 'bg-green-500'
                }`} />
                <div>
                  <p className="font-medium">{event.employee}</p>
                  <p className="text-sm text-muted-foreground">
                    {event.type === 'review' 
                      ? `Performance Review - ${event.department}` 
                      : `${event.years} Year Anniversary`
                    }
                  </p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline">{event.date}</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HRUpcomingEvents;
