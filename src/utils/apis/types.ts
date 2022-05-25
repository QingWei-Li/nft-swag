export interface TokenUri {
  raw: string;
  gateway: string;
}

export interface NftContract {
  address: string;
}

export interface NftId {
  tokenId: string;
}

export interface BaseNft {
  contract: NftContract;
  id: NftId;
  balance: string;
}

/**
 * Only part of the NFT data that is returned by the Alchemy API
 * Modified from https://github.com/alchemyplatform/alchemy-web3/blob/master/src/alchemy-apis/types.ts
 * Response data: https://docs.alchemy.com/alchemy/enhanced-apis/nft-api/getnfts#response-by-default
 */
export interface Nft extends BaseNft {
  title: string;
  description: string;
  media?: TokenUri[];
  timeLastUpdated: string;
  error?: string;
  tokenUri?: TokenUri;
}
