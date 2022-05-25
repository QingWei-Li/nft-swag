import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Preview } from '../components/Preview';
import { Selector } from '../components/Selector/Selector';

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
    >
      <Box w={['50%', '100%']} as="section">
        <Selector />
      </Box>
      <Box w={['50%', '100%']} as="section">
        <Preview />
      </Box>
    </Flex>
  );
};

export default Home;
