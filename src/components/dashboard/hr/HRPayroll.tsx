
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import HRPayrollSummary from './HRPayrollSummary';
import HRAllowancesTab from './HRAllowancesTab';
import HRDeductionsTab from './HRDeductionsTab';
import HRClaimsTab from './HRClaimsTab';
import HROvertimeTab from './HROvertimeTab';
import HRInsuranceTab from './HRInsuranceTab';
import HRLoansTab from './HRLoansTab';
import HRAdvancesTab from './HRAdvancesTab';

const HRPayroll = () => {
  return (
    <div className="space-y-6">
      {/* Payroll Summary Cards */}
      <HRPayrollSummary />

      {/* Payroll Management Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Payroll Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="allowances" className="space-y-4">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="allowances">Allowances</TabsTrigger>
              <TabsTrigger value="deductions">Deductions</TabsTrigger>
              <TabsTrigger value="claims">Claims</TabsTrigger>
              <TabsTrigger value="overtime">Overtime</TabsTrigger>
              <TabsTrigger value="insurance">Insurance</TabsTrigger>
              <TabsTrigger value="loans">Loans</TabsTrigger>
              <TabsTrigger value="advances">Advances</TabsTrigger>
            </TabsList>

            <TabsContent value="allowances">
              <HRAllowancesTab />
            </TabsContent>

            <TabsContent value="deductions">
              <HRDeductionsTab />
            </TabsContent>

            <TabsContent value="claims">
              <HRClaimsTab />
            </TabsContent>

            <TabsContent value="overtime">
              <HROvertimeTab />
            </TabsContent>

            <TabsContent value="insurance">
              <HRInsuranceTab />
            </TabsContent>

            <TabsContent value="loans">
              <HRLoansTab />
            </TabsContent>

            <TabsContent value="advances">
              <HRAdvancesTab />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRPayroll;
