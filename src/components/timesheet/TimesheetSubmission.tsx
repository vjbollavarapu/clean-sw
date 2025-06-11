
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Textarea } from '../ui/textarea';
import { 
  Send, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Calendar,
  FileText,
  User,
  Mail,
  Phone
} from 'lucide-react';

const TimesheetSubmission = () => {
  const [selectedWeek, setSelectedWeek] = useState('2024-06-10');
  const [submissionNotes, setSubmissionNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const weeklySubmissions = [
    {
      weekId: '2024-06-10',
      week: 'Week of June 10, 2024',
      totalHours: 40,
      regularHours: 38,
      overtimeHours: 2,
      status: 'draft' as const,
      canSubmit: true,
      entries: 5,
      lastModified: '2024-06-11T10:30:00Z'
    },
    {
      weekId: '2024-06-03',
      week: 'Week of June 3, 2024',
      totalHours: 38.5,
      regularHours: 38.5,
      overtimeHours: 0,
      status: 'pending' as const,
      canSubmit: false,
      entries: 4,
      submittedDate: '2024-06-07T16:45:00Z'
    },
    {
      weekId: '2024-05-27',
      week: 'Week of May 27, 2024',
      totalHours: 42,
      regularHours: 40,
      overtimeHours: 2,
      status: 'approved' as const,
      canSubmit: false,
      entries: 5,
      approvedDate: '2024-06-03T09:15:00Z'
    },
    {
      weekId: '2024-05-20',
      week: 'Week of May 20, 2024',
      totalHours: 36,
      regularHours: 36,
      overtimeHours: 0,
      status: 'rejected' as const,
      canSubmit: true,
      entries: 4,
      rejectedDate: '2024-05-28T14:20:00Z',
      rejectionReason: 'Missing documentation for client visit on May 22nd'
    }
  ];

  const supervisorInfo = {
    name: 'Sarah Johnson',
    title: 'Operations Manager',
    email: 'sarah.johnson@cleansw.com',
    phone: '+1 (555) 123-4567'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'rejected':
        return 'destructive';
      case 'draft':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'rejected':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'draft':
        return <FileText className="h-4 w-4 text-gray-600" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const handleSubmit = async (weekId: string) => {
    setIsSubmitting(true);
    console.log('Submitting timesheet for week:', weekId);
    console.log('Submission notes:', submissionNotes);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionNotes('');
      console.log('Timesheet submitted successfully');
    }, 2000);
  };

  const selectedWeekData = weeklySubmissions.find(w => w.weekId === selectedWeek);

  return (
    <div className="space-y-6">
      {/* Submission Status Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm font-medium">Draft</p>
                <p className="text-2xl font-bold">
                  {weeklySubmissions.filter(w => w.status === 'draft').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Pending</p>
                <p className="text-2xl font-bold text-blue-600">
                  {weeklySubmissions.filter(w => w.status === 'pending').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Approved</p>
                <p className="text-2xl font-bold text-green-600">
                  {weeklySubmissions.filter(w => w.status === 'approved').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">Rejected</p>
                <p className="text-2xl font-bold text-red-600">
                  {weeklySubmissions.filter(w => w.status === 'rejected').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Submit New Timesheet */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Send className="h-5 w-5" />
            <span>Submit Timesheet</span>
          </CardTitle>
          <CardDescription>Submit your completed timesheet for approval</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Week Selection */}
            <div>
              <label className="text-sm font-medium mb-2 block">Select Week to Submit</label>
              <select
                value={selectedWeek}
                onChange={(e) => setSelectedWeek(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                {weeklySubmissions
                  .filter(w => w.canSubmit)
                  .map(week => (
                    <option key={week.weekId} value={week.weekId}>
                      {week.week} - {week.totalHours}h ({week.status})
                    </option>
                  ))}
              </select>
            </div>

            {/* Selected Week Details */}
            {selectedWeekData && (
              <div className="p-4 border rounded-lg bg-muted/25">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{selectedWeekData.week}</h4>
                  <Badge variant={getStatusColor(selectedWeekData.status) as any}>
                    {getStatusIcon(selectedWeekData.status)}
                    <span className="ml-1">{selectedWeekData.status}</span>
                  </Badge>
                </div>
                
                <div className="grid gap-2 md:grid-cols-3 text-sm">
                  <div>
                    <span className="font-medium">Total Hours:</span> {selectedWeekData.totalHours}h
                  </div>
                  <div>
                    <span className="font-medium">Regular:</span> {selectedWeekData.regularHours}h
                  </div>
                  <div>
                    <span className="font-medium">Overtime:</span> {selectedWeekData.overtimeHours}h
                  </div>
                </div>
                
                <div className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium">Entries:</span> {selectedWeekData.entries} time entries
                  {selectedWeekData.lastModified && (
                    <span className="ml-4">
                      <span className="font-medium">Last Modified:</span> {' '}
                      {new Date(selectedWeekData.lastModified).toLocaleString()}
                    </span>
                  )}
                </div>

                {selectedWeekData.status === 'rejected' && selectedWeekData.rejectionReason && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded">
                    <p className="text-sm text-red-800">
                      <span className="font-medium">Rejection Reason:</span> {selectedWeekData.rejectionReason}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Submission Notes */}
            <div>
              <label className="text-sm font-medium mb-2 block">Additional Notes (Optional)</label>
              <Textarea
                placeholder="Add any additional notes or explanations for your supervisor..."
                value={submissionNotes}
                onChange={(e) => setSubmissionNotes(e.target.value)}
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                onClick={() => selectedWeekData && handleSubmit(selectedWeekData.weekId)}
                disabled={!selectedWeekData?.canSubmit || isSubmitting}
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit for Approval
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Supervisor Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span>Supervisor Information</span>
          </CardTitle>
          <CardDescription>Your timesheet will be submitted to this supervisor for approval</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <User className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="font-medium">{supervisorInfo.name}</p>
                <p className="text-sm text-muted-foreground">{supervisorInfo.title}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{supervisorInfo.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{supervisorInfo.phone}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submission History */}
      <Card>
        <CardHeader>
          <CardTitle>Submission History</CardTitle>
          <CardDescription>Track the status of your previous timesheet submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklySubmissions.map(week => (
              <div key={week.weekId} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(week.status)}
                  <div>
                    <h4 className="font-medium">{week.week}</h4>
                    <div className="text-sm text-muted-foreground">
                      {week.totalHours}h total • {week.entries} entries
                      {week.overtimeHours > 0 && ` • ${week.overtimeHours}h overtime`}
                    </div>
                    {week.submittedDate && (
                      <div className="text-xs text-muted-foreground">
                        Submitted: {new Date(week.submittedDate).toLocaleString()}
                      </div>
                    )}
                    {week.approvedDate && (
                      <div className="text-xs text-green-600">
                        Approved: {new Date(week.approvedDate).toLocaleString()}
                      </div>
                    )}
                    {week.rejectedDate && (
                      <div className="text-xs text-red-600">
                        Rejected: {new Date(week.rejectedDate).toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={getStatusColor(week.status) as any}>
                    {week.status}
                  </Badge>
                  {week.canSubmit && week.status !== 'pending' && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedWeek(week.weekId)}
                    >
                      {week.status === 'rejected' ? 'Resubmit' : 'Submit'}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimesheetSubmission;
