import { Product } from '../../types/product';
import style from './ProductSize.module.scss';

interface Props {
    item: Product,
}

export function ProductSize({ item }: Props) {
    return (
        <fieldset className={style.product__size}>
            {item.tamanhos_disponiveis.map((size, index) => {
                const sizeProduct = size.toLowerCase();
                return (
                    <div key={index}>
                        <input
                            className={style.size__input}
                            type="radio"
                            name={`select-size--product${item.id}`}
                            id={`size-${sizeProduct}${item.id}`}
                        />
                        <label
                            className={style.size__label}
                            htmlFor={`size-${sizeProduct}${item.id}`}>
                            {sizeProduct.toUpperCase()}
                        </label>
                    </div>
                );
            })}
        </fieldset>
    )
}