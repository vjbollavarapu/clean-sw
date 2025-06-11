
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Calendar, 
  AlertTriangle, 
  CheckCircle,
  FileText,
  Calculator
} from 'lucide-react';

const PayrollOverview = () => {
  const monthlyPayrollTrend = [
    { month: 'Jan', amount: 470000, employees: 150 },
    { month: 'Feb', amount: 475000, employees: 152 },
    { month: 'Mar', amount: 482000, employees: 154 },
    { month: 'Apr', amount: 485750, employees: 156 },
    { month: 'May', amount: 489000, employees: 158 },
    { month: 'Jun', amount: 492500, employees: 160 }
  ];

  const departmentPayroll = [
    { department: 'Engineering', amount: 185000, employees: 45 },
    { department: 'Sales', amount: 125000, employees: 32 },
    { department: 'Marketing', amount: 95000, employees: 28 },
    { department: 'HR', amount: 65000, employees: 15 },
    { department: 'Finance', amount: 85000, employees: 22 },
    { department: 'Operations', amount: 55000, employees: 14 }
  ];

  const payrollBreakdown = [
    { name: 'Base Salary', value: 68, amount: 330310, color: '#22c55e' },
    { name: 'Allowances', value: 15, amount: 72862, color: '#3b82f6' },
    { name: 'Overtime', value: 12, amount: 58290, color: '#f59e0b' },
    { name: 'Bonuses', value: 5, amount: 24288, color: '#8b5cf6' }
  ];

  const upcomingPayroll = [
    { id: 1, employee: 'John Smith', department: 'Engineering', amount: 8500, status: 'pending' },
    { id: 2, employee: 'Sarah Johnson', department: 'Sales', amount: 6200, status: 'approved' },
    { id: 3, employee: 'Mike Chen', department: 'Marketing', amount: 5800, status: 'pending' },
    { id: 4, employee: 'Emily Davis', department: 'HR', amount: 4900, status: 'approved' },
    { id: 5, employee: 'Alex Wilson', department: 'Finance', amount: 5500, status: 'review' }
  ];

  const chartConfig = {
    amount: { color: '#22c55e' },
    employees: { color: '#3b82f6' }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-800">Pending</Badge>;
      case 'review':
        return <Badge className="bg-blue-100 text-blue-800">Under Review</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Monthly Payroll Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Payroll Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyPayrollTrend}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="amount" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Payroll Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Payroll Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={payrollBreakdown}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {payrollBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Department Payroll and Upcoming Payroll */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Department Payroll Distribution */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Department Payroll Distribution</CardTitle>
            <Button variant="outline" size="sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentPayroll.map((dept) => (
                <div key={dept.department} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{dept.department}</p>
                    <p className="text-sm text-muted-foreground">{dept.employees} employees</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${dept.amount.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">
                      ${Math.round(dept.amount / dept.employees).toLocaleString()} avg
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Payroll Processing */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Payroll Processing</CardTitle>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingPayroll.map((payroll) => (
                <div key={payroll.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{payroll.employee}</p>
                    <p className="text-sm text-muted-foreground">{payroll.department}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <span className="font-semibold">${payroll.amount.toLocaleString()}</span>
                    {getStatusBadge(payroll.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Button className="h-20 flex flex-col space-y-2">
              <Calculator className="h-6 w-6" />
              <span>Process Payroll</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <FileText className="h-6 w-6" />
              <span>Generate Reports</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <CheckCircle className="h-6 w-6" />
              <span>Approve Payroll</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <DollarSign className="h-6 w-6" />
              <span>Salary Review</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PayrollOverview;
