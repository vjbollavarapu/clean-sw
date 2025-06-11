
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Badge } from '../../../ui/badge';
import { 
  CheckCircle,
  Clock,
  AlertCircle,
  MessageSquare
} from 'lucide-react';

const HRRecentCandidates = () => {
  const recentCandidates = [
    {
      id: '1',
      name: 'Alice Johnson',
      position: 'Senior Software Engineer',
      stage: 'interview',
      score: 8.5,
      appliedDate: '2024-06-08'
    },
    {
      id: '2',
      name: 'Bob Smith',
      position: 'Marketing Manager',
      stage: 'screening',
      score: 7.2,
      appliedDate: '2024-06-10'
    },
    {
      id: '3',
      name: 'Carol Davis',
      position: 'Senior Software Engineer',
      stage: 'offer',
      score: 9.1,
      appliedDate: '2024-06-05'
    },
    {
      id: '4',
      name: 'David Wilson',
      position: 'HR Coordinator',
      stage: 'rejected',
      score: 5.8,
      appliedDate: '2024-06-03'
    }
  ];

  const getStageBadge = (stage: string) => {
    switch (stage) {
      case 'screening':
        return <Badge variant="outline"><Clock className="h-3 w-3 mr-1" />Screening</Badge>;
      case 'interview':
        return <Badge variant="default"><MessageSquare className="h-3 w-3 mr-1" />Interview</Badge>;
      case 'offer':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Offer</Badge>;
      case 'rejected':
        return <Badge variant="destructive"><AlertCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="secondary">{stage}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Candidates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentCandidates.map((candidate) => (
            <div key={candidate.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <p className="font-medium">{candidate.name}</p>
                <p className="text-sm text-muted-foreground">{candidate.position}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <p className="text-sm font-medium">{candidate.score}</p>
                  <p className="text-xs text-muted-foreground">Score</p>
                </div>
                {getStageBadge(candidate.stage)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HRRecentCandidates;
