
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { sampleFinancialRecords } from '../../data/sampleData';
import AccountsMetrics from './accounts/AccountsMetrics';
import MonthlyFinancialChart from './accounts/MonthlyFinancialChart';
import RecentTransactions from './accounts/RecentTransactions';
import AccountsQuickActions from './accounts/AccountsQuickActions';
import CashFlowAnalysis from './accounts/CashFlowAnalysis';
import ExpenseBreakdown from './accounts/ExpenseBreakdown';

const AccountsDashboard = () => {
  return (
    <div className="space-y-6">
      <AccountsMetrics records={sampleFinancialRecords} />
      
      <div className="grid gap-6 lg:grid-cols-2">
        <MonthlyFinancialChart records={sampleFinancialRecords} />
        <CashFlowAnalysis records={sampleFinancialRecords} />
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentTransactions records={sampleFinancialRecords} />
        </div>
        <div className="space-y-6">
          <ExpenseBreakdown records={sampleFinancialRecords} />
          <AccountsQuickActions />
        </div>
      </div>
    </div>
  );
};

export default AccountsDashboard;
