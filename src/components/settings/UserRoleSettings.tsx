
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Users, Shield, Edit, Save, UserCheck } from 'lucide-react';

const UserRoleSettings = () => {
  const [roles, setRoles] = useState([
    {
      id: 'administrator',
      name: 'Administrator',
      description: 'Full system access and management',
      userCount: 2,
      permissions: {
        userManagement: true,
        systemSettings: true,
        financialReports: true,
        dataExport: true,
        systemBackup: true,
        auditLogs: true
      }
    },
    {
      id: 'management',
      name: 'Management',
      description: 'Business operations and reporting',
      userCount: 5,
      permissions: {
        userManagement: false,
        systemSettings: false,
        financialReports: true,
        dataExport: true,
        systemBackup: false,
        auditLogs: true
      }
    },
    {
      id: 'hr-manager',
      name: 'HR Manager',
      description: 'Human resources and employee management',
      userCount: 3,
      permissions: {
        userManagement: true,
        systemSettings: false,
        financialReports: false,
        dataExport: true,
        systemBackup: false,
        auditLogs: false
      }
    },
    {
      id: 'employee',
      name: 'Employee',
      description: 'Basic user access for daily tasks',
      userCount: 125,
      permissions: {
        userManagement: false,
        systemSettings: false,
        financialReports: false,
        dataExport: false,
        systemBackup: false,
        auditLogs: false
      }
    },
    {
      id: 'client',
      name: 'Client',
      description: 'External client access to services',
      userCount: 47,
      permissions: {
        userManagement: false,
        systemSettings: false,
        financialReports: false,
        dataExport: false,
        systemBackup: false,
        auditLogs: false
      }
    }
  ]);

  const permissionLabels = {
    userManagement: 'User Management',
    systemSettings: 'System Settings',
    financialReports: 'Financial Reports',
    dataExport: 'Data Export',
    systemBackup: 'System Backup',
    auditLogs: 'Audit Logs'
  };

  const handlePermissionChange = (roleId: string, permission: string, value: boolean) => {
    setRoles(prev => prev.map(role => 
      role.id === roleId 
        ? { 
            ...role, 
            permissions: { 
              ...role.permissions, 
              [permission]: value 
            } 
          }
        : role
    ));
  };

  const handleSave = () => {
    console.log('Saving role settings:', roles);
    // Here you would typically save to backend
  };

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Role Overview
          </CardTitle>
          <CardDescription>Manage user roles and their system permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            {roles.map((role) => (
              <div key={role.id} className="text-center">
                <div className="text-2xl font-bold">{role.userCount}</div>
                <div className="text-sm text-muted-foreground">{role.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Role Permissions */}
      <div className="grid gap-6">
        {roles.map((role) => (
          <Card key={role.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    {role.name}
                    <Badge variant="outline">{role.userCount} users</Badge>
                  </CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Role
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {Object.entries(permissionLabels).map(([key, label]) => (
                  <div key={key} className="flex items-center justify-between">
                    <Label htmlFor={`${role.id}-${key}`} className="text-sm">
                      {label}
                    </Label>
                    <Switch
                      id={`${role.id}-${key}`}
                      checked={role.permissions[key as keyof typeof role.permissions]}
                      onCheckedChange={(checked) => handlePermissionChange(role.id, key, checked)}
                      disabled={role.id === 'administrator' && key === 'systemSettings'} // Admin always has system settings
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Save Button */}
      <Card>
        <CardContent className="pt-6">
          <Button onClick={handleSave} className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Save Role Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserRoleSettings;
