
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Calendar, Check, X, Eye, Users, AlertTriangle } from 'lucide-react';

const LeaveManagement = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const pendingLeaves = [
    {
      id: '1',
      employee: 'John Smith',
      type: 'Annual Leave',
      startDate: '2024-06-15',
      endDate: '2024-06-20',
      days: 5,
      reason: 'Family vacation',
      status: 'pending'
    },
    {
      id: '2',
      employee: 'Sarah Johnson',
      type: 'Sick Leave',
      startDate: '2024-06-12',
      endDate: '2024-06-14',
      days: 3,
      reason: 'Medical appointment',
      status: 'pending'
    }
  ];

  const approvedLeaves = [
    {
      id: '3',
      employee: 'Mike Chen',
      type: 'Annual Leave',
      startDate: '2024-06-08',
      endDate: '2024-06-10',
      days: 3,
      reason: 'Personal time off',
      status: 'approved'
    }
  ];

  const leaveBalance = [
    {
      employee: 'John Smith',
      annualLeave: { used: 12, remaining: 13, total: 25 },
      sickLeave: { used: 3, remaining: 7, total: 10 },
      personalLeave: { used: 1, remaining: 4, total: 5 }
    },
    {
      employee: 'Sarah Johnson',
      annualLeave: { used: 8, remaining: 17, total: 25 },
      sickLeave: { used: 2, remaining: 8, total: 10 },
      personalLeave: { used: 0, remaining: 5, total: 5 }
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getLeaveTypeBadge = (type: string) => {
    switch (type) {
      case 'Annual Leave':
        return <Badge className="bg-blue-100 text-blue-800">Annual</Badge>;
      case 'Sick Leave':
        return <Badge className="bg-red-100 text-red-800">Sick</Badge>;
      case 'Personal Leave':
        return <Badge className="bg-purple-100 text-purple-800">Personal</Badge>;
      default:
        return <Badge variant="secondary">{type}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Leave Management Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Leave Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="pending">Pending Requests</TabsTrigger>
              <TabsTrigger value="approved">Approved Leaves</TabsTrigger>
              <TabsTrigger value="balance">Leave Balance</TabsTrigger>
              <TabsTrigger value="calendar">Leave Calendar</TabsTrigger>
            </TabsList>

            <TabsContent value="pending" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Pending Leave Requests</h3>
                <div className="flex space-x-2">
                  <Button size="sm">
                    <Check className="h-4 w-4 mr-2" />
                    Approve Selected
                  </Button>
                  <Button variant="outline" size="sm">
                    <X className="h-4 w-4 mr-2" />
                    Reject Selected
                  </Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Leave Type</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Days</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingLeaves.map((leave) => (
                    <TableRow key={leave.id}>
                      <TableCell className="font-medium">{leave.employee}</TableCell>
                      <TableCell>{getLeaveTypeBadge(leave.type)}</TableCell>
                      <TableCell>{leave.startDate}</TableCell>
                      <TableCell>{leave.endDate}</TableCell>
                      <TableCell>{leave.days} days</TableCell>
                      <TableCell>{leave.reason}</TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="approved" className="space-y-4">
              <h3 className="text-lg font-medium">Approved Leaves</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Leave Type</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Days</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {approvedLeaves.map((leave) => (
                    <TableRow key={leave.id}>
                      <TableCell className="font-medium">{leave.employee}</TableCell>
                      <TableCell>{getLeaveTypeBadge(leave.type)}</TableCell>
                      <TableCell>{leave.startDate}</TableCell>
                      <TableCell>{leave.endDate}</TableCell>
                      <TableCell>{leave.days} days</TableCell>
                      <TableCell>{getStatusBadge(leave.status)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="balance" className="space-y-4">
              <h3 className="text-lg font-medium">Employee Leave Balance</h3>
              <div className="grid gap-4">
                {leaveBalance.map((employee, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-4">{employee.employee}</h4>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Annual Leave</span>
                            <Badge className="bg-blue-100 text-blue-800">
                              {employee.annualLeave.remaining} remaining
                            </Badge>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Used: {employee.annualLeave.used}</span>
                              <span>Total: {employee.annualLeave.total}</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full" 
                                style={{ width: `${(employee.annualLeave.used / employee.annualLeave.total) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Sick Leave</span>
                            <Badge className="bg-red-100 text-red-800">
                              {employee.sickLeave.remaining} remaining
                            </Badge>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Used: {employee.sickLeave.used}</span>
                              <span>Total: {employee.sickLeave.total}</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-red-500 h-2 rounded-full" 
                                style={{ width: `${(employee.sickLeave.used / employee.sickLeave.total) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Personal Leave</span>
                            <Badge className="bg-purple-100 text-purple-800">
                              {employee.personalLeave.remaining} remaining
                            </Badge>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Used: {employee.personalLeave.used}</span>
                              <span>Total: {employee.personalLeave.total}</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-purple-500 h-2 rounded-full" 
                                style={{ width: `${(employee.personalLeave.used / employee.personalLeave.total) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="space-y-4">
              <h3 className="text-lg font-medium">Leave Calendar View</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-12">
                    <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Calendar view integration would be implemented here</p>
                    <Button variant="outline" className="mt-4">
                      Configure Calendar View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Requests</p>
                <p className="text-2xl font-bold text-orange-600">{pendingLeaves.length}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">On Leave Today</p>
                <p className="text-2xl font-bold text-blue-600">8</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold text-purple-600">24</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Approval Rate</p>
                <p className="text-2xl font-bold text-green-600">94%</p>
              </div>
              <Check className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeaveManagement;
