
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { Calendar, AlertTriangle } from 'lucide-react';

interface Deadline {
  id: string;
  task: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

interface EmployeeUpcomingDeadlinesProps {
  upcomingDeadlines: Deadline[];
}

const EmployeeUpcomingDeadlines = ({ upcomingDeadlines }: EmployeeUpcomingDeadlinesProps) => {
  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'default';
      case 'low':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Upcoming Deadlines</CardTitle>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingDeadlines.map((deadline) => (
            <div key={deadline.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  {deadline.priority === 'high' && (
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  )}
                  <p className="font-medium text-sm">{deadline.task}</p>
                </div>
                <p className="text-xs text-muted-foreground">Due: {formatDate(deadline.dueDate)}</p>
              </div>
              <Badge variant={getPriorityVariant(deadline.priority)}>
                {deadline.priority}
              </Badge>
            </div>
          ))}
          
          {upcomingDeadlines.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">
              No upcoming deadlines
            </p>
          )}
        </div>
        
        <Button variant="outline" className="w-full mt-4" size="sm">
          <Calendar className="mr-2 h-4 w-4" />
          View Calendar
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmployeeUpcomingDeadlines;
