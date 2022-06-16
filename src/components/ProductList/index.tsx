import { storageState } from 'state/atom';
import { useRecoilValue } from 'recoil';
import { Product } from 'types/product';
import { ProductListItem } from './ProductListItem';
import style from './Products.module.scss';

interface ProductProps {
  addCart: (product: Product) => void,
  tag: string,
  title: string
}

export function ProductList({ addCart, tag, title }: ProductProps) {

  const products = useRecoilValue(storageState);

  return (
    <section id="last-releases" className={style['product-list']}>
      <h2 className={style['product-list__title']}>{title}</h2>
      <ul className={style['product-list__list']}>
        {products.filter(item => item.tag.includes(tag))
          .map(itemFiltered => {
            return (<ProductListItem key={itemFiltered.id} item={itemFiltered} addCart={addCart} />);
          })}
      </ul>
    </section>
  );
}