
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { FinancialRecord } from '../types';

interface FinancialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (record: Omit<FinancialRecord, 'id'>) => void;
  record?: FinancialRecord | null;
}

const FinancialModal: React.FC<FinancialModalProps> = ({ isOpen, onClose, onSave, record }) => {
  const [formData, setFormData] = useState({
    type: 'income' as 'income' | 'expense',
    category: '',
    amount: '',
    description: '',
    date: '',
    reference: '',
  });

  useEffect(() => {
    if (record) {
      setFormData({
        type: record.type,
        category: record.category,
        amount: record.amount.toString(),
        description: record.description,
        date: record.date,
        reference: record.reference || '',
      });
    } else {
      setFormData({
        type: 'income',
        category: '',
        amount: '',
        description: '',
        date: new Date().toISOString().split('T')[0],
        reference: '',
      });
    }
  }, [record, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.category || !formData.amount || !formData.description || !formData.date) {
      return;
    }

    onSave({
      type: formData.type,
      category: formData.category,
      amount: parseFloat(formData.amount),
      description: formData.description,
      date: formData.date,
      reference: formData.reference || undefined,
    });

    onClose();
  };

  const incomeCategories = [
    'Service Revenue',
    'Product Sales',
    'Consulting',
    'Interest Income',
    'Other Income'
  ];

  const expenseCategories = [
    'Office Supplies',
    'Equipment',
    'Utilities',
    'Marketing',
    'Travel',
    'Professional Services',
    'Insurance',
    'Rent',
    'Payroll',
    'Other Expenses'
  ];

  const categories = formData.type === 'income' ? incomeCategories : expenseCategories;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {record ? 'Edit Financial Record' : 'Add New Financial Record'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select 
              value={formData.type} 
              onValueChange={(value) => setFormData(prev => ({ 
                ...prev, 
                type: value as 'income' | 'expense',
                category: '' // Reset category when type changes
              }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select 
              value={formData.category} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={formData.amount}
              onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reference">Reference (Optional)</Label>
            <Input
              id="reference"
              placeholder="Invoice number, transaction ID, etc."
              value={formData.reference}
              onChange={(e) => setFormData(prev => ({ ...prev, reference: e.target.value }))}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {record ? 'Update' : 'Add'} Record
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FinancialModal;
