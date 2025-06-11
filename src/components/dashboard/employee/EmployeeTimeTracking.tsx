
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Play, Pause, Clock } from 'lucide-react';

interface TimeTrackingData {
  date: string;
  hours: number;
  overtime: number;
}

interface EmployeeTimeTrackingProps {
  timeTrackingData: TimeTrackingData[];
  overtimeHours: number;
}

const EmployeeTimeTracking = ({ timeTrackingData, overtimeHours }: EmployeeTimeTrackingProps) => {
  const [isTracking, setIsTracking] = useState(false);
  const [currentSession, setCurrentSession] = useState('00:00:00');

  const toggleTracking = () => {
    setIsTracking(!isTracking);
    console.log(isTracking ? 'Stopped time tracking' : 'Started time tracking');
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Time Tracking</CardTitle>
        <Badge variant={overtimeHours > 0 ? 'destructive' : 'secondary'}>
          {overtimeHours > 0 ? `+${overtimeHours}h OT` : 'Regular Hours'}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current Session */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Current Session</p>
                <p className="text-2xl font-mono">{currentSession}</p>
              </div>
            </div>
            <Button
              onClick={toggleTracking}
              variant={isTracking ? 'destructive' : 'default'}
              size="sm"
            >
              {isTracking ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  Stop
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Start
                </>
              )}
            </Button>
          </div>

          {/* Weekly Summary */}
          <div className="space-y-2">
            <h4 className="font-medium">This Week</h4>
            {timeTrackingData.map((day, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <span className="text-sm">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{day.hours}h</span>
                  {day.overtime > 0 && (
                    <Badge variant="outline" className="text-xs">+{day.overtime}h</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeeTimeTracking;
