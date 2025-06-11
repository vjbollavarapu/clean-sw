
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  ClipboardList, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Plus,
  FileText,
  TrendingUp,
  Star,
  MessageSquare,
  Download
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ServiceHistoryOverview from '../components/service-history/ServiceHistoryOverview';
import ActiveServices from '../components/service-history/ActiveServices';
import CompletedServices from '../components/service-history/CompletedServices';
import ServiceRequests from '../components/service-history/ServiceRequests';

const ServiceHistory = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const serviceStats = {
    totalServices: 24,
    activeServices: 3,
    completedServices: 21,
    totalSpent: 8750,
    averageRating: 4.8,
    pendingRequests: 1
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Service History</h1>
          <p className="text-muted-foreground">Track your service history and manage service requests</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <Star className="h-3 w-3 mr-1" />
            {serviceStats.averageRating} Rating
          </Badge>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Request
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <ClipboardList className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Total Services</p>
                <p className="text-2xl font-bold">{serviceStats.totalServices}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-sm font-medium">Active</p>
                <p className="text-2xl font-bold text-orange-600">{serviceStats.activeServices}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Completed</p>
                <p className="text-2xl font-bold text-green-600">{serviceStats.completedServices}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Total Spent</p>
                <p className="text-2xl font-bold text-purple-600">${serviceStats.totalSpent}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <div>
                <p className="text-sm font-medium">Avg Rating</p>
                <p className="text-2xl font-bold text-yellow-600">{serviceStats.averageRating}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4 text-indigo-500" />
              <div>
                <p className="text-sm font-medium">Pending Requests</p>
                <p className="text-2xl font-bold text-indigo-600">{serviceStats.pendingRequests}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service History Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="active" className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span className="hidden sm:inline">Active Services</span>
          </TabsTrigger>
          <TabsTrigger value="completed" className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Completed</span>
          </TabsTrigger>
          <TabsTrigger value="requests" className="flex items-center space-x-2">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden sm:inline">Requests</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <ServiceHistoryOverview />
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <ActiveServices />
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <CompletedServices />
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          <ServiceRequests />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServiceHistory;
