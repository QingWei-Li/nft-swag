import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { CollectedAttributeTab } from './CollectedAttributeTab';
import { CollectedTab } from './CollectedTab';
import { ProductTab } from './ProductTab';
import { StyleTab } from './StyleTab';

export const Selector = () => {
  return (
    <Box bg="gray.200" borderTopRadius="3xl" p="2" h="full">
      <Tabs variant="line" h="full" display="flex" flexDirection="column">
        <TabList>
          <Tab>你的藏品</Tab>
          <Tab>藏品属性</Tab>
          <Tab>商品</Tab>
          <Tab>样式</Tab>
        </TabList>
        <TabPanels flex="1" overflow="hidden">
          <TabPanel h="full">
            <CollectedTab />
          </TabPanel>
          <TabPanel h="full">
            <CollectedAttributeTab />
          </TabPanel>
          <TabPanel h="full">
            <ProductTab />
          </TabPanel>
          <TabPanel h="full">
            <StyleTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
