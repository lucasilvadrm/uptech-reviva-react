import { useRecoilValue } from 'recoil';
import { formatarPreco } from '../../../functions';
import { Product } from '../../../types/product';
import styles from './Wallet.module.scss';
import { WalletList } from './WalletList';

interface Props {
  cart: Product[]
}

export const Wallet = ({ cart }: Props) => {
  return (
    <section className={styles.wallet}>
      <h2 className={styles.wallet__title}>Minha Sacola</h2>
      <article className={styles['cart-total']}>
        <div className={styles.total}>
          <h3 className={styles.total__title}>Total</h3>
          <p className={styles.total__value}>R$ 0,00</p>
        </div>
        <ul className={styles['quantity-price']}>
          {cart.map(item => {
            return (
              <li key={item.id}>
                <p>{`${item.quantidade_carrinho.toString()} x ${formatarPreco(item.preco, true)}`}</p>
              </li>
            );
          })}
        </ul>
        <button className={styles.wallet__button}>
          Ir para pagamento
        </button>
      </article>
      <WalletList products={cart} />
    </section>
  );
}