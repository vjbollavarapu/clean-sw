
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  FileText, 
  Users, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react';

const BillingDashboard = () => {
  const monthlyRevenueData = [
    { month: 'Jan', revenue: 18500, invoices: 45, paid: 40, overdue: 3 },
    { month: 'Feb', revenue: 22300, invoices: 52, paid: 48, overdue: 2 },
    { month: 'Mar', revenue: 19800, invoices: 48, paid: 45, overdue: 1 },
    { month: 'Apr', revenue: 25600, invoices: 58, paid: 54, overdue: 2 },
    { month: 'May', revenue: 28200, invoices: 64, paid: 59, overdue: 3 },
    { month: 'Jun', revenue: 31500, invoices: 72, paid: 68, overdue: 2 }
  ];

  const paymentMethodData = [
    { name: 'Credit Card', value: 45, color: '#3b82f6' },
    { name: 'Bank Transfer', value: 30, color: '#10b981' },
    { name: 'Check', value: 15, color: '#f59e0b' },
    { name: 'Cash', value: 10, color: '#ef4444' }
  ];

  const clientSegmentData = [
    { segment: 'Enterprise', revenue: 125000, clients: 25, avgValue: 5000 },
    { segment: 'Medium Business', revenue: 85000, clients: 45, avgValue: 1889 },
    { segment: 'Small Business', revenue: 35000, clients: 86, avgValue: 407 }
  ];

  const overdueInvoices = [
    { id: 'INV-2024-0142', client: 'TechCorp Solutions', amount: 4500, daysPastDue: 15, risk: 'medium' },
    { id: 'INV-2024-0138', client: 'Global Industries', amount: 2800, daysPastDue: 8, risk: 'low' },
    { id: 'INV-2024-0135', client: 'StartupXYZ', amount: 1200, daysPastDue: 32, risk: 'high' }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  const getRiskBadge = (risk: string) => {
    const riskConfig = {
      low: { variant: 'default' as const, label: 'Low Risk', color: 'text-green-600' },
      medium: { variant: 'secondary' as const, label: 'Medium Risk', color: 'text-yellow-600' },
      high: { variant: 'destructive' as const, label: 'High Risk', color: 'text-red-600' }
    };

    const config = riskConfig[risk as keyof typeof riskConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Left Column - Main Charts */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Revenue Trend</span>
              <Badge variant="outline" className="bg-green-50 text-green-700">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% vs last period
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    name === 'revenue' ? formatCurrency(value as number) : value,
                    name === 'revenue' ? 'Revenue' : name
                  ]} />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))" 
                    fillOpacity={0.1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6">
                <div className="h-32 w-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={paymentMethodData}
                        cx="50%"
                        cy="50%"
                        innerRadius={20}
                        outerRadius={60}
                        dataKey="value"
                      >
                        {paymentMethodData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-1">
                  {paymentMethodData.map((item) => (
                    <div key={item.name} className="flex items-center space-x-2">
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs">{item.name}</span>
                      <span className="text-xs font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Segments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {clientSegmentData.map((segment) => (
                <div key={segment.segment} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{segment.segment}</span>
                    <span className="text-sm">{formatCurrency(segment.revenue)}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Users className="h-3 w-3 mr-1" />
                    <span>{segment.clients} clients</span>
                    <span className="mx-2">•</span>
                    <span>Avg: {formatCurrency(segment.avgValue)}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ 
                        width: `${(segment.revenue / Math.max(...clientSegmentData.map(s => s.revenue))) * 100}%` 
                      }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Column - Summary & Alerts */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
              Overdue Invoices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {overdueInvoices.map((invoice) => (
              <div key={invoice.id} className="border rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{invoice.id}</span>
                  {getRiskBadge(invoice.risk)}
                </div>
                <p className="text-sm text-muted-foreground">{invoice.client}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">{formatCurrency(invoice.amount)}</span>
                  <span className="text-xs text-red-600">{invoice.daysPastDue} days overdue</span>
                </div>
                <Button size="sm" className="w-full">
                  Send Reminder
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4 text-blue-500" />
                <span className="text-sm">Collection Rate</span>
              </div>
              <span className="font-bold text-blue-600">94.2%</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-green-500" />
                <span className="text-sm">Avg Days to Pay</span>
              </div>
              <span className="font-bold text-green-600">18 days</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-purple-500" />
                <span className="text-sm">Monthly Recurring</span>
              </div>
              <span className="font-bold text-purple-600">$45,200</span>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-teal-500" />
                <span className="text-sm">Growth Rate</span>
              </div>
              <span className="font-bold text-teal-600">+8.3%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Reminders
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="h-4 w-4 mr-2" />
              Client Analysis
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp className="h-4 w-4 mr-2" />
              Revenue Forecast
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BillingDashboard;
