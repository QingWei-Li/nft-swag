import { Box, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { WalletButton } from '../WalletButton';

export const Header = () => {
  return (
    <Flex py="2" alignItems="center" as="header">
      <Box>
        <Link href="/" passHref>
          <a>
            <Heading fontFamily="monospace" fontSize="2xl">
              NFT Swag
            </Heading>
          </a>
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup>
        <WalletButton />
      </ButtonGroup>
    </Flex>
  );
};
