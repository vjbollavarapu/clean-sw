
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, LineChart, Line } from 'recharts';
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter,
  TrendingUp,
  DollarSign,
  Users,
  Calculator
} from 'lucide-react';

const PayrollReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const monthlyPayrollData = [
    { month: 'Jan', grossPay: 470000, netPay: 352500, taxes: 94000, benefits: 23500 },
    { month: 'Feb', grossPay: 475000, netPay: 356250, taxes: 95000, benefits: 23750 },
    { month: 'Mar', grossPay: 482000, netPay: 361500, taxes: 96400, benefits: 24100 },
    { month: 'Apr', grossPay: 485750, netPay: 364312, taxes: 97150, benefits: 24287 },
    { month: 'May', grossPay: 489000, netPay: 366750, taxes: 97800, benefits: 24450 },
    { month: 'Jun', grossPay: 492500, netPay: 369375, taxes: 98500, benefits: 24625 }
  ];

  const departmentCostAnalysis = [
    { department: 'Engineering', payroll: 185000, benefits: 27750, taxes: 37000, total: 249750 },
    { department: 'Sales', payroll: 125000, benefits: 18750, taxes: 25000, total: 168750 },
    { department: 'Marketing', payroll: 95000, benefits: 14250, taxes: 19000, total: 128250 },
    { department: 'HR', payroll: 65000, benefits: 9750, taxes: 13000, total: 87750 },
    { department: 'Finance', payroll: 85000, benefits: 12750, taxes: 17000, total: 114750 },
    { department: 'Operations', payroll: 55000, benefits: 8250, taxes: 11000, total: 74250 }
  ];

  const reportTemplates = [
    {
      name: 'Monthly Payroll Summary',
      description: 'Complete payroll breakdown by month',
      type: 'summary',
      lastGenerated: '2024-04-01'
    },
    {
      name: 'Department Cost Analysis',
      description: 'Payroll costs grouped by department',
      type: 'analysis',
      lastGenerated: '2024-03-28'
    },
    {
      name: 'Tax Withholding Report',
      description: 'Tax deductions and withholdings',
      type: 'tax',
      lastGenerated: '2024-04-01'
    },
    {
      name: 'Benefits Summary',
      description: 'Employee benefits and deductions',
      type: 'benefits',
      lastGenerated: '2024-03-30'
    },
    {
      name: 'Overtime Analysis',
      description: 'Overtime hours and costs',
      type: 'overtime',
      lastGenerated: '2024-04-01'
    },
    {
      name: 'Year-to-Date Summary',
      description: 'Cumulative payroll data for the year',
      type: 'ytd',
      lastGenerated: '2024-04-01'
    }
  ];

  const chartConfig = {
    grossPay: { color: '#22c55e' },
    netPay: { color: '#3b82f6' },
    taxes: { color: '#ef4444' },
    benefits: { color: '#f59e0b' }
  };

  const getReportTypeBadge = (type: string) => {
    switch (type) {
      case 'summary':
        return <Badge className="bg-blue-100 text-blue-800">Summary</Badge>;
      case 'analysis':
        return <Badge className="bg-green-100 text-green-800">Analysis</Badge>;
      case 'tax':
        return <Badge className="bg-red-100 text-red-800">Tax</Badge>;
      case 'benefits':
        return <Badge className="bg-purple-100 text-purple-800">Benefits</Badge>;
      case 'overtime':
        return <Badge className="bg-orange-100 text-orange-800">Overtime</Badge>;
      case 'ytd':
        return <Badge className="bg-indigo-100 text-indigo-800">YTD</Badge>;
      default:
        return <Badge variant="secondary">{type}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Report Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Report Generation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <div className="flex space-x-2">
                <Button 
                  variant={selectedPeriod === 'monthly' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedPeriod('monthly')}
                >
                  Monthly
                </Button>
                <Button 
                  variant={selectedPeriod === 'quarterly' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedPeriod('quarterly')}
                >
                  Quarterly
                </Button>
                <Button 
                  variant={selectedPeriod === 'yearly' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedPeriod('yearly')}
                >
                  Yearly
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Custom Date Range
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Monthly Payroll Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Payroll Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyPayrollData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="grossPay" stroke="#22c55e" strokeWidth={2} />
                  <Line type="monotone" dataKey="netPay" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Department Cost Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Department Costs</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={departmentCostAnalysis}>
                  <XAxis dataKey="department" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="payroll" fill="#22c55e" />
                  <Bar dataKey="benefits" fill="#3b82f6" />
                  <Bar dataKey="taxes" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {reportTemplates.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <p className="font-medium">{report.name}</p>
                    {getReportTypeBadge(report.type)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                  <p className="text-xs text-muted-foreground">
                    Last generated: {report.lastGenerated}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary Statistics */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Month Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <span className="font-medium">Gross Pay</span>
                </div>
                <span className="font-semibold">$492,500</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-red-500" />
                  <span className="font-medium">Tax Deductions</span>
                </div>
                <span className="font-semibold">$98,500</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">Benefit Deductions</span>
                </div>
                <span className="font-semibold">$24,625</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg bg-primary/5">
                <div className="flex items-center space-x-2">
                  <Calculator className="h-4 w-4 text-primary" />
                  <span className="font-medium">Net Pay</span>
                </div>
                <span className="font-bold text-primary">$369,375</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Report Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Generate Monthly Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Export Payroll Data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                Department Analysis
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PayrollReports;
