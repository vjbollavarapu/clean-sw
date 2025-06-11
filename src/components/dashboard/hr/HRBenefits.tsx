
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { 
  Heart, 
  Umbrella, 
  GraduationCap, 
  Car, 
  Gift,
  Plus,
  Eye,
  CheckCircle,
  Clock
} from 'lucide-react';

const HRBenefits = () => {
  const benefitPlans = [
    {
      id: '1',
      name: 'Health Insurance',
      type: 'Medical',
      provider: 'HealthCorp Plus',
      enrolled: 42,
      eligible: 45,
      monthlyCost: 280,
      employeeContribution: 80
    },
    {
      id: '2',
      name: 'Dental Coverage',
      type: 'Dental',
      provider: 'DentalCare Pro',
      enrolled: 38,
      eligible: 45,
      monthlyCost: 45,
      employeeContribution: 15
    },
    {
      id: '3',
      name: 'Transportation Allowance',
      type: 'Transportation',
      provider: 'Company Direct',
      enrolled: 40,
      eligible: 45,
      monthlyCost: 150,
      employeeContribution: 0
    }
  ];

  const employeeBenefits = [
    {
      id: '1',
      employee: 'John Smith',
      healthInsurance: { enrolled: true, plan: 'Premium', cost: 280 },
      dental: { enrolled: true, plan: 'Basic', cost: 45 },
      transportation: { enrolled: true, amount: 150 },
      training: { budget: 1200, used: 800 },
      totalValue: 1675
    },
    {
      id: '2',
      employee: 'Sarah Johnson',
      healthInsurance: { enrolled: true, plan: 'Premium', cost: 280 },
      dental: { enrolled: false, plan: null, cost: 0 },
      transportation: { enrolled: true, amount: 150 },
      training: { budget: 1500, used: 1200 },
      totalValue: 1830
    },
    {
      id: '3',
      employee: 'Mike Chen',
      healthInsurance: { enrolled: false, plan: null, cost: 0 },
      dental: { enrolled: true, plan: 'Basic', cost: 45 },
      transportation: { enrolled: false, amount: 0 },
      training: { budget: 800, used: 400 },
      totalValue: 845
    }
  ];

  const leaveBalances = [
    {
      id: '1',
      employee: 'John Smith',
      annualLeave: { earned: 20, used: 8, remaining: 12 },
      sickLeave: { earned: 10, used: 3, remaining: 7 },
      personalLeave: { earned: 5, used: 1, remaining: 4 }
    },
    {
      id: '2',
      employee: 'Sarah Johnson',
      annualLeave: { earned: 22, used: 12, remaining: 10 },
      sickLeave: { earned: 10, used: 2, remaining: 8 },
      personalLeave: { earned: 5, used: 2, remaining: 3 }
    },
    {
      id: '3',
      employee: 'Mike Chen',
      annualLeave: { earned: 18, used: 6, remaining: 12 },
      sickLeave: { earned: 10, used: 5, remaining: 5 },
      personalLeave: { earned: 5, used: 0, remaining: 5 }
    }
  ];

  const getEnrollmentRate = (enrolled: number, eligible: number) => {
    return Math.round((enrolled / eligible) * 100);
  };

  const getEnrollmentBadge = (enrolled: boolean) => {
    return enrolled ? 
      <Badge variant="default"><CheckCircle className="h-3 w-3 mr-1" />Enrolled</Badge> : 
      <Badge variant="outline">Not Enrolled</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Benefits Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Benefits Cost</p>
                <p className="text-2xl font-bold">$18,450</p>
              </div>
              <Gift className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Health Enrollment</p>
                <p className="text-2xl font-bold">93%</p>
              </div>
              <Heart className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Training Budget Used</p>
                <p className="text-2xl font-bold">68%</p>
              </div>
              <GraduationCap className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Leave Balance</p>
                <p className="text-2xl font-bold">11.3</p>
              </div>
              <Umbrella className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Benefits Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Gift className="h-5 w-5 mr-2" />
            Employee Benefits Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="plans" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="plans">Benefit Plans</TabsTrigger>
              <TabsTrigger value="enrollment">Employee Enrollment</TabsTrigger>
              <TabsTrigger value="leave">Leave Balances</TabsTrigger>
            </TabsList>

            <TabsContent value="plans">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Available Benefit Plans</h3>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Plan
                  </Button>
                </div>
                <div className="grid gap-4">
                  {benefitPlans.map((plan) => (
                    <Card key={plan.id}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium">{plan.name}</h4>
                            <p className="text-sm text-muted-foreground">{plan.provider}</p>
                          </div>
                          <Badge variant="outline">{plan.type}</Badge>
                        </div>
                        <div className="grid gap-3 md:grid-cols-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Enrollment</p>
                            <p className="font-medium">{plan.enrolled}/{plan.eligible} ({getEnrollmentRate(plan.enrolled, plan.eligible)}%)</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Monthly Cost</p>
                            <p className="font-medium">${plan.monthlyCost}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Employee Share</p>
                            <p className="font-medium">${plan.employeeContribution}</p>
                          </div>
                          <div className="flex items-end">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-1" />
                              Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="enrollment">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Employee Benefit Enrollment</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Health Insurance</TableHead>
                      <TableHead>Dental</TableHead>
                      <TableHead>Transportation</TableHead>
                      <TableHead>Training Budget</TableHead>
                      <TableHead>Total Value</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employeeBenefits.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell className="font-medium">{employee.employee}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {getEnrollmentBadge(employee.healthInsurance.enrolled)}
                            {employee.healthInsurance.enrolled && (
                              <p className="text-xs text-muted-foreground">${employee.healthInsurance.cost}/mo</p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {getEnrollmentBadge(employee.dental.enrolled)}
                            {employee.dental.enrolled && (
                              <p className="text-xs text-muted-foreground">${employee.dental.cost}/mo</p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {getEnrollmentBadge(employee.transportation.enrolled)}
                            {employee.transportation.enrolled && (
                              <p className="text-xs text-muted-foreground">${employee.transportation.amount}/mo</p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <p className="text-sm">${employee.training.used}/${employee.training.budget}</p>
                            <div className="w-full bg-gray-200 rounded-full h-1">
                              <div 
                                className="bg-blue-600 h-1 rounded-full" 
                                style={{ width: `${(employee.training.used / employee.training.budget) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">${employee.totalValue}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="leave">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Employee Leave Balances</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Annual Leave</TableHead>
                      <TableHead>Sick Leave</TableHead>
                      <TableHead>Personal Leave</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaveBalances.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell className="font-medium">{employee.employee}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">{employee.annualLeave.remaining} days remaining</p>
                            <p className="text-xs text-muted-foreground">
                              Used: {employee.annualLeave.used}/{employee.annualLeave.earned}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">{employee.sickLeave.remaining} days remaining</p>
                            <p className="text-xs text-muted-foreground">
                              Used: {employee.sickLeave.used}/{employee.sickLeave.earned}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">{employee.personalLeave.remaining} days remaining</p>
                            <p className="text-xs text-muted-foreground">
                              Used: {employee.personalLeave.used}/{employee.personalLeave.earned}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRBenefits;
