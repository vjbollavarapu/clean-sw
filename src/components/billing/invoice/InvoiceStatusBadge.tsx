
import React from 'react';
import { Badge } from '../../ui/badge';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface InvoiceStatusBadgeProps {
  status: string;
}

const InvoiceStatusBadge: React.FC<InvoiceStatusBadgeProps> = ({ status }) => {
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      paid: { variant: 'default' as const, label: 'Paid', icon: CheckCircle, color: 'text-green-600' },
      pending: { variant: 'secondary' as const, label: 'Pending', icon: Clock, color: 'text-yellow-600' },
      overdue: { variant: 'destructive' as const, label: 'Overdue', icon: AlertCircle, color: 'text-red-600' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    const Icon = config.icon;
    return (
      <Badge variant={config.variant} className="flex items-center space-x-1">
        <Icon className="h-3 w-3" />
        <span>{config.label}</span>
      </Badge>
    );
  };

  return getStatusBadge(status);
};

export default InvoiceStatusBadge;
