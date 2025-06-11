
import React from 'react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Shield, Eye, Edit } from 'lucide-react';

const HRInsuranceTab = () => {
  const insurance = [
    {
      id: '1',
      employee: 'Iris Cooper',
      type: 'Health',
      provider: 'BlueCross',
      premium: 300,
      coverage: 'Family',
      status: 'active',
      renewalDate: '2024-12-31'
    },
    {
      id: '2',
      employee: 'Jack Nelson',
      type: 'Life',
      provider: 'MetLife',
      premium: 50,
      coverage: 'Individual',
      status: 'active',
      renewalDate: '2024-11-15'
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
        <h3 className="text-lg font-semibold">Insurance Plans</h3>
        <Button size="sm">
          <Shield className="h-4 w-4 mr-2" />
          Add Insurance
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Provider</TableHead>
            <TableHead>Premium</TableHead>
            <TableHead>Coverage</TableHead>
            <TableHead>Renewal Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {insurance.map((plan) => (
            <TableRow key={plan.id}>
              <TableCell className="font-medium">{plan.employee}</TableCell>
              <TableCell>{plan.type}</TableCell>
              <TableCell>{plan.provider}</TableCell>
              <TableCell>${plan.premium}</TableCell>
              <TableCell>{plan.coverage}</TableCell>
              <TableCell>{plan.renewalDate}</TableCell>
              <TableCell>{getStatusBadge(plan.status)}</TableCell>
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

export default HRInsuranceTab;
