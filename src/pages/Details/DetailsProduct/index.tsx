import { Product } from "types/product";
import ThumbList from "../ThumbList";
import { ProductSize } from "components/ProductSize";
import { ContainerBtnSize, ProductDescription, ProductDetails, ProductTitle } from "./styles";
import { formactPrice } from "functions";
import { Button } from "components/Button";

interface PropsProduct {
  product: Product
}

export default ({ product }: PropsProduct) => {
  return (
    <ProductDetails>
      <ProductTitle>{`${product.nome}, ${formactPrice(product.preco)}`}</ProductTitle>
      <ProductDescription>{product.descricao}</ProductDescription>
      <ThumbList id={product.id} />
      <ContainerBtnSize>
        <ProductSize item={product} />
        <Button onClick={() => {}}>
          POR NA SACOLA
        </Button>
      </ContainerBtnSize>
    </ProductDetails>
  );
}