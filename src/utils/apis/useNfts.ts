import useSWR from 'swr';
import { Nft } from './types';
import { useFetcher } from './useFetcher';

interface GetNftsResponse {
  ownedNfts: Nft[];
}

export const useNfts = (address: string) => {
  const { fetcher } = useFetcher();
  const { data, error } = useSWR<GetNftsResponse>(
    `/getNFTs?owner=${address}`,
    fetcher
  );

  return { data, error };
};
