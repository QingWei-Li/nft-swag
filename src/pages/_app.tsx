import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Page } from '../components/Page';
import { theme } from '../styles/theme';
import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import { chain, createClient, WagmiConfig } from 'wagmi';
import { FetcherProvider } from '../utils/apis/useFetcher';

const { chains, provider } = configureChains(
  [
    chain.mainnet
    // TODO: not yet supported
    // chain.ropsten
  ],
  [
    apiProvider.alchemy(process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_KEY),
    apiProvider.fallback()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'NFT Swag',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FetcherProvider>
      <WagmiConfig client={wagmiClient}>
        <ChakraProvider theme={theme}>
          <RainbowKitProvider chains={chains} coolMode>
            <Page>
              <Component {...pageProps} />
            </Page>
          </RainbowKitProvider>
        </ChakraProvider>
      </WagmiConfig>
    </FetcherProvider>
  );
}

export default MyApp;
