
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
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
  );
};

export default TestimonialsSection;
