
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Plus,
  Edit,
  Copy,
  AlertTriangle
} from 'lucide-react';

const HRScheduling = () => {
  const weeklySchedule = [
    {
      id: '1',
      employee: 'John Smith',
      monday: { shift: 'Morning', location: 'Office Complex A', hours: '6:00-14:00' },
      tuesday: { shift: 'Morning', location: 'Office Complex A', hours: '6:00-14:00' },
      wednesday: { shift: 'Morning', location: 'Warehouse B', hours: '6:00-14:00' },
      thursday: { shift: 'Morning', location: 'Office Complex A', hours: '6:00-14:00' },
      friday: { shift: 'Morning', location: 'Office Complex A', hours: '6:00-14:00' },
      totalHours: 40
    },
    {
      id: '2',
      employee: 'Sarah Johnson',
      monday: { shift: 'Evening', location: 'Retail Store C', hours: '14:00-22:00' },
      tuesday: { shift: 'Evening', location: 'Retail Store C', hours: '14:00-22:00' },
      wednesday: { shift: 'Off', location: '-', hours: '-' },
      thursday: { shift: 'Evening', location: 'Office Complex A', hours: '14:00-22:00' },
      friday: { shift: 'Evening', location: 'Retail Store C', hours: '14:00-22:00' },
      totalHours: 32
    }
  ];

  const shiftTemplates = [
    {
      id: '1',
      name: 'Morning Shift',
      startTime: '06:00',
      endTime: '14:00',
      duration: '8 hours',
      locations: ['Office Complex A', 'Warehouse B'],
      requiredStaff: 12
    },
    {
      id: '2',
      name: 'Evening Shift',
      startTime: '14:00',
      endTime: '22:00',
      duration: '8 hours',
      locations: ['Retail Store C', 'Office Complex A'],
      requiredStaff: 8
    },
    {
      id: '3',
      name: 'Night Shift',
      startTime: '22:00',
      endTime: '06:00',
      duration: '8 hours',
      locations: ['Hospital D', 'Security Office'],
      requiredStaff: 4
    }
  ];

  const timeOffRequests = [
    {
      id: '1',
      employee: 'Mike Chen',
      type: 'Vacation',
      startDate: '2024-06-20',
      endDate: '2024-06-25',
      days: 4,
      status: 'pending',
      reason: 'Family vacation'
    },
    {
      id: '2',
      employee: 'Lisa Wong',
      type: 'Sick Leave',
      startDate: '2024-06-18',
      endDate: '2024-06-19',
      days: 2,
      status: 'approved',
      reason: 'Medical appointment'
    },
    {
      id: '3',
      employee: 'David Miller',
      type: 'Personal',
      startDate: '2024-06-22',
      endDate: '2024-06-22',
      days: 1,
      status: 'pending',
      reason: 'Personal matter'
    }
  ];

  const getShiftBadge = (shift: string) => {
    const variants = {
      'Morning': 'default',
      'Evening': 'secondary',
      'Night': 'outline',
      'Off': 'destructive'
    } as const;
    
    return <Badge variant={variants[shift as keyof typeof variants] || 'outline'}>{shift}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge variant="default">Approved</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Scheduling Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Schedules</p>
                <p className="text-2xl font-bold">45</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Hours/Week</p>
                <p className="text-2xl font-bold">1,680</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Requests</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Coverage Rate</p>
                <p className="text-2xl font-bold">96%</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scheduling Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Employee Scheduling
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="weekly" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="weekly">Weekly Schedule</TabsTrigger>
              <TabsTrigger value="templates">Shift Templates</TabsTrigger>
              <TabsTrigger value="timeoff">Time Off Requests</TabsTrigger>
            </TabsList>

            <TabsContent value="weekly">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Current Week Schedule</h3>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Previous Week
                    </Button>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Shift
                    </Button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead>Monday</TableHead>
                        <TableHead>Tuesday</TableHead>
                        <TableHead>Wednesday</TableHead>
                        <TableHead>Thursday</TableHead>
                        <TableHead>Friday</TableHead>
                        <TableHead>Total Hours</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {weeklySchedule.map((schedule) => (
                        <TableRow key={schedule.id}>
                          <TableCell className="font-medium">{schedule.employee}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              {getShiftBadge(schedule.monday.shift)}
                              <p className="text-xs text-muted-foreground">{schedule.monday.hours}</p>
                              <p className="text-xs text-muted-foreground">{schedule.monday.location}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              {getShiftBadge(schedule.tuesday.shift)}
                              <p className="text-xs text-muted-foreground">{schedule.tuesday.hours}</p>
                              <p className="text-xs text-muted-foreground">{schedule.tuesday.location}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              {getShiftBadge(schedule.wednesday.shift)}
                              <p className="text-xs text-muted-foreground">{schedule.wednesday.hours}</p>
                              <p className="text-xs text-muted-foreground">{schedule.wednesday.location}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              {getShiftBadge(schedule.thursday.shift)}
                              <p className="text-xs text-muted-foreground">{schedule.thursday.hours}</p>
                              <p className="text-xs text-muted-foreground">{schedule.thursday.location}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              {getShiftBadge(schedule.friday.shift)}
                              <p className="text-xs text-muted-foreground">{schedule.friday.hours}</p>
                              <p className="text-xs text-muted-foreground">{schedule.friday.location}</p>
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">{schedule.totalHours}h</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="templates">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Shift Templates</h3>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Template
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {shiftTemplates.map((template) => (
                    <Card key={template.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-medium">{template.name}</h4>
                          {getShiftBadge(template.name.split(' ')[0])}
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{template.startTime} - {template.endTime} ({template.duration})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{template.requiredStaff} staff required</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div>
                              {template.locations.map((location, index) => (
                                <p key={index} className="text-muted-foreground">{location}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" variant="outline">Edit</Button>
                          <Button size="sm" variant="outline">Apply</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="timeoff">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Time Off Requests</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Dates</TableHead>
                      <TableHead>Days</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {timeOffRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.employee}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{request.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{request.startDate}</p>
                            {request.startDate !== request.endDate && (
                              <p className="text-muted-foreground">to {request.endDate}</p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{request.days} day(s)</TableCell>
                        <TableCell className="max-w-xs truncate">{request.reason}</TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>
                          {request.status === 'pending' && (
                            <div className="flex gap-1">
                              <Button size="sm" variant="outline">Approve</Button>
                              <Button size="sm" variant="outline">Reject</Button>
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRScheduling;
