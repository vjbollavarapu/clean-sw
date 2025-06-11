
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Settings, Bell, DollarSign, Users, FileText, Shield } from 'lucide-react';

const ProcurementSettings = () => {
  const [settings, setSettings] = useState({
    autoApproval: false,
    emailNotifications: true,
    approvalThreshold: 1000,
    defaultPaymentTerms: 'net-30',
    requireThreeQuotes: true,
    budgetAlerts: true
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Procurement Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="approval" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="approval" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Approval</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center space-x-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="financial" className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4" />
                <span className="hidden sm:inline">Financial</span>
              </TabsTrigger>
              <TabsTrigger value="workflow" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Workflow</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="approval" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Approval Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base">Auto-approval for small orders</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically approve orders below the threshold amount
                      </p>
                    </div>
                    <Switch
                      checked={settings.autoApproval}
                      onCheckedChange={(checked) => handleSettingChange('autoApproval', checked)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="approvalThreshold">Approval Threshold ($)</Label>
                    <Input
                      id="approvalThreshold"
                      type="number"
                      value={settings.approvalThreshold}
                      onChange={(e) => handleSettingChange('approvalThreshold', Number(e.target.value))}
                      placeholder="1000"
                    />
                    <p className="text-sm text-muted-foreground">
                      Orders above this amount require manual approval
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base">Require three quotes</Label>
                      <p className="text-sm text-muted-foreground">
                        Require three supplier quotes for orders above $5,000
                      </p>
                    </div>
                    <Switch
                      checked={settings.requireThreeQuotes}
                      onCheckedChange={(checked) => handleSettingChange('requireThreeQuotes', checked)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Approval Hierarchy</Label>
                    <div className="border rounded-lg p-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span>$0 - $500</span>
                        <span className="text-sm text-muted-foreground">Department Manager</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>$501 - $2,000</span>
                        <span className="text-sm text-muted-foreground">Procurement Manager</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>$2,001 - $10,000</span>
                        <span className="text-sm text-muted-foreground">Finance Director</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>$10,001+</span>
                        <span className="text-sm text-muted-foreground">CEO Approval</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Notification Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base">Email notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive email updates on purchase order status changes
                      </p>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base">Budget alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when approaching budget limits
                      </p>
                    </div>
                    <Switch
                      checked={settings.budgetAlerts}
                      onCheckedChange={(checked) => handleSettingChange('budgetAlerts', checked)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Notification Recipients</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <Label>Purchase Order Creator</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <Label>Department Manager</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch />
                        <Label>Finance Team</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <Label>Procurement Manager</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="financial" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Financial Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="paymentTerms">Default Payment Terms</Label>
                    <Select value={settings.defaultPaymentTerms} onValueChange={(value) => handleSettingChange('defaultPaymentTerms', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment terms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="net-15">Net 15</SelectItem>
                        <SelectItem value="net-30">Net 30</SelectItem>
                        <SelectItem value="net-45">Net 45</SelectItem>
                        <SelectItem value="net-60">Net 60</SelectItem>
                        <SelectItem value="cod">Cash on Delivery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Budget Categories</Label>
                    <div className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Cleaning Supplies</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">$15,000 / $20,000</span>
                          <div className="w-20 h-2 bg-muted rounded-full">
                            <div className="w-3/4 h-2 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Equipment</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">$8,500 / $25,000</span>
                          <div className="w-20 h-2 bg-muted rounded-full">
                            <div className="w-1/3 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Office Supplies</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">$4,200 / $5,000</span>
                          <div className="w-20 h-2 bg-muted rounded-full">
                            <div className="w-5/6 h-2 bg-orange-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD - US Dollar</SelectItem>
                        <SelectItem value="eur">EUR - Euro</SelectItem>
                        <SelectItem value="gbp">GBP - British Pound</SelectItem>
                        <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="workflow" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Workflow Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Order Processing Workflow</Label>
                    <div className="border rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span>1. Request Creation</span>
                        <span className="text-sm text-muted-foreground">Automatic</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>2. Department Approval</span>
                        <span className="text-sm text-muted-foreground">Required</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>3. Budget Verification</span>
                        <span className="text-sm text-muted-foreground">Automatic</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>4. Procurement Review</span>
                        <span className="text-sm text-muted-foreground">Required</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>5. Supplier Selection</span>
                        <span className="text-sm text-muted-foreground">Manual</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>6. Order Placement</span>
                        <span className="text-sm text-muted-foreground">Automatic</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="leadTime">Default Lead Time (days)</Label>
                    <Input
                      id="leadTime"
                      type="number"
                      defaultValue="7"
                      placeholder="7"
                    />
                    <p className="text-sm text-muted-foreground">
                      Expected time from order to delivery
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Document Templates</Label>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Purchase Order Template
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Request for Quote Template
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Supplier Agreement Template
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end space-x-2 mt-6">
            <Button variant="outline">Reset to Defaults</Button>
            <Button>Save Settings</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProcurementSettings;
