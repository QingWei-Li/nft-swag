import useSWR from 'swr';
import { apiProxy } from '../proxy';
import { fetcher } from './fetcher';
import { Nft } from './types';

interface GetNftsResponse {
  assets: Nft[];
}

export const useNfts = (address: string) => {
  const { data, error } = useSWR<GetNftsResponse>(
    `https://api.opensea.io/api/v1/assets?owner=${address}`,
    fetcher
  );

  return { data, error };
};
