import { formatarPreco } from '../../functions';
import { Product } from '../../types/product';
import { Button } from '../Button';
import { ProductSize } from '../ProductSize';
import style from './Products.module.scss';

interface ProductProps {
  products: Product[],
  addCart: (product: Product) => void,
  tag: string,
  title: string
}

export function Products({ products, addCart, tag, title }: ProductProps) {
  return (
    <section id="last-releases" className={style['product-list']}>
      <h2 className={style['product-list__title']}>{title}</h2>
      <ul className={style['product-list__list']}>
        {products.map((item) => {
          if (item.tag.includes(tag)) {
            return (
              <li key={item.id} className={style['product-list__item']}>
                <div className={style.item__details}>
                  <img src={item.imagens[0].url} alt={item.imagens[0].descricao} />
                  <ProductSize item={item} />
                </div>
                <div className={style.item__description}>
                  <h3 className={style.item__title}>{item.nome}</h3>
                  <p className={style.item__price}>{formatarPreco(item.preco, true)}</p>
                </div>
                <Button onClick={() => addCart(item)} label='POR NA SACOLA' />
              </li>
            );
          }
        }
        )}
      </ul>

    </section>
  );
}