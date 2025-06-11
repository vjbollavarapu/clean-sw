
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  CreditCard, 
  Download, 
  DollarSign, 
  Calendar, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Plus,
  FileText,
  TrendingUp,
  Bell
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import BillingOverview from '../components/billing/BillingOverview';
import InvoiceManagement from '../components/billing/InvoiceManagement';
import PaymentHistory from '../components/billing/PaymentHistory';
import BillingSettings from '../components/billing/BillingSettings';

const Billing = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const billingStats = {
    currentBalance: 2450.00,
    nextPaymentDue: '2024-06-20',
    monthlySpend: 3200.00,
    unpaidInvoices: 2,
    totalInvoices: 15,
    averageMonthlyBill: 2850.00
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Billing & Invoices</h1>
          <p className="text-muted-foreground">Manage your billing, view invoices, and track payments</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <CreditCard className="h-3 w-3 mr-1" />
            Auto-Pay Enabled
          </Badge>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Request Invoice
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Current Balance</p>
                <p className="text-2xl font-bold text-red-600">${billingStats.currentBalance}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-sm font-medium">Next Payment</p>
                <p className="text-2xl font-bold text-orange-600">Jun 20</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Monthly Spend</p>
                <p className="text-2xl font-bold text-blue-600">${billingStats.monthlySpend}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              <div>
                <p className="text-sm font-medium">Unpaid</p>
                <p className="text-2xl font-bold text-yellow-600">{billingStats.unpaidInvoices}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Total Invoices</p>
                <p className="text-2xl font-bold text-green-600">{billingStats.totalInvoices}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Avg Monthly</p>
                <p className="text-2xl font-bold text-purple-600">${billingStats.averageMonthlyBill}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Billing Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="invoices" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Invoices</span>
          </TabsTrigger>
          <TabsTrigger value="payments" className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Payment History</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center space-x-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Settings</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <BillingOverview />
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <InvoiceManagement />
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <PaymentHistory />
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <BillingSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Billing;
