
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Server, Settings, Cpu, Database, HardDrive, Activity } from 'lucide-react';
import SystemResourcesChart from '../charts/SystemResourcesChart';

const AdminSystemSettingsTab = () => {
  const systemMetrics = [
    { time: '00:00', cpu: 45, memory: 62, disk: 78, network: 34 },
    { time: '04:00', cpu: 52, memory: 58, disk: 76, network: 42 },
    { time: '08:00', cpu: 68, memory: 71, disk: 79, network: 67 },
    { time: '12:00', cpu: 74, memory: 69, disk: 81, network: 73 },
    { time: '16:00', cpu: 71, memory: 65, disk: 82, network: 69 },
    { time: '20:00', cpu: 58, memory: 61, disk: 80, network: 51 },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <SystemResourcesChart data={systemMetrics} />
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            System Health
          </CardTitle>
          <CardDescription>Current system status and health metrics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-blue-500" />
              <div className="flex-1">
                <div className="flex justify-between text-sm">
                  <span>CPU Usage</span>
                  <span>74%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '74%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-green-500" />
              <div className="flex-1">
                <div className="flex justify-between text-sm">
                  <span>Memory</span>
                  <span>69%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '69%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-yellow-500" />
              <div className="flex-1">
                <div className="flex justify-between text-sm">
                  <span>Disk Space</span>
                  <span>81%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '81%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-purple-500" />
              <div className="flex-1">
                <div className="flex justify-between text-sm">
                  <span>Network I/O</span>
                  <span>51%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '51%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t space-y-2">
            <Button variant="outline" size="sm" className="w-full">
              <Settings className="h-4 w-4 mr-2" />
              System Configuration
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Backup & Recovery
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              Security Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSystemSettingsTab;
