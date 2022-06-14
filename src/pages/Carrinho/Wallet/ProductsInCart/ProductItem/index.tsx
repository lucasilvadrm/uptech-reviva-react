import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { ProductSize } from '../../../../../components/ProductSize';
import { formatarPreco } from '../../../../../functions';
import { subtotalState } from '../../../../../state/atom';
import { Product } from '../../../../../types/product';
import styles from './ProductItem.module.scss';

interface Props {
  itemCart: Product;
}

export const ProductItem = ({ itemCart }: Props) => {

  const [quantityValue, setQuantityValue] = useState(itemCart.quantidade_carrinho);
  const [subtotal, setSubtotal] = useState((itemCart.preco * itemCart.quantidade_carrinho));
  // const [subtotal, setSubtotal] = useRecoilState(subtotalState);


  useEffect(() => {
    setSubtotal(quantityValue * itemCart.preco);
  }, [quantityValue])

  return (
    <li className={styles.wallet__item}>
      <div className={styles.detail__thumb}>
        <img src={itemCart.imagens[0].url} alt={itemCart.imagens[0].descricao} />
      </div>
      <div className={styles.detail__name}>
        <h3 className={styles.detail__title}>Produto</h3>
        <p className={styles.detail__description}>{itemCart.nome}</p>
      </div>
      <div className={styles.detail__size}>
        <h3 className={styles.detail__title}>Tamanho escolhido</h3>
        <ProductSize item={itemCart} />
      </div>
      <div className={styles.detail__price}>
        <h3 className={styles.detail__title}>Valor</h3>
        <p className={styles.detail__value}>{`${formatarPreco(itemCart.preco, true)}`}</p>
      </div>
      <div className={styles.detail__quantity}>
        <h3 className={styles.detail__title}>Quantidade</h3>
        <input
          onChange={(e) => setQuantityValue(Number(e.target.value))}
          className={styles.detail__input}
          type="number"
          name={`quantity${itemCart.id}`}
          id={`quantity${itemCart.id}`}
          value={quantityValue}
          min="1"
          max={itemCart.quantidade_disponivel}
        />
      </div>
      <div className={styles.detail__subtotal}>
        <h3 className={styles.detail__title}>Subtotal</h3>
        <p className={styles.detail__value}>{formatarPreco(subtotal, true)}</p>
      </div>
    </li>
  )
} 