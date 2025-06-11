
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { User, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const ClientExecutiveContact = () => {
  const executiveData = {
    name: 'Sarah Thompson',
    title: 'Senior Account Executive',
    phone: '+1 (555) 987-6543',
    email: 'sarah.thompson@cleaningco.com',
    territory: 'Downtown District',
    clientsManaged: 4,
    experience: '8 years',
    status: 'available',
    lastContact: '2024-06-10T14:30:00Z'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      available: 'default',
      busy: 'secondary',
      'out-of-office': 'destructive'
    } as const;
    
    return <Badge variant={variants[status as keyof typeof variants]}>{status.replace('-', ' ')}</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <User className="h-5 w-5 mr-2" />
          Your Account Executive
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-lg">{executiveData.name}</h4>
            <p className="text-sm text-muted-foreground">{executiveData.title}</p>
            <p className="text-xs text-muted-foreground">{executiveData.experience} experience</p>
          </div>
          {getStatusBadge(executiveData.status)}
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{executiveData.phone}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{executiveData.email}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{executiveData.territory}</span>
          </div>
        </div>

        <div className="border-t pt-3">
          <div className="flex justify-between text-sm mb-3">
            <span className="text-muted-foreground">Clients Managed:</span>
            <span className="font-medium">{executiveData.clientsManaged}</span>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span className="text-muted-foreground">Last Contact:</span>
            <span className="font-medium">{formatDate(executiveData.lastContact)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <Button className="w-full" size="sm">
            <Phone className="h-4 w-4 mr-2" />
            Call Executive
          </Button>
          
          <Button variant="outline" className="w-full" size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </div>

        <div className="bg-muted p-3 rounded-lg text-sm">
          <p className="font-medium mb-1">Quick Note:</p>
          <p className="text-muted-foreground">
            "Your contract renewal is coming up in 6 months. I'll be reaching out next month to discuss options." - Sarah
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientExecutiveContact;
