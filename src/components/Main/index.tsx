import { Product } from '../../types/product';
import Banner from '../Banner';
import Blog from '../Blog';
import { Products } from '../Products';
import Search from '../Search';
import style from './Main.module.scss';

interface Props {
    products: Product[],
    addCart: (product: Product) => void,
    children?: JSX.Element
}

export default function Main({ products, addCart, children }: Props) {
    return (
        <main className={style.container}>
            <Search />
            <Products
                products={products}
                addCart={addCart}
                tag={'releases'}
                title='Últimos lançamentos'
            />
            <Banner />
            <Products
                products={products}
                addCart={addCart}
                tag={'summer'}
                title='Coleção Verão'
            />
            <Blog />
        </main>
    );
}