
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { 
  Settings, 
  Calendar, 
  DollarSign, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  Calculator
} from 'lucide-react';

const PayrollSettings = () => {
  const payrollPolicies = [
    {
      name: 'Automatic Payroll Processing',
      description: 'Automatically process payroll on scheduled dates',
      enabled: true,
      category: 'automation'
    },
    {
      name: 'Overtime Calculation',
      description: 'Automatically calculate overtime for hours over 40/week',
      enabled: true,
      category: 'calculation'
    },
    {
      name: 'Holiday Pay',
      description: 'Include holiday pay in payroll calculations',
      enabled: true,
      category: 'benefits'
    },
    {
      name: 'Tax Withholding',
      description: 'Automatically calculate and withhold taxes',
      enabled: true,
      category: 'tax'
    },
    {
      name: 'Benefit Deductions',
      description: 'Automatically deduct employee benefits',
      enabled: true,
      category: 'benefits'
    },
    {
      name: 'Email Notifications',
      description: 'Send email notifications for payroll events',
      enabled: false,
      category: 'notifications'
    }
  ];

  const payrollSchedule = [
    {
      type: 'Monthly Payroll',
      frequency: 'Last working day of each month',
      nextRun: '2024-04-30',
      status: 'active'
    },
    {
      type: 'Bonus Processing',
      frequency: 'Quarterly (End of quarter)',
      nextRun: '2024-06-30',
      status: 'active'
    },
    {
      type: 'Year-end Processing',
      frequency: 'Annual (December 31st)',
      nextRun: '2024-12-31',
      status: 'scheduled'
    },
    {
      type: 'Tax Filing',
      frequency: 'Quarterly (15th of following month)',
      nextRun: '2024-07-15',
      status: 'pending'
    }
  ];

  const approvalWorkflow = [
    {
      step: 'HR Review',
      approver: 'HR Manager',
      required: true,
      autoApprove: false,
      timeLimit: '24 hours'
    },
    {
      step: 'Finance Approval',
      approver: 'Finance Director',
      required: true,
      autoApprove: false,
      timeLimit: '48 hours'
    },
    {
      step: 'Final Authorization',
      approver: 'General Manager',
      required: false,
      autoApprove: true,
      timeLimit: '12 hours'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'automation': return 'bg-blue-100 text-blue-800';
      case 'calculation': return 'bg-green-100 text-green-800';
      case 'benefits': return 'bg-purple-100 text-purple-800';
      case 'tax': return 'bg-red-100 text-red-800';
      case 'notifications': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>;
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-800">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Payroll Policies */}
      <Card>
        <CardHeader>
          <CardTitle>Payroll Policies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payrollPolicies.map((policy, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="font-medium">{policy.name}</p>
                    <Badge className={getCategoryColor(policy.category)}>
                      {policy.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{policy.description}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Switch checked={policy.enabled} />
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payroll Schedule */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Payroll Schedule</CardTitle>
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Modify Schedule
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payrollSchedule.map((schedule, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{schedule.type}</p>
                  <p className="text-sm text-muted-foreground">{schedule.frequency}</p>
                  <p className="text-xs text-muted-foreground">Next run: {schedule.nextRun}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(schedule.status)}
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Approval Workflow */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Approval Workflow</CardTitle>
          <Button variant="outline" size="sm">
            <Users className="h-4 w-4 mr-2" />
            Configure Workflow
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {approvalWorkflow.map((step, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{step.step}</p>
                    <p className="text-sm text-muted-foreground">{step.approver}</p>
                    <p className="text-xs text-muted-foreground">Time limit: {step.timeLimit}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm">
                      {step.required ? (
                        <Badge variant="destructive">Required</Badge>
                      ) : (
                        <Badge variant="outline">Optional</Badge>
                      )}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {step.autoApprove ? 'Auto-approve' : 'Manual approval'}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Configuration */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>System Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <span className="font-medium">Currency Settings</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">USD ($)</p>
                  <Button variant="ghost" size="sm">Configure</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">Pay Period</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Monthly</p>
                  <Button variant="ghost" size="sm">Configure</Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-purple-500" />
                  <span className="font-medium">Time Zone</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">EST (UTC-5)</p>
                  <Button variant="ghost" size="sm">Configure</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start">
                <Calculator className="h-4 w-4 mr-2" />
                Recalculate All Policies
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Reset to Defaults
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CheckCircle className="h-4 w-4 mr-2" />
                Test Configurations
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Backup Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PayrollSettings;
