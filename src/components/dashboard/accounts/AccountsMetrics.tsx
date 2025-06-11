
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { TrendingUp, TrendingDown, DollarSign, Calendar, Target, AlertTriangle } from 'lucide-react';
import { FinancialRecord } from '../../../types';

interface AccountsMetricsProps {
  records: FinancialRecord[];
}

const AccountsMetrics: React.FC<AccountsMetricsProps> = ({ records }) => {
  const currentMonth = new Date().toISOString().slice(0, 7);
  const previousMonth = new Date(new Date().getFullYear(), new Date().getMonth() - 1).toISOString().slice(0, 7);
  
  const currentMonthIncome = records
    .filter(r => r.type === 'income' && r.date.startsWith(currentMonth))
    .reduce((sum, r) => sum + r.amount, 0);
  
  const currentMonthExpenses = records
    .filter(r => r.type === 'expense' && r.date.startsWith(currentMonth))
    .reduce((sum, r) => sum + r.amount, 0);
  
  const previousMonthIncome = records
    .filter(r => r.type === 'income' && r.date.startsWith(previousMonth))
    .reduce((sum, r) => sum + r.amount, 0);
  
  const previousMonthExpenses = records
    .filter(r => r.type === 'expense' && r.date.startsWith(previousMonth))
    .reduce((sum, r) => sum + r.amount, 0);
  
  const netIncome = currentMonthIncome - currentMonthExpenses;
  const previousNetIncome = previousMonthIncome - previousMonthExpenses;
  
  const incomeGrowth = previousMonthIncome > 0 
    ? ((currentMonthIncome - previousMonthIncome) / previousMonthIncome) * 100 
    : 0;
  
  const expenseGrowth = previousMonthExpenses > 0 
    ? ((currentMonthExpenses - previousMonthExpenses) / previousMonthExpenses) * 100 
    : 0;

  const totalCashflow = records.reduce((sum, r) => 
    sum + (r.type === 'income' ? r.amount : -r.amount), 0
  );

  const metrics = [
    {
      title: 'Monthly Revenue',
      value: `$${currentMonthIncome.toLocaleString()}`,
      change: `${incomeGrowth >= 0 ? '+' : ''}${incomeGrowth.toFixed(1)}%`,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      trend: incomeGrowth >= 0 ? 'up' : 'down'
    },
    {
      title: 'Monthly Expenses',
      value: `$${currentMonthExpenses.toLocaleString()}`,
      change: `${expenseGrowth >= 0 ? '+' : ''}${expenseGrowth.toFixed(1)}%`,
      icon: TrendingDown,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      trend: expenseGrowth <= 0 ? 'up' : 'down'
    },
    {
      title: 'Net Profit',
      value: `$${netIncome.toLocaleString()}`,
      change: `${netIncome >= previousNetIncome ? '+' : ''}${((netIncome - previousNetIncome) / Math.max(Math.abs(previousNetIncome), 1) * 100).toFixed(1)}%`,
      icon: DollarSign,
      color: netIncome >= 0 ? 'text-green-600' : 'text-red-600',
      bgColor: netIncome >= 0 ? 'bg-green-100' : 'bg-red-100',
      trend: netIncome >= previousNetIncome ? 'up' : 'down'
    },
    {
      title: 'Cash Flow',
      value: `$${totalCashflow.toLocaleString()}`,
      change: 'YTD Total',
      icon: Calendar,
      color: totalCashflow >= 0 ? 'text-blue-600' : 'text-orange-600',
      bgColor: totalCashflow >= 0 ? 'bg-blue-100' : 'bg-orange-100',
      trend: 'neutral'
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className={`text-xs ${
                  metric.trend === 'up' ? 'text-green-600' : 
                  metric.trend === 'down' ? 'text-red-600' : 
                  'text-muted-foreground'
                }`}>
                  {metric.change}
                </p>
              </div>
              <div className={`p-3 rounded-full ${metric.bgColor}`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AccountsMetrics;
