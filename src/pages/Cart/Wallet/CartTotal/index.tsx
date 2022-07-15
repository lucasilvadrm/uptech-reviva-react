import { useCart } from "contexts/CartContext";
import { formactPrice } from "functions";
import { Product } from "types/product";
import {
  CartTotal,
  QuantityPrice,
  Total,
  TotalTitle,
  TotalValue,
  WalletButton,
} from "./styles";

interface Props {
  cart: Product[];
}

export default () => {
  const { cart, totalCart } = useCart();

  return (
    <CartTotal>
      <Total>
        <TotalTitle>Total</TotalTitle>
        <TotalValue>{totalCart()}</TotalValue>
      </Total>
      <QuantityPrice>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <p>{`${item.quantidade_carrinho.toString()} x ${formactPrice(
                item.preco
              )}`}</p>
            </li>
          );
        })}
      </QuantityPrice>
      <WalletButton>Ir para pagamento</WalletButton>
    </CartTotal>
  );
};
