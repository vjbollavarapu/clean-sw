
import React, { useState } from 'react';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import AdminSystemMonitoring from '../AdminSystemMonitoring';
import AdminUserManagement from '../AdminUserManagement';
import AdminOverviewTab from './tabs/AdminOverviewTab';
import AdminAnalyticsTab from './tabs/AdminAnalyticsTab';
import AdminSystemSettingsTab from './tabs/AdminSystemSettingsTab';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            System Healthy
          </Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="system">System Monitoring</TabsTrigger>
          <TabsTrigger value="settings">System Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <AdminOverviewTab />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <AdminAnalyticsTab />
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <AdminUserManagement />
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <AdminSystemMonitoring />
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <AdminSystemSettingsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
