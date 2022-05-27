import React from 'react';
import { Nft } from '../apis/types';
import { Product, ProductStyle } from './useProducts';

export interface Swag {
  nft?: Nft;
  product?: Product;
  productStyle?: ProductStyle;
}

const useSwagState = () => {
  const [swag, setSwag] = React.useState<Swag>();

  const handleSetSwag = React.useCallback((data: Partial<Swag>) => {
    setSwag((draft) => {
      if (draft) {
        return {
          ...draft,
          ...data
        };
      }

      return data;
    });
  }, []);

  return {
    swag,
    setSwag: handleSetSwag
  };
};

export const useSwag = () => React.useContext(SwagStateContext);

const SwagStateContext = React.createContext<ReturnType<typeof useSwagState>>(
  {} as ReturnType<typeof useSwagState>
);

export const SwagStateProvider: React.FC<any> = ({ children }) => {
  const swag = useSwagState();

  return (
    <SwagStateContext.Provider value={swag}>
      {children}
    </SwagStateContext.Provider>
  );
};
