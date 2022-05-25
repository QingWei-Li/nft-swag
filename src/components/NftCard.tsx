import { Nft } from '../utils/apis/types';
import { Image } from './Image';

export const NftCard: React.FC<Nft> = ({ media, title }) => {
  const uri = media?.[0]?.gateway;

  return <div>{uri && <Image src={uri} alt={title} />}</div>;
};
