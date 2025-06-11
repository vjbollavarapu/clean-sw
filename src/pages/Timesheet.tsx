
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Clock, 
  Calendar, 
  CheckCircle, 
  AlertCircle, 
  Plus,
  FileText,
  TrendingUp,
  Timer,
  Send,
  Edit
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import TimesheetEntry from '../components/timesheet/TimesheetEntry';
import TimesheetHistory from '../components/timesheet/TimesheetHistory';
import TimesheetSummary from '../components/timesheet/TimesheetSummary';
import TimesheetSubmission from '../components/timesheet/TimesheetSubmission';

const Timesheet = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('entry');

  const timesheetStats = {
    currentWeekHours: 38.5,
    totalPendingHours: 8.5,
    approvedHours: 30,
    overtimeHours: 2.5,
    pendingSubmissions: 1,
    approvedSubmissions: 4
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Timesheet Management</h1>
          <p className="text-muted-foreground">Track your working hours and manage timesheet submissions</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Clock className="h-3 w-3 mr-1" />
            {timesheetStats.currentWeekHours}h This Week
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Timer className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Current Week</p>
                <p className="text-2xl font-bold">{timesheetStats.currentWeekHours}h</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-sm font-medium">Pending</p>
                <p className="text-2xl font-bold text-orange-600">{timesheetStats.totalPendingHours}h</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Approved</p>
                <p className="text-2xl font-bold text-green-600">{timesheetStats.approvedHours}h</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Overtime</p>
                <p className="text-2xl font-bold text-purple-600">{timesheetStats.overtimeHours}h</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Send className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Pending Submissions</p>
                <p className="text-2xl font-bold text-red-600">{timesheetStats.pendingSubmissions}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-indigo-500" />
              <div>
                <p className="text-sm font-medium">Approved Submissions</p>
                <p className="text-2xl font-bold text-indigo-600">{timesheetStats.approvedSubmissions}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timesheet Management Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="entry" className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Time Entry</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">History</span>
          </TabsTrigger>
          <TabsTrigger value="summary" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Summary</span>
          </TabsTrigger>
          <TabsTrigger value="submission" className="flex items-center space-x-2">
            <Send className="h-4 w-4" />
            <span className="hidden sm:inline">Submit</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="entry" className="space-y-4">
          <TimesheetEntry />
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <TimesheetHistory />
        </TabsContent>

        <TabsContent value="summary" className="space-y-4">
          <TimesheetSummary />
        </TabsContent>

        <TabsContent value="submission" className="space-y-4">
          <TimesheetSubmission />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Timesheet;
