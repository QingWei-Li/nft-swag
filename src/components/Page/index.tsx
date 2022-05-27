import { Container } from '@chakra-ui/layout';
import { Header } from '../Header';
import Head from 'next/head';
import { providers } from 'ethers';

import { NftProvider, FetcherDeclaration } from 'use-nft';
import { useFetcher } from '../../utils/apis/useFetcher';

const mainnetFetcher: FetcherDeclaration = [
  'ethers',
  {
    provider: new providers.AlchemyProvider(
      'mainnet',
      process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_KEY
    )
  }
];

const ropstenFetcher: FetcherDeclaration = [
  'ethers',
  {
    provider: new providers.AlchemyProvider(
      'ropsten',
      process.env.NEXT_PUBLIC_ALCHEMY_ROPSTEN_KEY
    )
  }
];

const NFtFetchers = {
  mainnet: mainnetFetcher,
  ropsten: ropstenFetcher
};

const jsonProxy = (url: string) =>
  `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;

export const Page: React.FC<any> = ({ children }) => {
  const { chain } = useFetcher();

  return (
    <>
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
        <NftProvider jsonProxy={jsonProxy} fetcher={NFtFetchers[chain]}>
          {children}
        </NftProvider>
      </Container>
    </>
  );
};
