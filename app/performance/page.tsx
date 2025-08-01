"use client";

import { useState } from 'react';
import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { MetricCard } from '@/components/dashboard/metric-card';
import { RevenueChart } from '@/components/dashboard/charts/revenue-chart';
import { ChannelChart } from '@/components/dashboard/charts/channel-chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Target, Award, AlertTriangle } from 'lucide-react';
import { mockMetrics } from '@/lib/mock-data';

export default function PerformancePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const performanceMetrics = [
    { name: 'Conversion Rate', value: '4.2%', target: '5.0%', progress: 84, trend: 'up', change: '+0.3%' },
    { name: 'Cost Per Acquisition', value: '$45.20', target: '$40.00', progress: 88, trend: 'down', change: '-$2.10' },
    { name: 'Return on Ad Spend', value: '3.8x', target: '4.0x', progress: 95, trend: 'up', change: '+0.2x' },
    { name: 'Click-Through Rate', value: '5.23%', target: '6.0%', progress: 87, trend: 'up', change: '+0.15%' },
  ];

  const topPerformers = [
    { name: 'Summer Sale 2024', metric: 'Revenue', value: '$42,350', status: 'excellent' },
    { name: 'Brand Awareness Q1', metric: 'Impressions', value: '189,532', status: 'good' },
    { name: 'Product Launch', metric: 'Conversions', value: '634', status: 'warning' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <Award className="h-4 w-4 text-green-600" />;
      case 'good':
        return <TrendingUp className="h-4 w-4 text-blue-600" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default:
        return <Target className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'good':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto min-h-screen">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Performance 🚀</h1>
            <p className="text-muted-foreground">
              Track KPIs and measure success against your goals.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockMetrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>

          {/* Performance vs Goals */}
          <Card>
            <CardHeader>
              <CardTitle>Performance vs Goals</CardTitle>
              <CardDescription>Track your progress against set targets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{metric.name}</span>
                      <div className="flex items-center gap-2">
                        {metric.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                        <span className={`text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-2xl font-bold">{metric.value}</span>
                      <span className="text-muted-foreground">Target: {metric.target}</span>
                    </div>
                    <Progress value={metric.progress} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      {metric.progress}% of target achieved
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Performance Charts */}
            <RevenueChart />
            
            {/* Top Performers */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>Campaigns exceeding expectations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(performer.status)}
                      <div>
                        <div className="font-medium">{performer.name}</div>
                        <div className="text-sm text-muted-foreground">{performer.metric}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{performer.value}</div>
                      <Badge className={getStatusColor(performer.status)}>
                        {performer.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Channel Performance */}
          <ChannelChart />
        </main>
      </div>
    </div>
  );
}