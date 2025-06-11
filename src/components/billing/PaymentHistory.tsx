
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import PaymentHistoryStats from './payment/PaymentHistoryStats';
import PaymentHistoryFilters from './payment/PaymentHistoryFilters';
import PaymentHistoryTable from './payment/PaymentHistoryTable';

const PaymentHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [methodFilter, setMethodFilter] = useState('all');

  const payments = [
    {
      id: 'PAY-2024-0078',
      date: '2024-06-10',
      invoiceId: 'INV-2024-0155',
      amount: 450.00,
      method: 'Credit Card',
      cardLast4: '4567',
      status: 'completed',
      description: 'Deep Cleaning Service',
      transactionId: 'TXN-ABC123'
    },
    {
      id: 'PAY-2024-0077',
      date: '2024-05-20',
      invoiceId: 'INV-2024-0153',
      amount: 2700.00,
      method: 'Bank Transfer',
      cardLast4: '',
      status: 'completed',
      description: 'Monthly Cleaning Services - May',
      transactionId: 'TXN-XYZ789'
    },
    {
      id: 'PAY-2024-0076',
      date: '2024-05-13',
      invoiceId: 'INV-2024-0152',
      amount: 380.00,
      method: 'Credit Card',
      cardLast4: '4567',
      status: 'completed',
      description: 'Carpet Cleaning Service',
      transactionId: 'TXN-DEF456'
    },
    {
      id: 'PAY-2024-0075',
      date: '2024-04-22',
      invoiceId: 'INV-2024-0148',
      amount: 2700.00,
      method: 'Credit Card',
      cardLast4: '4567',
      status: 'completed',
      description: 'Monthly Cleaning Services - April',
      transactionId: 'TXN-GHI789'
    },
    {
      id: 'PAY-2024-0074',
      date: '2024-04-15',
      invoiceId: 'INV-2024-0147',
      amount: 650.00,
      method: 'Bank Transfer',
      cardLast4: '',
      status: 'failed',
      description: 'Window Cleaning Service',
      transactionId: 'TXN-JKL012'
    }
  ];

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = 
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.invoiceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesMethod = methodFilter === 'all' || payment.method.toLowerCase() === methodFilter.toLowerCase();
    
    return matchesSearch && matchesMethod;
  });

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <PaymentHistoryStats payments={filteredPayments} />

      {/* Payment History Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Payment History</CardTitle>
            <PaymentHistoryFilters
              searchTerm={searchTerm}
              methodFilter={methodFilter}
              onSearchChange={setSearchTerm}
              onMethodFilterChange={setMethodFilter}
            />
          </div>
        </CardHeader>
        <CardContent>
          <PaymentHistoryTable payments={filteredPayments} />
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentHistory;
