import useSWR from 'swr';
import { fetcher } from './fetcher';
import { Nft } from './types';

const baseURL = 'https://api.opensea.io/api/v1';
export const useNft = (address: string, tokenId: string) => {
  const swr = useSWR<Nft>(`${baseURL}/asset/${address}/${tokenId}/`, fetcher);

  return swr;
};
