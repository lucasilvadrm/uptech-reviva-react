import { useEffect, useState } from "react";
import { ProductSize } from "components/ProductSize";
import { formactPrice } from "functions";
import { Product } from "types/product";
import * as SC from "./styles";
import { useCart } from "contexts/CartContext";

interface Props {
  itemCart: Product;
}

const ProductItem = ({ itemCart }: Props) => {
  const { updateProductInCart } = useCart();

  const [quantityValue, setQuantityValue] = useState(
    itemCart.quantidade_carrinho
  );
  const [subtotal, setSubtotal] = useState(
    itemCart.preco * itemCart.quantidade_carrinho
  );

  useEffect(() => {
    setSubtotal(quantityValue * itemCart.preco);
  }, [quantityValue, itemCart.preco]);

  const updateCart = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantityValue(+e.target.value);
    updateProductInCart(itemCart, +e.target.value);
  };

  return (
    <SC.WalletItem>
      <SC.DetailThumb>
        <img
          src={itemCart.imagens[0].url}
          alt={itemCart.imagens[0].descricao}
        />
      </SC.DetailThumb>
      <div>
        <SC.Name>Produto</SC.Name>
        <SC.Description>{itemCart.nome}</SC.Description>
      </div>
      <div>
        <SC.Name>Tamanho escolhido</SC.Name>
        <ProductSize item={itemCart} />
      </div>
      <div>
        <SC.Name>Valor</SC.Name>
        <SC.Description>{`${formactPrice(itemCart.preco)}`}</SC.Description>
      </div>
      <div>
        <SC.Name>Quantidade</SC.Name>
        <SC.DetailInput
          data-testid="test-input"
          onChange={updateCart}
          type="number"
          name={`quantity${itemCart.id}`}
          id={`quantity${itemCart.id}`}
          value={quantityValue}
          min="1"
          max={itemCart.quantidade_disponivel}
        />
      </div>
      <div>
        <SC.Name>Subtotal</SC.Name>
        <SC.Description>{formactPrice(subtotal)}</SC.Description>
      </div>
    </SC.WalletItem>
  );
};

export default ProductItem;
