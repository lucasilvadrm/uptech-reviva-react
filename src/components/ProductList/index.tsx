import { storageState } from 'state/atom';
import { useRecoilValue } from 'recoil';
import { Product } from 'types/product';
import ProductListItem from './ProductListItem';
import { RandomProductListState } from 'state/selector';
import { ListItems, StyledProductList, Title } from './styles';

interface ProductProps {
  addCart: (product: Product) => void,
  tag?: string,
  title: string,
  random?: boolean
}

export function ProductList({ addCart, tag, title, random = false }: ProductProps) {

  const products = useRecoilValue(storageState);
  const productsRandom = useRecoilValue(RandomProductListState);

  return (
    <StyledProductList>
      <Title>{title}</Title>
      <ListItems>
        { !random ? products.filter(item => item.tag.includes(tag || ''))
          .map(itemFiltered => <ProductListItem key={itemFiltered.id} item={itemFiltered} addCart={addCart} />)
          : productsRandom.map(product => <ProductListItem key={product.id} item={product} addCart={addCart} />)
        }
      </ListItems>
    </StyledProductList>
  );
}