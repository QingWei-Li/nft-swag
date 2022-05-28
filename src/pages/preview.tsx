import { Box, Button, Center, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { NftImage } from '../components/NftImage';
import { Image } from '../components/Image';
import { useRouter } from 'next/router';
import { useProducts } from '../utils/states/useProducts';
import { useNft } from '../utils/apis/useNft';
import { BuyButton } from '../components/BuyButton';

const PreviewPage: NextPage = () => {
  const router = useRouter();
  const { products } = useProducts();
  const productStyleId = router.query.style as string;
  const address = router.query.address as string;
  const tokenId = router.query.token as string;
  const productId = router.query.product as string;
  const { data } = useNft(address, tokenId);

  const productStyle = products
    ?.find((product) => product.id.toString() === productId)
    ?.styles.find((style) => style.id.toString() === productStyleId);

  return (
    <Flex
      w="fit-content"
      m="auto"
      flex="1"
      justifyItems="center"
      alignItems="center"
    >
      <Center position="relative">
        <Box
          position="absolute"
          zIndex="1"
          w={['35%', '200px']}
          h={['35%', '200px']}
        >
          {data && <NftImage nft={data} objectFit="contain" />}
        </Box>
        {productStyle?.uri && (
          <Image
            src={productStyle.uri[0]}
            alt="white"
            width="600"
            height="600"
          />
        )}
      </Center>
    </Flex>
  );
};

export default PreviewPage;
