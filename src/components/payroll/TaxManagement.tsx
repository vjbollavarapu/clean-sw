
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Progress } from '../ui/progress';
import { 
  Calculator, 
  FileText, 
  AlertTriangle, 
  CheckCircle,
  TrendingUp,
  Calendar,
  DollarSign,
  Percent
} from 'lucide-react';

const TaxManagement = () => {
  const taxDeductions = [
    {
      employee: 'John Smith',
      grossPay: 8500,
      federalTax: 1700,
      stateTax: 510,
      socialSecurity: 527,
      medicare: 123,
      totalTax: 2860,
      netPay: 5640
    },
    {
      employee: 'Sarah Johnson',
      grossPay: 6200,
      federalTax: 1240,
      stateTax: 372,
      socialSecurity: 384,
      medicare: 90,
      totalTax: 2086,
      netPay: 4114
    },
    {
      employee: 'Mike Chen',
      grossPay: 5800,
      federalTax: 1160,
      stateTax: 348,
      socialSecurity: 360,
      medicare: 84,
      totalTax: 1952,
      netPay: 3848
    },
    {
      employee: 'Emily Davis',
      grossPay: 4900,
      federalTax: 980,
      stateTax: 294,
      socialSecurity: 304,
      medicare: 71,
      totalTax: 1649,
      netPay: 3251
    }
  ];

  const taxSettings = [
    {
      category: 'Federal Income Tax',
      rate: '20%',
      status: 'active',
      lastUpdated: '2024-01-01',
      description: 'Federal tax withholding rate'
    },
    {
      category: 'State Income Tax',
      rate: '6%',
      status: 'active',
      lastUpdated: '2024-01-01',
      description: 'State tax withholding rate'
    },
    {
      category: 'Social Security',
      rate: '6.2%',
      status: 'active',
      lastUpdated: '2024-01-01',
      description: 'Social Security tax rate'
    },
    {
      category: 'Medicare',
      rate: '1.45%',
      status: 'active',
      lastUpdated: '2024-01-01',
      description: 'Medicare tax rate'
    },
    {
      category: 'Additional Medicare',
      rate: '0.9%',
      status: 'conditional',
      lastUpdated: '2024-01-01',
      description: 'Additional Medicare tax for high earners'
    }
  ];

  const quarterlyTaxSummary = [
    { quarter: 'Q1 2024', federal: 45000, state: 13500, socialSecurity: 28620, medicare: 6693, total: 93813 },
    { quarter: 'Q2 2024', federal: 47000, state: 14100, socialSecurity: 29890, medicare: 6991, total: 97981 },
    { quarter: 'Q3 2024', federal: 48500, state: 14550, socialSecurity: 30830, medicare: 7210, total: 101090 },
    { quarter: 'Q4 2024', federal: 50000, state: 15000, socialSecurity: 31800, medicare: 7434, total: 104234 }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'conditional':
        return <Badge className="bg-orange-100 text-orange-800">Conditional</Badge>;
      case 'inactive':
        return <Badge variant="destructive">Inactive</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Tax Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Federal Tax</p>
                <p className="text-2xl font-bold text-red-600">$50,000</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Percent className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">State Tax</p>
                <p className="text-2xl font-bold text-blue-600">$15,000</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Social Security</p>
                <p className="text-2xl font-bold text-green-600">$31,800</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calculator className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Medicare</p>
                <p className="text-2xl font-bold text-purple-600">$7,434</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tax Settings */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Tax Settings & Rates</CardTitle>
          <Button variant="outline" size="sm">
            <Calculator className="h-4 w-4 mr-2" />
            Update Rates
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {taxSettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="font-medium">{setting.category}</p>
                    {getStatusBadge(setting.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">{setting.description}</p>
                  <p className="text-xs text-muted-foreground">Last updated: {setting.lastUpdated}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">{setting.rate}</p>
                  <Button variant="ghost" size="sm" className="mt-1">
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Employee Tax Deductions */}
      <Card>
        <CardHeader>
          <CardTitle>Current Month Tax Deductions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Gross Pay</TableHead>
                <TableHead>Federal Tax</TableHead>
                <TableHead>State Tax</TableHead>
                <TableHead>Social Security</TableHead>
                <TableHead>Medicare</TableHead>
                <TableHead>Total Tax</TableHead>
                <TableHead>Net Pay</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {taxDeductions.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{employee.employee}</TableCell>
                  <TableCell>${employee.grossPay.toLocaleString()}</TableCell>
                  <TableCell>${employee.federalTax.toLocaleString()}</TableCell>
                  <TableCell>${employee.stateTax.toLocaleString()}</TableCell>
                  <TableCell>${employee.socialSecurity.toLocaleString()}</TableCell>
                  <TableCell>${employee.medicare.toLocaleString()}</TableCell>
                  <TableCell className="font-semibold">${employee.totalTax.toLocaleString()}</TableCell>
                  <TableCell className="font-semibold text-green-600">
                    ${employee.netPay.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quarterly Tax Summary and Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quarterly Tax Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {quarterlyTaxSummary.map((quarter, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-medium">{quarter.quarter}</p>
                    <p className="font-semibold">${quarter.total.toLocaleString()}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span>Federal:</span>
                      <span>${quarter.federal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>State:</span>
                      <span>${quarter.state.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Social Security:</span>
                      <span>${quarter.socialSecurity.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Medicare:</span>
                      <span>${quarter.medicare.toLocaleString()}</span>
                    </div>
                  </div>
                  <Progress value={75} className="h-2 mt-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tax Management Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start">
                <Calculator className="h-4 w-4 mr-2" />
                Calculate Quarterly Taxes
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Generate Tax Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CheckCircle className="h-4 w-4 mr-2" />
                File Tax Forms
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Tax Reminders
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Review Tax Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TaxManagement;
