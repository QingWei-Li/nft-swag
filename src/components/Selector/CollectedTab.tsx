import { Button, Center, Grid, GridItem } from '@chakra-ui/react';
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
  const { data, setSize, size, isValidating } = useNfts(address);

  if (!data) {
    return <Loading />;
  }
  const selectedId = `${swag?.nft?.asset_contract.address}${swag?.nft?.token_id}`;

  return (
    <CardGrid>
      {data.map((page) =>
        page.assets.map((nft) => {
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
        })
      )}
      {data[0].assets.length ? (
        <GridItem colSpan={2}>
          <Center>
            (
            <Button
              isLoading={isValidating}
              colorScheme="yellow"
              onClick={() => setSize(size + 1)}
              disabled={!data[size - 1]?.next}
            >
              Load More
            </Button>
            )
          </Center>
        </GridItem>
      ) : null}
    </CardGrid>
  );
};
