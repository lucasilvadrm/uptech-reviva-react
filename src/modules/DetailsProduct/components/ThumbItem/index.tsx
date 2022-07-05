import { Imagem } from "types/image";
import * as SC from "./styles";

interface Props {
  thumbItem: Imagem;
}

export default ({ thumbItem }: Props) => {
  return (
    <SC.ThumbItem>
      <SC.ThumbProduct src={`/../${thumbItem.url}`} alt={thumbItem.descricao} />
    </SC.ThumbItem>
  );
};
