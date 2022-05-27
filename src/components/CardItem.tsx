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
        transition="all 0.2s"
        _hover={{
          boxShadow: '2xl',
          transform: 'scale(1.05)'
        }}
        boxShadow="lg"
        bg="yellow.50"
        className="image-wrapper"
        {...props}
      />
    );
  }
);

CardItem.displayName = 'CardItem';
