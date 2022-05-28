import { Container } from '@chakra-ui/layout';
import { Header } from '../Header';
import Head from 'next/head';
import {
  apiProvider,
  configureChains,
  darkTheme,
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import { chain, createClient, WagmiConfig } from 'wagmi';
import { useColorMode } from '@chakra-ui/react';

const { chains, provider } = configureChains(
  [
    chain.mainnet
    // TODO: not yet supported
    // chain.ropsten
  ],
  [apiProvider.fallback()]
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

export const BaseLayout: React.FC<any> = ({ children }) => {
  const { colorMode } = useColorMode();
  console.log(colorMode);
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={
          colorMode === 'light'
            ? lightTheme({
                ...lightTheme.accentColors.orange
              })
            : darkTheme({
                ...darkTheme.accentColors.orange
              })
        }
      >
        <Head>
          <title>NFT Swag</title>
          <meta name="description" content="NFT Swag" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container
          maxW="container.xl"
          h="100vh"
          display="flex"
          flexDirection="column"
          overflow="hidden"
        >
          <Header />
          {children}
        </Container>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
