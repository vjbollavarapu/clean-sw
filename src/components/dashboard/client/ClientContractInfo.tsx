
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { FileText, Calendar, MapPin, Users } from 'lucide-react';

const ClientContractInfo = () => {
  const contractData = {
    contractNumber: 'CNT-2024-ABC-001',
    startDate: '2024-01-15',
    endDate: '2025-01-14',
    serviceType: 'Comprehensive Cleaning Services',
    locations: 3,
    assignedCleaners: 8,
    monthlyValue: 8500,
    status: 'active'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      active: 'default',
      pending: 'secondary',
      expired: 'destructive'
    } as const;
    
    return <Badge variant={variants[status as keyof typeof variants]}>{status.toUpperCase()}</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="h-5 w-5 mr-2" />
          Contract Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium text-lg">{contractData.contractNumber}</p>
            <p className="text-sm text-muted-foreground">{contractData.serviceType}</p>
          </div>
          {getStatusBadge(contractData.status)}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Contract Period
            </div>
            <div>
              <p className="font-medium">{formatDate(contractData.startDate)}</p>
              <p className="text-sm text-muted-foreground">to {formatDate(contractData.endDate)}</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Service Locations
            </div>
            <p className="font-medium">{contractData.locations} Active Locations</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              Assigned Staff
            </div>
            <p className="font-medium">{contractData.assignedCleaners} Cleaners</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              Monthly Value
            </div>
            <p className="font-medium text-lg text-green-600">{formatCurrency(contractData.monthlyValue)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientContractInfo;
