
import React from 'react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { CreditCard, Eye, Edit } from 'lucide-react';

const HRLoansTab = () => {
  const loans = [
    {
      id: '1',
      employee: 'Kelly Parker',
      type: 'Personal Loan',
      amount: 5000,
      outstanding: 3200,
      monthlyDeduction: 200,
      interestRate: 5.5,
      status: 'active',
      endDate: '2025-02-01'
    },
    {
      id: '2',
      employee: 'Liam Foster',
      type: 'Emergency Loan',
      amount: 1000,
      outstanding: 600,
      monthlyDeduction: 100,
      interestRate: 3.0,
      status: 'active',
      endDate: '2024-12-01'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Employee Loans</h3>
        <Button size="sm">
          <CreditCard className="h-4 w-4 mr-2" />
          New Loan
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Outstanding</TableHead>
            <TableHead>Monthly Deduction</TableHead>
            <TableHead>Interest Rate</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loans.map((loan) => (
            <TableRow key={loan.id}>
              <TableCell className="font-medium">{loan.employee}</TableCell>
              <TableCell>{loan.type}</TableCell>
              <TableCell>${loan.amount}</TableCell>
              <TableCell>${loan.outstanding}</TableCell>
              <TableCell>${loan.monthlyDeduction}</TableCell>
              <TableCell>{loan.interestRate}%</TableCell>
              <TableCell>{loan.endDate}</TableCell>
              <TableCell>{getStatusBadge(loan.status)}</TableCell>
              <TableCell>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HRLoansTab;
