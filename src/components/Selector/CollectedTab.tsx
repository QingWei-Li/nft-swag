import { Grid, GridItem } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { useNfts } from '../../utils/apis/useNfts';
import { useSwag } from '../../utils/states/useSwag';
import { CardGrid } from '../CardGrid';
import { Collected } from '../Collected';
import { Loading } from '../Loading';

export const CollectedTab = () => {
  const account = useAccount();

  if (account.isFetching) {
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
  const { setSwag, swag } = useSwag();
  const nfts = useNfts('0xE36bC99a803AD3E096B4Dc8FDE747d739efc593f');

  if (!nfts.data) {
    return <Loading />;
  }

  const selectedId = `${swag?.nft?.contract.address}${swag?.nft?.id.tokenId}`;

  return (
    <CardGrid>
      {nfts.data.ownedNfts.map((nft) => {
        const key = `${nft.contract.address}${nft.id.tokenId}`;

        return (
          <GridItem key={key}>
            <Collected
              nft={nft}
              selected={selectedId === key}
              onClick={() =>
                setSwag({
                  nft
                })
              }
            />
          </GridItem>
        );
      })}
    </CardGrid>
  );
};
