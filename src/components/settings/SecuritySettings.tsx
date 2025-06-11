
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Shield, Key, Clock, AlertTriangle, Save, Eye, EyeOff } from 'lucide-react';

const SecuritySettings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    passwordMinLength: 8,
    passwordRequireNumbers: true,
    passwordRequireSymbols: true,
    passwordRequireUppercase: true,
    passwordExpiration: 90,
    maxLoginAttempts: 5,
    lockoutDuration: 30,
    twoFactorAuth: true,
    sessionTimeout: 60,
    ipWhitelist: '',
    auditLogging: true,
    encryptionLevel: 'AES-256'
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log('Saving security settings:', settings);
    // Here you would typically save to backend
  };

  const securityLevel = () => {
    const score = [
      settings.passwordMinLength >= 8,
      settings.passwordRequireNumbers,
      settings.passwordRequireSymbols,
      settings.passwordRequireUppercase,
      settings.twoFactorAuth,
      settings.auditLogging
    ].filter(Boolean).length;

    if (score >= 5) return { level: 'High', color: 'bg-green-500' };
    if (score >= 3) return { level: 'Medium', color: 'bg-yellow-500' };
    return { level: 'Low', color: 'bg-red-500' };
  };

  const security = securityLevel();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Security Level Overview */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Level
            <Badge variant="outline" className="ml-2">
              <div className={`h-2 w-2 rounded-full ${security.color} mr-2`}></div>
              {security.level}
            </Badge>
          </CardTitle>
          <CardDescription>Current system security configuration assessment</CardDescription>
        </CardHeader>
      </Card>

      {/* Password Policy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Password Policy
          </CardTitle>
          <CardDescription>Configure password requirements and policies</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="passwordMinLength">Minimum Password Length</Label>
            <Input
              id="passwordMinLength"
              type="number"
              value={settings.passwordMinLength}
              onChange={(e) => handleSettingChange('passwordMinLength', parseInt(e.target.value))}
              min="6"
              max="20"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Require Numbers</Label>
              <Switch
                checked={settings.passwordRequireNumbers}
                onCheckedChange={(checked) => handleSettingChange('passwordRequireNumbers', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label>Require Symbols</Label>
              <Switch
                checked={settings.passwordRequireSymbols}
                onCheckedChange={(checked) => handleSettingChange('passwordRequireSymbols', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label>Require Uppercase</Label>
              <Switch
                checked={settings.passwordRequireUppercase}
                onCheckedChange={(checked) => handleSettingChange('passwordRequireUppercase', checked)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="passwordExpiration">Password Expiration (days)</Label>
            <Select 
              value={settings.passwordExpiration.toString()} 
              onValueChange={(value) => handleSettingChange('passwordExpiration', parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="60">60 days</SelectItem>
                <SelectItem value="90">90 days</SelectItem>
                <SelectItem value="180">180 days</SelectItem>
                <SelectItem value="365">1 year</SelectItem>
                <SelectItem value="0">Never</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Authentication Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Authentication Security
          </CardTitle>
          <CardDescription>Login security and access controls</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
            <Input
              id="maxLoginAttempts"
              type="number"
              value={settings.maxLoginAttempts}
              onChange={(e) => handleSettingChange('maxLoginAttempts', parseInt(e.target.value))}
              min="3"
              max="10"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lockoutDuration">Lockout Duration (minutes)</Label>
            <Input
              id="lockoutDuration"
              type="number"
              value={settings.lockoutDuration}
              onChange={(e) => handleSettingChange('lockoutDuration', parseInt(e.target.value))}
              min="5"
              max="120"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">Require 2FA for all users</p>
            </div>
            <Switch
              checked={settings.twoFactorAuth}
              onCheckedChange={(checked) => handleSettingChange('twoFactorAuth', checked)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
            <Select 
              value={settings.sessionTimeout.toString()} 
              onValueChange={(value) => handleSettingChange('sessionTimeout', parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="60">1 hour</SelectItem>
                <SelectItem value="120">2 hours</SelectItem>
                <SelectItem value="480">8 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Advanced Security
          </CardTitle>
          <CardDescription>Advanced security features and monitoring</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ipWhitelist">IP Whitelist</Label>
            <Input
              id="ipWhitelist"
              placeholder="192.168.1.0/24, 10.0.0.0/8"
              value={settings.ipWhitelist}
              onChange={(e) => handleSettingChange('ipWhitelist', e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Comma-separated list of allowed IP addresses/ranges
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Audit Logging</Label>
              <p className="text-sm text-muted-foreground">Log all system activities</p>
            </div>
            <Switch
              checked={settings.auditLogging}
              onCheckedChange={(checked) => handleSettingChange('auditLogging', checked)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="encryptionLevel">Encryption Level</Label>
            <Select 
              value={settings.encryptionLevel} 
              onValueChange={(value) => handleSettingChange('encryptionLevel', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AES-128">AES-128</SelectItem>
                <SelectItem value="AES-256">AES-256</SelectItem>
                <SelectItem value="RSA-2048">RSA-2048</SelectItem>
                <SelectItem value="RSA-4096">RSA-4096</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Card className="md:col-span-2">
        <CardContent className="pt-6">
          <Button onClick={handleSave} className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Save Security Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecuritySettings;
