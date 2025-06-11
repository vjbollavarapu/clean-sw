
import React from 'react';
import RevenueChart from '../charts/RevenueChart';
import UserGrowthChart from '../charts/UserGrowthChart';
import ServiceDistributionChart from '../charts/ServiceDistributionChart';
import PerformanceChart from '../charts/PerformanceChart';

const AdminAnalyticsTab = () => {
  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000 },
    { month: 'Feb', revenue: 52000, expenses: 35000, profit: 17000 },
    { month: 'Mar', revenue: 48000, expenses: 33000, profit: 15000 },
    { month: 'Apr', revenue: 61000, expenses: 38000, profit: 23000 },
    { month: 'May', revenue: 55000, expenses: 36000, profit: 19000 },
    { month: 'Jun', revenue: 67000, expenses: 42000, profit: 25000 },
  ];

  const userGrowthData = [
    { month: 'Jan', users: 120, activeUsers: 85 },
    { month: 'Feb', users: 135, activeUsers: 98 },
    { month: 'Mar', users: 148, activeUsers: 112 },
    { month: 'Apr', users: 162, activeUsers: 125 },
    { month: 'May', users: 178, activeUsers: 141 },
    { month: 'Jun', users: 195, activeUsers: 158 },
  ];

  const serviceDistribution = [
    { name: 'Office Cleaning', value: 40, color: '#8884d8' },
    { name: 'Residential', value: 30, color: '#82ca9d' },
    { name: 'Deep Cleaning', value: 20, color: '#ffc658' },
    { name: 'Carpet Cleaning', value: 10, color: '#ff7300' },
  ];

  const performanceData = [
    { metric: 'Response Time', current: 245, target: 200, unit: 'ms' },
    { metric: 'Uptime', current: 99.8, target: 99.9, unit: '%' },
    { metric: 'Throughput', current: 1250, target: 1000, unit: 'req/min' },
    { metric: 'Error Rate', current: 0.2, target: 0.1, unit: '%' },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <RevenueChart data={revenueData} />
      <UserGrowthChart data={userGrowthData} />
      <ServiceDistributionChart data={serviceDistribution} />
      <PerformanceChart data={performanceData} />
    </div>
  );
};

export default AdminAnalyticsTab;
