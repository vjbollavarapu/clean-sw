
import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { FileText, Clock, AlertCircle } from 'lucide-react';

interface Invoice {
  id: string;
  amount: number;
  status: string;
}

interface InvoiceManagementStatsProps {
  invoices: Invoice[];
}

const InvoiceManagementStats: React.FC<InvoiceManagementStatsProps> = ({ invoices }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const pendingAmount = invoices.filter(inv => inv.status === 'pending').reduce((sum, invoice) => sum + invoice.amount, 0);
  const overdueAmount = invoices.filter(inv => inv.status === 'overdue').reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <FileText className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-sm font-medium">Total Invoices</p>
              <p className="text-2xl font-bold">{invoices.length}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-green-500 rounded" />
            <div>
              <p className="text-sm font-medium">Total Amount</p>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(totalAmount)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-yellow-500" />
            <div>
              <p className="text-sm font-medium">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">{formatCurrency(pendingAmount)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <div>
              <p className="text-sm font-medium">Overdue</p>
              <p className="text-2xl font-bold text-red-600">{formatCurrency(overdueAmount)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoiceManagementStats;
