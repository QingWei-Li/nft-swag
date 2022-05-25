import { Container } from '@chakra-ui/layout';
import { Header } from '../Header';
import Head from 'next/head';

export const Page: React.FC<any> = ({ children }) => {
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
        {children}
      </Container>
    </>
  );
};
