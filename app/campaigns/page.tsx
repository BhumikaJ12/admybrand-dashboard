"use client";

import { useState } from 'react';
import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { DataTable } from '@/components/dashboard/data-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Play, Pause, MoreHorizontal } from 'lucide-react';
import { mockTableData } from '@/lib/mock-data';

export default function CampaignsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeCampaigns = mockTableData.filter(campaign => campaign.status === 'active').length;
  const pausedCampaigns = mockTableData.filter(campaign => campaign.status === 'paused').length;
  const completedCampaigns = mockTableData.filter(campaign => campaign.status === 'completed').length;

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto min-h-screen">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Campaigns 🎯</h1>
              <p className="text-muted-foreground">
                Manage and monitor all your marketing campaigns.
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Campaign
            </Button>
          </div>

          {/* Campaign Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{mockTableData.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold text-green-600">{activeCampaigns}</div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    <Play className="h-3 w-3 mr-1" />
                    Running
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Paused</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-3xl font-bold text-yellow-600">{pausedCampaigns}</div>
                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    <Pause className="h-3 w-3 mr-1" />
                    Paused
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">{completedCampaigns}</div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common campaign management tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Play className="h-4 w-4 mr-2" />
                  Start All Paused
                </Button>
                <Button variant="outline" size="sm">
                  <Pause className="h-4 w-4 mr-2" />
                  Pause Low Performers
                </Button>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="h-4 w-4 mr-2" />
                  Bulk Edit
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Campaigns Table */}
          <DataTable />
        </main>
      </div>
    </div>
  );
}