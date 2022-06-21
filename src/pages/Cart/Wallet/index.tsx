import WalletList from './ProductsInCart';
import CartTotal from './CartTotal';
import { useRecoilValue } from 'recoil';
import { cartState } from 'state/atom';
import { StyledWallet, WalletTitle } from './styles';

export const Wallet = () => {
  const cart = useRecoilValue(cartState);
  return (
    <StyledWallet>
      <WalletTitle>Minha Sacola</WalletTitle>
      <CartTotal cart={cart} />
      <WalletList products={cart} />
    </StyledWallet>
  );
}