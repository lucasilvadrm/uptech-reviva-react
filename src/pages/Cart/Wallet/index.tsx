import WalletList from './ProductsInCart';
import CartTotal from './CartTotal';
import { StyledWallet, WalletTitle } from './styles';
import { useCart } from 'contexts/CartContext';

export const Wallet = () => {
  const { cart } = useCart();
  return (
    <StyledWallet>
      <WalletTitle>Minha Sacola</WalletTitle>
      <CartTotal />
      <WalletList products={cart} />
    </StyledWallet>
  );
}