
import React from 'react';
import { Button } from '../../ui/button';
import { Download, RefreshCw } from 'lucide-react';

interface PaymentActionsProps {
  paymentStatus: string;
}

const PaymentActions: React.FC<PaymentActionsProps> = ({ paymentStatus }) => {
  return (
    <div className="flex items-center space-x-2">
      <Button size="sm" variant="outline">
        <Download className="h-3 w-3" />
      </Button>
      {paymentStatus === 'failed' && (
        <Button size="sm" variant="outline">
          <RefreshCw className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
};

export default PaymentActions;
