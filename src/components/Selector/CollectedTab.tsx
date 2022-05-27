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
  const nfts = useNfts('0x85e59a136696fa544714eb32625f2f56f3b1c96d');

  if (!nfts.data) {
    return <Loading />;
  }

  const selectedId = `${swag?.nft?.asset_contract.address}${swag?.nft?.token_id}`;

  return (
    <CardGrid>
      {nfts.data.assets.map((nft) => {
        const key = `${nft.asset_contract.address}${nft.token_id}`;

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
