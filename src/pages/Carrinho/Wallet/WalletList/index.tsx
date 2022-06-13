import { ProductSize } from '../../../../components/ProductSize';
import { Product } from '../../../../types/product';
import styles from './WalletList.module.scss';

interface Props {
  products: Product[] | null;
}

export const WalletList = ({ products }: Props) => {
  return (
    <ul className={styles.wallet__list}>
      {products?.map(item => {
        return (
          <li key={item.id} className={styles.wallet__item}>
            <div className={styles.detail__thumb}>
              <img src={item.imagens[0].url} alt={item.imagens[0].descricao} />
            </div>
            <div className={styles.detail__name}>
              <h3 className={styles.detail__title}>Produto</h3>
              <p className={styles.detail__description}>{item.nome}</p>
            </div>
            <div className={styles.detail__size}>
              <h3 className={styles.detail__title}>Tamanho escolhido</h3>
              <ProductSize item={item} />
            </div>
            <div className={styles.detail__price}>
              <h3 className={styles.detail__title}>Valor</h3>
              <p className={styles.detail__value}>{item.preco}</p>
            </div>
            <div className={styles.detail__quantity}>
              <h3 className={styles.detail__title}>Quantidade</h3>
              <input
                className={styles.detail__input}
                type="number"
                name={`quantity${item.id}`}
                id={`quantity${item.id}`}
                value={item.quantidade_carrinho}
                min="1"
                max={item.quantidade_disponivel}
              />
            </div>
            <div className={styles.detail__subtotal}>
              <h3 className={styles.detail__title}>Subtotal</h3>
              <p className={styles.detail__value}>R$ 1399,30</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}