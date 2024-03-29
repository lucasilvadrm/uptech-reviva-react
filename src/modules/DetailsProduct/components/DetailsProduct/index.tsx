import { Product } from "types/product";
import ThumbList from "../ThumbList";
import { ProductSize } from "components/ProductSize";
import * as SC from "./styles";
import { formactPrice } from "functions";
import Button from "components/Button";
import { useCart } from "contexts/CartContext";

interface ProductProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductProps) => {
  const { addProductInCart } = useCart();

  return (
    <SC.StyledProductDetails>
      <SC.ProductTitle>{`${product.nome}, ${formactPrice(
        product.preco
      )}`}</SC.ProductTitle>
      <SC.ProductDescription>{product.descricao}</SC.ProductDescription>
      <ThumbList id={product.id} />
      <SC.ContainerBtnSize>
        <ProductSize item={product} />
        <Button
          onClick={() => addProductInCart(product)}
          unavailable={product.quantidade_disponivel <= 0}
        >
          POR NA SACOLA
        </Button>
      </SC.ContainerBtnSize>
    </SC.StyledProductDetails>
  );
};

export default ProductDetails;
