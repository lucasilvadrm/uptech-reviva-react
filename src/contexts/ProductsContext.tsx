import { Product } from 'types/product';
import { createContext, ReactNode, useContext, useState } from 'react';
import { storage } from 'data/storage';

type ProductsContextProps = {
  children: ReactNode
}

type PorductsContextType = {
  products: Product[],
  setProducts: (products: Product[]) => void
}

const initialValue = {
  products: [...storage],
  setProducts: () => { }
}

export const ProductsContext = createContext<PorductsContextType>(initialValue);
ProductsContext.displayName = 'Products';

const ProductProvider = ({ children }: ProductsContextProps) => {
  const [products, setProducts] = useState<Product[]>(initialValue.products);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProduct = () => {
  const context = useContext(ProductsContext);
  return context;
}

export {
  useProduct,
  ProductProvider
}