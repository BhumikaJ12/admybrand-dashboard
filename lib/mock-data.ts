export interface MetricData {
  id: string;
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  revenue?: number;
  users?: number;
  conversions?: number;
  date?: string;
}

export interface TableRow {
  id: string;
  campaign: string;
  impressions: number;
  clicks: number;
  conversions: number;
  revenue: number;
  ctr: number;
  cpc: number;
  status: 'active' | 'paused' | 'completed';
  date: string;
}

export const mockMetrics: MetricData[] = [
  {
    id: '1',
    title: 'Total Revenue',
    value: '$2,847,326',
    change: 12.5,
    trend: 'up',
    icon: 'DollarSign',
  },
  {
    id: '2',
    title: 'Active Users',
    value: '847,231',
    change: 8.3,
    trend: 'up',
    icon: 'Users',
  },
  {
    id: '3',
    title: 'Conversions',
    value: '23,847',
    change: -2.1,
    trend: 'down',
    icon: 'Target',
  },
  {
    id: '4',
    title: 'Growth Rate',
    value: '18.7%',
    change: 4.2,
    trend: 'up',
    icon: 'TrendingUp',
  },
];

export const mockLineChartData: ChartDataPoint[] = [
  { name: 'Jan', revenue: 43000, users: 24000, conversions: 2400 },
  { name: 'Feb', revenue: 52000, users: 29000, conversions: 2800 },
  { name: 'Mar', revenue: 61000, users: 32000, conversions: 3200 },
  { name: 'Apr', revenue: 58000, users: 31000, conversions: 3100 },
  { name: 'May', revenue: 67000, users: 35000, conversions: 3500 },
  { name: 'Jun', revenue: 73000, users: 38000, conversions: 3800 },
  { name: 'Jul', revenue: 81000, users: 42000, conversions: 4200 },
  { name: 'Aug', revenue: 76000, users: 40000, conversions: 4000 },
  { name: 'Sep', revenue: 84000, users: 44000, conversions: 4400 },
  { name: 'Oct', revenue: 91000, users: 47000, conversions: 4700 },
  { name: 'Nov', revenue: 87000, users: 45000, conversions: 4500 },
  { name: 'Dec', revenue: 95000, users: 49000, conversions: 4900 },
];

export const mockBarChartData: ChartDataPoint[] = [
  { name: 'Google Ads', value: 45000 },
  { name: 'Facebook', value: 38000 },
  { name: 'Instagram', value: 28000 },
  { name: 'LinkedIn', value: 22000 },
  { name: 'Twitter', value: 18000 },
  { name: 'YouTube', value: 32000 },
];

export const mockDonutChartData: ChartDataPoint[] = [
  { name: 'Desktop', value: 55, fill: '#3b82f6' },
  { name: 'Mobile', value: 35, fill: '#8b5cf6' },
  { name: 'Tablet', value: 10, fill: '#10b981' },
];

export const mockTableData: TableRow[] = [
  {
    id: '1',
    campaign: 'Summer Sale 2024',
    impressions: 245680,
    clicks: 12847,
    conversions: 847,
    revenue: 42350,
    ctr: 5.23,
    cpc: 3.29,
    status: 'active',
    date: '2024-01-15',
  },
  {
    id: '2',
    campaign: 'Brand Awareness Q1',
    impressions: 189532,
    clicks: 9876,
    conversions: 432,
    revenue: 28960,
    ctr: 5.21,
    cpc: 2.93,
    status: 'active',
    date: '2024-01-14',
  },
  {
    id: '3',
    campaign: 'Product Launch',
    impressions: 156789,
    clicks: 8456,
    conversions: 634,
    revenue: 38420,
    ctr: 5.39,
    cpc: 4.54,
    status: 'paused',
    date: '2024-01-13',
  },
  {
    id: '4',
    campaign: 'Holiday Special',
    impressions: 298745,
    clicks: 15678,
    conversions: 1247,
    revenue: 67890,
    ctr: 5.25,
    cpc: 4.33,
    status: 'completed',
    date: '2024-01-12',
  },
  {
    id: '5',
    campaign: 'Back to School',
    impressions: 145632,
    clicks: 7892,
    conversions: 456,
    revenue: 29870,
    ctr: 5.42,
    cpc: 3.78,
    status: 'active',
    date: '2024-01-11',
  },
];

export const generateRealtimeData = () => {
  const currentTime = new Date().toLocaleTimeString();
  return {
    revenue: Math.floor(Math.random() * 10000) + 40000,
    users: Math.floor(Math.random() * 5000) + 20000,
    conversions: Math.floor(Math.random() * 500) + 2000,
    timestamp: currentTime,
  };
};