
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Calendar, 
  Users, 
  MapPin, 
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const InteractiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: "Schedule Creation",
      description: "Creating a new cleaning schedule for ABC Corporation",
      progress: 20,
      status: "in-progress"
    },
    {
      title: "Team Assignment",
      description: "AI automatically assigns optimal team based on location and skills",
      progress: 40,
      status: "pending"
    },
    {
      title: "Route Optimization",
      description: "Calculating most efficient route to minimize travel time",
      progress: 60,
      status: "pending"
    },
    {
      title: "Notification Sent",
      description: "Team members receive schedule on their mobile devices",
      progress: 80,
      status: "pending"
    },
    {
      title: "Schedule Complete",
      description: "New schedule is live and ready for execution",
      progress: 100,
      status: "pending"
    }
  ];

  const playDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= demoSteps.length - 1) {
          setIsPlaying(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="outline">
            Interactive Demo
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            See CleanSW in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how our AI-powered scheduling system creates and optimizes 
            cleaning schedules in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Smart Scheduling Demo
                </CardTitle>
                <CardDescription>
                  Experience our AI-powered scheduling system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-3">
                  <Button 
                    onClick={playDemo} 
                    disabled={isPlaying}
                    className="flex items-center gap-2"
                  >
                    <Play className="h-4 w-4" />
                    Start Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={resetDemo}
                    className="flex items-center gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </Button>
                </div>

                <div className="space-y-4">
                  {demoSteps.map((step, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        index <= currentStep 
                          ? 'bg-primary/5 border-primary/20' 
                          : 'bg-muted/30 border-border'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {index < currentStep ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : index === currentStep && isPlaying ? (
                          <AlertCircle className="h-5 w-5 text-primary animate-pulse" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                        )}
                        <h4 className="font-semibold">{step.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground ml-8">
                        {step.description}
                      </p>
                      {index <= currentStep && (
                        <div className="ml-8 mt-3">
                          <Progress 
                            value={index === currentStep ? step.progress : 100} 
                            className="h-2"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Team Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <span className="font-medium">Sarah Johnson</span>
                    <Badge variant="secondary">Team Lead</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <span className="font-medium">Mike Rodriguez</span>
                    <Badge variant="outline">Cleaner</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <span className="font-medium">Lisa Chen</span>
                    <Badge variant="outline">Cleaner</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Route Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Estimated time: 6.5 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Total distance: 24.3 miles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Route optimized for efficiency</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
