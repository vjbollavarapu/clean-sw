
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { 
  FileText, 
  Calendar, 
  Users, 
  TrendingUp 
} from 'lucide-react';

const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button variant="outline" className="w-full justify-start">
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Reminders
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Users className="h-4 w-4 mr-2" />
          Client Analysis
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <TrendingUp className="h-4 w-4 mr-2" />
          Revenue Forecast
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
