
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  FileText, 
  Search,
  Filter,
  Download,
  TrendingUp,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const TimesheetHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('2024-06');
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);

  const weeklyData = [
    {
      week: 'Week of June 10, 2024',
      weekId: '2024-06-10',
      totalHours: 40,
      regularHours: 38,
      overtimeHours: 2,
      status: 'approved' as const,
      entries: [
        {
          id: '1',
          date: '2024-06-10',
          project: 'Office Cleaning - ABC Corp',
          location: 'Downtown Office',
          startTime: '09:00',
          endTime: '17:00',
          breakTime: 1,
          hours: 7,
          status: 'approved' as const
        },
        {
          id: '2',
          date: '2024-06-11',
          project: 'Window Cleaning - XYZ Ltd',
          location: 'Corporate Building',
          startTime: '08:30',
          endTime: '17:30',
          breakTime: 1,
          hours: 8,
          status: 'approved' as const
        },
        {
          id: '3',
          date: '2024-06-12',
          project: 'Carpet Cleaning - DEF Inc',
          location: 'Office Complex',
          startTime: '09:00',
          endTime: '18:00',
          breakTime: 1,
          hours: 8,
          status: 'approved' as const
        },
        {
          id: '4',
          date: '2024-06-13',
          project: 'Deep Cleaning - GHI Corp',
          location: 'Manufacturing Plant',
          startTime: '08:00',
          endTime: '18:00',
          breakTime: 1,
          hours: 9,
          status: 'approved' as const
        },
        {
          id: '5',
          date: '2024-06-14',
          project: 'Maintenance - JKL Ltd',
          location: 'Retail Store',
          startTime: '09:00',
          endTime: '17:00',
          breakTime: 1,
          hours: 7,
          status: 'approved' as const
        }
      ]
    },
    {
      week: 'Week of June 3, 2024',
      weekId: '2024-06-03',
      totalHours: 38.5,
      regularHours: 38.5,
      overtimeHours: 0,
      status: 'approved' as const,
      entries: [
        {
          id: '6',
          date: '2024-06-03',
          project: 'Office Cleaning - ABC Corp',
          location: 'Downtown Office',
          startTime: '09:00',
          endTime: '17:00',
          breakTime: 1,
          hours: 7,
          status: 'approved' as const
        },
        {
          id: '7',
          date: '2024-06-04',
          project: 'Floor Polishing - MNO Inc',
          location: 'Shopping Mall',
          startTime: '10:00',
          endTime: '18:00',
          breakTime: 1,
          hours: 7,
          status: 'approved' as const
        },
        {
          id: '8',
          date: '2024-06-05',
          project: 'Window Cleaning - XYZ Ltd',
          location: 'Corporate Building',
          startTime: '08:30',
          endTime: '16:30',
          breakTime: 1,
          hours: 7,
          status: 'approved' as const
        },
        {
          id: '9',
          date: '2024-06-06',
          project: 'Sanitization - PQR Corp',
          location: 'Hospital Wing',
          startTime: '09:00',
          endTime: '17:30',
          breakTime: 1,
          hours: 7.5,
          status: 'approved' as const
        }
      ]
    },
    {
      week: 'Week of May 27, 2024',
      weekId: '2024-05-27',
      totalHours: 42,
      regularHours: 40,
      overtimeHours: 2,
      status: 'pending' as const,
      entries: [
        {
          id: '10',
          date: '2024-05-27',
          project: 'Emergency Cleanup - STU Inc',
          location: 'Office Building',
          startTime: '08:00',
          endTime: '18:00',
          breakTime: 1,
          hours: 9,
          status: 'pending' as const
        },
        {
          id: '11',
          date: '2024-05-28',
          project: 'Deep Cleaning - VWX Corp',
          location: 'Warehouse',
          startTime: '09:00',
          endTime: '18:00',
          breakTime: 1,
          hours: 8,
          status: 'pending' as const
        },
        {
          id: '12',
          date: '2024-05-29',
          project: 'Office Cleaning - ABC Corp',
          location: 'Downtown Office',
          startTime: '09:00',
          endTime: '17:00',
          breakTime: 1,
          hours: 7,
          status: 'pending' as const
        },
        {
          id: '13',
          date: '2024-05-30',
          project: 'Window Cleaning - XYZ Ltd',
          location: 'Corporate Building',
          startTime: '08:30',
          endTime: '18:30',
          breakTime: 1,
          hours: 9,
          status: 'pending' as const
        },
        {
          id: '14',
          date: '2024-05-31',
          project: 'Floor Maintenance - YZA Inc',
          location: 'Retail Chain',
          startTime: '09:00',
          endTime: '18:00',
          breakTime: 1,
          hours: 8,
          status: 'pending' as const
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'rejected':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const toggleWeekExpansion = (weekId: string) => {
    setExpandedWeek(expandedWeek === weekId ? null : weekId);
  };

  const filteredData = weeklyData.filter(week =>
    week.week.toLowerCase().includes(searchTerm.toLowerCase()) ||
    week.entries.some(entry => 
      entry.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filters & Search</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by project, location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <Input
                type="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-auto"
              />
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Total Hours (Month)</p>
                <p className="text-2xl font-bold">
                  {weeklyData.reduce((sum, week) => sum + week.totalHours, 0)}h
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Regular Hours</p>
                <p className="text-2xl font-bold text-green-600">
                  {weeklyData.reduce((sum, week) => sum + week.regularHours, 0)}h
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-sm font-medium">Overtime Hours</p>
                <p className="text-2xl font-bold text-orange-600">
                  {weeklyData.reduce((sum, week) => sum + week.overtimeHours, 0)}h
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Avg Hours/Week</p>
                <p className="text-2xl font-bold text-purple-600">
                  {(weeklyData.reduce((sum, week) => sum + week.totalHours, 0) / weeklyData.length).toFixed(1)}h
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly History */}
      <Card>
        <CardHeader>
          <CardTitle>Timesheet History</CardTitle>
          <CardDescription>View your past timesheet submissions by week</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredData.length > 0 ? (
            <div className="space-y-4">
              {filteredData.map(week => (
                <div key={week.weekId} className="border rounded-lg">
                  <div 
                    className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => toggleWeekExpansion(week.weekId)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h4 className="font-semibold">{week.week}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <span>Total: {week.totalHours}h</span>
                            <span>Regular: {week.regularHours}h</span>
                            {week.overtimeHours > 0 && (
                              <span>Overtime: {week.overtimeHours}h</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getStatusColor(week.status) as any}>
                          {week.status}
                        </Badge>
                        {expandedWeek === week.weekId ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                  </div>

                  {expandedWeek === week.weekId && (
                    <div className="border-t bg-muted/25">
                      <div className="p-4 space-y-3">
                        {week.entries.map(entry => (
                          <div key={entry.id} className="flex items-center justify-between p-3 bg-background rounded border">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <Calendar className="h-3 w-3 text-muted-foreground" />
                                <span className="text-sm font-medium">
                                  {new Date(entry.date).toLocaleDateString()}
                                </span>
                                <Badge variant="outline" className="text-xs">
                                  {entry.status}
                                </Badge>
                              </div>
                              <h5 className="font-medium text-sm">{entry.project}</h5>
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{entry.startTime} - {entry.endTime}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>{entry.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">{entry.hours}h</p>
                              {entry.breakTime > 0 && (
                                <p className="text-xs text-muted-foreground">
                                  -{entry.breakTime}h break
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">No timesheet history found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TimesheetHistory;
