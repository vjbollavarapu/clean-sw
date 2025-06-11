
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Users } from 'lucide-react';

const ClientSegmentsChart = () => {
  const clientSegmentData = [
    { segment: 'Enterprise', revenue: 125000, clients: 25, avgValue: 5000 },
    { segment: 'Medium Business', revenue: 85000, clients: 45, avgValue: 1889 },
    { segment: 'Small Business', revenue: 35000, clients: 86, avgValue: 407 }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Segments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {clientSegmentData.map((segment) => (
          <div key={segment.segment} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{segment.segment}</span>
              <span className="text-sm">{formatCurrency(segment.revenue)}</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Users className="h-3 w-3 mr-1" />
              <span>{segment.clients} clients</span>
              <span className="mx-2">•</span>
              <span>Avg: {formatCurrency(segment.avgValue)}</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ 
                  width: `${(segment.revenue / Math.max(...clientSegmentData.map(s => s.revenue))) * 100}%` 
                }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ClientSegmentsChart;
