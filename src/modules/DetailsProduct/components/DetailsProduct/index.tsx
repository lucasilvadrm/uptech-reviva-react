import { Product } from "types/product";
import ThumbList from "../ThumbList";
import { ProductSize } from "components/ProductSize";
import * as SC from "./styles";
import { formactPrice } from "functions";
import { Button } from "components/Button";
import { useCart } from "contexts/CartContext";

interface PropsProduct {
  product: Product;
}

const ProductDetails = ({ product }: PropsProduct) => {

  const { addProductInCart } = useCart();
  const verify = product.quantidade_carrinho === product.quantidade_disponivel

  return (
    <SC.StyledProductDetails>
      <SC.ProductTitle>{`${product.nome}, ${formactPrice(
        product.preco
      )}`}</SC.ProductTitle>
      <SC.ProductDescription>{product.descricao}</SC.ProductDescription>
      <ThumbList id={product.id} />
      <SC.ContainerBtnSize>
        <ProductSize item={product} />
        <Button quantity={product.quantidade_disponivel} onClick={() => addProductInCart(product)}>
        {verify ? 'INDISPONÍVEL' : `POR NA SACOLA`}
      </Button>
      </SC.ContainerBtnSize>
    </SC.StyledProductDetails>
  );
};

export default ProductDetails;
