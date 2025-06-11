
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { sampleEmployees } from '../../data/sampleData';
import { Users, UserCheck, UserX, Calendar, DollarSign, TrendingUp, TrendingDown, Award, Clock, AlertTriangle } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const HRDashboard = () => {
  const totalEmployees = sampleEmployees.length;
  const activeEmployees = sampleEmployees.filter(e => e.status === 'active').length;
  const inactiveEmployees = sampleEmployees.filter(e => e.status === 'inactive').length;
  const averageSalary = sampleEmployees.reduce((sum, e) => sum + e.salary, 0) / totalEmployees;
  
  // Calculate department distribution
  const departmentData = sampleEmployees.reduce((acc, employee) => {
    acc[employee.department] = (acc[employee.department] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const departmentChartData = Object.entries(departmentData).map(([dept, count]) => ({
    department: dept,
    employees: count,
    percentage: Math.round((count / totalEmployees) * 100)
  }));

  // Salary distribution by department
  const salaryByDepartment = Object.entries(
    sampleEmployees.reduce((acc, employee) => {
      if (!acc[employee.department]) {
        acc[employee.department] = { total: 0, count: 0 };
      }
      acc[employee.department].total += employee.salary;
      acc[employee.department].count += 1;
      return acc;
    }, {} as Record<string, { total: number; count: number }>)
  ).map(([dept, data]) => ({
    department: dept,
    averageSalary: Math.round(data.total / data.count),
    totalBudget: data.total
  }));

  // Mock attendance data
  const attendanceData = [
    { month: 'Jan', present: 95, absent: 5, late: 8 },
    { month: 'Feb', present: 92, absent: 8, late: 12 },
    { month: 'Mar', present: 96, absent: 4, late: 6 },
    { month: 'Apr', present: 94, absent: 6, late: 10 },
    { month: 'May', present: 97, absent: 3, late: 5 },
    { month: 'Jun', present: 93, absent: 7, late: 9 },
  ];

  // Mock hiring trends
  const hiringTrends = [
    { quarter: 'Q1 2024', hired: 12, terminated: 3, retention: 95 },
    { quarter: 'Q2 2024', hired: 8, terminated: 5, retention: 92 },
    { quarter: 'Q3 2024', hired: 15, terminated: 2, retention: 97 },
    { quarter: 'Q4 2024', hired: 10, terminated: 4, retention: 94 },
  ];

  // Top performers
  const topPerformers = [
    { name: 'Sarah Johnson', department: 'Management', rating: 4.9, projects: 8 },
    { name: 'John Smith', department: 'Engineering', rating: 4.8, projects: 12 },
    { name: 'Mike Chen', department: 'Sales', rating: 4.7, projects: 15 },
    { name: 'Lisa Brown', department: 'Marketing', rating: 4.6, projects: 6 },
  ];

  // Upcoming reviews and anniversaries
  const upcomingEvents = [
    { type: 'review', employee: 'Alex Wilson', date: '2024-06-15', department: 'Engineering' },
    { type: 'anniversary', employee: 'Jane Doe', date: '2024-06-18', years: 3 },
    { type: 'review', employee: 'Tom Anderson', date: '2024-06-20', department: 'Sales' },
    { type: 'anniversary', employee: 'Emily Davis', date: '2024-06-22', years: 5 },
  ];

  const chartConfig = {
    employees: { label: "Employees", color: "#8884d8" },
    present: { label: "Present", color: "#82ca9d" },
    absent: { label: "Absent", color: "#ffc658" },
    late: { label: "Late", color: "#ff7300" },
    hired: { label: "Hired", color: "#8884d8" },
    terminated: { label: "Terminated", color: "#ff7300" },
    retention: { label: "Retention %", color: "#82ca9d" },
  };

  const pieColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#8dd1e1'];

  return (
    <div className="space-y-6">
      {/* Key Metrics Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalEmployees}</div>
            <div className="flex items-center text-xs mt-1">
              <UserCheck className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">{activeEmployees} active</span>
              <UserX className="ml-2 mr-1 h-3 w-3 text-red-500" />
              <span className="text-red-500">{inactiveEmployees} inactive</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${averageSalary.toLocaleString()}</div>
            <div className="flex items-center text-xs mt-1">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">+5.2%</span>
              <span className="text-muted-foreground ml-1">from last year</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95.2%</div>
            <div className="flex items-center text-xs mt-1">
              <Clock className="mr-1 h-3 w-3 text-yellow-500" />
              <span className="text-muted-foreground">7.5% late arrivals</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Employee Turnover</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <div className="flex items-center text-xs mt-1">
              <TrendingDown className="mr-1 h-3 w-3 text-green-500" />
              <span className="text-green-500">-1.8%</span>
              <span className="text-muted-foreground ml-1">from last quarter</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Department Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="employees"
                    label={({ department, percentage }) => `${department}: ${percentage}%`}
                  >
                    {departmentChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Attendance Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Attendance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={attendanceData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="present"
                    stackId="1"
                    stroke="var(--color-present)"
                    fill="var(--color-present)"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="late"
                    stackId="1"
                    stroke="var(--color-late)"
                    fill="var(--color-late)"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="absent"
                    stackId="1"
                    stroke="var(--color-absent)"
                    fill="var(--color-absent)"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Salary and Hiring Analytics */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Average Salary by Department */}
        <Card>
          <CardHeader>
            <CardTitle>Average Salary by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salaryByDepartment}>
                  <XAxis dataKey="department" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="averageSalary" 
                    fill="var(--color-employees)" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Hiring Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Hiring & Retention Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={hiringTrends}>
                  <XAxis dataKey="quarter" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    yAxisId="left"
                    dataKey="hired" 
                    fill="var(--color-hired)" 
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    yAxisId="left"
                    dataKey="terminated" 
                    fill="var(--color-terminated)" 
                    radius={[4, 4, 0, 0]}
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="retention" 
                    stroke="var(--color-retention)" 
                    strokeWidth={2}
                    dot={{ fill: "var(--color-retention)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Performers */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Top Performers</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={performer.name} className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{performer.name}</p>
                      <p className="text-sm text-muted-foreground">{performer.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{performer.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{performer.projects} projects</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Employee List Summary */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Employee Activity</CardTitle>
            <Button variant="outline" size="sm">Manage</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sampleEmployees.slice(0, 5).map(employee => (
                <div key={employee.id} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{employee.name}</p>
                    <p className="text-sm text-muted-foreground">{employee.position}</p>
                    <p className="text-xs text-muted-foreground">{employee.department}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge variant={employee.status === 'active' ? 'default' : 'secondary'}>
                      {employee.status}
                    </Badge>
                    <span className="text-sm font-medium">${employee.salary.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Upcoming Reviews & Anniversaries
          </CardTitle>
          <Button variant="outline" size="sm">Calendar View</Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    event.type === 'review' ? 'bg-blue-500' : 'bg-green-500'
                  }`} />
                  <div>
                    <p className="font-medium">{event.employee}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.type === 'review' 
                        ? `Performance Review - ${event.department}` 
                        : `${event.years} Year Anniversary`
                      }
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline">{event.date}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRDashboard;
