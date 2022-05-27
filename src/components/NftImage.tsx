import { Box, Spinner } from '@chakra-ui/react';
import { ImageProps } from 'next/image';
import { useNft } from 'use-nft';
import { Nft } from '../utils/apis/types';
import { Image } from './Image';

export const NftImage: React.FC<{ nft: Nft } & Omit<ImageProps, 'src'>> = ({
  nft: { contract, id },
  ...rest
}) => {
  const { nft } = useNft(contract.address, id.tokenId);

  if (!nft) {
    return (
      <Box pb="100%" position="relative">
        <Spinner position="absolute" m="auto" inset="0" />
      </Box>
    );
  }
  if (!nft.image) {
    return (
      <Box pb="100%" position="relative">
        <Box position="absolute" m="auto" inset="0">
          {nft.imageType}
        </Box>
      </Box>
    );
  }

  return <Image src={nft?.image} alt={nft.name} {...rest} />;
};
