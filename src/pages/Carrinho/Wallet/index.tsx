import { Product } from '../../../types/product';
import styles from './Wallet.module.scss';
import { WalletList } from './ProductsInCart';
import { CartTotal } from './CartTotal';

interface Props {
  cart: Product[]
}

export const Wallet = ({ cart }: Props) => {
  return (
    <section className={styles.wallet}>
      <h2 className={styles.wallet__title}>Minha Sacola</h2>
      <CartTotal cart={cart} />
      <WalletList products={cart} />
    </section>
  );
}