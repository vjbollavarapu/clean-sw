
import React from 'react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Clock, Eye, Edit } from 'lucide-react';

const HROvertimeTab = () => {
  const overtime = [
    {
      id: '1',
      employee: 'Grace Kim',
      date: '2024-06-10',
      regularHours: 8,
      overtimeHours: 3,
      rate: 25,
      totalPay: 275,
      status: 'approved'
    },
    {
      id: '2',
      employee: 'Henry Adams',
      date: '2024-06-09',
      regularHours: 8,
      overtimeHours: 2,
      rate: 30,
      totalPay: 330,
      status: 'pending'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Overtime Records</h3>
        <Button size="sm">
          <Clock className="h-4 w-4 mr-2" />
          Record Overtime
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Regular Hours</TableHead>
            <TableHead>Overtime Hours</TableHead>
            <TableHead>Rate</TableHead>
            <TableHead>Total Pay</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {overtime.map((record) => (
            <TableRow key={record.id}>
              <TableCell className="font-medium">{record.employee}</TableCell>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.regularHours}h</TableCell>
              <TableCell>{record.overtimeHours}h</TableCell>
              <TableCell>${record.rate}/h</TableCell>
              <TableCell>${record.totalPay}</TableCell>
              <TableCell>{getStatusBadge(record.status)}</TableCell>
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

export default HROvertimeTab;
