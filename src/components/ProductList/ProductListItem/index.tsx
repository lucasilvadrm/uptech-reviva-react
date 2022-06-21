import { Button } from "components/Button";
import { ProductSize } from "components/ProductSize";
import { formactPrice } from "functions";
import { Product } from "types/product";
import { useNavigate } from 'react-router-dom';
import { ProductListItem, ItemDetails, ItemDescription, ItemPrice, ItemTitle } from './styles';

interface PropsProductItem {
  item: Product,
  addCart: (product: Product) => void,
}

export default ({ item, addCart }: PropsProductItem) => {

  const navigate = useNavigate();

  const { quantidade_disponivel, id, imagens, nome, preco } = item;

  function redirectDetail(product: Product) {
    navigate(`/details/${product.id}`, { state: { product } });
  }

  return (
    <ProductListItem key={id}>
      <ItemDetails>
        <img
          onClick={() => redirectDetail(item)}
          src={`${process.env.PUBLIC_URL}/${imagens[0].url}`}
          alt={imagens[0].descricao}
        />
        <ProductSize item={item} />
      </ItemDetails>
      <ItemDescription>
        <ItemTitle>{nome}</ItemTitle>
        <ItemPrice>{formactPrice(preco)}</ItemPrice>
      </ItemDescription>
      <Button quantity={quantidade_disponivel} onClick={() => addCart(item)}>
        {quantidade_disponivel === 0 ? 'INDISPONÍVEL' : 'POR NA SACOLA'}
      </Button>
    </ProductListItem>
  );
}