export interface NftContract {
  address: string;
  name: string;
  asset_contract_type: string;
}

export interface Nft {
  id: string;
  token_id: string;
  asset_contract: NftContract;
  image_url: string;
  name: string;
  description: string;
}
