
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Calendar, TrendingUp, Users, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const AttendanceOverview = () => {
  const weeklyAttendance = [
    { day: 'Mon', present: 145, absent: 11, late: 5 },
    { day: 'Tue', present: 148, absent: 8, late: 3 },
    { day: 'Wed', present: 142, absent: 14, late: 8 },
    { day: 'Thu', present: 150, absent: 6, late: 4 },
    { day: 'Fri', present: 144, absent: 12, late: 6 },
    { day: 'Sat', present: 138, absent: 18, late: 2 },
    { day: 'Sun', present: 140, absent: 16, late: 3 }
  ];

  const departmentAttendance = [
    { department: 'Engineering', rate: 94.2, employees: 45 },
    { department: 'Sales', rate: 89.7, employees: 32 },
    { department: 'Marketing', rate: 91.3, employees: 28 },
    { department: 'HR', rate: 96.1, employees: 15 },
    { department: 'Finance', rate: 93.8, employees: 22 },
    { department: 'Operations', rate: 87.4, employees: 14 }
  ];

  const attendancePattern = [
    { name: 'On Time', value: 78, color: '#22c55e' },
    { name: 'Late', value: 13, color: '#f59e0b' },
    { name: 'Absent', value: 9, color: '#ef4444' }
  ];

  const recentActivities = [
    { id: 1, employee: 'John Smith', action: 'Checked In', time: '08:45 AM', status: 'ontime' },
    { id: 2, employee: 'Sarah Johnson', action: 'Checked Out', time: '05:30 PM', status: 'ontime' },
    { id: 3, employee: 'Mike Chen', action: 'Checked In', time: '09:15 AM', status: 'late' },
    { id: 4, employee: 'Emily Davis', action: 'Leave Approved', time: '10:00 AM', status: 'leave' },
    { id: 5, employee: 'Alex Wilson', action: 'Checked In', time: '08:30 AM', status: 'ontime' }
  ];

  const chartConfig = {
    present: { color: '#22c55e' },
    absent: { color: '#ef4444' },
    late: { color: '#f59e0b' }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ontime':
        return <Badge className="bg-green-100 text-green-800">On Time</Badge>;
      case 'late':
        return <Badge className="bg-orange-100 text-orange-800">Late</Badge>;
      case 'leave':
        return <Badge className="bg-blue-100 text-blue-800">Leave</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Weekly Attendance Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Attendance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyAttendance}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="present" stroke="#22c55e" strokeWidth={2} />
                  <Line type="monotone" dataKey="absent" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="late" stroke="#f59e0b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Attendance Pattern */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Attendance Pattern</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={attendancePattern}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {attendancePattern.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Department Attendance and Recent Activities */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Department Attendance Rates */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Department Attendance Rates</CardTitle>
            <Button variant="outline" size="sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentAttendance.map((dept) => (
                <div key={dept.department} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{dept.department}</p>
                    <p className="text-sm text-muted-foreground">{dept.employees} employees</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-right">
                      <p className="font-semibold">{dept.rate}%</p>
                      <div className="w-16 h-2 bg-muted rounded-full">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${dept.rate}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Activities</CardTitle>
            <Button variant="outline" size="sm">
              <Clock className="h-4 w-4 mr-2" />
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{activity.employee}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    {getStatusBadge(activity.status)}
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Button className="h-20 flex flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span>Mark Attendance</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Calendar className="h-6 w-6" />
              <span>Generate Report</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <CheckCircle className="h-6 w-6" />
              <span>Approve Leaves</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <AlertTriangle className="h-6 w-6" />
              <span>Review Alerts</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceOverview;
