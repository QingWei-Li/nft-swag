import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

export interface CardItemProps extends BoxProps {
  selected?: boolean;
}

export const CardItem = React.forwardRef<HTMLDivElement, CardItemProps>(
  ({ selected, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        borderRadius="md"
        overflow="hidden"
        cursor="pointer"
        _hover={{
          borderColor: 'yellow.500'
        }}
        _active={{
          borderColor: 'yellow.700'
        }}
        border="4px"
        transition="all 0.2s"
        bg="yellow.50"
        borderColor={selected ? 'yellow.500' : 'black'}
        className="image-wrapper"
        {...props}
      />
    );
  }
);

CardItem.displayName = 'CardItem';
