
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { sampleServiceOrders, sampleFinancialRecords, sampleEmployees } from '../../data/sampleData';
import { TrendingUp, TrendingDown, Users, Calendar, DollarSign, ClipboardList, Building, BarChart3 } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const ManagementDashboard = () => {
  const ordersInProgress = sampleServiceOrders.filter(o => o.status === 'in-progress').length;
  const pendingOrders = sampleServiceOrders.filter(o => o.status === 'pending').length;
  const completedOrders = sampleServiceOrders.filter(o => o.status === 'completed').length;
  const totalOrders = sampleServiceOrders.length;
  
  const currentMonth = '2024-06';
  const previousMonth = '2024-05';
  
  const monthlyRevenue = sampleFinancialRecords
    .filter(r => r.type === 'income' && r.date.startsWith(currentMonth))
    .reduce((sum, r) => sum + r.amount, 0);
    
  const previousMonthRevenue = sampleFinancialRecords
    .filter(r => r.type === 'income' && r.date.startsWith(previousMonth))
    .reduce((sum, r) => sum + r.amount, 0);

  const revenueGrowth = previousMonthRevenue > 0 
    ? ((monthlyRevenue - previousMonthRevenue) / previousMonthRevenue) * 100 
    : 0;

  const activeEmployees = sampleEmployees.filter(e => e.status === 'active').length;

  // Weekly revenue data for chart
  const weeklyRevenueData = [
    { week: 'Week 1', revenue: 15000, orders: 12 },
    { week: 'Week 2', revenue: 18000, orders: 15 },
    { week: 'Week 3', revenue: 22000, orders: 18 },
    { week: 'Week 4', revenue: 12000, orders: 10 },
  ];

  // Service type distribution
  const serviceTypeData = [
    { name: 'Regular Cleaning', value: 45, color: '#8884d8' },
    { name: 'Deep Cleaning', value: 25, color: '#82ca9d' },
    { name: 'Maintenance', value: 20, color: '#ffc658' },
    { name: 'Emergency', value: 10, color: '#ff7300' },
  ];

  // Employee performance data
  const employeePerformanceData = [
    { name: 'John Smith', completed: 25, rating: 4.8 },
    { name: 'Sarah Johnson', completed: 22, rating: 4.9 },
    { name: 'Mike Chen', completed: 20, rating: 4.7 },
    { name: 'Lisa Brown', completed: 18, rating: 4.6 },
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#8884d8",
    },
    orders: {
      label: "Orders",
      color: "#82ca9d",
    },
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders}</div>
            <p className="text-xs text-muted-foreground">
              {completedOrders} completed, {ordersInProgress} in progress
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${monthlyRevenue.toLocaleString()}</div>
            <div className="flex items-center text-xs">
              {revenueGrowth >= 0 ? (
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
              )}
              <span className={revenueGrowth >= 0 ? 'text-green-500' : 'text-red-500'}>
                {revenueGrowth >= 0 ? '+' : ''}{revenueGrowth.toFixed(1)}%
              </span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeEmployees}</div>
            <p className="text-xs text-muted-foreground">
              {sampleEmployees.length} total employees
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(monthlyRevenue / totalOrders).toFixed(0)}</div>
            <p className="text-xs text-muted-foreground">
              Based on {totalOrders} orders
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Weekly Revenue Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyRevenueData}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="var(--color-revenue)" 
                    strokeWidth={2}
                    dot={{ fill: "var(--color-revenue)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Service Type Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Service Type Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={serviceTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {serviceTypeData.map((entry, index) => (
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

      {/* Detailed Information Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Service Orders</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sampleServiceOrders.slice(0, 5).map(order => (
                <div key={order.id} className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{order.clientName}</p>
                    <p className="text-sm text-muted-foreground">{order.serviceType}</p>
                    <p className="text-xs text-muted-foreground">{order.scheduledDate}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <Badge variant={
                      order.status === 'completed' ? 'default' :
                      order.status === 'in-progress' ? 'secondary' :
                      'outline'
                    }>
                      {order.status}
                    </Badge>
                    <span className="text-sm font-medium">${order.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Employees */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Top Performing Employees</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {employeePerformanceData.map((employee, index) => (
                <div key={employee.name} className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {employee.completed} orders completed
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{employee.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders by Status Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Orders by Status</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { status: 'Pending', count: pendingOrders },
                { status: 'In Progress', count: ordersInProgress },
                { status: 'Completed', count: completedOrders },
              ]}>
                <XAxis dataKey="status" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManagementDashboard;
