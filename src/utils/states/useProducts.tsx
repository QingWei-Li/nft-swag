import React from 'react';

export interface ProductStyle {
  id: number;
  name: string;
  uri: string[];
}

export interface Product {
  id: number;
  name: string;
  price: string;
  styles: ProductStyle[];
}

export const useProducts = () => {
  const [products, setProducts] = React.useState<Product[]>();

  React.useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  return {
    products,
    setProducts
  };
};

const ProductsStateContext = React.createContext<
  ReturnType<typeof useProducts> | undefined
>(undefined);

export const ProductsStateProvider: React.FC<any> = ({ children }) => {
  const products = useProducts();

  return (
    <ProductsStateContext.Provider value={products}>
      {children}
    </ProductsStateContext.Provider>
  );
};
