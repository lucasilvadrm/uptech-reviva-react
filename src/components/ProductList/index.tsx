import ProductListItem from "./ProductListItem";
import * as SC from "./styles";
import { useCallback } from "react";
import { Product } from "types/product";

interface ProductProps {
  tag?: string;
  title: string;
  random?: boolean;
  products: Product[];
}

const ProductList = ({
  tag,
  title,
  random = false,
  products,
}: ProductProps) => {
  
  const randomizeProduct = useCallback(() => {
    const productsRandom =
      products && products.sort(() => Math.random() - 0.5).slice(0, 4);

    return productsRandom;
  }, [products]);

  return (
    <SC.StyledProductList>
      <SC.Title>{title}</SC.Title>
      <SC.ListItems>
        {!random &&
          products
            .filter((item) => item.tag.includes(tag || ""))
            .map((itemFiltered) => (
              <ProductListItem key={itemFiltered.id} item={itemFiltered} />
            ))}
        {random &&
          randomizeProduct().map((product) => (
            <ProductListItem key={product.id} item={product} />
          ))}
      </SC.ListItems>
    </SC.StyledProductList>
  );
};

export default ProductList;
