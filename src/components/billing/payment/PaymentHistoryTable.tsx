
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { Button } from '../../ui/button';
import { CreditCard } from 'lucide-react';
import PaymentActions from './PaymentActions';
import PaymentStatusBadge from './PaymentStatusBadge';

interface Payment {
  id: string;
  date: string;
  invoiceId: string;
  amount: number;
  method: string;
  cardLast4: string;
  status: string;
  description: string;
  transactionId: string;
}

interface PaymentHistoryTableProps {
  payments: Payment[];
}

const PaymentHistoryTable: React.FC<PaymentHistoryTableProps> = ({ payments }) => {
  const getPaymentMethodDisplay = (method: string, cardLast4: string) => {
    if (method === 'Credit Card' && cardLast4) {
      return `${method} ****${cardLast4}`;
    }
    return method;
  };

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
          <TableHead>Payment ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Invoice</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell className="font-medium">{payment.id}</TableCell>
            <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
            <TableCell>
              <Button variant="link" className="p-0 h-auto text-sm">
                {payment.invoiceId}
              </Button>
            </TableCell>
            <TableCell>
              <div>
                <p className="font-medium">{payment.description}</p>
                <p className="text-xs text-muted-foreground">{payment.transactionId}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center space-x-1">
                <CreditCard className="h-3 w-3" />
                <span className="text-sm">{getPaymentMethodDisplay(payment.method, payment.cardLast4)}</span>
              </div>
            </TableCell>
            <TableCell className="font-medium">{formatCurrency(payment.amount)}</TableCell>
            <TableCell>
              <PaymentStatusBadge status={payment.status} />
            </TableCell>
            <TableCell>
              <PaymentActions paymentStatus={payment.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PaymentHistoryTable;
