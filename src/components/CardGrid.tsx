import { Grid, GridProps } from '@chakra-ui/react';

export const CardGrid: React.FC<GridProps> = (props) => {
  return (
    <Grid
      templateColumns={['repeat(3, 1fr)', 'repeat(2, 1fr)']}
      gap="6"
      h="full"
      p="2"
      overflowY="auto"
      {...props}
    />
  );
};
