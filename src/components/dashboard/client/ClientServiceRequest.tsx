
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Plus, Calendar, MapPin, MessageSquare } from 'lucide-react';

const ClientServiceRequest = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: '',
    preferredDate: '',
    location: '',
    notes: ''
  });

  const serviceTypes = [
    'Office Cleaning',
    'Deep Cleaning',
    'Window Cleaning',
    'Carpet Cleaning',
    'Post-Construction Cleanup',
    'Special Event Cleaning'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service request submitted:', formData);
    setIsFormOpen(false);
    setFormData({ serviceType: '', preferredDate: '', location: '', notes: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Request New Service
          <Button 
            onClick={() => setIsFormOpen(!isFormOpen)}
            size="sm"
            variant={isFormOpen ? "outline" : "default"}
          >
            <Plus className="h-4 w-4 mr-1" />
            {isFormOpen ? 'Cancel' : 'New Request'}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!isFormOpen ? (
          <div className="text-center py-8">
            <div className="mb-4">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-4">
              Need our services? Click the button above to request a new service.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>✓ Quick response within 24 hours</p>
              <p>✓ Flexible scheduling</p>
              <p>✓ Professional service guarantee</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="serviceType">Service Type</Label>
              <select
                id="serviceType"
                value={formData.serviceType}
                onChange={(e) => handleChange('serviceType', e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              >
                <option value="">Select a service</option>
                {serviceTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="preferredDate">Preferred Date</Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleChange('preferredDate', e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="location">
                <MapPin className="h-4 w-4 inline mr-1" />
                Location/Address
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                placeholder="Enter service location"
                required
              />
            </div>

            <div>
              <Label htmlFor="notes">
                <MessageSquare className="h-4 w-4 inline mr-1" />
                Additional Notes
              </Label>
              <textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder="Any special requirements or notes..."
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Service Request
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ClientServiceRequest;
