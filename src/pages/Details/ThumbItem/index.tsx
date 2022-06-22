import { Imagem } from "types/image";
import { ThumbItem, ThumbProduct } from "./styles";


interface Props {
  thumbItem: Imagem;
}

export default ({ thumbItem }: Props) => {
  return (
    <ThumbItem>
      <ThumbProduct
        src={`../${thumbItem.url}`}
        alt={thumbItem.descricao} />
    </ThumbItem>
  )
}