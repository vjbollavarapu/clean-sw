
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Plus, MessageSquare, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

const ServiceRequests = () => {
  const [isNewRequestOpen, setIsNewRequestOpen] = useState(false);
  const [newRequest, setNewRequest] = useState({
    type: '',
    priority: '',
    preferredDate: '',
    location: '',
    description: ''
  });

  const serviceRequests = [
    {
      id: 1,
      type: 'Emergency Cleaning',
      description: 'Urgent cleaning needed after small water leak in conference room',
      priority: 'high',
      status: 'pending',
      requestDate: '2024-06-12',
      preferredDate: '2024-06-13',
      location: 'Conference Room B',
      estimatedCost: 200,
      response: null
    },
    {
      id: 2,
      type: 'Additional Service',
      description: 'Request for monthly deep cleaning of executive offices',
      priority: 'medium',
      status: 'approved',
      requestDate: '2024-06-10',
      preferredDate: '2024-06-20',
      location: 'Executive Floor',
      estimatedCost: 350,
      response: 'Approved. Service scheduled for June 20th at 9:00 AM.'
    },
    {
      id: 3,
      type: 'Schedule Change',
      description: 'Need to reschedule weekly cleaning from Friday to Thursday',
      priority: 'low',
      status: 'completed',
      requestDate: '2024-06-08',
      preferredDate: '2024-06-15',
      location: 'Main Office',
      estimatedCost: 0,
      response: 'Schedule updated. Weekly cleaning moved to Thursdays.'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { variant: 'secondary' as const, label: 'Pending', icon: AlertCircle },
      approved: { variant: 'default' as const, label: 'Approved', icon: CheckCircle },
      rejected: { variant: 'destructive' as const, label: 'Rejected', icon: AlertCircle },
      completed: { variant: 'outline' as const, label: 'Completed', icon: CheckCircle }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    const Icon = config.icon;
    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="h-3 w-3" />
        {config.label}
      </Badge>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      high: { color: 'bg-red-100 text-red-700 border-red-200', label: 'High' },
      medium: { color: 'bg-yellow-100 text-yellow-700 border-yellow-200', label: 'Medium' },
      low: { color: 'bg-green-100 text-green-700 border-green-200', label: 'Low' }
    };

    const config = priorityConfig[priority as keyof typeof priorityConfig] || priorityConfig.medium;
    return (
      <span className={`px-2 py-1 text-xs rounded border ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const handleSubmitRequest = () => {
    console.log('Submitting request:', newRequest);
    setIsNewRequestOpen(false);
    setNewRequest({
      type: '',
      priority: '',
      preferredDate: '',
      location: '',
      description: ''
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Service Requests</h2>
        <Dialog open={isNewRequestOpen} onOpenChange={setIsNewRequestOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Request
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>New Service Request</DialogTitle>
              <DialogDescription>
                Submit a new service request. We'll review it and get back to you within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="request-type">Service Type</Label>
                <Select value={newRequest.type} onValueChange={(value) => setNewRequest({ ...newRequest, type: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="additional">Additional Service</SelectItem>
                    <SelectItem value="emergency">Emergency Cleaning</SelectItem>
                    <SelectItem value="schedule">Schedule Change</SelectItem>
                    <SelectItem value="complaint">Service Complaint</SelectItem>
                    <SelectItem value="quote">Request Quote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="priority">Priority</Label>
                <Select value={newRequest.priority} onValueChange={(value) => setNewRequest({ ...newRequest, priority: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="preferred-date">Preferred Date</Label>
                <Input
                  id="preferred-date"
                  type="date"
                  value={newRequest.preferredDate}
                  onChange={(e) => setNewRequest({ ...newRequest, preferredDate: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Specify location"
                  value={newRequest.location}
                  onChange={(e) => setNewRequest({ ...newRequest, location: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your request in detail"
                  value={newRequest.description}
                  onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleSubmitRequest}>Submit Request</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Service Requests List */}
      <div className="space-y-4">
        {serviceRequests.map((request) => (
          <Card key={request.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{request.type}</CardTitle>
                <div className="flex items-center space-x-2">
                  {getPriorityBadge(request.priority)}
                  {getStatusBadge(request.status)}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{request.description}</p>
              
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-sm font-medium">Request Date</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(request.requestDate)}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Preferred Date</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(request.preferredDate)}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{request.location}</p>
                </div>
              </div>

              {request.estimatedCost > 0 && (
                <div>
                  <p className="text-sm font-medium">Estimated Cost</p>
                  <p className="text-sm text-muted-foreground">
                    ${request.estimatedCost.toFixed(2)}
                  </p>
                </div>
              )}

              {request.response && (
                <div className="border-t pt-3">
                  <p className="text-sm font-medium mb-1">Response</p>
                  <p className="text-sm bg-muted p-3 rounded">{request.response}</p>
                </div>
              )}

              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  Follow Up
                </Button>
                {request.status === 'pending' && (
                  <Button size="sm" variant="outline">
                    Cancel Request
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceRequests;
