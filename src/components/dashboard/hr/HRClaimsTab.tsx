
import React from 'react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Plus, Eye, Check, X } from 'lucide-react';

const HRClaimsTab = () => {
  const claims = [
    {
      id: '1',
      employee: 'David Lee',
      type: 'Medical',
      amount: 250,
      description: 'Doctor consultation',
      status: 'pending',
      submittedDate: '2024-06-10',
      receipts: 1
    },
    {
      id: '2',
      employee: 'Eva Martinez',
      type: 'Travel',
      amount: 150,
      description: 'Client meeting travel',
      status: 'approved',
      submittedDate: '2024-06-08',
      receipts: 2
    },
    {
      id: '3',
      employee: 'Frank Taylor',
      type: 'Training',
      amount: 500,
      description: 'Professional certification',
      status: 'rejected',
      submittedDate: '2024-06-05',
      receipts: 1
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
        <h3 className="text-lg font-semibold">Employee Claims</h3>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          New Claim
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Submitted</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {claims.map((claim) => (
            <TableRow key={claim.id}>
              <TableCell className="font-medium">{claim.employee}</TableCell>
              <TableCell>{claim.type}</TableCell>
              <TableCell>${claim.amount}</TableCell>
              <TableCell>{claim.description}</TableCell>
              <TableCell>{getStatusBadge(claim.status)}</TableCell>
              <TableCell>{claim.submittedDate}</TableCell>
              <TableCell>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  {claim.status === 'pending' && (
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

export default HRClaimsTab;
