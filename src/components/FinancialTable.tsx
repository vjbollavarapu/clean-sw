
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { FinancialRecord } from '../types';
import { Edit, Trash2, TrendingUp, TrendingDown } from 'lucide-react';

interface FinancialTableProps {
  records: FinancialRecord[];
  onEdit: (record: FinancialRecord) => void;
  onDelete: (id: string) => void;
}

const FinancialTable: React.FC<FinancialTableProps> = ({ records, onEdit, onDelete }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Reference</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  {record.type === 'income' ? (
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  )}
                  <Badge variant={record.type === 'income' ? 'default' : 'secondary'}>
                    {record.type}
                  </Badge>
                </div>
              </TableCell>
              <TableCell className="font-medium">{record.description}</TableCell>
              <TableCell>{record.category}</TableCell>
              <TableCell>
                <span className={record.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                  {formatCurrency(record.amount)}
                </span>
              </TableCell>
              <TableCell>{formatDate(record.date)}</TableCell>
              <TableCell>{record.reference || '-'}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEdit(record)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(record.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {records.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                No financial records found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default FinancialTable;
