
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { 
  TrendingUp, 
  Star, 
  Target, 
  Calendar, 
  FileText, 
  Eye,
  Plus,
  AlertCircle
} from 'lucide-react';

const HRPerformance = () => {
  const performanceReviews = [
    {
      id: '1',
      employee: 'John Smith',
      position: 'Senior Cleaner',
      reviewPeriod: 'Q2 2024',
      score: 4.2,
      status: 'completed',
      reviewDate: '2024-06-15',
      goals: 3,
      goalsAchieved: 2
    },
    {
      id: '2',
      employee: 'Sarah Johnson',
      position: 'Team Supervisor',
      reviewPeriod: 'Q2 2024',
      score: 4.7,
      status: 'completed',
      reviewDate: '2024-06-10',
      goals: 4,
      goalsAchieved: 4
    },
    {
      id: '3',
      employee: 'Mike Chen',
      position: 'Equipment Specialist',
      reviewPeriod: 'Q2 2024',
      score: null,
      status: 'pending',
      reviewDate: '2024-06-20',
      goals: 3,
      goalsAchieved: 1
    }
  ];

  const kpiMetrics = [
    {
      id: '1',
      employee: 'John Smith',
      clientSatisfaction: 4.5,
      taskCompletion: 95,
      punctuality: 98,
      qualityScore: 4.2,
      trend: 'up'
    },
    {
      id: '2',
      employee: 'Sarah Johnson',
      clientSatisfaction: 4.8,
      taskCompletion: 98,
      punctuality: 100,
      qualityScore: 4.7,
      trend: 'up'
    },
    {
      id: '3',
      employee: 'Mike Chen',
      clientSatisfaction: 4.1,
      taskCompletion: 88,
      punctuality: 92,
      qualityScore: 3.9,
      trend: 'down'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default">Completed</Badge>;
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'overdue':
        return <Badge variant="destructive">Overdue</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 4.5) return 'text-green-600';
    if (score >= 4.0) return 'text-blue-600';
    if (score >= 3.5) return 'text-orange-600';
    return 'text-red-600';
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? 
      <TrendingUp className="h-4 w-4 text-green-600" /> : 
      <AlertCircle className="h-4 w-4 text-red-600" />;
  };

  return (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Performance</p>
                <p className="text-2xl font-bold">4.3</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Reviews Completed</p>
                <p className="text-2xl font-bold">85%</p>
              </div>
              <FileText className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Goals Achieved</p>
                <p className="text-2xl font-bold">78%</p>
              </div>
              <Target className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Reviews</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Calendar className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Reviews */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Performance Reviews</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Schedule Review
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Goals Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {performanceReviews.map((review) => (
                <TableRow key={review.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{review.employee}</p>
                      <p className="text-sm text-muted-foreground">{review.position}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p>{review.reviewPeriod}</p>
                      <p className="text-sm text-muted-foreground">{review.reviewDate}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {review.score ? (
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className={`font-medium ${getScoreColor(review.score)}`}>
                          {review.score}
                        </span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">Pending</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p>{review.goalsAchieved}/{review.goals} achieved</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(review.goalsAchieved / review.goals) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(review.status)}</TableCell>
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

      {/* KPI Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle>Key Performance Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Client Satisfaction</TableHead>
                <TableHead>Task Completion</TableHead>
                <TableHead>Punctuality</TableHead>
                <TableHead>Quality Score</TableHead>
                <TableHead>Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kpiMetrics.map((metric) => (
                <TableRow key={metric.id}>
                  <TableCell className="font-medium">{metric.employee}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{metric.clientSatisfaction}</span>
                    </div>
                  </TableCell>
                  <TableCell>{metric.taskCompletion}%</TableCell>
                  <TableCell>{metric.punctuality}%</TableCell>
                  <TableCell>
                    <span className={getScoreColor(metric.qualityScore)}>
                      {metric.qualityScore}
                    </span>
                  </TableCell>
                  <TableCell>{getTrendIcon(metric.trend)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default HRPerformance;
