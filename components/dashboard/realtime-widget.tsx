"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Zap } from 'lucide-react';
import { generateRealtimeData } from '@/lib/mock-data';

// Static placeholder data to prevent hydration mismatch
const placeholderData = {
  revenue: 0,
  users: 0,
  conversions: 0,
  timestamp: 'Loading...'
};
export function RealtimeWidget() {
  const [realtimeData, setRealtimeData] = useState(placeholderData);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    // Initialize with actual data after component mounts
    setRealtimeData(generateRealtimeData());

    const interval = setInterval(() => {
      if (isLive) {
        setRealtimeData(generateRealtimeData());
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Live Data</CardTitle>
          <Badge variant="secondary" className="text-xs">
            <Activity className="h-3 w-3 mr-1 animate-pulse" />
            Live
          </Badge>
        </div>
        <CardDescription>Real-time performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Current Revenue</span>
            <span className="font-semibold">${realtimeData.revenue.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Active Users</span>
            <span className="font-semibold">{realtimeData.users.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Conversions</span>
            <span className="font-semibold">{realtimeData.conversions.toLocaleString()}</span>
          </div>
          <div className="pt-2 border-t text-xs text-muted-foreground flex items-center gap-1">
            <Zap className="h-3 w-3" />
            Last updated: {realtimeData.timestamp}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}