
import React from 'react';
import { Button } from '../../ui/button';
import { Download, Eye, CreditCard } from 'lucide-react';

interface InvoiceActionsProps {
  invoiceStatus: string;
}

const InvoiceActions: React.FC<InvoiceActionsProps> = ({ invoiceStatus }) => {
  return (
    <div className="flex items-center space-x-2">
      <Button size="sm" variant="outline">
        <Eye className="h-3 w-3" />
      </Button>
      <Button size="sm" variant="outline">
        <Download className="h-3 w-3" />
      </Button>
      {invoiceStatus !== 'paid' && (
        <Button size="sm">
          <CreditCard className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
};

export default InvoiceActions;
