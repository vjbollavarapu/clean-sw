
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  DollarSign, 
  Users, 
  Calculator, 
  FileText, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Calendar,
  CreditCard,
  PieChart
} from 'lucide-react';
import PayrollOverview from '../components/payroll/PayrollOverview';
import PayrollProcessing from '../components/payroll/PayrollProcessing';
import SalaryManagement from '../components/payroll/SalaryManagement';
import PayrollReports from '../components/payroll/PayrollReports';
import TaxManagement from '../components/payroll/TaxManagement';
import PayrollSettings from '../components/payroll/PayrollSettings';

const Payroll = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const payrollTabs = [
    { id: 'overview', label: 'Overview', icon: PieChart, description: 'Payroll dashboard and summary' },
    { id: 'processing', label: 'Processing', icon: Calculator, description: 'Process monthly payroll' },
    { id: 'salary', label: 'Salary Management', icon: DollarSign, description: 'Manage employee salaries' },
    { id: 'reports', label: 'Reports', icon: FileText, description: 'Payroll reports and analytics' },
    { id: 'tax', label: 'Tax Management', icon: TrendingUp, description: 'Tax calculations and filing' },
    { id: 'settings', label: 'Settings', icon: AlertTriangle, description: 'Payroll policies and settings' }
  ];

  const payrollStats = {
    totalEmployees: 156,
    totalPayroll: 485750,
    pendingApprovals: 8,
    processedThisMonth: 148,
    avgSalary: 3114,
    taxDeductions: 97340
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Payroll Management</h1>
          <p className="text-muted-foreground">Manage employee payroll, salaries, and compensation</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            ${payrollStats.totalPayroll.toLocaleString()} Monthly
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Total Employees</p>
                <p className="text-2xl font-bold">{payrollStats.totalEmployees}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Total Payroll</p>
                <p className="text-2xl font-bold text-green-600">${payrollStats.totalPayroll.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-sm font-medium">Pending Approvals</p>
                <p className="text-2xl font-bold text-orange-600">{payrollStats.pendingApprovals}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Processed</p>
                <p className="text-2xl font-bold text-purple-600">{payrollStats.processedThisMonth}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calculator className="h-4 w-4 text-indigo-500" />
              <div>
                <p className="text-sm font-medium">Avg Salary</p>
                <p className="text-2xl font-bold text-indigo-600">${payrollStats.avgSalary.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Tax Deductions</p>
                <p className="text-2xl font-bold text-red-600">${payrollStats.taxDeductions.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payroll Management Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          {payrollTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className="flex items-center space-x-2">
              <tab.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <PayrollOverview />
        </TabsContent>

        <TabsContent value="processing" className="space-y-4">
          <PayrollProcessing />
        </TabsContent>

        <TabsContent value="salary" className="space-y-4">
          <SalaryManagement />
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <PayrollReports />
        </TabsContent>

        <TabsContent value="tax" className="space-y-4">
          <TaxManagement />
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <PayrollSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Payroll;
