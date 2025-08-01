"use client";

import { useState } from 'react';
import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Clock, 
  Users, 
  Target,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function CalendarPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  const upcomingEvents = [
    {
      title: 'Q1 Campaign Launch',
      date: '2024-01-20',
      time: '10:00 AM',
      type: 'campaign',
      attendees: 8,
      status: 'confirmed'
    },
    {
      title: 'Monthly Performance Review',
      date: '2024-01-22',
      time: '2:00 PM',
      type: 'meeting',
      attendees: 12,
      status: 'confirmed'
    },
    {
      title: 'Client Presentation - Brand X',
      date: '2024-01-25',
      time: '11:30 AM',
      type: 'presentation',
      attendees: 6,
      status: 'pending'
    },
    {
      title: 'Holiday Campaign End',
      date: '2024-01-28',
      time: '11:59 PM',
      type: 'deadline',
      attendees: 0,
      status: 'scheduled'
    }
  ];

  const campaignSchedule = [
    {
      name: 'Summer Sale 2024',
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      status: 'active',
      budget: '$50,000'
    },
    {
      name: 'Brand Awareness Q1',
      startDate: '2024-01-20',
      endDate: '2024-03-31',
      status: 'scheduled',
      budget: '$75,000'
    },
    {
      name: 'Product Launch Campaign',
      startDate: '2024-02-01',
      endDate: '2024-02-28',
      status: 'scheduled',
      budget: '$100,000'
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'campaign':
        return <Target className="h-4 w-4 text-blue-600" />;
      case 'meeting':
        return <Users className="h-4 w-4 text-green-600" />;
      case 'presentation':
        return <Users className="h-4 w-4 text-purple-600" />;
      case 'deadline':
        return <Clock className="h-4 w-4 text-red-600" />;
      default:
        return <CalendarIcon className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Confirmed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Pending</Badge>;
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Scheduled</Badge>;
      case 'active':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Active</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto min-h-screen">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Calendar 📅</h1>
              <p className="text-muted-foreground">
                Manage your campaigns, meetings, and important deadlines.
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Event
            </Button>
          </div>

          {/* Calendar Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <p className="text-sm text-muted-foreground mt-1">Scheduled events</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">3</div>
                <p className="text-sm text-muted-foreground mt-1">Currently running</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600">5</div>
                <p className="text-sm text-muted-foreground mt-1">Next 30 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Team Meetings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">12</div>
                <p className="text-sm text-muted-foreground mt-1">This month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Your scheduled events and meetings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      {getEventIcon(event.type)}
                      <div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{formatDate(event.date)}</span>
                          <span>•</span>
                          <span>{event.time}</span>
                          {event.attendees > 0 && (
                            <>
                              <span>•</span>
                              <span>{event.attendees} attendees</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(event.status)}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Campaign Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Schedule</CardTitle>
                <CardDescription>Active and upcoming campaign timelines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {campaignSchedule.map((campaign, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{campaign.name}</h3>
                      {getStatusBadge(campaign.status)}
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>Start: {formatDate(campaign.startDate)}</span>
                        <span className="font-medium text-foreground">{campaign.budget}</span>
                      </div>
                      <div>End: {formatDate(campaign.endDate)}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Mini Calendar View */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>January 2024</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    Today
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-8">
                <CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Interactive calendar view coming soon</p>
                <p className="text-sm">Full calendar integration with drag-and-drop scheduling</p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}