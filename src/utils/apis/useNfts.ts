import useSWRInfinite from 'swr/infinite';
import { fetcher } from './fetcher';
import { Nft } from './types';

interface GetNftsResponse {
  assets: Nft[];
  next?: string;
}

const baseURL = 'https://api.opensea.io/api/v1';
export const useNfts = (address: string) => {
  const swr = useSWRInfinite<GetNftsResponse>((pageIndex, previousPageData) => {
    // reached the end
    if (previousPageData && !previousPageData.assets) return null;

    // first page, we don't have `previousPageData`
    if (pageIndex === 0) return `${baseURL}/assets?owner=${address}`;

    return `${baseURL}/assets?owner=${address}&cursor=${previousPageData.next}`;
  }, fetcher);

  return swr;
};
