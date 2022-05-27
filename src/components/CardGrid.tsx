import { Grid, GridProps } from '@chakra-ui/react';

export const CardGrid: React.FC<GridProps> = (props) => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={2}
      h="full"
      p="2"
      overflowY="auto"
      {...props}
    />
  );
};
