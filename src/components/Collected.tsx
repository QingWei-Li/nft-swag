import { Box } from '@chakra-ui/react';
import { Nft } from '../utils/apis/types';
import { Image } from './Image';

export const Collected: React.FC<Nft> = ({ media, title }) => {
  const uri = media?.[0]?.gateway;

  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      cursor="pointer"
      _hover={{
        shadow: 'xl',
        transition: 'all 0.2s'
      }}
      bg="gray.100"
    >
      {uri && (
        <Image src={uri} alt={title} objectFit="contain" layout="responsive" />
      )}
    </Box>
  );
};
