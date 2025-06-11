
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { HardDrive, Cloud, Download, RefreshCw, Save, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const BackupSettings = () => {
  const [backupSettings, setBackupSettings] = useState({
    autoBackup: true,
    backupFrequency: 'daily',
    backupTime: '02:00',
    retentionPeriod: 30,
    compressionEnabled: true,
    encryptBackups: true,
    cloudBackup: true,
    cloudProvider: 'aws-s3',
    localBackupPath: '/var/backups/cleansw'
  });

  const [backupHistory, setBackupHistory] = useState([
    {
      id: 1,
      date: '2024-01-15 02:00',
      type: 'Automatic',
      size: '1.2 GB',
      status: 'completed',
      location: 'Local + Cloud'
    },
    {
      id: 2,
      date: '2024-01-14 02:00',
      type: 'Automatic',
      size: '1.1 GB',
      status: 'completed',
      location: 'Local + Cloud'
    },
    {
      id: 3,
      date: '2024-01-13 14:30',
      type: 'Manual',
      size: '1.1 GB',
      status: 'completed',
      location: 'Local'
    },
    {
      id: 4,
      date: '2024-01-13 02:00',
      type: 'Automatic',
      size: '1.1 GB',
      status: 'failed',
      location: 'Local + Cloud'
    }
  ]);

  const handleSettingChange = (key: string, value: any) => {
    setBackupSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log('Saving backup settings:', backupSettings);
    // Here you would typically save to backend
  };

  const runManualBackup = () => {
    console.log('Starting manual backup...');
    // Here you would trigger a manual backup
  };

  const restoreBackup = (backupId: number) => {
    console.log('Restoring backup:', backupId);
    // Here you would restore from backup
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
          <CheckCircle className="h-3 w-3 mr-1" />
          Completed
        </Badge>;
      case 'failed':
        return <Badge variant="destructive">
          <AlertCircle className="h-3 w-3 mr-1" />
          Failed
        </Badge>;
      case 'running':
        return <Badge variant="secondary">
          <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
          Running
        </Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Backup Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HardDrive className="h-5 w-5" />
            Backup Configuration
          </CardTitle>
          <CardDescription>Configure automatic backup settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Automatic Backup</Label>
              <p className="text-sm text-muted-foreground">Enable scheduled backups</p>
            </div>
            <Switch
              checked={backupSettings.autoBackup}
              onCheckedChange={(checked) => handleSettingChange('autoBackup', checked)}
            />
          </div>
          
          {backupSettings.autoBackup && (
            <>
              <div className="space-y-2">
                <Label htmlFor="backupFrequency">Backup Frequency</Label>
                <Select 
                  value={backupSettings.backupFrequency} 
                  onValueChange={(value) => handleSettingChange('backupFrequency', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Every Hour</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="backupTime">Backup Time</Label>
                <Input
                  id="backupTime"
                  type="time"
                  value={backupSettings.backupTime}
                  onChange={(e) => handleSettingChange('backupTime', e.target.value)}
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="retentionPeriod">Retention Period (days)</Label>
            <Input
              id="retentionPeriod"
              type="number"
              value={backupSettings.retentionPeriod}
              onChange={(e) => handleSettingChange('retentionPeriod', parseInt(e.target.value))}
              min="7"
              max="365"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label>Compression</Label>
            <Switch
              checked={backupSettings.compressionEnabled}
              onCheckedChange={(checked) => handleSettingChange('compressionEnabled', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label>Encrypt Backups</Label>
            <Switch
              checked={backupSettings.encryptBackups}
              onCheckedChange={(checked) => handleSettingChange('encryptBackups', checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Storage Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5" />
            Storage Configuration
          </CardTitle>
          <CardDescription>Configure backup storage locations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="localBackupPath">Local Backup Path</Label>
            <Input
              id="localBackupPath"
              value={backupSettings.localBackupPath}
              onChange={(e) => handleSettingChange('localBackupPath', e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Cloud Backup</Label>
              <p className="text-sm text-muted-foreground">Store backups in cloud storage</p>
            </div>
            <Switch
              checked={backupSettings.cloudBackup}
              onCheckedChange={(checked) => handleSettingChange('cloudBackup', checked)}
            />
          </div>

          {backupSettings.cloudBackup && (
            <div className="space-y-2">
              <Label htmlFor="cloudProvider">Cloud Provider</Label>
              <Select 
                value={backupSettings.cloudProvider} 
                onValueChange={(value) => handleSettingChange('cloudProvider', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aws-s3">Amazon S3</SelectItem>
                  <SelectItem value="google-cloud">Google Cloud Storage</SelectItem>
                  <SelectItem value="azure-blob">Azure Blob Storage</SelectItem>
                  <SelectItem value="dropbox">Dropbox</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="pt-4 border-t">
            <Button onClick={runManualBackup} className="w-full">
              <HardDrive className="h-4 w-4 mr-2" />
              Run Manual Backup
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Backup History */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Backup History
          </CardTitle>
          <CardDescription>Recent backup activities and status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {backupHistory.map((backup) => (
              <div key={backup.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="font-medium">{backup.date}</div>
                    <div className="text-sm text-muted-foreground">
                      {backup.type} • {backup.size} • {backup.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {getStatusBadge(backup.status)}
                  {backup.status === 'completed' && (
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => restoreBackup(backup.id)}
                      >
                        <RefreshCw className="h-4 w-4 mr-1" />
                        Restore
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Card className="md:col-span-2">
        <CardContent className="pt-6">
          <Button onClick={handleSave} className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Save Backup Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BackupSettings;
