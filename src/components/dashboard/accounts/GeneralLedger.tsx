
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { BookOpen, Eye, Download } from 'lucide-react';
import { FinancialRecord } from '../../../types';

interface GeneralLedgerProps {
  records: FinancialRecord[];
}

const GeneralLedger: React.FC<GeneralLedgerProps> = ({ records }) => {
  // Group records by category to create chart of accounts
  const accountBalances = records.reduce((acc, record) => {
    if (!acc[record.category]) {
      acc[record.category] = {
        category: record.category,
        debit: 0,
        credit: 0,
        balance: 0,
        type: record.type === 'income' ? 'Revenue' : 'Expense'
      };
    }
    
    if (record.type === 'income') {
      acc[record.category].credit += record.amount;
      acc[record.category].balance += record.amount;
    } else {
      acc[record.category].debit += record.amount;
      acc[record.category].balance -= record.amount;
    }
    
    return acc;
  }, {} as Record<string, any>);

  const accounts = Object.values(accountBalances);
  const totalAssets = accounts.filter(acc => acc.type === 'Revenue').reduce((sum, acc) => sum + acc.balance, 0);
  const totalLiabilities = Math.abs(accounts.filter(acc => acc.type === 'Expense').reduce((sum, acc) => sum + acc.balance, 0));

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <CardTitle>General Ledger</CardTitle>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-muted-foreground">Total Assets</p>
            <p className="text-2xl font-bold text-green-600">${totalAssets.toLocaleString()}</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-muted-foreground">Total Liabilities</p>
            <p className="text-2xl font-bold text-red-600">${totalLiabilities.toLocaleString()}</p>
          </div>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Account</TableHead>
              <TableHead className="text-right">Debit</TableHead>
              <TableHead className="text-right">Credit</TableHead>
              <TableHead className="text-right">Balance</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accounts.slice(0, 6).map((account, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{account.category}</TableCell>
                <TableCell className="text-right">${account.debit.toLocaleString()}</TableCell>
                <TableCell className="text-right">${account.credit.toLocaleString()}</TableCell>
                <TableCell className={`text-right font-bold ${account.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${Math.abs(account.balance).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge variant={account.type === 'Revenue' ? 'default' : 'secondary'}>
                    {account.type}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default GeneralLedger;
