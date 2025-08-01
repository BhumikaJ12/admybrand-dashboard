"use client";

import { useState } from 'react';
import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Wrench } from 'lucide-react';

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto min-h-screen">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Settings ⚙️</h1>
            <p className="text-muted-foreground">
              Configure your dashboard preferences and account settings.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Coming Soon</CardTitle>
              <CardDescription className="text-lg">
                Settings panel is under development
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                We're working hard to bring you comprehensive settings management. 
                This feature will include account preferences, notification settings, 
                data export options, and more.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Settings className="h-4 w-4" />
                <span>Expected release: Q2 2024</span>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}