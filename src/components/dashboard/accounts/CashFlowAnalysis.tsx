
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FinancialRecord } from '../../../types';

interface CashFlowAnalysisProps {
  records: FinancialRecord[];
}

const CashFlowAnalysis: React.FC<CashFlowAnalysisProps> = ({ records }) => {
  // Generate cumulative cash flow data for the last 6 months
  const months = [];
  const currentDate = new Date();
  let cumulativeCashFlow = 0;
  
  for (let i = 5; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const monthKey = date.toISOString().slice(0, 7);
    const monthName = date.toLocaleDateString('en-US', { month: 'short' });
    
    const monthlyIncome = records
      .filter(r => r.type === 'income' && r.date.startsWith(monthKey))
      .reduce((sum, r) => sum + r.amount, 0);
    
    const monthlyExpenses = records
      .filter(r => r.type === 'expense' && r.date.startsWith(monthKey))
      .reduce((sum, r) => sum + r.amount, 0);
    
    const netFlow = monthlyIncome - monthlyExpenses;
    cumulativeCashFlow += netFlow;
    
    months.push({
      month: monthName,
      cashFlow: cumulativeCashFlow,
      netFlow: netFlow
    });
  }

  const currentCashFlow = months[months.length - 1]?.cashFlow || 0;
  const previousCashFlow = months[months.length - 2]?.cashFlow || 0;
  const cashFlowTrend = currentCashFlow >= previousCashFlow ? 'positive' : 'negative';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Cash Flow Analysis
          <div className={`text-sm font-normal px-2 py-1 rounded-full ${
            cashFlowTrend === 'positive' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {cashFlowTrend === 'positive' ? '↗ Positive' : '↘ Negative'} Trend
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-2xl font-bold">
            ${currentCashFlow.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground">Current Cash Position</p>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={months}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
            <Line 
              type="monotone" 
              dataKey="cashFlow" 
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={{ fill: '#3b82f6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CashFlowAnalysis;
