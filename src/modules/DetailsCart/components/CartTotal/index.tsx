import { useCart } from "contexts/CartContext";
import { formactPrice } from "functions";
import {
  StyledCartTotal,
  QuantityPrice,
  Total,
  TotalTitle,
  TotalValue,
  WalletButton,
} from "./styles";

const CartTotal = () => {
  const { cart, totalCart } = useCart();

  return (
    <StyledCartTotal>
      ''
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
    </StyledCartTotal>
  );
};

export default CartTotal;
