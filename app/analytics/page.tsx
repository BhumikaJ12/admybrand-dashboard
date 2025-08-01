"use client";

import { useState } from 'react';
import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RevenueChart } from '@/components/dashboard/charts/revenue-chart';
import { ChannelChart } from '@/components/dashboard/charts/channel-chart';
import { DeviceChart } from '@/components/dashboard/charts/device-chart';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Filter, TrendingUp } from 'lucide-react';

export default function AnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto min-h-screen">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Analytics 📈</h1>
              <p className="text-muted-foreground">
                Deep dive into your performance metrics and trends.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Date Range
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Key Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Top Performing Channel</CardTitle>
                <CardDescription>Highest revenue generator</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">Google Ads</div>
                <p className="text-sm text-muted-foreground mt-1">$45,000 revenue</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Growth Trend</CardTitle>
                <CardDescription>Month over month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-2xl font-bold text-green-600">+18.7%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Above target</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Best Converting Day</CardTitle>
                <CardDescription>Peak performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">Tuesday</div>
                <p className="text-sm text-muted-foreground mt-1">4.2% conversion rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <RevenueChart />
            <DeviceChart />
          </div>

          <ChannelChart />
        </main>
      </div>
    </div>
  );
}