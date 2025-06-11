
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { FinancialRecord } from '../types';
import { DollarSign, TrendingUp, TrendingDown, Calculator } from 'lucide-react';

interface FinancialStatsProps {
  records: FinancialRecord[];
}

const FinancialStats: React.FC<FinancialStatsProps> = ({ records }) => {
  const totalIncome = records
    .filter(record => record.type === 'income')
    .reduce((sum, record) => sum + record.amount, 0);

  const totalExpenses = records
    .filter(record => record.type === 'expense')
    .reduce((sum, record) => sum + record.amount, 0);

  const netIncome = totalIncome - totalExpenses;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Income</CardTitle>
          <TrendingUp className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">
            {formatCurrency(totalIncome)}
          </div>
          <p className="text-xs text-muted-foreground">
            Revenue and other income
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
          <TrendingDown className="h-4 w-4 text-red-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">
            {formatCurrency(totalExpenses)}
          </div>
          <p className="text-xs text-muted-foreground">
            All business expenses
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Net Income</CardTitle>
          <Calculator className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(netIncome)}
          </div>
          <p className="text-xs text-muted-foreground">
            Income minus expenses
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Records</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {records.length}
          </div>
          <p className="text-xs text-muted-foreground">
            Financial transactions
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialStats;
