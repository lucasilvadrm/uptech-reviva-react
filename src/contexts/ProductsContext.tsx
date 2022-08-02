import { createContext, ReactNode, useContext, useState } from "react";
import { storage } from "data/storage";
import { Product } from "types/product";

type ProductsContextProps = {
  children: ReactNode;
};

type PorductsContextType = {
  products: Product[];
  urlThumb: string;
  setUrlThumb: (url: string) => void;
  setProducts: (products: Product[]) => void;
};

const initialValue = {
  products: [...storage],
  urlThumb: "",
  setUrlThumb: () => {},
  setProducts: () => {},
};

export const ProductsContext = createContext<PorductsContextType>(initialValue);
ProductsContext.displayName = "Products";

const ProductProvider = ({ children }: ProductsContextProps) => {
  const [products, setProducts] = useState<Product[]>(initialValue.products);
  const [urlThumb, setUrlThumb] = useState<string>(initialValue.urlThumb);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, setUrlThumb, urlThumb }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProduct = () => {
  const context = useContext(ProductsContext);
  return context;
};

export { useProduct, ProductProvider };
