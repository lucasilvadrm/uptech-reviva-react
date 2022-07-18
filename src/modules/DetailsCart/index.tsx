import CartTotal from "./components/CartTotal";
import { StyledWallet, WalletTitle } from "./styles";
import { useCart } from "contexts/CartContext";
import WalletList from "./components/ProductsInCart";

export const Wallet = () => {
  const { cart } = useCart();
  return (
    <StyledWallet>
      <WalletTitle>Minha Sacola</WalletTitle>
      <CartTotal />
      <WalletList products={cart} />
    </StyledWallet>
  );
};
