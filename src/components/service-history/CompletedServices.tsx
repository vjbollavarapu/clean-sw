
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Calendar, MapPin, Star, Download, Search, Filter } from 'lucide-react';

const CompletedServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const completedServices = [
    {
      id: 1,
      type: 'Office Cleaning',
      date: '2024-06-10',
      location: 'Main Office - Floor 3',
      duration: '3.5 hours',
      team: ['John Smith', 'Sarah Johnson'],
      rating: 5,
      amount: 250,
      invoice: 'INV-2024-001',
      feedback: 'Excellent service, very thorough cleaning'
    },
    {
      id: 2,
      type: 'Deep Cleaning',
      date: '2024-06-08',
      location: 'Conference Room A',
      duration: '2 hours',
      team: ['Mike Wilson'],
      rating: 4,
      amount: 180,
      invoice: 'INV-2024-002',
      feedback: 'Good job, arrived on time'
    },
    {
      id: 3,
      type: 'Carpet Cleaning',
      date: '2024-06-05',
      location: 'Reception Area',
      duration: '4 hours',
      team: ['Alex Chen'],
      rating: 5,
      amount: 320,
      invoice: 'INV-2024-003',
      feedback: 'Outstanding results, carpets look brand new'
    },
    {
      id: 4,
      type: 'Window Cleaning',
      date: '2024-06-02',
      location: 'Building A - Exterior',
      duration: '5 hours',
      team: ['Maria Garcia', 'Tom Brown'],
      rating: 4,
      amount: 400,
      invoice: 'INV-2024-004',
      feedback: 'Professional service, windows are spotless'
    },
    {
      id: 5,
      type: 'Office Cleaning',
      date: '2024-05-28',
      location: 'Main Office - All Floors',
      duration: '6 hours',
      team: ['John Smith', 'Sarah Johnson', 'Mike Wilson'],
      rating: 5,
      amount: 450,
      invoice: 'INV-2024-005',
      feedback: 'Comprehensive cleaning, very satisfied'
    }
  ];

  const filteredServices = completedServices.filter(service => {
    const matchesSearch = service.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || service.type.toLowerCase().includes(filterType.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < rating 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Completed Services</h2>
        <Badge variant="outline">{filteredServices.length} Services</Badge>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="office">Office Cleaning</SelectItem>
                <SelectItem value="deep">Deep Cleaning</SelectItem>
                <SelectItem value="carpet">Carpet Cleaning</SelectItem>
                <SelectItem value="window">Window Cleaning</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date (Newest)</SelectItem>
                <SelectItem value="date-old">Date (Oldest)</SelectItem>
                <SelectItem value="amount">Amount (High to Low)</SelectItem>
                <SelectItem value="rating">Rating (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Services Table */}
      <Card>
        <CardHeader>
          <CardTitle>Service History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service Details</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{service.type}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {service.location}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      {formatDate(service.date)}
                    </div>
                  </TableCell>
                  <TableCell>{service.duration}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {service.team.slice(0, 2).join(', ')}
                      {service.team.length > 2 && ` +${service.team.length - 2}`}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      {renderStars(service.rating)}
                      <span className="text-sm ml-1">({service.rating})</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {formatCurrency(service.amount)}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Invoice
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

export default CompletedServices;
