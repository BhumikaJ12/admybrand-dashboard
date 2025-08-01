"use client";

import { useState } from 'react';
import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Calendar, 
  Clock, 
  Share2, 
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';

export default function ReportsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const reportTemplates = [
    {
      name: 'Monthly Performance Report',
      description: 'Comprehensive overview of monthly metrics and KPIs',
      icon: BarChart3,
      frequency: 'Monthly',
      lastGenerated: '2024-01-15',
      status: 'ready'
    },
    {
      name: 'Campaign Analysis Report',
      description: 'Detailed analysis of individual campaign performance',
      icon: Target,
      frequency: 'Weekly',
      lastGenerated: '2024-01-12',
      status: 'ready'
    },
    {
      name: 'Audience Insights Report',
      description: 'Demographics and behavior analysis of your audience',
      icon: Users,
      frequency: 'Bi-weekly',
      lastGenerated: '2024-01-10',
      status: 'generating'
    },
    {
      name: 'Revenue Analytics Report',
      description: 'Financial performance and revenue attribution analysis',
      icon: TrendingUp,
      frequency: 'Monthly',
      lastGenerated: '2024-01-08',
      status: 'ready'
    },
    {
      name: 'Channel Performance Report',
      description: 'Cross-channel performance comparison and optimization',
      icon: PieChart,
      frequency: 'Weekly',
      lastGenerated: '2024-01-14',
      status: 'ready'
    }
  ];

  const recentReports = [
    {
      name: 'Q4 2023 Performance Summary',
      type: 'Quarterly Report',
      generatedDate: '2024-01-02',
      size: '2.4 MB',
      downloads: 12
    },
    {
      name: 'Holiday Campaign Analysis',
      type: 'Campaign Report',
      generatedDate: '2024-01-01',
      size: '1.8 MB',
      downloads: 8
    },
    {
      name: 'December Audience Insights',
      type: 'Audience Report',
      generatedDate: '2023-12-31',
      size: '3.1 MB',
      downloads: 15
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ready':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Ready</Badge>;
      case 'generating':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Generating</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto min-h-screen">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Reports 📊</h1>
              <p className="text-muted-foreground">
                Generate and manage comprehensive analytics reports.
              </p>
            </div>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Create Custom Report
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">47</div>
                <p className="text-sm text-muted-foreground mt-1">Generated this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Scheduled Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">12</div>
                <p className="text-sm text-muted-foreground mt-1">Automated reports</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">284</div>
                <p className="text-sm text-muted-foreground mt-1">Total downloads</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Shared Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">18</div>
                <p className="text-sm text-muted-foreground mt-1">Shared with team</p>
              </CardContent>
            </Card>
          </div>

          {/* Report Templates */}
          <Card>
            <CardHeader>
              <CardTitle>Report Templates</CardTitle>
              <CardDescription>Pre-configured reports for common analytics needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reportTemplates.map((template, index) => {
                  const Icon = template.icon;
                  return (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <Icon className="h-8 w-8 text-blue-600" />
                        {getStatusBadge(template.status)}
                      </div>
                      <h3 className="font-semibold mb-2">{template.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          {template.frequency}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          Last: {template.lastGenerated}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" className="flex-1">
                          <Download className="h-3 w-3 mr-1" />
                          Generate
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>Your recently generated reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">{report.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{report.type}</span>
                          <span>•</span>
                          <span>{report.generatedDate}</span>
                          <span>•</span>
                          <span>{report.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-muted-foreground">
                        {report.downloads} downloads
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}