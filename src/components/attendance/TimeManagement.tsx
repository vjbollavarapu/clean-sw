
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Progress } from '../ui/progress';
import { Clock, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

const TimeManagement = () => {
  const overtimeData = [
    {
      employee: 'John Smith',
      department: 'Engineering',
      regularHours: 40,
      overtimeHours: 8.5,
      totalHours: 48.5,
      status: 'approved'
    },
    {
      employee: 'Sarah Johnson',
      department: 'Sales',
      regularHours: 40,
      overtimeHours: 6.0,
      totalHours: 46.0,
      status: 'pending'
    },
    {
      employee: 'Mike Chen',
      department: 'Marketing',
      regularHours: 38,
      overtimeHours: 12.0,
      totalHours: 50.0,
      status: 'excessive'
    }
  ];

  const workingHoursSummary = [
    { metric: 'Average Daily Hours', value: '8.2', target: '8.0', status: 'above' },
    { metric: 'Overtime Rate', value: '12%', target: '10%', status: 'above' },
    { metric: 'Productive Hours', value: '6.8', target: '7.0', status: 'below' },
    { metric: 'Break Compliance', value: '94%', target: '95%', status: 'below' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'excessive':
        return <Badge variant="destructive">Excessive</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'above' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Working Hours Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Working Hours Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {workingHoursSummary.map((item) => (
              <Card key={item.metric}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">{item.metric}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-2xl font-bold ${getStatusColor(item.status)}`}>
                        {item.value}
                      </span>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Target</p>
                        <p className="text-sm font-medium">{item.target}</p>
                      </div>
                    </div>
                    <Progress 
                      value={parseFloat(item.value) / parseFloat(item.target) * 100} 
                      className="h-2"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Overtime Management */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Overtime Management</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Review Alerts
            </Button>
            <Button size="sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              Approve All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Regular Hours</TableHead>
                <TableHead>Overtime Hours</TableHead>
                <TableHead>Total Hours</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {overtimeData.map((record, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{record.employee}</TableCell>
                  <TableCell>{record.department}</TableCell>
                  <TableCell>{record.regularHours}h</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span>{record.overtimeHours}h</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{record.totalHours}h</TableCell>
                  <TableCell>{getStatusBadge(record.status)}</TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        Review
                      </Button>
                      {record.status === 'pending' && (
                        <Button variant="ghost" size="sm">
                          Approve
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Time Tracking Policies */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Time Tracking Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Standard Working Hours</p>
                  <p className="text-sm text-muted-foreground">8 hours per day, 40 hours per week</p>
                </div>
                <Badge variant="outline">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Overtime Threshold</p>
                  <p className="text-sm text-muted-foreground">After 8 hours daily or 40 hours weekly</p>
                </div>
                <Badge variant="outline">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Break Requirements</p>
                  <p className="text-sm text-muted-foreground">30 min lunch, 15 min breaks</p>
                </div>
                <Badge variant="outline">Active</Badge>
              </div>
              <Button variant="outline" className="w-full">
                Modify Policies
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start">
                <Clock className="h-4 w-4 mr-2" />
                Bulk Time Entry
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                Generate Time Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Review Overtime Alerts
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve Timesheets
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TimeManagement;
