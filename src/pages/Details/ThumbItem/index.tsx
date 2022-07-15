import { useProduct } from "contexts/ProductsContext";
import { Imagem } from "types/image";
import { ThumbItem, ThumbProduct } from "./styles";

interface Props {
  thumbItem: Imagem;
  index: number;
}

export default ({ thumbItem, index }: Props) => {
  const { setUrlThumb } = useProduct();

  return (
    <ThumbItem>
      <ThumbProduct
        src={`../${thumbItem.url}`}
        alt={thumbItem.descricao}
        onClick={() => setUrlThumb(`../${thumbItem.url}`)}
      />
    </ThumbItem>
  );
};
