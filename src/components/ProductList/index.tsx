import ProductListItem from "./ProductListItem";
import { ListItems, StyledProductList, Title } from "./styles";
import { useProduct } from "contexts/ProductsContext";

interface ProductProps {
  tag?: string;
  title: string;
  random?: boolean;
}

export function ProductList({ tag, title, random = false }: ProductProps) {
  const { products } = useProduct();
  const productsRandom = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <StyledProductList>
      <Title>{title}</Title>
      <ListItems>
        {!random
          ? products
              .filter((item) => item.tag.includes(tag || ""))
              .map((itemFiltered) => (
                <ProductListItem key={itemFiltered.id} item={itemFiltered} />
              ))
          : productsRandom.map((product) => (
              <ProductListItem key={product.id} item={product} />
            ))}
      </ListItems>
    </StyledProductList>
  );
}
