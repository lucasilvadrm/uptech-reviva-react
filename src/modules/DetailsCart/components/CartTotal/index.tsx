import { useCart } from "contexts/CartContext";
import { formactPrice } from "functions";
import * as SC from "./styles";

const CartTotal = () => {
  const { cart, totalCart } = useCart();

  return (
    <SC.StyledCartTotal>
      <SC.Total>
        <SC.TotalTitle>Total</SC.TotalTitle>
        <SC.TotalValue>{totalCart()}</SC.TotalValue>
      </SC.Total>
      <SC.QuantityPrice>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <p>{`${item.quantidade_carrinho.toString()} x ${formactPrice(
                item.preco
              )}`}</p>
            </li>
          );
        })}
      </SC.QuantityPrice>
      <SC.WalletButton>Ir para pagamento</SC.WalletButton>
    </SC.StyledCartTotal>
  );
};

export default CartTotal;
