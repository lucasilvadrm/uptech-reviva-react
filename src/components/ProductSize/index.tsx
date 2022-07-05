import { Product } from "types/product";
import * as SC from "./styles";

interface Props {
  item: Product;
}

export function ProductSize({ item }: Props) {
  return (
    <SC.StyledProductSize>
      {item.tamanhos_disponiveis.map((size, index) => {
        const sizeProduct = size.toLowerCase();
        return (
          <div key={index}>
            <SC.SizeInput
              type="radio"
              name={`select-size--product${item.id}`}
              id={`size-${sizeProduct}${item.id}`}
            />
            <SC.SizeLabel htmlFor={`size-${sizeProduct}${item.id}`}>
              {sizeProduct.toUpperCase()}
            </SC.SizeLabel>
          </div>
        );
      })}
    </SC.StyledProductSize>
  );
}
