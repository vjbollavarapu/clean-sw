
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Clock, 
  Users, 
  Calendar, 
  BarChart3, 
  UserCheck, 
  UserX,
  TrendingUp,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import AttendanceOverview from '../components/attendance/AttendanceOverview';
import AttendanceTracking from '../components/attendance/AttendanceTracking';
import AttendanceReports from '../components/attendance/AttendanceReports';
import TimeManagement from '../components/attendance/TimeManagement';
import LeaveManagement from '../components/attendance/LeaveManagement';
import AttendanceSettings from '../components/attendance/AttendanceSettings';

const Attendance = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const attendanceTabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3, description: 'Attendance dashboard and metrics' },
    { id: 'tracking', label: 'Tracking', icon: Clock, description: 'Real-time attendance tracking' },
    { id: 'reports', label: 'Reports', icon: Calendar, description: 'Attendance reports and analytics' },
    { id: 'time', label: 'Time Management', icon: TrendingUp, description: 'Working hours and overtime' },
    { id: 'leave', label: 'Leave Management', icon: Users, description: 'Leave requests and approvals' },
    { id: 'settings', label: 'Settings', icon: AlertTriangle, description: 'Attendance policies and settings' }
  ];

  const attendanceStats = {
    totalEmployees: 156,
    presentToday: 142,
    absentToday: 14,
    lateToday: 8,
    avgAttendance: 91.2,
    pendingLeaves: 7
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attendance Management</h1>
          <p className="text-muted-foreground">Track and manage employee attendance, time, and leave</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            {attendanceStats.avgAttendance}% Avg Attendance
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Total Employees</p>
                <p className="text-2xl font-bold">{attendanceStats.totalEmployees}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <UserCheck className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Present Today</p>
                <p className="text-2xl font-bold text-green-600">{attendanceStats.presentToday}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <UserX className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Absent Today</p>
                <p className="text-2xl font-bold text-red-600">{attendanceStats.absentToday}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-sm font-medium">Late Today</p>
                <p className="text-2xl font-bold text-orange-600">{attendanceStats.lateToday}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Avg Attendance</p>
                <p className="text-2xl font-bold text-purple-600">{attendanceStats.avgAttendance}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-indigo-500" />
              <div>
                <p className="text-sm font-medium">Pending Leaves</p>
                <p className="text-2xl font-bold text-indigo-600">{attendanceStats.pendingLeaves}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Management Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          {attendanceTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className="flex items-center space-x-2">
              <tab.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <AttendanceOverview />
        </TabsContent>

        <TabsContent value="tracking" className="space-y-4">
          <AttendanceTracking />
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <AttendanceReports />
        </TabsContent>

        <TabsContent value="time" className="space-y-4">
          <TimeManagement />
        </TabsContent>

        <TabsContent value="leave" className="space-y-4">
          <LeaveManagement />
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <AttendanceSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Attendance;
