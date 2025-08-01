"use client";

import { useState } from 'react';
import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { MetricCard } from '@/components/dashboard/metric-card';
import { RevenueChart } from '@/components/dashboard/charts/revenue-chart';
import { ChannelChart } from '@/components/dashboard/charts/channel-chart';
import { DeviceChart } from '@/components/dashboard/charts/device-chart';
import { DataTable } from '@/components/dashboard/data-table';
import { RealtimeWidget } from '@/components/dashboard/realtime-widget';
import { mockMetrics } from '@/lib/mock-data';

export default function OverviewPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto min-h-screen">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Overview Dashboard 📊</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your campaigns today.
            </p>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockMetrics.map((metric) => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <RevenueChart />
            </div>
            <div className="space-y-6">
              <RealtimeWidget />
              <DeviceChart />
            </div>
          </div>

          {/* Channel Performance */}
          <ChannelChart />

          {/* Data Table */}
          <DataTable />
        </main>
      </div>
    </div>
  );
}