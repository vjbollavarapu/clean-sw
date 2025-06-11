
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Progress } from '../ui/progress';
import { 
  Calculator, 
  Play, 
  Pause, 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  DollarSign,
  Users,
  FileText
} from 'lucide-react';

const PayrollProcessing = () => {
  const [processingStatus, setProcessingStatus] = useState('ready'); // ready, processing, completed

  const payrollBatch = [
    {
      id: 'PR001',
      employee: 'John Smith',
      department: 'Engineering',
      baseSalary: 8000,
      allowances: 800,
      overtime: 450,
      deductions: 1200,
      netPay: 8050,
      status: 'calculated'
    },
    {
      id: 'PR002',
      employee: 'Sarah Johnson',
      department: 'Sales',
      baseSalary: 6000,
      allowances: 600,
      overtime: 200,
      deductions: 900,
      netPay: 5900,
      status: 'pending'
    },
    {
      id: 'PR003',
      employee: 'Mike Chen',
      department: 'Marketing',
      baseSalary: 5500,
      allowances: 500,
      overtime: 150,
      deductions: 850,
      netPay: 5300,
      status: 'calculated'
    },
    {
      id: 'PR004',
      employee: 'Emily Davis',
      department: 'HR',
      baseSalary: 4800,
      allowances: 400,
      overtime: 100,
      deductions: 700,
      netPay: 4600,
      status: 'error'
    }
  ];

  const processingSteps = [
    { step: 'Data Validation', status: 'completed', description: 'Validate employee data and attendance' },
    { step: 'Salary Calculation', status: 'completed', description: 'Calculate base salary and overtime' },
    { step: 'Deductions Processing', status: 'in-progress', description: 'Process tax and benefit deductions' },
    { step: 'Final Review', status: 'pending', description: 'Review and approve payroll calculations' },
    { step: 'Payment Generation', status: 'pending', description: 'Generate payment files and notifications' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'calculated':
        return <Badge className="bg-green-100 text-green-800">Calculated</Badge>;
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-800">Pending</Badge>;
      case 'error':
        return <Badge variant="destructive">Error</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-800">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-purple-100 text-purple-800">In Progress</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStepProgress = (status: string) => {
    switch (status) {
      case 'completed': return 100;
      case 'in-progress': return 60;
      case 'pending': return 0;
      default: return 0;
    }
  };

  const handleProcessPayroll = () => {
    setProcessingStatus('processing');
    // Simulate processing
    setTimeout(() => {
      setProcessingStatus('completed');
    }, 3000);
  };

  const totalGrossPay = payrollBatch.reduce((sum, item) => sum + item.baseSalary + item.allowances + item.overtime, 0);
  const totalDeductions = payrollBatch.reduce((sum, item) => sum + item.deductions, 0);
  const totalNetPay = payrollBatch.reduce((sum, item) => sum + item.netPay, 0);

  return (
    <div className="space-y-6">
      {/* Processing Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Employees</p>
                <p className="text-2xl font-bold">{payrollBatch.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Gross Pay</p>
                <p className="text-2xl font-bold text-green-600">${totalGrossPay.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Deductions</p>
                <p className="text-2xl font-bold text-red-600">${totalDeductions.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Net Pay</p>
                <p className="text-2xl font-bold text-purple-600">${totalNetPay.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Processing Steps */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Payroll Processing Steps</CardTitle>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              disabled={processingStatus === 'processing'}
            >
              <Pause className="h-4 w-4 mr-2" />
              Pause
            </Button>
            <Button 
              size="sm"
              onClick={handleProcessPayroll}
              disabled={processingStatus === 'processing'}
            >
              <Play className="h-4 w-4 mr-2" />
              {processingStatus === 'processing' ? 'Processing...' : 'Start Processing'}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {processingSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                <div className="flex-shrink-0">
                  {step.status === 'completed' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : step.status === 'in-progress' ? (
                    <Clock className="h-5 w-5 text-blue-500" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">{step.step}</p>
                    {getStatusBadge(step.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  <Progress value={getStepProgress(step.status)} className="h-2 mt-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payroll Details Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Payroll Calculation Details</CardTitle>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Export Details
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee ID</TableHead>
                <TableHead>Employee</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Base Salary</TableHead>
                <TableHead>Allowances</TableHead>
                <TableHead>Overtime</TableHead>
                <TableHead>Deductions</TableHead>
                <TableHead>Net Pay</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payrollBatch.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.id}</TableCell>
                  <TableCell>{record.employee}</TableCell>
                  <TableCell>{record.department}</TableCell>
                  <TableCell>${record.baseSalary.toLocaleString()}</TableCell>
                  <TableCell>${record.allowances.toLocaleString()}</TableCell>
                  <TableCell>${record.overtime.toLocaleString()}</TableCell>
                  <TableCell>${record.deductions.toLocaleString()}</TableCell>
                  <TableCell className="font-semibold">${record.netPay.toLocaleString()}</TableCell>
                  <TableCell>{getStatusBadge(record.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Processing Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start">
                <Calculator className="h-4 w-4 mr-2" />
                Recalculate All
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Review Errors
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve Batch
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Generate Payslips
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Processing History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 border-l-4 border-green-500 bg-green-50">
                <div>
                  <p className="font-medium">March 2024 Payroll</p>
                  <p className="text-sm text-muted-foreground">Completed on Mar 31, 2024</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Success</Badge>
              </div>
              <div className="flex items-center justify-between p-2 border-l-4 border-green-500 bg-green-50">
                <div>
                  <p className="font-medium">February 2024 Payroll</p>
                  <p className="text-sm text-muted-foreground">Completed on Feb 29, 2024</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Success</Badge>
              </div>
              <div className="flex items-center justify-between p-2 border-l-4 border-orange-500 bg-orange-50">
                <div>
                  <p className="font-medium">January 2024 Payroll</p>
                  <p className="text-sm text-muted-foreground">Issues resolved on Jan 31, 2024</p>
                </div>
                <Badge className="bg-orange-100 text-orange-800">Resolved</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PayrollProcessing;
