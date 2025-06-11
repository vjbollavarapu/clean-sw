
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Database, HardDrive, Zap, Activity, Save, RefreshCw } from 'lucide-react';

const DatabaseSettings = () => {
  const [settings, setSettings] = useState({
    connectionPoolSize: 10,
    queryTimeout: 30,
    enableQueryCache: true,
    cacheSize: 256,
    autoVacuum: true,
    logQueries: false,
    compressionEnabled: true,
    backupRetention: 30
  });

  const [dbStats, setDbStats] = useState({
    totalSize: '2.4 GB',
    tableCount: 47,
    indexCount: 125,
    avgQueryTime: '45ms',
    cacheHitRatio: 94,
    activeConnections: 8,
    diskUsage: 68
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log('Saving database settings:', settings);
    // Here you would typically save to backend
  };

  const runMaintenance = () => {
    console.log('Running database maintenance...');
    // Here you would trigger database maintenance tasks
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Database Statistics */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Database Statistics
          </CardTitle>
          <CardDescription>Current database status and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{dbStats.totalSize}</div>
              <div className="text-sm text-muted-foreground">Total Size</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{dbStats.tableCount}</div>
              <div className="text-sm text-muted-foreground">Tables</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{dbStats.avgQueryTime}</div>
              <div className="text-sm text-muted-foreground">Avg Query Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{dbStats.cacheHitRatio}%</div>
              <div className="text-sm text-muted-foreground">Cache Hit Ratio</div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Disk Usage</span>
              <span>{dbStats.diskUsage}%</span>
            </div>
            <Progress value={dbStats.diskUsage} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Connection Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Connection Settings
          </CardTitle>
          <CardDescription>Database connection and pool configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="connectionPoolSize">Connection Pool Size</Label>
            <Input
              id="connectionPoolSize"
              type="number"
              value={settings.connectionPoolSize}
              onChange={(e) => handleSettingChange('connectionPoolSize', parseInt(e.target.value))}
              min="5"
              max="50"
            />
            <p className="text-xs text-muted-foreground">
              Current active connections: {dbStats.activeConnections}
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="queryTimeout">Query Timeout (seconds)</Label>
            <Input
              id="queryTimeout"
              type="number"
              value={settings.queryTimeout}
              onChange={(e) => handleSettingChange('queryTimeout', parseInt(e.target.value))}
              min="10"
              max="300"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable Query Cache</Label>
              <p className="text-sm text-muted-foreground">Cache frequently used queries</p>
            </div>
            <Switch
              checked={settings.enableQueryCache}
              onCheckedChange={(checked) => handleSettingChange('enableQueryCache', checked)}
            />
          </div>
          {settings.enableQueryCache && (
            <div className="space-y-2">
              <Label htmlFor="cacheSize">Cache Size (MB)</Label>
              <Select 
                value={settings.cacheSize.toString()} 
                onValueChange={(value) => handleSettingChange('cacheSize', parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="128">128 MB</SelectItem>
                  <SelectItem value="256">256 MB</SelectItem>
                  <SelectItem value="512">512 MB</SelectItem>
                  <SelectItem value="1024">1 GB</SelectItem>
                  <SelectItem value="2048">2 GB</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Performance Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Performance Settings
          </CardTitle>
          <CardDescription>Optimize database performance and maintenance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto Vacuum</Label>
              <p className="text-sm text-muted-foreground">Automatically clean up deleted records</p>
            </div>
            <Switch
              checked={settings.autoVacuum}
              onCheckedChange={(checked) => handleSettingChange('autoVacuum', checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Log Queries</Label>
              <p className="text-sm text-muted-foreground">Log slow and error queries</p>
            </div>
            <Switch
              checked={settings.logQueries}
              onCheckedChange={(checked) => handleSettingChange('logQueries', checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Compression</Label>
              <p className="text-sm text-muted-foreground">Enable data compression</p>
            </div>
            <Switch
              checked={settings.compressionEnabled}
              onCheckedChange={(checked) => handleSettingChange('compressionEnabled', checked)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="backupRetention">Backup Retention (days)</Label>
            <Select 
              value={settings.backupRetention.toString()} 
              onValueChange={(value) => handleSettingChange('backupRetention', parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">7 days</SelectItem>
                <SelectItem value="14">14 days</SelectItem>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="60">60 days</SelectItem>
                <SelectItem value="90">90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Database Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HardDrive className="h-5 w-5" />
            Database Maintenance
          </CardTitle>
          <CardDescription>Database maintenance and optimization tools</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full" onClick={runMaintenance}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Run Maintenance
          </Button>
          <Button variant="outline" className="w-full">
            <Database className="h-4 w-4 mr-2" />
            Optimize Indexes
          </Button>
          <Button variant="outline" className="w-full">
            <HardDrive className="h-4 w-4 mr-2" />
            Analyze Tables
          </Button>
          <Button variant="destructive" className="w-full">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset Statistics
          </Button>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Card>
        <CardContent className="pt-6">
          <Button onClick={handleSave} className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Save Database Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DatabaseSettings;
