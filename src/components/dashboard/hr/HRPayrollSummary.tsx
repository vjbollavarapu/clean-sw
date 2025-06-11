
import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Plus, Minus, FileText, CreditCard } from 'lucide-react';

const HRPayrollSummary = () => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Allowances</p>
              <p className="text-2xl font-bold">$24,500</p>
            </div>
            <Plus className="h-8 w-8 text-green-600" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Deductions</p>
              <p className="text-2xl font-bold">$18,300</p>
            </div>
            <Minus className="h-8 w-8 text-red-600" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Pending Claims</p>
              <p className="text-2xl font-bold">8</p>
            </div>
            <FileText className="h-8 w-8 text-orange-600" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Loans</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <CreditCard className="h-8 w-8 text-blue-600" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRPayrollSummary;
