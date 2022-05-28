import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useClipboard,
  Center,
  useMediaQuery
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSwag } from '../utils/states/useSwag';

export const BuyButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [url, setUrl] = React.useState('');
  const { hasCopied, onCopy } = useClipboard(url);
  const { swag } = useSwag();

  const [isDesktop] = useMediaQuery('(min-width: 960px)');

  const handleOnCopy = () => {
    const search = new URLSearchParams({
      style: swag?.productStyle?.id.toString() ?? '',
      address: swag?.nft?.asset_contract.address ?? '',
      token: swag?.nft?.token_id ?? '',
      product: swag?.product?.id.toString() ?? ''
    });
    setUrl(`${location.origin}/preview?${search.toString()}`);
  };

  React.useEffect(() => {
    if (url) {
      onCopy();
    }
  }, [url]);

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody my="4">
            <Center flexDirection="column">
              <Button colorScheme="yellow" onClick={handleOnCopy}>
                {hasCopied ? '已复制' : '复制链接'}
              </Button>
              <Button mt="2" colorScheme="yellow">
                <Link
                  target="_blank"
                  href={
                    isDesktop
                      ? 'https://m.tb.cn/h.ftXu5bo?tk=3zRj2lglOa6'
                      : 'fleamarket://item?id=675720307064'
                  }
                >
                  闲鱼下单
                </Link>
              </Button>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Button onClick={onOpen} w="200px" colorScheme="yellow">
        购买
      </Button>
    </>
  );
};
