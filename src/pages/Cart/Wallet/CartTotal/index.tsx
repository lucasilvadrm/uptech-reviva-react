import { useRecoilValue } from 'recoil';
import { formatarPreco } from 'functions';
import { subtotalState } from 'state/atom';
import { Product } from 'types/product';
import styles from './CartTotal.module.scss';

interface Props {
  cart: Product[]
}

export const CartTotal = ({ cart }: Props) => {
  const subTotal = useRecoilValue(subtotalState);

  console.log('teste subtotal', subTotal);
  return (
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
  );
} 