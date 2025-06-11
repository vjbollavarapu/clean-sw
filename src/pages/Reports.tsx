
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import FinancialReports from '../components/FinancialReports';
import OperationalReports from '../components/OperationalReports';
import PerformanceReports from '../components/PerformanceReports';
import { CalendarDays, TrendingUp, BarChart3 } from 'lucide-react';

const Reports = () => {
  const [dateRange, setDateRange] = useState('30d');

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Comprehensive business insights and performance metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-muted-foreground" />
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
              <SelectItem value="ytd">Year to date</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="financial" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="financial" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Financial Reports
          </TabsTrigger>
          <TabsTrigger value="operational" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Operational Reports
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Performance Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="financial" className="space-y-6">
          <FinancialReports dateRange={dateRange} />
        </TabsContent>

        <TabsContent value="operational" className="space-y-6">
          <OperationalReports dateRange={dateRange} />
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <PerformanceReports dateRange={dateRange} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
