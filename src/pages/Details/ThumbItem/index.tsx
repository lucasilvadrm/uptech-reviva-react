import { Imagem } from "types/image";
import { ThumbItem, ThumbProduct } from "./styles";


interface Props {
  thumbItem: Imagem;
}

export default ({ thumbItem }: Props) => {
  return (
    <ThumbItem>
      <ThumbProduct
        src={`${process.env.PUBLIC_URL}/${thumbItem.url}`}
        alt={thumbItem.descricao} />
    </ThumbItem>
  )
}