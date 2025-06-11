
import React from 'react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Plus, Eye, Edit } from 'lucide-react';

const HRAllowancesTab = () => {
  const allowances = [
    {
      id: '1',
      employee: 'John Smith',
      type: 'Transportation',
      amount: 500,
      frequency: 'Monthly',
      status: 'active',
      startDate: '2024-01-01'
    },
    {
      id: '2',
      employee: 'Sarah Johnson',
      type: 'Housing',
      amount: 1200,
      frequency: 'Monthly',
      status: 'active',
      startDate: '2024-02-01'
    },
    {
      id: '3',
      employee: 'Mike Chen',
      type: 'Meal',
      amount: 300,
      frequency: 'Monthly',
      status: 'pending',
      startDate: '2024-06-01'
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
        <h3 className="text-lg font-semibold">Employee Allowances</h3>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Allowance
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Frequency</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allowances.map((allowance) => (
            <TableRow key={allowance.id}>
              <TableCell className="font-medium">{allowance.employee}</TableCell>
              <TableCell>{allowance.type}</TableCell>
              <TableCell>${allowance.amount}</TableCell>
              <TableCell>{allowance.frequency}</TableCell>
              <TableCell>{getStatusBadge(allowance.status)}</TableCell>
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

export default HRAllowancesTab;
