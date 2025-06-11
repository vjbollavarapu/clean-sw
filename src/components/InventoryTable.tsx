
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Edit, Eye, Trash2 } from 'lucide-react';
import { InventoryItem } from '../types';

interface InventoryTableProps {
  inventory: InventoryItem[];
  onEdit: (item: InventoryItem) => void;
  onView: (item: InventoryItem) => void;
  onDelete: (id: string) => void;
}

const InventoryTable: React.FC<InventoryTableProps> = ({
  inventory,
  onEdit,
  onView,
  onDelete
}) => {
  const getStatusBadge = (item: InventoryItem) => {
    if (item.quantity === 0) {
      return <Badge variant="destructive">Out of Stock</Badge>;
    } else if (item.quantity <= item.minQuantity) {
      return <Badge variant="secondary">Low Stock</Badge>;
    } else {
      return <Badge variant="default" className="bg-green-500">In Stock</Badge>;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Min Quantity</TableHead>
          <TableHead>Unit Price</TableHead>
          <TableHead>Supplier</TableHead>
          <TableHead>Last Restocked</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {inventory.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.minQuantity}</TableCell>
            <TableCell>{formatCurrency(item.unitPrice)}</TableCell>
            <TableCell>{item.supplier}</TableCell>
            <TableCell>{formatDate(item.lastRestocked)}</TableCell>
            <TableCell>{getStatusBadge(item)}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onView(item)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onEdit(item)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onDelete(item.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InventoryTable;
