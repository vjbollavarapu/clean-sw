
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';

interface TopPerformer {
  name: string;
  department: string;
  rating: number;
  projects: number;
}

interface HRTopPerformersProps {
  topPerformers: TopPerformer[];
}

const HRTopPerformers = ({ topPerformers }: HRTopPerformersProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Top Performers</CardTitle>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topPerformers.map((performer, index) => (
            <div key={performer.name} className="flex justify-between items-center p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium">{performer.name}</p>
                  <p className="text-sm text-muted-foreground">{performer.department}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 mb-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">{performer.rating}</span>
                </div>
                <p className="text-xs text-muted-foreground">{performer.projects} projects</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HRTopPerformers;
