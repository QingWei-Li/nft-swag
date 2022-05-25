import { Center, Grid, GridItem, Spinner } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { useNfts } from '../../utils/apis/useNfts';
import { Collected } from '../Collected';
import { Loading } from '../Loading';

export const CollectedTab = () => {
  const account = useAccount();

  if (account.isLoading) {
    return <Loading />;
  }
  if (!account.data?.address) {
    return <p>请先连接钱包</p>;
  }

  return <Inner address={account.data.address} />;
};

const Inner: React.FC<{
  address: string;
}> = ({ address }) => {
  const nfts = useNfts('0xbe548576d6795b011991F7c5d1A5eefb631a9aEA');

  if (!nfts.data) {
    return <Loading />;
  }

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={2} h="full" overflowY="auto">
      {nfts.data.ownedNfts.map((nft) => (
        <GridItem key={nft.contract.address + nft.id.tokenId}>
          <Collected {...nft} />
        </GridItem>
      ))}
    </Grid>
  );
};
