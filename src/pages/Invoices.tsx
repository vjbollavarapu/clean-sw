
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  FileText, 
  Plus, 
  TrendingUp, 
  DollarSign, 
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  CreditCard,
  Eye,
  Download
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import InvoiceManagement from '../components/billing/InvoiceManagement';

const Invoices = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('invoices');

  const invoiceStats = {
    totalInvoices: 156,
    pendingInvoices: 12,
    paidInvoices: 128,
    overdueInvoices: 16,
    totalAmount: 485000,
    pendingAmount: 45800,
    overdueAmount: 12400,
    avgProcessingTime: 5.2
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Invoice Management</h1>
          <p className="text-muted-foreground">Manage invoices, track payments, and monitor billing activities</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            {invoiceStats.paidInvoices} Paid This Month
          </Badge>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Invoice
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
                <p className="text-sm font-medium">Total Invoices</p>
                <p className="text-2xl font-bold text-blue-600">{invoiceStats.totalInvoices}</p>
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
                <p className="text-2xl font-bold text-orange-600">{invoiceStats.pendingInvoices}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Paid</p>
                <p className="text-2xl font-bold text-green-600">{invoiceStats.paidInvoices}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Overdue</p>
                <p className="text-2xl font-bold text-red-600">{invoiceStats.overdueInvoices}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Total Amount</p>
                <p className="text-xl font-bold text-purple-600">${invoiceStats.totalAmount.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-yellow-500" />
              <div>
                <p className="text-sm font-medium">Pending Amount</p>
                <p className="text-xl font-bold text-yellow-600">${invoiceStats.pendingAmount.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Overdue Amount</p>
                <p className="text-xl font-bold text-red-600">${invoiceStats.overdueAmount.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-teal-500" />
              <div>
                <p className="text-sm font-medium">Avg. Processing</p>
                <p className="text-xl font-bold text-teal-600">{invoiceStats.avgProcessingTime}d</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoice Management Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="invoices" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Invoice Management</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-4">
          <InvoiceManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Invoices;
