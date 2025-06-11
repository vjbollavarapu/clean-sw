
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { 
  Plus, 
  Clock, 
  Calendar, 
  MapPin, 
  FileText, 
  Save,
  Trash2,
  Play,
  Pause,
  Timer
} from 'lucide-react';

const TimesheetEntry = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [currentTimer, setCurrentTimer] = useState('00:00:00');
  const [timeEntries, setTimeEntries] = useState([
    {
      id: '1',
      date: '2024-06-11',
      startTime: '09:00',
      endTime: '17:00',
      breakTime: 1,
      project: 'Office Cleaning - ABC Corp',
      location: 'Downtown Office',
      description: 'Regular office cleaning and maintenance',
      status: 'saved'
    },
    {
      id: '2',
      date: '2024-06-10',
      startTime: '08:30',
      endTime: '16:30',
      breakTime: 0.5,
      project: 'Window Cleaning - XYZ Ltd',
      location: 'Corporate Building',
      description: 'Window cleaning service',
      status: 'saved'
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    date: new Date().toISOString().split('T')[0],
    startTime: '',
    endTime: '',
    breakTime: 0,
    project: '',
    location: '',
    description: ''
  });

  const toggleTimer = () => {
    setIsTracking(!isTracking);
    console.log(isTracking ? 'Timer stopped' : 'Timer started');
  };

  const calculateHours = (start: string, end: string, breakTime: number) => {
    if (!start || !end) return 0;
    const startDate = new Date(`2000-01-01T${start}`);
    const endDate = new Date(`2000-01-01T${end}`);
    const diffMs = endDate.getTime() - startDate.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    return Math.max(0, diffHours - breakTime);
  };

  const handleAddEntry = () => {
    if (newEntry.startTime && newEntry.endTime && newEntry.project) {
      const entry = {
        id: Date.now().toString(),
        ...newEntry,
        status: 'saved' as const
      };
      setTimeEntries([entry, ...timeEntries]);
      setNewEntry({
        date: new Date().toISOString().split('T')[0],
        startTime: '',
        endTime: '',
        breakTime: 0,
        project: '',
        location: '',
        description: ''
      });
      console.log('Time entry added:', entry);
    }
  };

  const handleDeleteEntry = (id: string) => {
    setTimeEntries(timeEntries.filter(entry => entry.id !== id));
    console.log('Time entry deleted:', id);
  };

  return (
    <div className="space-y-6">
      {/* Live Timer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Timer className="h-5 w-5" />
            <span>Live Timer</span>
          </CardTitle>
          <CardDescription>Track your current work session in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <Clock className="h-6 w-6 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Current Session</p>
                <p className="text-3xl font-mono font-bold">{currentTimer}</p>
              </div>
            </div>
            <Button
              onClick={toggleTimer}
              variant={isTracking ? 'destructive' : 'default'}
              size="lg"
            >
              {isTracking ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  Stop
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Start
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Manual Entry Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Add Time Entry</span>
          </CardTitle>
          <CardDescription>Manually add a time entry for your work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={newEntry.date}
                onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project">Project/Task</Label>
              <Input
                id="project"
                placeholder="e.g., Office Cleaning - ABC Corp"
                value={newEntry.project}
                onChange={(e) => setNewEntry({ ...newEntry, project: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="startTime">Start Time</Label>
              <Input
                id="startTime"
                type="time"
                value={newEntry.startTime}
                onChange={(e) => setNewEntry({ ...newEntry, startTime: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endTime">End Time</Label>
              <Input
                id="endTime"
                type="time"
                value={newEntry.endTime}
                onChange={(e) => setNewEntry({ ...newEntry, endTime: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="breakTime">Break Time (hours)</Label>
              <Input
                id="breakTime"
                type="number"
                step="0.5"
                min="0"
                value={newEntry.breakTime}
                onChange={(e) => setNewEntry({ ...newEntry, breakTime: parseFloat(e.target.value) || 0 })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="e.g., Downtown Office"
                value={newEntry.location}
                onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="Brief description of work performed"
                value={newEntry.description}
                onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-muted-foreground">
              Total Hours: {calculateHours(newEntry.startTime, newEntry.endTime, newEntry.breakTime).toFixed(2)}h
            </div>
            <Button onClick={handleAddEntry} disabled={!newEntry.startTime || !newEntry.endTime || !newEntry.project}>
              <Save className="mr-2 h-4 w-4" />
              Add Entry
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Entries */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Time Entries</CardTitle>
          <CardDescription>Your latest time entries for this week</CardDescription>
        </CardHeader>
        <CardContent>
          {timeEntries.length > 0 ? (
            <div className="space-y-4">
              {timeEntries.map(entry => (
                <div key={entry.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{new Date(entry.date).toLocaleDateString()}</span>
                        <Badge variant="outline">{entry.status}</Badge>
                      </div>
                      
                      <h4 className="font-semibold mb-1">{entry.project}</h4>
                      
                      <div className="grid gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{entry.startTime} - {entry.endTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{entry.location}</span>
                          </div>
                        </div>
                        
                        {entry.description && (
                          <div className="flex items-start space-x-1">
                            <FileText className="h-3 w-3 mt-0.5" />
                            <span>{entry.description}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="text-right">
                        <p className="font-bold text-lg">
                          {calculateHours(entry.startTime, entry.endTime, entry.breakTime).toFixed(2)}h
                        </p>
                        {entry.breakTime > 0 && (
                          <p className="text-xs text-muted-foreground">
                            -{entry.breakTime}h break
                          </p>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteEntry(entry.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">No time entries found. Add your first entry above.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TimesheetEntry;
