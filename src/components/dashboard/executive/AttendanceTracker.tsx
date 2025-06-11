
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table';
import { CheckCircle, XCircle, Clock, Users } from 'lucide-react';

interface CleanerAttendance {
  id: string;
  name: string;
  location: string;
  scheduledTime: string;
  status: 'present' | 'absent' | 'late' | 'pending';
  checkInTime?: string;
}

const AttendanceTracker = () => {
  const [attendanceData, setAttendanceData] = useState<CleanerAttendance[]>([
    {
      id: '1',
      name: 'Maria Rodriguez',
      location: 'Downtown Office - Floor 1',
      scheduledTime: '08:00',
      status: 'present',
      checkInTime: '07:55'
    },
    {
      id: '2',
      name: 'James Wilson',
      location: 'Downtown Office - Floor 2',
      scheduledTime: '08:00',
      status: 'late',
      checkInTime: '08:15'
    },
    {
      id: '3',
      name: 'Ana Martinez',
      location: 'Warehouse District',
      scheduledTime: '09:00',
      status: 'present',
      checkInTime: '08:58'
    },
    {
      id: '4',
      name: 'David Chen',
      location: 'Uptown Branch',
      scheduledTime: '08:30',
      status: 'absent'
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      location: 'Downtown Office - Floor 3',
      scheduledTime: '08:00',
      status: 'pending'
    }
  ]);

  const updateAttendance = (cleanerId: string, status: CleanerAttendance['status']) => {
    setAttendanceData(prev => 
      prev.map(cleaner => 
        cleaner.id === cleanerId 
          ? { 
              ...cleaner, 
              status, 
              checkInTime: status === 'present' ? new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }) : cleaner.checkInTime
            }
          : cleaner
      )
    );
  };

  const getStatusBadge = (status: CleanerAttendance['status']) => {
    const variants = {
      present: { variant: 'default' as const, icon: CheckCircle, color: 'text-green-600' },
      absent: { variant: 'destructive' as const, icon: XCircle, color: 'text-red-600' },
      late: { variant: 'secondary' as const, icon: Clock, color: 'text-yellow-600' },
      pending: { variant: 'outline' as const, icon: Clock, color: 'text-gray-600' }
    };
    
    const config = variants[status];
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="h-3 w-3" />
        {status}
      </Badge>
    );
  };

  const attendanceSummary = {
    present: attendanceData.filter(c => c.status === 'present').length,
    absent: attendanceData.filter(c => c.status === 'absent').length,
    late: attendanceData.filter(c => c.status === 'late').length,
    pending: attendanceData.filter(c => c.status === 'pending').length
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="h-5 w-5 mr-2" />
          Daily Attendance Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-green-50 p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-green-600">{attendanceSummary.present}</div>
            <div className="text-xs text-green-600">Present</div>
          </div>
          <div className="bg-red-50 p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-red-600">{attendanceSummary.absent}</div>
            <div className="text-xs text-red-600">Absent</div>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-yellow-600">{attendanceSummary.late}</div>
            <div className="text-xs text-yellow-600">Late</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-gray-600">{attendanceSummary.pending}</div>
            <div className="text-xs text-gray-600">Pending</div>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cleaner</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Scheduled</TableHead>
                <TableHead>Check-in</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((cleaner) => (
                <TableRow key={cleaner.id}>
                  <TableCell className="font-medium">{cleaner.name}</TableCell>
                  <TableCell className="text-sm">{cleaner.location}</TableCell>
                  <TableCell>{cleaner.scheduledTime}</TableCell>
                  <TableCell>{cleaner.checkInTime || '-'}</TableCell>
                  <TableCell>{getStatusBadge(cleaner.status)}</TableCell>
                  <TableCell>
                    {cleaner.status === 'pending' && (
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateAttendance(cleaner.id, 'present')}
                          className="h-7 px-2 text-xs"
                        >
                          Present
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateAttendance(cleaner.id, 'absent')}
                          className="h-7 px-2 text-xs"
                        >
                          Absent
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceTracker;
