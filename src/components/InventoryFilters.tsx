
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { InventoryItem } from '../types';

interface InventoryFiltersProps {
  categoryFilter: string;
  statusFilter: string;
  onCategoryChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  inventory: InventoryItem[];
}

const InventoryFilters: React.FC<InventoryFiltersProps> = ({
  categoryFilter,
  statusFilter,
  onCategoryChange,
  onStatusChange,
  inventory
}) => {
  const categories = Array.from(new Set(inventory.map(item => item.category)));

  return (
    <div className="flex gap-2">
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

      <Select value={statusFilter} onValueChange={onStatusChange}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="in-stock">In Stock</SelectItem>
          <SelectItem value="low-stock">Low Stock</SelectItem>
          <SelectItem value="out-of-stock">Out of Stock</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default InventoryFilters;
