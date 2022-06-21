import { Product } from 'types/product';
import { ProductItem } from './ProductItem';
import { WalletList } from './styles';

interface Props {
  products: Product[] | null;
}

export default ({ products }: Props) => {

  return (
    <WalletList>
      {products ? products.map(item => {
        return (
          <ProductItem key={item.descricao} itemCart={item} />
        );
      }) : <ul></ul>}
    </WalletList>
  );
}