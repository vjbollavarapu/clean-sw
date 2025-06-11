
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Settings, 
  Users, 
  Shield, 
  Database, 
  Mail, 
  Bell, 
  Palette, 
  Globe,
  Key,
  Clock,
  Server,
  FileText,
  Backup
} from 'lucide-react';
import GeneralSettings from '../components/settings/GeneralSettings';
import UserRoleSettings from '../components/settings/UserRoleSettings';
import SecuritySettings from '../components/settings/SecuritySettings';
import DatabaseSettings from '../components/settings/DatabaseSettings';
import NotificationSettings from '../components/settings/NotificationSettings';
import BackupSettings from '../components/settings/BackupSettings';

const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const settingsTabs = [
    { id: 'general', label: 'General', icon: Settings, description: 'Basic system configuration' },
    { id: 'users', label: 'User Roles', icon: Users, description: 'User permissions and roles' },
    { id: 'security', label: 'Security', icon: Shield, description: 'Security policies and authentication' },
    { id: 'database', label: 'Database', icon: Database, description: 'Database configuration and optimization' },
    { id: 'notifications', label: 'Notifications', icon: Bell, description: 'Email and system notifications' },
    { id: 'backup', label: 'Backup & Recovery', icon: Backup, description: 'Data backup and recovery settings' }
  ];

  const systemStatus = {
    status: 'healthy',
    uptime: '99.8%',
    lastBackup: '2 hours ago',
    activeUsers: 42,
    systemLoad: 'Normal'
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Settings</h1>
          <p className="text-muted-foreground">Configure and manage system-wide settings</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <Server className="h-3 w-3 mr-1" />
            System Healthy
          </Badge>
        </div>
      </div>

      {/* System Status Overview */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Status</p>
                <p className="text-xs text-muted-foreground">{systemStatus.status}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Uptime</p>
                <p className="text-xs text-muted-foreground">{systemStatus.uptime}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Active Users</p>
                <p className="text-xs text-muted-foreground">{systemStatus.activeUsers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Database className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-sm font-medium">Last Backup</p>
                <p className="text-xs text-muted-foreground">{systemStatus.lastBackup}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Server className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">System Load</p>
                <p className="text-xs text-muted-foreground">{systemStatus.systemLoad}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Settings Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          {settingsTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className="flex items-center space-x-2">
              <tab.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <GeneralSettings />
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <UserRoleSettings />
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <SecuritySettings />
        </TabsContent>

        <TabsContent value="database" className="space-y-4">
          <DatabaseSettings />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <NotificationSettings />
        </TabsContent>

        <TabsContent value="backup" className="space-y-4">
          <BackupSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SystemSettings;
