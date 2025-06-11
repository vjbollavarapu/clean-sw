
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calendar, 
  Users, 
  Target,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react';

const BillingAnalytics = () => {
  const [timeRange, setTimeRange] = useState('6months');
  const [activeTab, setActiveTab] = useState('revenue');

  const revenueAnalytics = [
    { month: 'Jan', revenue: 18500, target: 20000, growth: 5.2 },
    { month: 'Feb', revenue: 22300, target: 20000, growth: 8.7 },
    { month: 'Mar', revenue: 19800, target: 20000, growth: -2.1 },
    { month: 'Apr', revenue: 25600, target: 24000, growth: 12.3 },
    { month: 'May', revenue: 28200, target: 24000, growth: 15.8 },
    { month: 'Jun', revenue: 31500, target: 26000, growth: 18.2 }
  ];

  const clientAnalytics = [
    { month: 'Jan', new: 8, lost: 2, total: 145 },
    { month: 'Feb', new: 12, lost: 1, total: 156 },
    { month: 'Mar', new: 6, lost: 3, total: 159 },
    { month: 'Apr', new: 15, lost: 2, total: 172 },
    { month: 'May', new: 18, lost: 4, total: 186 },
    { month: 'Jun', new: 22, lost: 3, total: 205 }
  ];

  const paymentTrends = [
    { period: 'Week 1', onTime: 85, late: 10, failed: 5 },
    { period: 'Week 2', onTime: 92, late: 6, failed: 2 },
    { period: 'Week 3', onTime: 88, late: 8, failed: 4 },
    { period: 'Week 4', onTime: 94, late: 4, failed: 2 }
  ];

  const industryBreakdown = [
    { name: 'Healthcare', value: 35, revenue: 108500, color: '#3b82f6' },
    { name: 'Corporate', value: 28, revenue: 86800, color: '#10b981' },
    { name: 'Education', value: 20, revenue: 62000, color: '#f59e0b' },
    { name: 'Retail', value: 17, revenue: 52700, color: '#ef4444' }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <select
            className="px-3 py-2 border border-input rounded-md text-sm"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="12months">Last 12 Months</option>
            <option value="ytd">Year to Date</option>
          </select>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-1" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-1" />
            Refresh
          </Button>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Analytics Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="revenue">Revenue Analysis</TabsTrigger>
          <TabsTrigger value="clients">Client Analytics</TabsTrigger>
          <TabsTrigger value="payments">Payment Trends</TabsTrigger>
          <TabsTrigger value="industry">Industry Breakdown</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">Total Revenue</p>
                    <p className="text-2xl font-bold text-green-600">
                      {formatCurrency(revenueAnalytics.reduce((sum, item) => sum + item.revenue, 0))}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">vs Target</p>
                    <p className="text-2xl font-bold text-blue-600">108%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-purple-500" />
                  <div>
                    <p className="text-sm font-medium">Growth Rate</p>
                    <p className="text-2xl font-bold text-purple-600">+18.2%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-orange-500" />
                  <div>
                    <p className="text-sm font-medium">Monthly Avg</p>
                    <p className="text-2xl font-bold text-orange-600">
                      {formatCurrency(revenueAnalytics.reduce((sum, item) => sum + item.revenue, 0) / revenueAnalytics.length)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Revenue vs Target</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueAnalytics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [formatCurrency(value as number), name]} />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Actual Revenue" />
                    <Bar dataKey="target" fill="hsl(var(--secondary))" name="Target" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clients" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">Total Clients</p>
                    <p className="text-2xl font-bold text-blue-600">205</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">New This Month</p>
                    <p className="text-2xl font-bold text-green-600">22</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <TrendingDown className="h-4 w-4 text-red-500" />
                  <div>
                    <p className="text-sm font-medium">Churn Rate</p>
                    <p className="text-2xl font-bold text-red-600">1.5%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Client Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={clientAnalytics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="hsl(var(--primary))" name="Total Clients" />
                    <Line type="monotone" dataKey="new" stroke="hsl(var(--secondary))" name="New Clients" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={paymentTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="onTime" fill="#10b981" name="On Time" />
                    <Bar dataKey="late" fill="#f59e0b" name="Late" />
                    <Bar dataKey="failed" fill="#ef4444" name="Failed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="industry" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={industryBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {industryBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Industry Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {industryBreakdown.map((industry) => (
                  <div key={industry.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: industry.color }}
                        />
                        <span className="font-medium">{industry.name}</span>
                      </div>
                      <span className="text-sm font-medium">{formatCurrency(industry.revenue)}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="h-2 rounded-full" 
                        style={{ 
                          backgroundColor: industry.color,
                          width: `${industry.value}%` 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BillingAnalytics;
