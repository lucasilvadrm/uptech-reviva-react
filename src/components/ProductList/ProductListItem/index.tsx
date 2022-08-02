import Button from "components/Button";
import { ProductSize } from "components/ProductSize";
import { formactPrice } from "functions";
import { Product } from "types/product";
import { useNavigate } from "react-router-dom";
import {
  StyledProductListItem,
  ItemDetails,
  ItemDescription,
  ItemPrice,
  ItemTitle,
} from "./styles";
import { useCart } from "contexts/CartContext";

interface PropsProductItem {
  item: Product;
}

const ProductListItem = ({ item }: PropsProductItem) => {
  const { addProductInCart } = useCart();

  const navigate = useNavigate();

  const { id, imagens, nome, preco } = item;

  function redirectDetail(product: Product) {
    navigate(`/details/${product.id}`, { state: { product } });
  }

  return (
    <StyledProductListItem key={id}>
      <ItemDetails>
        <img
          onClick={() => redirectDetail(item)}
          src={`../${imagens[0].url}`}
          alt={imagens[0].descricao}
        />
        <ProductSize item={item} />
      </ItemDetails>
      <ItemDescription>
        <ItemTitle>{nome}</ItemTitle>
        <ItemPrice>{formactPrice(preco)}</ItemPrice>
      </ItemDescription>
      <Button
        onClick={() => addProductInCart(item)}
        unavailable={item.quantidade_disponivel <= 0}
      >
        POR NA SACOLA
      </Button>
    </StyledProductListItem>
  );
};

export default ProductListItem;
