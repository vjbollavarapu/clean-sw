
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Client } from '../types';

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  client?: Client | null;
  mode: 'view' | 'edit' | 'add';
  onSave: (client: Client) => void;
}

const ClientModal: React.FC<ClientModalProps> = ({
  isOpen,
  onClose,
  client,
  mode,
  onSave
}) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceHistory: 0,
    totalSpent: 0,
    status: 'active' as Client['status']
  });

  useEffect(() => {
    if (client) {
      setFormData(client);
    } else if (mode === 'add') {
      setFormData({
        id: `C${Date.now()}`,
        name: '',
        email: '',
        phone: '',
        address: '',
        serviceHistory: 0,
        totalSpent: 0,
        status: 'active'
      });
    }
  }, [client, mode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (field: keyof Client, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isReadOnly = mode === 'view';
  const title = mode === 'add' ? 'Add New Client' : mode === 'edit' ? 'Edit Client' : 'Client Details';

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                readOnly={isReadOnly}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                readOnly={isReadOnly}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                readOnly={isReadOnly}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              {isReadOnly ? (
                <div className="flex items-center h-10">
                  <Badge variant={formData.status === 'active' ? 'default' : 'secondary'}>
                    {formData.status}
                  </Badge>
                </div>
              ) : (
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) => handleChange('status', e.target.value as Client['status'])}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              readOnly={isReadOnly}
              required
            />
          </div>

          {mode === 'view' && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Service History</Label>
                <div className="flex items-center h-10 px-3 py-2 border rounded-md bg-muted">
                  {formData.serviceHistory} services
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Total Spent</Label>
                <div className="flex items-center h-10 px-3 py-2 border rounded-md bg-muted">
                  {formatCurrency(formData.totalSpent)}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              {mode === 'view' ? 'Close' : 'Cancel'}
            </Button>
            {!isReadOnly && (
              <Button type="submit">
                {mode === 'add' ? 'Add Client' : 'Save Changes'}
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClientModal;
