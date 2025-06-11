
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import { sampleServiceOrders, sampleEmployees, sampleClients } from '../data/sampleData';
import { ClipboardList, Users, Building, CheckCircle } from 'lucide-react';

interface OperationalReportsProps {
  dateRange: string;
}

const OperationalReports: React.FC<OperationalReportsProps> = ({ dateRange }) => {
  // Process service orders data
  const ordersByStatus = sampleServiceOrders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const statusData = Object.entries(ordersByStatus).map(([status, count]) => ({
    status: status.charAt(0).toUpperCase() + status.slice(1),
    count
  }));

  // Service types breakdown
  const serviceTypeData = sampleServiceOrders.reduce((acc, order) => {
    acc[order.serviceType] = (acc[order.serviceType] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const serviceData = Object.entries(serviceTypeData).map(([type, count]) => ({
    type,
    count
  }));

  // Monthly orders trend (simulated data)
  const monthlyOrders = [
    { month: '2024-01', orders: 45, completed: 38 },
    { month: '2024-02', orders: 52, completed: 49 },
    { month: '2024-03', orders: 48, completed: 44 },
    { month: '2024-04', orders: 61, completed: 58 },
    { month: '2024-05', orders: 55, completed: 52 },
    { month: '2024-06', orders: 67, completed: 59 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const chartConfig = {
    orders: {
      label: "Orders",
      color: "hsl(var(--chart-1))",
    },
    completed: {
      label: "Completed",
      color: "hsl(var(--chart-2))",
    },
    count: {
      label: "Count",
      color: "hsl(var(--chart-3))",
    },
  };

  const totalOrders = sampleServiceOrders.length;
  const completedOrders = sampleServiceOrders.filter(order => order.status === 'completed').length;
  const activeEmployees = sampleEmployees.filter(emp => emp.status === 'active').length;
  const activeClients = sampleClients.filter(client => client.status === 'active').length;
  const completionRate = (completedOrders / totalOrders) * 100;

  return (
    <div className="space-y-6">
      {/* Operational KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ClipboardList className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders}</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {completionRate.toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">
              +3.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeEmployees}</div>
            <p className="text-xs text-muted-foreground">
              +2 new hires this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <Building className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeClients}</div>
            <p className="text-xs text-muted-foreground">
              +5% growth this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Orders Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Orders Trend</CardTitle>
          <CardDescription>Orders received vs completed over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[400px]">
            <LineChart data={monthlyOrders}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="orders"
                stroke={chartConfig.orders.color}
                strokeWidth={2}
                dot={{ fill: chartConfig.orders.color }}
              />
              <Line
                type="monotone"
                dataKey="completed"
                stroke={chartConfig.completed.color}
                strokeWidth={2}
                dot={{ fill: chartConfig.completed.color }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Order Status Distribution</CardTitle>
            <CardDescription>Current status of all orders</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ status, count }) => `${status}: ${count}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Service Types */}
        <Card>
          <CardHeader>
            <CardTitle>Service Types</CardTitle>
            <CardDescription>Popular services breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={serviceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill={chartConfig.count.color} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OperationalReports;
