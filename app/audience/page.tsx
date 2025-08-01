"use client";

import { useState } from 'react';
import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DeviceChart } from '@/components/dashboard/charts/device-chart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, MapPin, Clock, Smartphone } from 'lucide-react';

export default function AudiencePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const audienceSegments = [
    { name: 'New Visitors', count: '45,231', percentage: 65, color: 'bg-blue-500' },
    { name: 'Returning Users', count: '28,456', percentage: 35, color: 'bg-green-500' },
    { name: 'High-Value Customers', count: '12,847', percentage: 18, color: 'bg-purple-500' },
    { name: 'Mobile Users', count: '52,193', percentage: 71, color: 'bg-orange-500' },
  ];

  const topLocations = [
    { country: 'United States', users: '28,456', percentage: 38 },
    { country: 'United Kingdom', users: '15,234', percentage: 21 },
    { country: 'Canada', users: '12,847', percentage: 17 },
    { country: 'Australia', users: '8,923', percentage: 12 },
    { country: 'Germany', users: '6,745', percentage: 9 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto min-h-screen">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Audience 👥</h1>
            <p className="text-muted-foreground">
              Understand your audience demographics and behavior patterns.
            </p>
          </div>

          {/* Audience Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">847,231</div>
                <p className="text-sm text-muted-foreground mt-1">+8.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">New Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">45,231</div>
                <p className="text-sm text-muted-foreground mt-1">65% of total traffic</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Avg. Session Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">4m 32s</div>
                <p className="text-sm text-muted-foreground mt-1">+12% improvement</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Bounce Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600">32.4%</div>
                <p className="text-sm text-muted-foreground mt-1">-5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Audience Segments */}
            <Card>
              <CardHeader>
                <CardTitle>Audience Segments</CardTitle>
                <CardDescription>User categorization and engagement levels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {audienceSegments.map((segment, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{segment.name}</span>
                      <Badge variant="secondary">{segment.count}</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${segment.color}`}
                        style={{ width: `${segment.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Device Breakdown */}
            <DeviceChart />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Top Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Top Locations
                </CardTitle>
                <CardDescription>Geographic distribution of your audience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topLocations.map((location, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-6 bg-muted rounded flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </div>
                        <span className="font-medium">{location.country}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{location.users}</div>
                        <div className="text-sm text-muted-foreground">{location.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* User Behavior */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  User Behavior
                </CardTitle>
                <CardDescription>How users interact with your content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium">Pages per Session</div>
                    <div className="text-sm text-muted-foreground">Average page views</div>
                  </div>
                  <div className="text-2xl font-bold">3.2</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium">Return Visitor Rate</div>
                    <div className="text-sm text-muted-foreground">Users coming back</div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">35%</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium">Mobile Traffic</div>
                    <div className="text-sm text-muted-foreground">Mobile device usage</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">71%</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}