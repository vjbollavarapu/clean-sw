
import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { DollarSign, CheckCircle, AlertTriangle, CreditCard } from 'lucide-react';

interface Payment {
  id: string;
  amount: number;
  status: string;
}

interface PaymentHistoryStatsProps {
  payments: Payment[];
}

const PaymentHistoryStats: React.FC<PaymentHistoryStatsProps> = ({ payments }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  const totalPaid = payments.filter(p => p.status === 'completed').reduce((sum, payment) => sum + payment.amount, 0);
  const failedPayments = payments.filter(p => p.status === 'failed').length;
  const completedPayments = payments.filter(p => p.status === 'completed').length;

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-green-500" />
            <div>
              <p className="text-sm font-medium">Total Paid</p>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(totalPaid)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-sm font-medium">Completed</p>
              <p className="text-2xl font-bold text-blue-600">{completedPayments}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <div>
              <p className="text-sm font-medium">Failed</p>
              <p className="text-2xl font-bold text-red-600">{failedPayments}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4 text-purple-500" />
            <div>
              <p className="text-sm font-medium">Avg Payment</p>
              <p className="text-2xl font-bold text-purple-600">
                {formatCurrency(completedPayments > 0 ? totalPaid / completedPayments : 0)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentHistoryStats;
