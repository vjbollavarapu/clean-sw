
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import InvoiceManagementStats from './invoice/InvoiceManagementStats';
import InvoiceManagementFilters from './invoice/InvoiceManagementFilters';
import InvoiceManagementTable from './invoice/InvoiceManagementTable';

const InvoiceManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const invoices = [
    {
      id: 'INV-2024-0156',
      date: '2024-06-15',
      dueDate: '2024-06-20',
      description: 'Monthly Cleaning Services - June 2024',
      amount: 2700.00,
      status: 'pending',
      serviceType: 'Regular Cleaning'
    },
    {
      id: 'INV-2024-0155',
      date: '2024-06-10',
      dueDate: '2024-06-15',
      description: 'Deep Cleaning Service - Conference Room A',
      amount: 450.00,
      status: 'paid',
      serviceType: 'Deep Cleaning'
    },
    {
      id: 'INV-2024-0154',
      date: '2024-05-28',
      dueDate: '2024-06-02',
      description: 'Window Cleaning - Building Exterior',
      amount: 650.00,
      status: 'overdue',
      serviceType: 'Window Cleaning'
    },
    {
      id: 'INV-2024-0153',
      date: '2024-05-15',
      dueDate: '2024-05-20',
      description: 'Monthly Cleaning Services - May 2024',
      amount: 2700.00,
      status: 'paid',
      serviceType: 'Regular Cleaning'
    },
    {
      id: 'INV-2024-0152',
      date: '2024-05-08',
      dueDate: '2024-05-13',
      description: 'Carpet Cleaning - Main Office',
      amount: 380.00,
      status: 'paid',
      serviceType: 'Carpet Cleaning'
    }
  ];

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = 
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.serviceType.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <InvoiceManagementStats invoices={filteredInvoices} />

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Invoice Management</CardTitle>
            <InvoiceManagementFilters
              searchTerm={searchTerm}
              statusFilter={statusFilter}
              onSearchChange={setSearchTerm}
              onStatusFilterChange={setStatusFilter}
            />
          </div>
        </CardHeader>
        <CardContent>
          <InvoiceManagementTable invoices={filteredInvoices} />
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoiceManagement;
