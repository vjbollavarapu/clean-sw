import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Users, 
  Calendar, 
  Database, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Comprehensive HR tools for managing staff, schedules, and payroll with role-based access control."
    },
    {
      icon: Calendar,
      title: "Service Scheduling",
      description: "Advanced scheduling system to manage client appointments, assign teams, and track service completion."
    },
    {
      icon: Database,
      title: "Inventory Control",
      description: "Real-time inventory tracking, automated reordering, and supplier management for cleaning supplies."
    },
    {
      icon: Shield,
      title: "Client Management",
      description: "Complete client database with service history, preferences, and automated billing systems."
    },
    {
      icon: Settings,
      title: "Financial Analytics",
      description: "Detailed financial reporting, expense tracking, and profitability analysis for informed decisions."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Quality control checklists, client feedback systems, and performance monitoring tools."
    }
  ];

  const benefits = [
    "Increase operational efficiency by 40%",
    "Reduce administrative overhead",
    "Improve client satisfaction rates",
    "Streamline payroll and HR processes",
    "Real-time business insights",
    "Scalable for growing businesses"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Sparkle Clean Services",
      text: "CleanSW transformed our operations. We've seen a 35% increase in efficiency and our clients love the professional service tracking.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Pro Cleaning Solutions", 
      text: "The scheduling and inventory management features have saved us countless hours. Highly recommended for any cleaning business.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Green Clean Co",
      text: "Customer service is excellent and the system is intuitive. Our team adapted quickly and productivity has improved significantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/5 to-primary/10 py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="outline">
            #1 ERP Solution for Cleaning Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Streamline Your
            <span className="text-primary block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Cleaning Business</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            CleanSW is the comprehensive ERP solution designed specifically for cleaning service companies. 
            Manage employees, schedule services, track inventory, and grow your business with powerful analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="px-8 py-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-3 border-primary/30 text-primary hover:bg-primary/5">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Run Your Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From employee management to client billing, CleanSW provides all the tools 
              you need to operate efficiently and scale your cleaning service business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Transform Your Cleaning Business Operations
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of cleaning service companies that have revolutionized 
                their operations with CleanSW's comprehensive management platform.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional cleaning team using CleanSW"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Trusted by Cleaning Professionals
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers have to say about CleanSW
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your business size and needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="text-3xl font-bold text-primary">$49<span className="text-base text-muted-foreground">/month</span></div>
                <CardDescription>Perfect for small cleaning services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Up to 10 employees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Basic scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Client management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Email support</span>
                </div>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg">
              <CardHeader className="text-center">
                <Badge className="mx-auto mb-2">Most Popular</Badge>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="text-3xl font-bold text-primary">$99<span className="text-base text-muted-foreground">/month</span></div>
                <CardDescription>Ideal for growing cleaning businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Up to 50 employees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Advanced scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Inventory management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Financial analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Priority support</span>
                </div>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-primary">$199<span className="text-base text-muted-foreground">/month</span></div>
                <CardDescription>For large cleaning operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Unlimited employees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>All features included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Custom integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Dedicated support</span>
                </div>
                <Button className="w-full mt-6">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Cleaning Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of cleaning professionals who trust CleanSW to manage and grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="px-8 py-3">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-3">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">CleanSW</h3>
              <p className="text-muted-foreground mb-4">
                The complete ERP solution for cleaning service businesses.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1-800-CLEANSW</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mt-2">
                <Mail className="h-4 w-4" />
                <span>hello@cleansw.com</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Features</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Pricing</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Integrations</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">API</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Help Center</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Contact</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Training</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Community</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">About</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Careers</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Press</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Partners</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 CleanSW. All rights reserved. Built for cleaning professionals, by cleaning professionals.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
