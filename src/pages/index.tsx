import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Preview } from '../components/Preview';
import { Selector } from '../components/Selector/Selector';
import { ProductsStateProvider } from '../utils/states/useProducts';
import { SwagStateProvider } from '../utils/states/useSwag';

const Home: NextPage = () => {
  return (
    <Flex
      mt="2"
      as="main"
      flex="auto"
      direction={{
        base: 'column',
        md: 'row'
      }}
      overflow="hidden"
    >
      <SwagStateProvider>
        <Box w="100%" as="section" flex="1">
          <Preview />
        </Box>
        <Box w="100%" as="section" flex="1" overflow="hidden">
          <ProductsStateProvider>
            <Selector />
          </ProductsStateProvider>
        </Box>
      </SwagStateProvider>
    </Flex>
  );
};

export default Home;
