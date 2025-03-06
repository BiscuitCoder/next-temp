'use client'
import '@rainbow-me/rainbowkit/styles.css';

import { useTheme } from 'next-themes';
import { WagmiProvider } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
} from 'wagmi/chains';

import {
  darkTheme,
  getDefaultConfig,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const config = getDefaultConfig({
  appName: process.env.NEXT_PUBLIC_WALLET_APP_NAME || '',
  projectId: process.env.NEXT_PUBLIC_WALLET_PROJECT_ID || '',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();
const WalletProvider = ({children}:{children: React.ReactNode}) => {

  const { theme } = useTheme();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={theme === 'dark' ? darkTheme() : lightTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
export default WalletProvider;