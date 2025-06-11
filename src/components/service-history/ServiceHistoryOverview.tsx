
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Calendar, MapPin, Star, TrendingUp } from 'lucide-react';

const ServiceHistoryOverview = () => {
  const monthlyData = [
    { month: 'Jan', services: 4, amount: 1200 },
    { month: 'Feb', services: 6, amount: 1800 },
    { month: 'Mar', services: 3, amount: 900 },
    { month: 'Apr', services: 8, amount: 2400 },
    { month: 'May', services: 5, amount: 1500 },
    { month: 'Jun', services: 7, amount: 2100 }
  ];

  const serviceTypeData = [
    { name: 'Office Cleaning', value: 12, color: '#3b82f6' },
    { name: 'Deep Cleaning', value: 8, color: '#10b981' },
    { name: 'Carpet Cleaning', value: 3, color: '#f59e0b' },
    { name: 'Window Cleaning', value: 1, color: '#ef4444' }
  ];

  const recentServices = [
    {
      id: 1,
      type: 'Office Cleaning',
      date: '2024-06-10',
      location: 'Main Office - Floor 3',
      status: 'completed',
      rating: 5,
      amount: 250
    },
    {
      id: 2,
      type: 'Deep Cleaning',
      date: '2024-06-08',
      location: 'Conference Room A',
      status: 'completed',
      rating: 4,
      amount: 180
    },
    {
      id: 3,
      type: 'Carpet Cleaning',
      date: '2024-06-05',
      location: 'Reception Area',
      status: 'completed',
      rating: 5,
      amount: 320
    }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Left Column - Charts */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Service Activity (Last 6 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [
                      name === 'services' ? value : formatCurrency(value as number),
                      name === 'services' ? 'Services' : 'Amount'
                    ]}
                  />
                  <Bar dataKey="services" fill="hsl(var(--primary))" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Types Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-6">
              <div className="h-48 w-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serviceTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {serviceTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {serviceTypeData.map((item) => (
                  <div key={item.name} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}</span>
                    <span className="text-sm text-muted-foreground">({item.value})</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Recent Services */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentServices.map((service) => (
              <div key={service.id} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{service.type}</h4>
                  <span className="text-sm font-medium text-green-600">
                    {formatCurrency(service.amount)}
                  </span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(service.date).toLocaleDateString()}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {service.location}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < service.rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Completed
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceHistoryOverview;
