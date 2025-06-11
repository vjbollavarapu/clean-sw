
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { FinancialRecord } from '../types';

interface FinancialFiltersProps {
  typeFilter: string;
  categoryFilter: string;
  onTypeChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  records: FinancialRecord[];
}

const FinancialFilters: React.FC<FinancialFiltersProps> = ({
  typeFilter,
  categoryFilter,
  onTypeChange,
  onCategoryChange,
  records
}) => {
  const categories = Array.from(new Set(records.map(record => record.category)));

  return (
    <div className="flex gap-2">
      <Select value={typeFilter} onValueChange={onTypeChange}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="income">Income</SelectItem>
          <SelectItem value="expense">Expense</SelectItem>
        </SelectContent>
      </Select>

      <Select value={categoryFilter} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map(category => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FinancialFilters;
