
import React from 'react';
import { Badge } from '../../ui/badge';
import { CheckCircle, RefreshCw, AlertTriangle } from 'lucide-react';

interface PaymentStatusBadgeProps {
  status: string;
}

const PaymentStatusBadge: React.FC<PaymentStatusBadgeProps> = ({ status }) => {
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { variant: 'default' as const, label: 'Completed', icon: CheckCircle, color: 'text-green-600' },
      pending: { variant: 'secondary' as const, label: 'Pending', icon: RefreshCw, color: 'text-yellow-600' },
      failed: { variant: 'destructive' as const, label: 'Failed', icon: AlertTriangle, color: 'text-red-600' }
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

export default PaymentStatusBadge;
