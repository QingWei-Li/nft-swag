import { GridItem } from '@chakra-ui/react';
import React from 'react';
import { useProducts } from '../../utils/states/useProducts';
import { useSwag } from '../../utils/states/useSwag';
import { CardGrid } from '../CardGrid';
import { CardItem } from '../CardItem';
import { Image } from '../Image';

export const ProductTab = () => {
  const { products } = useProducts();
  const { swag, setSwag } = useSwag();

  return (
    <CardGrid>
      {products?.map((product) => (
        <GridItem key={product.id}>
          <CardItem
            onClick={() => {
              setSwag({ product });
            }}
            selected={product.id === swag?.product?.id}
            position="relative"
          >
            <Image src={product.styles[0].uri[0]} alt={product.name} />
            {/* <Center position="absolute" left="0" right="0" bottom="4">
              <Text>{product.name}</Text>
            </Center> */}
          </CardItem>
        </GridItem>
      ))}
    </CardGrid>
  );
};
