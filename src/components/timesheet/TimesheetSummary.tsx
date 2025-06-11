
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  BarChart3,
  Target,
  Award,
  AlertTriangle
} from 'lucide-react';

const TimesheetSummary = () => {
  const monthlyStats = {
    totalHours: 162,
    regularHours: 154,
    overtimeHours: 8,
    paidLeave: 16,
    unpaidLeave: 0,
    expectedHours: 176,
    hoursRemaining: 14,
    productivity: 92,
    attendanceRate: 98
  };

  const weeklyBreakdown = [
    { week: 'Week 1', hours: 40, overtime: 2, status: 'approved' },
    { week: 'Week 2', hours: 38, overtime: 0, status: 'approved' },
    { week: 'Week 3', hours: 42, overtime: 4, status: 'approved' },
    { week: 'Week 4', hours: 36, overtime: 0, status: 'pending' },
    { week: 'Week 5', hours: 6, overtime: 2, status: 'draft' }
  ];

  const projectBreakdown = [
    { project: 'Office Cleaning - ABC Corp', hours: 64, percentage: 39.5 },
    { project: 'Window Cleaning - XYZ Ltd', hours: 32, percentage: 19.8 },
    { project: 'Carpet Cleaning - DEF Inc', hours: 28, percentage: 17.3 },
    { project: 'Deep Cleaning - GHI Corp', hours: 24, percentage: 14.8 },
    { project: 'Maintenance - JKL Ltd', hours: 14, percentage: 8.6 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'draft':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      {/* Monthly Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Total Hours</p>
                <p className="text-2xl font-bold">{monthlyStats.totalHours}h</p>
                <p className="text-xs text-muted-foreground">
                  of {monthlyStats.expectedHours}h expected
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
                <p className="text-2xl font-bold text-green-600">{monthlyStats.regularHours}h</p>
                <p className="text-xs text-muted-foreground">
                  +{monthlyStats.overtimeHours}h overtime
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Productivity</p>
                <p className="text-2xl font-bold text-purple-600">{monthlyStats.productivity}%</p>
                <p className="text-xs text-muted-foreground">
                  Above average
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-sm font-medium">Attendance</p>
                <p className="text-2xl font-bold text-orange-600">{monthlyStats.attendanceRate}%</p>
                <p className="text-xs text-muted-foreground">
                  Excellent record
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Towards Goal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Monthly Progress</span>
          </CardTitle>
          <CardDescription>Track your progress towards monthly hour goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Total Hours Progress</span>
                <span className="text-sm text-muted-foreground">
                  {monthlyStats.totalHours}h / {monthlyStats.expectedHours}h
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getProgressColor((monthlyStats.totalHours / monthlyStats.expectedHours) * 100)}`}
                  style={{ width: `${Math.min((monthlyStats.totalHours / monthlyStats.expectedHours) * 100, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>0h</span>
                <span>{monthlyStats.expectedHours}h</span>
              </div>
            </div>

            {monthlyStats.hoursRemaining > 0 && (
              <div className="flex items-center space-x-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm text-yellow-800">
                  You need {monthlyStats.hoursRemaining} more hours to reach your monthly goal.
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Breakdown</CardTitle>
          <CardDescription>Hours worked per week this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {weeklyBreakdown.map((week, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{week.week}</p>
                    <p className="text-sm text-muted-foreground">
                      {week.hours}h total
                      {week.overtime > 0 && ` (+${week.overtime}h OT)`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-right">
                    <p className="font-bold">{week.hours}h</p>
                    {week.overtime > 0 && (
                      <p className="text-xs text-orange-600">+{week.overtime}h OT</p>
                    )}
                  </div>
                  <Badge variant={getStatusColor(week.status) as any}>
                    {week.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project Time Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Project Time Distribution</CardTitle>
          <CardDescription>How you've spent your time across different projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projectBreakdown.map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{project.project}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{project.hours}h</span>
                    <span className="text-sm font-medium">{project.percentage}%</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="h-2 bg-blue-500 rounded-full"
                    style={{ width: `${project.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Leave Balance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5" />
            <span>Leave & Benefits Summary</span>
          </CardTitle>
          <CardDescription>Your leave balance and benefits for this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold text-green-600">{monthlyStats.paidLeave}h</p>
              <p className="text-sm text-muted-foreground">Paid Leave Taken</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold text-red-600">{monthlyStats.unpaidLeave}h</p>
              <p className="text-sm text-muted-foreground">Unpaid Leave</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold text-blue-600">{monthlyStats.overtimeHours}h</p>
              <p className="text-sm text-muted-foreground">Overtime Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimesheetSummary;
