import { Box, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react';
import { WalletButton } from '../WalletButton';

export const Header = () => {
  return (
    <Flex py="2" alignItems="center" as="header">
      <Box>
        <Heading fontSize="2xl">NFT Swag</Heading>
      </Box>
      <Spacer />
      <ButtonGroup>
        <WalletButton />
      </ButtonGroup>
    </Flex>
  );
};
