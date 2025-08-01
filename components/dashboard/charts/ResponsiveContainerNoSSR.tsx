'use client';

import dynamic from 'next/dynamic';
import {
  type ResponsiveContainerProps,
  type ResponsiveContainer as RechartsResponsiveContainer,
} from 'recharts';
import {
  type ForwardRefExoticComponent,
  type RefAttributes,
  type ReactNode,
} from 'react';

const DynamicResponsiveContainer = dynamic<
  ResponsiveContainerProps & { children: ReactNode }
>(
  () =>
    import('recharts').then(
      (mod) =>
        mod.ResponsiveContainer as ForwardRefExoticComponent<
          ResponsiveContainerProps & RefAttributes<RechartsResponsiveContainer>
        >
    ),
  { ssr: false }
);

export default function ResponsiveContainerNoSSR({
  children,
  ...props
}: ResponsiveContainerProps & { children: ReactNode }) {
  return <DynamicResponsiveContainer {...props}>{children}</DynamicResponsiveContainer>;
}
