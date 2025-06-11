
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { 
  Users, 
  UserPlus, 
  Calendar, 
  FileText, 
  Eye, 
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

const HRRecruitment = () => {
  // Mock data for job postings
  const jobPostings = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      department: 'Engineering',
      status: 'active',
      applications: 24,
      posted: '2024-06-01',
      deadline: '2024-06-30'
    },
    {
      id: '2',
      title: 'Marketing Manager',
      department: 'Marketing',
      status: 'active',
      applications: 18,
      posted: '2024-06-05',
      deadline: '2024-07-05'
    },
    {
      id: '3',
      title: 'HR Coordinator',
      department: 'HR',
      status: 'closed',
      applications: 32,
      posted: '2024-05-15',
      deadline: '2024-06-15'
    }
  ];

  // Mock data for candidates
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

  // Mock data for interviews
  const upcomingInterviews = [
    {
      id: '1',
      candidate: 'Alice Johnson',
      position: 'Senior Software Engineer',
      date: '2024-06-15',
      time: '10:00 AM',
      interviewer: 'John Manager',
      type: 'Technical'
    },
    {
      id: '2',
      candidate: 'Eva Brown',
      position: 'Marketing Manager',
      date: '2024-06-16',
      time: '2:00 PM',
      interviewer: 'Sarah Director',
      type: 'Final'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="default">Active</Badge>;
      case 'closed':
        return <Badge variant="secondary">Closed</Badge>;
      case 'draft':
        return <Badge variant="outline">Draft</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

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
    <div className="space-y-6">
      {/* Recruitment Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Open Positions</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <UserPlus className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Applications</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <FileText className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">In Process</p>
                <p className="text-2xl font-bold">42</p>
              </div>
              <Users className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Month Hires</p>
                <p className="text-2xl font-bold">6</p>
              </div>
              <CheckCircle className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Job Postings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Job Postings</CardTitle>
            <Button size="sm">
              <UserPlus className="h-4 w-4 mr-2" />
              New Posting
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Position</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Applications</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobPostings.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{job.title}</p>
                        <p className="text-sm text-muted-foreground">{job.department}</p>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(job.status)}</TableCell>
                    <TableCell>{job.applications}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Candidates */}
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
      </div>

      {/* Upcoming Interviews */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Interviews
          </CardTitle>
          <Button size="sm" variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Interview
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Interviewer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingInterviews.map((interview) => (
                <TableRow key={interview.id}>
                  <TableCell className="font-medium">{interview.candidate}</TableCell>
                  <TableCell>{interview.position}</TableCell>
                  <TableCell>
                    <div>
                      <p>{interview.date}</p>
                      <p className="text-sm text-muted-foreground">{interview.time}</p>
                    </div>
                  </TableCell>
                  <TableCell>{interview.interviewer}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{interview.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRRecruitment;
