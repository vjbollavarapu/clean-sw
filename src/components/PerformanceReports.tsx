
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { sampleServiceOrders, sampleEmployees, sampleClients } from '../data/sampleData';
import { Target, TrendingUp, Award, Clock } from 'lucide-react';

interface PerformanceReportsProps {
  dateRange: string;
}

const PerformanceReports: React.FC<PerformanceReportsProps> = ({ dateRange }) => {
  // Calculate employee performance metrics
  const employeePerformance = sampleEmployees.map(employee => {
    const assignedOrders = sampleServiceOrders.filter(order => 
      order.assignedEmployees.includes(employee.id)
    );
    const completedOrders = assignedOrders.filter(order => order.status === 'completed');
    
    return {
      name: employee.name,
      department: employee.department,
      totalOrders: assignedOrders.length,
      completedOrders: completedOrders.length,
      completionRate: assignedOrders.length > 0 ? (completedOrders.length / assignedOrders.length) * 100 : 0,
      revenue: completedOrders.reduce((sum, order) => sum + order.amount, 0)
    };
  });

  // Department performance
  const departmentPerformance = employeePerformance.reduce((acc, emp) => {
    if (!acc[emp.department]) {
      acc[emp.department] = {
        department: emp.department,
        employees: 0,
        totalOrders: 0,
        completedOrders: 0,
        revenue: 0
      };
    }
    acc[emp.department].employees += 1;
    acc[emp.department].totalOrders += emp.totalOrders;
    acc[emp.department].completedOrders += emp.completedOrders;
    acc[emp.department].revenue += emp.revenue;
    return acc;
  }, {} as Record<string, any>);

  const departmentData = Object.values(departmentPerformance).map((dept: any) => ({
    ...dept,
    completionRate: dept.totalOrders > 0 ? (dept.completedOrders / dept.totalOrders) * 100 : 0,
    avgRevenue: dept.employees > 0 ? dept.revenue / dept.employees : 0
  }));

  // Client satisfaction metrics (simulated)
  const satisfactionData = [
    { metric: 'Service Quality', score: 85 },
    { metric: 'Timeliness', score: 78 },
    { metric: 'Communication', score: 92 },
    { metric: 'Value for Money', score: 80 },
    { metric: 'Overall Satisfaction', score: 84 },
  ];

  // Monthly performance trend (simulated)
  const performanceHistory = [
    { month: '2024-01', efficiency: 78, satisfaction: 82, revenue: 125000 },
    { month: '2024-02', efficiency: 82, satisfaction: 85, revenue: 138000 },
    { month: '2024-03', efficiency: 79, satisfaction: 83, revenue: 142000 },
    { month: '2024-04', efficiency: 85, satisfaction: 87, revenue: 155000 },
    { month: '2024-05', efficiency: 88, satisfaction: 89, revenue: 168000 },
    { month: '2024-06', efficiency: 91, satisfaction: 92, revenue: 185000 },
  ];

  const chartConfig = {
    efficiency: {
      label: "Efficiency",
      color: "hsl(var(--chart-1))",
    },
    satisfaction: {
      label: "Satisfaction",
      color: "hsl(var(--chart-2))",
    },
    revenue: {
      label: "Revenue",
      color: "hsl(var(--chart-3))",
    },
    completionRate: {
      label: "Completion Rate",
      color: "hsl(var(--chart-4))",
    },
  };

  const avgEfficiency = 86.5;
  const avgSatisfaction = 86.3;
  const topPerformer = employeePerformance.reduce((top, emp) => 
    emp.completionRate > top.completionRate ? emp : top, employeePerformance[0]
  );
  const avgResponseTime = 4.2; // hours

  return (
    <div className="space-y-6">
      {/* Performance KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Efficiency</CardTitle>
            <Target className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgEfficiency}%</div>
            <p className="text-xs text-muted-foreground">
              +5.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
            <Award className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{avgSatisfaction}%</div>
            <p className="text-xs text-muted-foreground">
              +3.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Performer</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{topPerformer?.name}</div>
            <p className="text-xs text-muted-foreground">
              {topPerformer?.completionRate.toFixed(1)}% completion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgResponseTime}h</div>
            <p className="text-xs text-muted-foreground">
              -0.8h from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
          <CardDescription>Monthly efficiency and satisfaction metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[400px]">
            <LineChart data={performanceHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="efficiency"
                stroke={chartConfig.efficiency.color}
                strokeWidth={2}
                dot={{ fill: chartConfig.efficiency.color }}
              />
              <Line
                type="monotone"
                dataKey="satisfaction"
                stroke={chartConfig.satisfaction.color}
                strokeWidth={2}
                dot={{ fill: chartConfig.satisfaction.color }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
            <CardDescription>Completion rates by department</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="completionRate" fill={chartConfig.completionRate.color} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Customer Satisfaction Radar */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Satisfaction</CardTitle>
            <CardDescription>Satisfaction metrics breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <RadarChart data={satisfactionData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar
                  name="Satisfaction"
                  dataKey="score"
                  stroke={chartConfig.satisfaction.color}
                  fill={chartConfig.satisfaction.color}
                  fillOpacity={0.3}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Employee Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Employee Performance</CardTitle>
          <CardDescription>Individual performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Employee</th>
                  <th className="text-left p-2">Department</th>
                  <th className="text-right p-2">Orders</th>
                  <th className="text-right p-2">Completed</th>
                  <th className="text-right p-2">Rate</th>
                  <th className="text-right p-2">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {employeePerformance.slice(0, 10).map((emp, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 font-medium">{emp.name}</td>
                    <td className="p-2">{emp.department}</td>
                    <td className="p-2 text-right">{emp.totalOrders}</td>
                    <td className="p-2 text-right">{emp.completedOrders}</td>
                    <td className="p-2 text-right">{emp.completionRate.toFixed(1)}%</td>
                    <td className="p-2 text-right">${emp.revenue.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceReports;
