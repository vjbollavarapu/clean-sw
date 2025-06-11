
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Button } from '../../../ui/button';
import { Badge } from '../../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../ui/table';
import { 
  Calendar, 
  Eye, 
  MessageSquare
} from 'lucide-react';

const HRUpcomingInterviews = () => {
  const upcomingInterviews = [
    {
      id: '1',
      candidate: 'Alice Johnson',
      position: 'Senior Software Engineer',
      date: '2024-06-15',
      time: '10:00 AM',
      interviewer: 'John Manager',
      type: 'Technical'
    },
    {
      id: '2',
      candidate: 'Eva Brown',
      position: 'Marketing Manager',
      date: '2024-06-16',
      time: '2:00 PM',
      interviewer: 'Sarah Director',
      type: 'Final'
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Upcoming Interviews
        </CardTitle>
        <Button size="sm" variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Interview
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Interviewer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {upcomingInterviews.map((interview) => (
              <TableRow key={interview.id}>
                <TableCell className="font-medium">{interview.candidate}</TableCell>
                <TableCell>{interview.position}</TableCell>
                <TableCell>
                  <div>
                    <p>{interview.date}</p>
                    <p className="text-sm text-muted-foreground">{interview.time}</p>
                  </div>
                </TableCell>
                <TableCell>{interview.interviewer}</TableCell>
                <TableCell>
                  <Badge variant="outline">{interview.type}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default HRUpcomingInterviews;
