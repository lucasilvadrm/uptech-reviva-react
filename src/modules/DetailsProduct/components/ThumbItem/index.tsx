import { useProduct } from "contexts/ProductsContext";
import { Imagem } from "types/image";
import { StyledThumbItem, ThumbProduct } from "./styles";

interface Props {
  thumbItem: Imagem;
  index: number;
}

const ThumbItem = ({ thumbItem, index }: Props) => {
  const { setUrlThumb } = useProduct();

  return (
    <StyledThumbItem>
      <ThumbProduct
        src={`../${thumbItem.url}`}
        alt={thumbItem.descricao}
        onClick={() => setUrlThumb(`../${thumbItem.url}`)}
      />
    </StyledThumbItem>
  );
};

export default ThumbItem;
