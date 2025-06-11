
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { 
  DollarSign, 
  Plus, 
  Minus, 
  FileText, 
  Clock, 
  Shield, 
  CreditCard, 
  TrendingUp,
  Eye,
  Edit,
  Check,
  X,
  AlertCircle,
  Calendar
} from 'lucide-react';

const HRPayroll = () => {
  // Mock data for allowances
  const allowances = [
    {
      id: '1',
      employee: 'John Smith',
      type: 'Transportation',
      amount: 500,
      frequency: 'Monthly',
      status: 'active',
      startDate: '2024-01-01'
    },
    {
      id: '2',
      employee: 'Sarah Johnson',
      type: 'Housing',
      amount: 1200,
      frequency: 'Monthly',
      status: 'active',
      startDate: '2024-02-01'
    },
    {
      id: '3',
      employee: 'Mike Chen',
      type: 'Meal',
      amount: 300,
      frequency: 'Monthly',
      status: 'pending',
      startDate: '2024-06-01'
    }
  ];

  // Mock data for deductions
  const deductions = [
    {
      id: '1',
      employee: 'Alice Brown',
      type: 'Tax',
      amount: 800,
      frequency: 'Monthly',
      status: 'active',
      mandatory: true
    },
    {
      id: '2',
      employee: 'Bob Wilson',
      type: 'Union Dues',
      amount: 50,
      frequency: 'Monthly',
      status: 'active',
      mandatory: false
    },
    {
      id: '3',
      employee: 'Carol Davis',
      type: 'Pension',
      amount: 200,
      frequency: 'Monthly',
      status: 'active',
      mandatory: true
    }
  ];

  // Mock data for claims
  const claims = [
    {
      id: '1',
      employee: 'David Lee',
      type: 'Medical',
      amount: 250,
      description: 'Doctor consultation',
      status: 'pending',
      submittedDate: '2024-06-10',
      receipts: 1
    },
    {
      id: '2',
      employee: 'Eva Martinez',
      type: 'Travel',
      amount: 150,
      description: 'Client meeting travel',
      status: 'approved',
      submittedDate: '2024-06-08',
      receipts: 2
    },
    {
      id: '3',
      employee: 'Frank Taylor',
      type: 'Training',
      amount: 500,
      description: 'Professional certification',
      status: 'rejected',
      submittedDate: '2024-06-05',
      receipts: 1
    }
  ];

  // Mock data for overtime
  const overtime = [
    {
      id: '1',
      employee: 'Grace Kim',
      date: '2024-06-10',
      regularHours: 8,
      overtimeHours: 3,
      rate: 25,
      totalPay: 275,
      status: 'approved'
    },
    {
      id: '2',
      employee: 'Henry Adams',
      date: '2024-06-09',
      regularHours: 8,
      overtimeHours: 2,
      rate: 30,
      totalPay: 330,
      status: 'pending'
    }
  ];

  // Mock data for insurance
  const insurance = [
    {
      id: '1',
      employee: 'Iris Cooper',
      type: 'Health',
      provider: 'BlueCross',
      premium: 300,
      coverage: 'Family',
      status: 'active',
      renewalDate: '2024-12-31'
    },
    {
      id: '2',
      employee: 'Jack Nelson',
      type: 'Life',
      provider: 'MetLife',
      premium: 50,
      coverage: 'Individual',
      status: 'active',
      renewalDate: '2024-11-15'
    }
  ];

  // Mock data for loans
  const loans = [
    {
      id: '1',
      employee: 'Kelly Parker',
      type: 'Personal Loan',
      amount: 5000,
      outstanding: 3200,
      monthlyDeduction: 200,
      interestRate: 5.5,
      status: 'active',
      endDate: '2025-02-01'
    },
    {
      id: '2',
      employee: 'Liam Foster',
      type: 'Emergency Loan',
      amount: 1000,
      outstanding: 600,
      monthlyDeduction: 100,
      interestRate: 3.0,
      status: 'active',
      endDate: '2024-12-01'
    }
  ];

  // Mock data for advances
  const advances = [
    {
      id: '1',
      employee: 'Mia Roberts',
      amount: 800,
      reason: 'Medical emergency',
      requestDate: '2024-06-08',
      approvedDate: '2024-06-09',
      deductionStart: '2024-07-01',
      installments: 4,
      status: 'approved'
    },
    {
      id: '2',
      employee: 'Noah Turner',
      amount: 500,
      reason: 'Family event',
      requestDate: '2024-06-10',
      status: 'pending'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'rejected':
      case 'inactive':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Payroll Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Allowances</p>
                <p className="text-2xl font-bold">$24,500</p>
              </div>
              <Plus className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Deductions</p>
                <p className="text-2xl font-bold">$18,300</p>
              </div>
              <Minus className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Claims</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <FileText className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Loans</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <CreditCard className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payroll Management Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Payroll Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="allowances" className="space-y-4">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="allowances">Allowances</TabsTrigger>
              <TabsTrigger value="deductions">Deductions</TabsTrigger>
              <TabsTrigger value="claims">Claims</TabsTrigger>
              <TabsTrigger value="overtime">Overtime</TabsTrigger>
              <TabsTrigger value="insurance">Insurance</TabsTrigger>
              <TabsTrigger value="loans">Loans</TabsTrigger>
              <TabsTrigger value="advances">Advances</TabsTrigger>
            </TabsList>

            {/* Allowances Tab */}
            <TabsContent value="allowances" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Employee Allowances</h3>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Allowance
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allowances.map((allowance) => (
                    <TableRow key={allowance.id}>
                      <TableCell className="font-medium">{allowance.employee}</TableCell>
                      <TableCell>{allowance.type}</TableCell>
                      <TableCell>${allowance.amount}</TableCell>
                      <TableCell>{allowance.frequency}</TableCell>
                      <TableCell>{getStatusBadge(allowance.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            {/* Deductions Tab */}
            <TabsContent value="deductions" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Employee Deductions</h3>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Deduction
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Mandatory</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deductions.map((deduction) => (
                    <TableRow key={deduction.id}>
                      <TableCell className="font-medium">{deduction.employee}</TableCell>
                      <TableCell>{deduction.type}</TableCell>
                      <TableCell>${deduction.amount}</TableCell>
                      <TableCell>{deduction.frequency}</TableCell>
                      <TableCell>
                        {deduction.mandatory ? (
                          <Badge variant="outline">Mandatory</Badge>
                        ) : (
                          <Badge variant="secondary">Optional</Badge>
                        )}
                      </TableCell>
                      <TableCell>{getStatusBadge(deduction.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            {/* Claims Tab */}
            <TabsContent value="claims" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Employee Claims</h3>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Claim
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {claims.map((claim) => (
                    <TableRow key={claim.id}>
                      <TableCell className="font-medium">{claim.employee}</TableCell>
                      <TableCell>{claim.type}</TableCell>
                      <TableCell>${claim.amount}</TableCell>
                      <TableCell>{claim.description}</TableCell>
                      <TableCell>{getStatusBadge(claim.status)}</TableCell>
                      <TableCell>{claim.submittedDate}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {claim.status === 'pending' && (
                            <>
                              <Button variant="ghost" size="sm">
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <X className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            {/* Overtime Tab */}
            <TabsContent value="overtime" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Overtime Records</h3>
                <Button size="sm">
                  <Clock className="h-4 w-4 mr-2" />
                  Record Overtime
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Regular Hours</TableHead>
                    <TableHead>Overtime Hours</TableHead>
                    <TableHead>Rate</TableHead>
                    <TableHead>Total Pay</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {overtime.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">{record.employee}</TableCell>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.regularHours}h</TableCell>
                      <TableCell>{record.overtimeHours}h</TableCell>
                      <TableCell>${record.rate}/h</TableCell>
                      <TableCell>${record.totalPay}</TableCell>
                      <TableCell>{getStatusBadge(record.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            {/* Insurance Tab */}
            <TabsContent value="insurance" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Insurance Plans</h3>
                <Button size="sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Add Insurance
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Premium</TableHead>
                    <TableHead>Coverage</TableHead>
                    <TableHead>Renewal Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {insurance.map((plan) => (
                    <TableRow key={plan.id}>
                      <TableCell className="font-medium">{plan.employee}</TableCell>
                      <TableCell>{plan.type}</TableCell>
                      <TableCell>{plan.provider}</TableCell>
                      <TableCell>${plan.premium}</TableCell>
                      <TableCell>{plan.coverage}</TableCell>
                      <TableCell>{plan.renewalDate}</TableCell>
                      <TableCell>{getStatusBadge(plan.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            {/* Loans Tab */}
            <TabsContent value="loans" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Employee Loans</h3>
                <Button size="sm">
                  <CreditCard className="h-4 w-4 mr-2" />
                  New Loan
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Outstanding</TableHead>
                    <TableHead>Monthly Deduction</TableHead>
                    <TableHead>Interest Rate</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loans.map((loan) => (
                    <TableRow key={loan.id}>
                      <TableCell className="font-medium">{loan.employee}</TableCell>
                      <TableCell>{loan.type}</TableCell>
                      <TableCell>${loan.amount}</TableCell>
                      <TableCell>${loan.outstanding}</TableCell>
                      <TableCell>${loan.monthlyDeduction}</TableCell>
                      <TableCell>{loan.interestRate}%</TableCell>
                      <TableCell>{loan.endDate}</TableCell>
                      <TableCell>{getStatusBadge(loan.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            {/* Advances Tab */}
            <TabsContent value="advances" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Salary Advances</h3>
                <Button size="sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  New Advance
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Request Date</TableHead>
                    <TableHead>Installments</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {advances.map((advance) => (
                    <TableRow key={advance.id}>
                      <TableCell className="font-medium">{advance.employee}</TableCell>
                      <TableCell>${advance.amount}</TableCell>
                      <TableCell>{advance.reason}</TableCell>
                      <TableCell>{advance.requestDate}</TableCell>
                      <TableCell>{advance.installments || 'N/A'}</TableCell>
                      <TableCell>{getStatusBadge(advance.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {advance.status === 'pending' && (
                            <>
                              <Button variant="ghost" size="sm">
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <X className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRPayroll;
