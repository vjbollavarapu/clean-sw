
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { sampleFinancialRecords } from '../../data/sampleData';

const AccountsDashboard = () => {
  const monthlyIncome = sampleFinancialRecords
    .filter(r => r.type === 'income' && r.date.startsWith('2024-06'))
    .reduce((sum, r) => sum + r.amount, 0);
  
  const monthlyExpenses = sampleFinancialRecords
    .filter(r => r.type === 'expense' && r.date.startsWith('2024-06'))
    .reduce((sum, r) => sum + r.amount, 0);
  
  const netProfit = monthlyIncome - monthlyExpenses;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${monthlyIncome.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Monthly Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${monthlyExpenses.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Net Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${netProfit.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {sampleFinancialRecords.slice(0, 5).map(record => (
              <div key={record.id} className="flex justify-between items-center p-2 border-b">
                <div>
                  <p className="font-medium">{record.description}</p>
                  <p className="text-sm text-muted-foreground">{record.category}</p>
                </div>
                <span className={`font-bold ${
                  record.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {record.type === 'income' ? '+' : '-'}${record.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsDashboard;
