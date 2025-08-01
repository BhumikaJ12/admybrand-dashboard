'use client';

import dynamic from 'next/dynamic';
import type { ResponsiveContainerProps } from 'recharts';

const DynamicResponsiveContainer = dynamic(
  async () => {
    const mod = await import('recharts');
    return mod.ResponsiveContainer;
  },
  { ssr: false }
);

// TypeScript workaround to use as JSX component
const ResponsiveContainerWrapper = (props: ResponsiveContainerProps) => {
  return <DynamicResponsiveContainer {...props} />;
};

export default ResponsiveContainerWrapper;
