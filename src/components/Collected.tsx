import { Box } from '@chakra-ui/react';
import React from 'react';
import { Nft } from '../utils/apis/types';
import { NftImage } from './NftImage';
import { useInView } from 'react-intersection-observer';
import { CardItem, CardItemProps } from './CardItem';

export const Collected: React.FC<CardItemProps & { nft: Nft }> = ({
  nft,
  ...rest
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <CardItem ref={ref} {...rest}>
      {inView ? <NftImage nft={nft} objectFit="contain" /> : <Box pb="100%" />}
    </CardItem>
  );
};
