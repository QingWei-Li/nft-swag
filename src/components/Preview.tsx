import { Box, Button, Center, Flex } from '@chakra-ui/react';
import { useSwag } from '../utils/states/useSwag';
import { NftImage } from './NftImage';
import { Image } from './Image';
import { BuyButton } from './BuyButton';

export const Preview = () => {
  const { swag } = useSwag();
  const uri = swag?.productStyle?.uri[0];

  return (
    <Flex h="full" direction="column" p="4">
      <Center flex="1" position="relative">
        <Box
          position="absolute"
          zIndex="1"
          w={['35%', '200px']}
          h={['35%', '200px']}
        >
          {swag?.nft && <NftImage nft={swag?.nft} objectFit="contain" />}
        </Box>
        {uri && <Image src={uri} alt="white" width="600" height="600" />}
      </Center>
      <Center mb="10">
        <BuyButton />
      </Center>
    </Flex>
  );
};
