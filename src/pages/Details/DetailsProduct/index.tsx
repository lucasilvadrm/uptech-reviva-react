import { Product } from "types/product";
import ThumbList from "../ThumbList";
import { ProductSize } from "components/ProductSize";
import { ProductButton, ProductDescription, ProductDetails, ProductTitle } from "./styles";

interface PropsProduct {
  product: Product
}

export default ({ product }: PropsProduct) => {
  return (
    <ProductDetails>
      <ProductTitle>{`${product.nome}, ${product.preco}`}</ProductTitle>
      <ProductDescription>{product.descricao}</ProductDescription>
      <ThumbList id={product.id} />
      <div>
        <ProductSize item={product} />
        <ProductButton>
          POR NA SACOLA
          <i aria-label="ícone sacola de compras" className="fa-solid fa-bag-shopping icon__purchase"></i>
        </ProductButton>
      </div>
    </ProductDetails>
  );
}