
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { FinancialRecord } from '../../../types';

interface ExpenseBreakdownProps {
  records: FinancialRecord[];
}

const ExpenseBreakdown: React.FC<ExpenseBreakdownProps> = ({ records }) => {
  const currentMonth = new Date().toISOString().slice(0, 7);
  
  const expenses = records.filter(r => 
    r.type === 'expense' && r.date.startsWith(currentMonth)
  );
  
  const totalExpenses = expenses.reduce((sum, r) => sum + r.amount, 0);
  
  // Group expenses by category
  const expensesByCategory = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += expense.amount;
    return acc;
  }, {} as Record<string, number>);
  
  // Convert to array and sort by amount
  const categoryBreakdown = Object.entries(expensesByCategory)
    .map(([category, amount]) => ({
      category,
      amount,
      percentage: totalExpenses > 0 ? (amount / totalExpenses) * 100 : 0
    }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5); // Top 5 categories

  const categoryColors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-red-500'
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Breakdown</CardTitle>
        <p className="text-sm text-muted-foreground">
          Current month: ${totalExpenses.toLocaleString()}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {categoryBreakdown.map((item, index) => (
          <div key={item.category} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${categoryColors[index]}`} />
                <span className="text-sm font-medium">{item.category}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">${item.amount.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{item.percentage.toFixed(1)}%</p>
              </div>
            </div>
            <Progress value={item.percentage} className="h-2" />
          </div>
        ))}
        {categoryBreakdown.length === 0 && (
          <p className="text-center text-muted-foreground py-4">
            No expenses recorded this month
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ExpenseBreakdown;
