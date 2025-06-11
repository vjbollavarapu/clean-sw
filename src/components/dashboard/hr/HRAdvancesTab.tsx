
import React from 'react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { TrendingUp, Eye, Check, X } from 'lucide-react';

const HRAdvancesTab = () => {
  const advances = [
    {
      id: '1',
      employee: 'Mia Roberts',
      amount: 800,
      reason: 'Medical emergency',
      requestDate: '2024-06-08',
      approvedDate: '2024-06-09',
      deductionStart: '2024-07-01',
      installments: 4,
      status: 'approved'
    },
    {
      id: '2',
      employee: 'Noah Turner',
      amount: 500,
      reason: 'Family event',
      requestDate: '2024-06-10',
      status: 'pending'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Salary Advances</h3>
        <Button size="sm">
          <TrendingUp className="h-4 w-4 mr-2" />
          New Advance
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Request Date</TableHead>
            <TableHead>Installments</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {advances.map((advance) => (
            <TableRow key={advance.id}>
              <TableCell className="font-medium">{advance.employee}</TableCell>
              <TableCell>${advance.amount}</TableCell>
              <TableCell>{advance.reason}</TableCell>
              <TableCell>{advance.requestDate}</TableCell>
              <TableCell>{advance.installments || 'N/A'}</TableCell>
              <TableCell>{getStatusBadge(advance.status)}</TableCell>
              <TableCell>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  {advance.status === 'pending' && (
                    <>
                      <Button variant="ghost" size="sm">
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <X className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HRAdvancesTab;
