import { Button } from "components/Button";
import { ProductSize } from "components/ProductSize";
import { formatarPreco } from "functions";
import { Product } from "types/product";
import styles from './ProductListItem.module.scss';

interface PropsProductItem {
  item: Product,
  addCart: (product: Product) => void,
}

export const ProductListItem = ({ item, addCart }: PropsProductItem) => {

  return (
    <li key={item.id} className={styles['product-list__item']}>
      <div className={styles.item__details}>
        <img
          onClick={() => console.log('clicou produto', item.id)}
          src={item.imagens[0].url}
          alt={item.imagens[0].descricao}
        />
        <ProductSize item={item} />
      </div>
      <div className={styles.item__description}>
        <h3 className={styles.item__title}>{item.nome}</h3>
        <p className={styles.item__price}>{formatarPreco(item.preco, true)}</p>
      </div>
      <Button onClick={() => addCart(item)} label='POR NA SACOLA' />
    </li>
  );
}