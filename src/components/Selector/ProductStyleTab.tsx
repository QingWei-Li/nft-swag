import { GridItem } from '@chakra-ui/react';
import React from 'react';
import { useSwag } from '../../utils/states/useSwag';
import { CardGrid } from '../CardGrid';
import { CardItem } from '../CardItem';
import { Image } from '../Image';

export const ProductStyleTab = () => {
  const { swag, setSwag } = useSwag();

  return (
    <CardGrid>
      {swag?.product?.styles.map((style) => (
        <GridItem key={style.id}>
          <CardItem
            onClick={() => {
              setSwag({ productStyle: style });
            }}
            selected={style.id === swag?.productStyle?.id}
            position="relative"
          >
            <Image src={style.uri[0]} alt={style.name} />
          </CardItem>
        </GridItem>
      ))}
    </CardGrid>
  );
};
