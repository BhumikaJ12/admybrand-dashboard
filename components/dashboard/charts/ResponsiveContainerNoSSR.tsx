'use client';

import dynamic from 'next/dynamic';
import type { ResponsiveContainerProps } from 'recharts';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { ComponentType } from 'react';

// Cast the dynamic import properly
const DynamicResponsiveContainer = dynamic(
  () =>
    import('recharts').then(
      (mod) =>
        mod.ResponsiveContainer as ComponentType<
          ResponsiveContainerProps & RefAttributes<HTMLDivElement>
        >
    ),
  { ssr: false }
);

export default DynamicResponsiveContainer;
