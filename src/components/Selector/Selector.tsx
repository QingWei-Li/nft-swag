import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { CollectedAttributeTab } from './CollectedAttributeTab';
import { CollectedTab } from './CollectedTab';
import { ProductTab } from './ProductTab';
import { ProductStyleTab } from './ProductStyleTab';
import { useSwag } from '../../utils/states/useSwag';
import React from 'react';
import { useProducts } from '../../utils/states/useProducts';
import { RemoveBackgroundTab } from './RemoveBackgroundTab';

const TAB_LIST = [
  {
    label: '藏品',
    panel: <CollectedTab />
  },
  {
    label: '商品',
    panel: <ProductTab />
  },
  // {
  //   label: '填充',
  //   panel: <ProductStyleTab />
  // },

  // {
  //   label: '去背景',
  //   panel: <RemoveBackgroundTab />
  // },
  {
    label: '款式',
    panel: <ProductStyleTab />
  }
];

export const Selector = () => {
  const { products } = useProducts();
  const { setSwag } = useSwag();

  React.useEffect(() => {
    if (products) {
      const product = products[0];

      setSwag({
        product: product,
        productStyle: product.styles[0]
      });
    }
  }, [products, setSwag]);

  return (
    <Box bg="yellow.200" borderTopRadius="3xl" p="2" h="full">
      <Tabs
        variant="soft-rounded"
        h="full"
        display="flex"
        flexDirection="column"
        colorScheme="yellow"
      >
        <TabList mb="2">
          {TAB_LIST.map((tab, index) => (
            <Tab
              key={index}
              _focus={{
                boxShadow: 'none'
              }}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels flex="1" overflow="hidden">
          {TAB_LIST.map((tab, index) => (
            <TabPanel key={index} h="full" p="0">
              {tab.panel}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};
