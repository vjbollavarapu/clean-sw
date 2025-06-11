
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  ShoppingCart, 
  Plus, 
  FileText, 
  TrendingUp, 
  Building, 
  Package,
  Calendar,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Clock,
  Search
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import PurchaseOrderOverview from '../components/purchase-orders/PurchaseOrderOverview';
import PurchaseOrderManagement from '../components/purchase-orders/PurchaseOrderManagement';
import SupplierManagement from '../components/purchase-orders/SupplierManagement';
import ProcurementSettings from '../components/purchase-orders/ProcurementSettings';

const PurchaseOrders = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const procurementStats = {
    totalOrders: 48,
    pendingOrders: 12,
    approvedOrders: 28,
    completedOrders: 8,
    totalValue: 125000,
    monthlySpend: 18500,
    activeSuppliers: 15,
    avgProcessingTime: 3.5
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Purchase Orders</h1>
          <p className="text-muted-foreground">Manage purchase orders, suppliers, and procurement workflows</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            {procurementStats.activeSuppliers} Active Suppliers
          </Badge>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Purchase Order
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Total Orders</p>
                <p className="text-2xl font-bold text-blue-600">{procurementStats.totalOrders}</p>
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
                <p className="text-2xl font-bold text-orange-600">{procurementStats.pendingOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Approved</p>
                <p className="text-2xl font-bold text-green-600">{procurementStats.approvedOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Package className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Completed</p>
                <p className="text-2xl font-bold text-purple-600">{procurementStats.completedOrders}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Total Value</p>
                <p className="text-xl font-bold text-red-600">${procurementStats.totalValue.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-teal-500" />
              <div>
                <p className="text-sm font-medium">Monthly Spend</p>
                <p className="text-xl font-bold text-teal-600">${procurementStats.monthlySpend.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Building className="h-4 w-4 text-indigo-500" />
              <div>
                <p className="text-sm font-medium">Suppliers</p>
                <p className="text-2xl font-bold text-indigo-600">{procurementStats.activeSuppliers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-pink-500" />
              <div>
                <p className="text-sm font-medium">Avg. Processing</p>
                <p className="text-xl font-bold text-pink-600">{procurementStats.avgProcessingTime}d</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Purchase Orders Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center space-x-2">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Purchase Orders</span>
          </TabsTrigger>
          <TabsTrigger value="suppliers" className="flex items-center space-x-2">
            <Building className="h-4 w-4" />
            <span className="hidden sm:inline">Suppliers</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center space-x-2">
            <AlertCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Settings</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <PurchaseOrderOverview />
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <PurchaseOrderManagement />
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-4">
          <SupplierManagement />
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <ProcurementSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PurchaseOrders;
