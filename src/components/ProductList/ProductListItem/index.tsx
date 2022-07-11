import { Button } from "components/Button";
import { ProductSize } from "components/ProductSize";
import { formactPrice } from "functions";
import { Product } from "types/product";
// import { useNavigate } from 'react-router-dom';
import * as SC from "./styles";
import { useCart } from "contexts/CartContext";
import NextLink from "next/link";
import { useRouter } from "next/router";
import useSwr from "swr";

interface PropsProductItem {
  item: Product;
}

const ProductListItem = ({ item }: PropsProductItem) => {
  const { addProductInCart } = useCart();

  const {
    id,
    imagens,
    nome,
    preco,
    quantidade_carrinho,
    quantidade_disponivel,
  } = item;

  // const router = useRouter();

  // const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // const { data, error } = useSwr<Product>(router.query.id ? `/api/product/${router.query.id}`: null, fetcher);

  

  function redirectDetail(product: Product) {
    // navigate(`/details/${product.id}`, { state: { product } });
  }

  const verify = quantidade_carrinho === quantidade_disponivel;


  return (
    <SC.StyledProductListItem key={id}>
      <SC.ItemDetails>
        <NextLink href={`/details/${item.id}`} passHref>
          <img
            // onClick={() => redirectDetail(item)}
            src={`/${imagens[0].url}`}
            alt={imagens[0].descricao}
          />
        </NextLink>

        <ProductSize item={item} />
      </SC.ItemDetails>
      <SC.ItemDescription>
        <SC.ItemTitle>{nome}</SC.ItemTitle>
        <SC.ItemPrice>{formactPrice(preco)}</SC.ItemPrice>
      </SC.ItemDescription>
      <Button
        quantity={item.quantidade_disponivel}
        onClick={() => addProductInCart(item)}
      >
        {verify ? "INDISPONÍVEL" : `POR NA SACOLA`}
      </Button>
    </SC.StyledProductListItem>
  );
};

export default ProductListItem;
