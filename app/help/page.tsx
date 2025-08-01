"use client";

import { useState } from 'react';
import { Header } from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, BookOpen } from 'lucide-react';

export default function HelpPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto min-h-screen">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Help & Support 🆘</h1>
            <p className="text-muted-foreground">
              Get assistance and learn how to make the most of your dashboard.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Coming Soon</CardTitle>
              <CardDescription className="text-lg">
                Help center is being prepared
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Our comprehensive help center will include tutorials, FAQs, 
                troubleshooting guides, and direct support channels to help you 
                maximize your analytics insights.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <HelpCircle className="h-4 w-4" />
                <span>Expected release: Q2 2024</span>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}