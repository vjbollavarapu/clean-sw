
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FinancialRecord } from '../../../types';

interface MonthlyFinancialChartProps {
  records: FinancialRecord[];
}

const MonthlyFinancialChart: React.FC<MonthlyFinancialChartProps> = ({ records }) => {
  // Generate data for the last 6 months
  const months = [];
  const currentDate = new Date();
  
  for (let i = 5; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const monthKey = date.toISOString().slice(0, 7);
    const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    
    const monthlyIncome = records
      .filter(r => r.type === 'income' && r.date.startsWith(monthKey))
      .reduce((sum, r) => sum + r.amount, 0);
    
    const monthlyExpenses = records
      .filter(r => r.type === 'expense' && r.date.startsWith(monthKey))
      .reduce((sum, r) => sum + r.amount, 0);
    
    months.push({
      month: monthName,
      income: monthlyIncome,
      expenses: monthlyExpenses,
      profit: monthlyIncome - monthlyExpenses
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Financial Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={months}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
            <Legend />
            <Bar dataKey="income" fill="#10b981" name="Income" />
            <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
            <Bar dataKey="profit" fill="#3b82f6" name="Profit" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlyFinancialChart;
