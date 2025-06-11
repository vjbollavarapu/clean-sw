
import React from 'react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Plus, Eye, Edit } from 'lucide-react';

const HRDeductionsTab = () => {
  const deductions = [
    {
      id: '1',
      employee: 'Alice Brown',
      type: 'Tax',
      amount: 800,
      frequency: 'Monthly',
      status: 'active',
      mandatory: true
    },
    {
      id: '2',
      employee: 'Bob Wilson',
      type: 'Union Dues',
      amount: 50,
      frequency: 'Monthly',
      status: 'active',
      mandatory: false
    },
    {
      id: '3',
      employee: 'Carol Davis',
      type: 'Pension',
      amount: 200,
      frequency: 'Monthly',
      status: 'active',
      mandatory: true
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
        <h3 className="text-lg font-semibold">Employee Deductions</h3>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Deduction
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Frequency</TableHead>
            <TableHead>Mandatory</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deductions.map((deduction) => (
            <TableRow key={deduction.id}>
              <TableCell className="font-medium">{deduction.employee}</TableCell>
              <TableCell>{deduction.type}</TableCell>
              <TableCell>${deduction.amount}</TableCell>
              <TableCell>{deduction.frequency}</TableCell>
              <TableCell>
                {deduction.mandatory ? (
                  <Badge variant="outline">Mandatory</Badge>
                ) : (
                  <Badge variant="secondary">Optional</Badge>
                )}
              </TableCell>
              <TableCell>{getStatusBadge(deduction.status)}</TableCell>
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

export default HRDeductionsTab;
