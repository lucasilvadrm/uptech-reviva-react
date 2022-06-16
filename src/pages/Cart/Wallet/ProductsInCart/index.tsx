import { Product } from 'types/product';
import { ProductItem } from './ProductItem';
import styles from './WalletList.module.scss';

interface Props {
  products: Product[] | null;
}

export const WalletList = ({ products }: Props) => {

  return (
    <ul className={styles.wallet__list}>
      {products ? products.map(item => {
        return (
          <ProductItem key={item.descricao} itemCart={item} />
        );
      }) : <ul></ul>}
    </ul>
  );
}