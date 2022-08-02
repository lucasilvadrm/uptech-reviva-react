import { Product } from "types/product";
import { ProductItem } from "./ProductItem";
import { StyledWalletList } from "./styles";

interface Props {
  products: Product[] | null;
}

const WalletList = ({ products }: Props) => {
  return (
    <StyledWalletList>
      {products &&
        products.map((item) => {
          return <ProductItem key={item.descricao} itemCart={item} />;
        })}
    </StyledWalletList>
  );
};

export default WalletList;
