
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import InvoiceActions from './InvoiceActions';
import InvoiceStatusBadge from './InvoiceStatusBadge';

interface Invoice {
  id: string;
  date: string;
  dueDate: string;
  description: string;
  amount: number;
  status: string;
  serviceType: string;
}

interface InvoiceManagementTableProps {
  invoices: Invoice[];
}

const InvoiceManagementTable: React.FC<InvoiceManagementTableProps> = ({ invoices }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice #</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{new Date(invoice.date).toLocaleDateString()}</TableCell>
            <TableCell>{new Date(invoice.dueDate).toLocaleDateString()}</TableCell>
            <TableCell>
              <div>
                <p className="font-medium">{invoice.description}</p>
                <p className="text-xs text-muted-foreground">{invoice.serviceType}</p>
              </div>
            </TableCell>
            <TableCell className="font-medium">{formatCurrency(invoice.amount)}</TableCell>
            <TableCell>
              <InvoiceStatusBadge status={invoice.status} />
            </TableCell>
            <TableCell>
              <InvoiceActions invoiceStatus={invoice.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InvoiceManagementTable;
