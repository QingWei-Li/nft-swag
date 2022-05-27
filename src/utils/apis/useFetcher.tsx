import React from 'react';

export const useFetcher = () => {
  const [chain, setChain] = React.useState<'mainnet' | 'ropsten'>('mainnet');
  let chainPrefix = '';
  let key = '';

  switch (chain) {
    case 'mainnet':
      chainPrefix = 'eth-mainnet';
      key = process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_KEY as string;
      break;
    case 'ropsten':
    default:
      chainPrefix = 'eth-ropsten';
      key = process.env.NEXT_PUBLIC_ALCHEMY_ROPSTEN_KEY as string;
      break;
  }

  const fetcher = (path: string) =>
    fetch(`https://${chainPrefix}.alchemyapi.io/v2/${key}${path}`).then((r) =>
      r.json()
    );

  return {
    setChain,
    fetcher,
    chain
  };
};

const FetcherContext = React.createContext<
  ReturnType<typeof useFetcher> | undefined
>(undefined);

export const FetcherProvider: React.FC<any> = ({ children }) => {
  const fetcher = useFetcher();

  return (
    <FetcherContext.Provider value={fetcher}>
      {children}
    </FetcherContext.Provider>
  );
};
