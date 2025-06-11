
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Users, Building2, DollarSign, Calendar, AlertTriangle, TrendingUp, Settings, Plus, Bell, UserPlus, FileText, Shield } from 'lucide-react';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';

const AdminOverviewTab = () => {
  const recentActivities = [
    { id: 1, action: 'New user registered', user: 'John Smith', time: '2 minutes ago', type: 'user' },
    { id: 2, action: 'Service order completed', user: 'ABC Corp', time: '15 minutes ago', type: 'order' },
    { id: 3, action: 'System backup completed', user: 'System', time: '1 hour ago', type: 'system' },
    { id: 4, action: 'Payment received', user: 'XYZ Ltd', time: '2 hours ago', type: 'payment' },
    { id: 5, action: 'New client onboarded', user: 'TechStart Inc', time: '3 hours ago', type: 'client' }
  ];

  const systemAlerts = [
    { id: 1, message: 'Server CPU usage above 80%', severity: 'warning', time: '5 minutes ago' },
    { id: 2, message: 'Scheduled maintenance in 2 hours', severity: 'info', time: '30 minutes ago' },
    { id: 3, message: 'Low disk space on backup server', severity: 'error', time: '1 hour ago' }
  ];

  const recentUsers = [
    { name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Employee', status: 'active' },
    { name: 'Mike Chen', email: 'mike@techcorp.com', role: 'Client', status: 'pending' },
    { name: 'Lisa Brown', email: 'lisa@company.com', role: 'Employee', status: 'active' }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user': return <UserPlus className="h-4 w-4 text-blue-500" />;
      case 'order': return <FileText className="h-4 w-4 text-green-500" />;
      case 'system': return <Settings className="h-4 w-4 text-gray-500" />;
      case 'payment': return <DollarSign className="h-4 w-4 text-yellow-500" />;
      case 'client': return <Building2 className="h-4 w-4 text-purple-500" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const getAlertVariant = (severity: string) => {
    switch (severity) {
      case 'error': return 'destructive';
      case 'warning': return 'secondary';
      case 'info': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">195</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">158</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$67,000</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Service Orders</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">
              +22% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions and System Alerts */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add New User
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <Building2 className="h-4 w-4 mr-2" />
              Create Client Account
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <Shield className="h-4 w-4 mr-2" />
              System Backup
            </Button>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {systemAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg border">
                <Badge variant={getAlertVariant(alert.severity)} className="mt-0.5">
                  {alert.severity}
                </Badge>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Recent Users */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50">
                {getActivityIcon(activity.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Users */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recent User Registrations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentUsers.map((user, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {user.role}
                  </Badge>
                  <Badge 
                    variant={user.status === 'active' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {user.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverviewTab;
