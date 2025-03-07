"use client";

import '../i18n';

import * as React from 'react';

import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import {
  usePathname,
  useRouter,
} from 'next/navigation';

import { serverPath } from '@/config/site';
import { HeroUIProvider } from '@heroui/system';

const DynamicLayout = dynamic(() => import('./dynamicLayout'), { ssr: false })

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isclient = React.useMemo(()=>!serverPath.includes(pathname),[pathname])

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        {
          isclient ? <DynamicLayout>{children}</DynamicLayout> : children 
        }
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
