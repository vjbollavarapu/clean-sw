
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import AdminSystemMonitoring from '../AdminSystemMonitoring';
import AdminUserManagement from '../AdminUserManagement';
import { 
  sampleServiceOrders, 
  sampleEmployees, 
  sampleClients, 
  sampleInventory 
} from '../../data/sampleData';
import { Monitor, Users, Settings, BarChart3 } from 'lucide-react';

const AdminDashboard = () => {
  const totalOrders = sampleServiceOrders.length;
  const activeEmployees = sampleEmployees.filter(e => e.status === 'active').length;
  const activeClients = sampleClients.filter(c => c.status === 'active').length;
  const lowStockItems = sampleInventory.filter(i => i.quantity <= i.minQuantity).length;

  return (
    <div className="space-y-6">
      {/* Quick Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders}</div>
            <p className="text-xs text-muted-foreground">Active service orders</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeEmployees}</div>
            <p className="text-xs text-muted-foreground">Currently employed</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeClients}</div>
            <p className="text-xs text-muted-foreground">Current client base</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{lowStockItems}</div>
            <p className="text-xs text-muted-foreground">Items need restocking</p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Admin Monitoring Tabs */}
      <Tabs defaultValue="system" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            System Monitoring
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            User Management
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            System Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="system" className="space-y-4">
          <AdminSystemMonitoring />
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <AdminUserManagement />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Analytics</CardTitle>
              <CardDescription>Detailed system performance and usage analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Advanced analytics dashboard coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>Manage system-wide settings and configurations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">System settings panel coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
