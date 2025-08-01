"use client";

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, DollarSign, Users, Target } from 'lucide-react';
import { MetricData } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  metric: MetricData;
  className?: string;
}

const iconMap = {
  DollarSign,
  Users,
  Target,
  TrendingUp,
};

export function MetricCard({ metric, className }: MetricCardProps) {
  const Icon = iconMap[metric.icon as keyof typeof iconMap] || TrendingUp;
  const TrendIcon = metric.trend === 'up' ? TrendingUp : metric.trend === 'down' ? TrendingDown : Minus;
  
  return (
    <Card className={cn("transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-border/50", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="text-sm font-medium text-muted-foreground">
          {metric.title}
        </div>
        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{metric.value}</div>
        <div className="flex items-center gap-2 mt-2">
          <Badge 
            variant={metric.trend === 'up' ? 'default' : metric.trend === 'down' ? 'destructive' : 'secondary'}
            className={`text-xs font-medium ${
              metric.trend === 'up' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                : metric.trend === 'down' 
                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                : ''
            }`}
          >
            <TrendIcon className="h-3 w-3 mr-1" />
            {Math.abs(metric.change)}%
          </Badge>
          <span className="text-xs text-muted-foreground font-medium">
            vs last month
          </span>
        </div>
      </CardContent>
    </Card>
  );
}