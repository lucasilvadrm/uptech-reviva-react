import styles from './Wallet.module.scss';
import { WalletList } from './ProductsInCart';
import { CartTotal } from './CartTotal';
import { useRecoilValue } from 'recoil';
import { cartState } from 'state/atom';

export const Wallet = () => {
  const cart = useRecoilValue(cartState);
  return (
    <section className={styles.wallet}>
      <h2 className={styles.wallet__title}>Minha Sacola</h2>
      <CartTotal cart={cart} />
      <WalletList products={cart} />
    </section>
  );
}