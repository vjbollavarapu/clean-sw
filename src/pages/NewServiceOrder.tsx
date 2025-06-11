
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Calendar, MapPin, DollarSign, User } from 'lucide-react';
import { ServiceOrder } from '@/types';

const NewServiceOrder = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clientName: '',
    serviceType: '',
    scheduledDate: '',
    scheduledTime: '',
    amount: '',
    location: '',
    notes: ''
  });

  const serviceTypes = [
    'Office Cleaning',
    'Deep Kitchen Cleaning',
    'Carpet Cleaning',
    'Window Cleaning',
    'Post-Construction Cleanup',
    'Residential Cleaning',
    'Floor Maintenance',
    'Sanitization Service'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new service order object
    const newOrder: Partial<ServiceOrder> = {
      id: Math.random().toString(36).substr(2, 9),
      clientId: 'client-' + Math.random().toString(36).substr(2, 6),
      clientName: formData.clientName,
      serviceType: formData.serviceType,
      status: 'pending',
      assignedEmployees: [],
      scheduledDate: new Date(`${formData.scheduledDate}T${formData.scheduledTime}`).toISOString(),
      amount: parseFloat(formData.amount),
      location: formData.location,
      notes: formData.notes
    };

    console.log('Creating new service order:', newOrder);
    
    // In a real app, this would save to a database
    // For now, we'll just navigate back to the orders list
    navigate('/orders');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link to="/orders">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">New Service Order</h1>
          <p className="text-muted-foreground">Create a new service order for your client</p>
        </div>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Order Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clientName">
                  <User className="inline h-4 w-4 mr-1" />
                  Client Name
                </Label>
                <Input
                  id="clientName"
                  value={formData.clientName}
                  onChange={(e) => handleInputChange('clientName', e.target.value)}
                  placeholder="Enter client name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Type</Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) => handleInputChange('serviceType', value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="scheduledDate">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Scheduled Date
                </Label>
                <Input
                  id="scheduledDate"
                  type="date"
                  value={formData.scheduledDate}
                  onChange={(e) => handleInputChange('scheduledDate', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="scheduledTime">Scheduled Time</Label>
                <Input
                  id="scheduledTime"
                  type="time"
                  value={formData.scheduledTime}
                  onChange={(e) => handleInputChange('scheduledTime', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">
                <DollarSign className="inline h-4 w-4 mr-1" />
                Service Amount ($)
              </Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                min="0"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                placeholder="0.00"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">
                <MapPin className="inline h-4 w-4 mr-1" />
                Service Location
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Enter full address"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="Enter any special instructions or notes"
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Create Service Order
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link to="/orders">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewServiceOrder;
