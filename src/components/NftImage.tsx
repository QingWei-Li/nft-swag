import { Box, Spinner } from '@chakra-ui/react';
import { ImageProps } from 'next/image';
import { Nft } from '../utils/apis/types';
import { Image } from './Image';

export const NftImage: React.FC<{ nft: Nft } & Omit<ImageProps, 'src'>> = ({
  nft,
  ...rest
}) => {
  if (!nft) {
    return (
      <Box pb="100%" position="relative">
        <Spinner position="absolute" m="auto" inset="0" />
      </Box>
    );
  }
  if (!nft.image_url) {
    return (
      <Box pb="100%" position="relative">
        <Box position="absolute" m="auto" inset="0">
          {nft.name}
        </Box>
      </Box>
    );
  }

  return <Image src={nft?.image_url} alt={nft.name} {...rest} />;
};
