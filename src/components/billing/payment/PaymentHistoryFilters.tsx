
import React from 'react';
import { Search, Download } from 'lucide-react';
import { Button } from '../../ui/button';

interface PaymentHistoryFiltersProps {
  searchTerm: string;
  methodFilter: string;
  onSearchChange: (value: string) => void;
  onMethodFilterChange: (value: string) => void;
}

const PaymentHistoryFilters: React.FC<PaymentHistoryFiltersProps> = ({
  searchTerm,
  methodFilter,
  onSearchChange,
  onMethodFilterChange
}) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search payments..."
          className="pl-8 pr-4 py-2 border border-input rounded-md text-sm"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <select
        className="px-3 py-2 border border-input rounded-md text-sm"
        value={methodFilter}
        onChange={(e) => onMethodFilterChange(e.target.value)}
      >
        <option value="all">All Methods</option>
        <option value="credit card">Credit Card</option>
        <option value="bank transfer">Bank Transfer</option>
      </select>
      <Button variant="outline" size="sm">
        <Download className="h-4 w-4 mr-1" />
        Export
      </Button>
    </div>
  );
};

export default PaymentHistoryFilters;
