
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import { Settings, Clock, Shield, Bell, Save } from 'lucide-react';

const AttendanceSettings = () => {
  const [settings, setSettings] = useState({
    workingHours: {
      startTime: '09:00',
      endTime: '17:00',
      lunchBreak: 60,
      flexibleHours: false
    },
    attendance: {
      graceTime: 15,
      lateMarkAfter: 15,
      halfDayThreshold: 4,
      autoClockOut: true
    },
    leave: {
      carryForward: true,
      maxCarryForward: 5,
      encashment: false,
      approvalLevels: 2
    },
    notifications: {
      lateArrival: true,
      earlyDeparture: true,
      leaveRequest: true,
      overtimeAlert: true
    }
  });

  const handleSave = () => {
    console.log('Saving attendance settings:', settings);
    // Save settings logic would go here
  };

  return (
    <div className="space-y-6">
      {/* Working Hours Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Working Hours Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="startTime">Start Time</Label>
              <Input
                id="startTime"
                type="time"
                value={settings.workingHours.startTime}
                onChange={(e) => setSettings({
                  ...settings,
                  workingHours: { ...settings.workingHours, startTime: e.target.value }
                })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endTime">End Time</Label>
              <Input
                id="endTime"
                type="time"
                value={settings.workingHours.endTime}
                onChange={(e) => setSettings({
                  ...settings,
                  workingHours: { ...settings.workingHours, endTime: e.target.value }
                })}
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="lunchBreak">Lunch Break (minutes)</Label>
              <Input
                id="lunchBreak"
                type="number"
                value={settings.workingHours.lunchBreak}
                onChange={(e) => setSettings({
                  ...settings,
                  workingHours: { ...settings.workingHours, lunchBreak: parseInt(e.target.value) }
                })}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="flexibleHours"
                checked={settings.workingHours.flexibleHours}
                onCheckedChange={(checked) => setSettings({
                  ...settings,
                  workingHours: { ...settings.workingHours, flexibleHours: checked }
                })}
              />
              <Label htmlFor="flexibleHours">Enable Flexible Hours</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Rules */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Attendance Rules
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="graceTime">Grace Time (minutes)</Label>
              <Input
                id="graceTime"
                type="number"
                value={settings.attendance.graceTime}
                onChange={(e) => setSettings({
                  ...settings,
                  attendance: { ...settings.attendance, graceTime: parseInt(e.target.value) }
                })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lateMarkAfter">Mark Late After (minutes)</Label>
              <Input
                id="lateMarkAfter"
                type="number"
                value={settings.attendance.lateMarkAfter}
                onChange={(e) => setSettings({
                  ...settings,
                  attendance: { ...settings.attendance, lateMarkAfter: parseInt(e.target.value) }
                })}
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="halfDayThreshold">Half Day Threshold (hours)</Label>
              <Input
                id="halfDayThreshold"
                type="number"
                value={settings.attendance.halfDayThreshold}
                onChange={(e) => setSettings({
                  ...settings,
                  attendance: { ...settings.attendance, halfDayThreshold: parseInt(e.target.value) }
                })}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="autoClockOut"
                checked={settings.attendance.autoClockOut}
                onCheckedChange={(checked) => setSettings({
                  ...settings,
                  attendance: { ...settings.attendance, autoClockOut: checked }
                })}
              />
              <Label htmlFor="autoClockOut">Auto Clock Out</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leave Policies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Leave Policies
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="carryForward"
                checked={settings.leave.carryForward}
                onCheckedChange={(checked) => setSettings({
                  ...settings,
                  leave: { ...settings.leave, carryForward: checked }
                })}
              />
              <Label htmlFor="carryForward">Allow Carry Forward</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxCarryForward">Max Carry Forward Days</Label>
              <Input
                id="maxCarryForward"
                type="number"
                value={settings.leave.maxCarryForward}
                onChange={(e) => setSettings({
                  ...settings,
                  leave: { ...settings.leave, maxCarryForward: parseInt(e.target.value) }
                })}
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="encashment"
                checked={settings.leave.encashment}
                onCheckedChange={(checked) => setSettings({
                  ...settings,
                  leave: { ...settings.leave, encashment: checked }
                })}
              />
              <Label htmlFor="encashment">Allow Leave Encashment</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="approvalLevels">Approval Levels</Label>
              <Select
                value={settings.leave.approvalLevels.toString()}
                onValueChange={(value) => setSettings({
                  ...settings,
                  leave: { ...settings.leave, approvalLevels: parseInt(value) }
                })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Level</SelectItem>
                  <SelectItem value="2">2 Levels</SelectItem>
                  <SelectItem value="3">3 Levels</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="lateArrival"
                checked={settings.notifications.lateArrival}
                onCheckedChange={(checked) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, lateArrival: checked }
                })}
              />
              <Label htmlFor="lateArrival">Late Arrival Alerts</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="earlyDeparture"
                checked={settings.notifications.earlyDeparture}
                onCheckedChange={(checked) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, earlyDeparture: checked }
                })}
              />
              <Label htmlFor="earlyDeparture">Early Departure Alerts</Label>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="leaveRequest"
                checked={settings.notifications.leaveRequest}
                onCheckedChange={(checked) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, leaveRequest: checked }
                })}
              />
              <Label htmlFor="leaveRequest">Leave Request Notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="overtimeAlert"
                checked={settings.notifications.overtimeAlert}
                onCheckedChange={(checked) => setSettings({
                  ...settings,
                  notifications: { ...settings.notifications, overtimeAlert: checked }
                })}
              />
              <Label htmlFor="overtimeAlert">Overtime Alerts</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Settings */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Save Configuration</p>
              <p className="text-sm text-muted-foreground">
                Changes will be applied to all employees immediately
              </p>
            </div>
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceSettings;
