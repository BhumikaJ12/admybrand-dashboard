'use client';

import dynamic from 'next/dynamic';
import { type ResponsiveContainerProps } from 'recharts';
import { type ForwardRefExoticComponent, type RefAttributes } from 'react';

const DynamicResponsiveContainer = dynamic<ResponsiveContainerProps>(
  () =>
    import('recharts').then(
      (mod) =>
        mod.ResponsiveContainer as ForwardRefExoticComponent<
          ResponsiveContainerProps & RefAttributes<HTMLDivElement>
        >
    ),
  { ssr: false }
);

export default DynamicResponsiveContainer;
