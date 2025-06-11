
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface ContractFormProps {
  contract?: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const ContractForm = ({ contract, onSubmit, onCancel }: ContractFormProps) => {
  const form = useForm({
    defaultValues: {
      contractNumber: contract?.contractNumber || '',
      clientId: contract?.clientId || '',
      clientName: contract?.clientName || '',
      serviceType: contract?.serviceType || '',
      startDate: contract?.startDate || '',
      endDate: contract?.endDate || '',
      monthlyValue: contract?.monthlyValue || 0,
      totalValue: contract?.totalValue || 0,
      status: contract?.status || 'pending',
      locations: contract?.locations?.join(', ') || '',
      assignedCleaners: contract?.assignedCleaners || 0,
      autoRenewal: contract?.autoRenewal || false,
      renewalNotice: contract?.renewalNotice || 30,
      notes: contract?.notes || '',
    },
  });

  const handleSubmit = (data: any) => {
    const formattedData = {
      ...data,
      locations: data.locations.split(',').map((loc: string) => loc.trim()).filter(Boolean),
      monthlyValue: Number(data.monthlyValue),
      totalValue: Number(data.totalValue),
      assignedCleaners: Number(data.assignedCleaners),
      renewalNotice: Number(data.renewalNotice),
    };
    onSubmit(formattedData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="contractNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract Number</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="CNT-2024-001" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="clientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Client Company Name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Type</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Comprehensive Cleaning Services" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="expired">Expired</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Contract Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contract Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input {...field} type="date" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <FormControl>
                        <Input {...field} type="date" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="monthlyValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly Value ($)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" placeholder="8500" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="totalValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Value ($)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" placeholder="102000" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="assignedCleaners"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assigned Cleaners</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" placeholder="8" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="renewalNotice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Renewal Notice (days)</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" placeholder="30" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Additional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="locations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Locations</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Location 1, Location 2, Location 3" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Additional contract notes..." rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Form Actions */}
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">
            {contract ? 'Update Contract' : 'Create Contract'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContractForm;
