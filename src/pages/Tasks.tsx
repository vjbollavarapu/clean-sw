
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  ListTodo, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Calendar,
  MapPin,
  DollarSign,
  Filter
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useEmployeeData } from '../hooks/useEmployeeData';

const Tasks = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('all');
  const { myTasks } = useEmployeeData(user?.id || '');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'default';
      case 'in-progress':
        return 'secondary';
      case 'pending':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-orange-600" />;
      default:
        return <ListTodo className="h-4 w-4 text-gray-600" />;
    }
  };

  const filterTasks = (status?: string) => {
    if (!status || status === 'all') return myTasks;
    return myTasks.filter(task => task.status === status);
  };

  const taskStats = {
    total: myTasks.length,
    pending: myTasks.filter(t => t.status === 'pending').length,
    inProgress: myTasks.filter(t => t.status === 'in-progress').length,
    completed: myTasks.filter(t => t.status === 'completed').length
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Tasks</h1>
          <p className="text-muted-foreground">Manage your assigned service orders and tasks</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <ListTodo className="h-3 w-3 mr-1" />
            {taskStats.total} Total Tasks
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <ListTodo className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Total Tasks</p>
                <p className="text-2xl font-bold">{taskStats.total}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-sm font-medium">Pending</p>
                <p className="text-2xl font-bold text-orange-600">{taskStats.pending}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">In Progress</p>
                <p className="text-2xl font-bold text-blue-600">{taskStats.inProgress}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Completed</p>
                <p className="text-2xl font-bold text-green-600">{taskStats.completed}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Task Filters */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <TaskList tasks={filterTasks('all')} getStatusColor={getStatusColor} getStatusIcon={getStatusIcon} />
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <TaskList tasks={filterTasks('pending')} getStatusColor={getStatusColor} getStatusIcon={getStatusIcon} />
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          <TaskList tasks={filterTasks('in-progress')} getStatusColor={getStatusColor} getStatusIcon={getStatusIcon} />
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <TaskList tasks={filterTasks('completed')} getStatusColor={getStatusColor} getStatusIcon={getStatusIcon} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface TaskListProps {
  tasks: any[];
  getStatusColor: (status: string) => string;
  getStatusIcon: (status: string) => React.ReactNode;
}

const TaskList = ({ tasks, getStatusColor, getStatusIcon }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <ListTodo className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No tasks found in this category.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <Card key={task.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {getStatusIcon(task.status)}
                  <h3 className="font-semibold text-lg">{task.serviceType}</h3>
                  <Badge variant={getStatusColor(task.status) as any}>
                    {task.status.replace('-', ' ')}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Due: {new Date(task.scheduledDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{task.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>${task.amount.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm">
                    <span className="font-medium">Client:</span> {task.clientName}
                  </p>
                  
                  {task.notes && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Notes:</span> {task.notes}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                {task.status === 'pending' && (
                  <Button size="sm" onClick={() => console.log('Start task:', task.id)}>
                    Start Task
                  </Button>
                )}
                {task.status === 'in-progress' && (
                  <Button size="sm" onClick={() => console.log('Complete task:', task.id)}>
                    Mark Complete
                  </Button>
                )}
                <Button variant="outline" size="sm" onClick={() => console.log('View details:', task.id)}>
                  View Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Tasks;
