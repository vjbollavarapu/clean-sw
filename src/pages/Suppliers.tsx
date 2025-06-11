
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Building, 
  Plus, 
  TrendingUp, 
  Users, 
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  Star,
  MapPin
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import SupplierManagement from '../components/purchase-orders/SupplierManagement';

const Suppliers = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('suppliers');

  const supplierStats = {
    totalSuppliers: 28,
    activeSuppliers: 24,
    pendingSuppliers: 3,
    inactiveSuppliers: 1,
    totalOrders: 156,
    avgRating: 4.3,
    totalSpent: 245000,
    topPerformer: 'ChemClean Supplies'
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Supplier Management</h1>
          <p className="text-muted-foreground">Manage suppliers, track performance, and maintain vendor relationships</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            {supplierStats.activeSuppliers} Active Suppliers
          </Badge>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Supplier
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Building className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Total Suppliers</p>
                <p className="text-2xl font-bold text-blue-600">{supplierStats.totalSuppliers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Active</p>
                <p className="text-2xl font-bold text-green-600">{supplierStats.activeSuppliers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-sm font-medium">Pending</p>
                <p className="text-2xl font-bold text-orange-600">{supplierStats.pendingSuppliers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Inactive</p>
                <p className="text-2xl font-bold text-red-600">{supplierStats.inactiveSuppliers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Total Orders</p>
                <p className="text-xl font-bold text-purple-600">{supplierStats.totalOrders}</p>
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
                <p className="text-xl font-bold text-yellow-600">{supplierStats.avgRating}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-teal-500" />
              <div>
                <p className="text-sm font-medium">Total Spent</p>
                <p className="text-lg font-bold text-teal-600">${supplierStats.totalSpent.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-indigo-500" />
              <div>
                <p className="text-sm font-medium">Top Performer</p>
                <p className="text-sm font-bold text-indigo-600">{supplierStats.topPerformer}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Suppliers Management */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="suppliers" className="flex items-center space-x-2">
            <Building className="h-4 w-4" />
            <span>Supplier Management</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="suppliers" className="space-y-4">
          <SupplierManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Suppliers;
