import { Product } from 'types/product';
import { SizeInput, SizeLabel, StyledProductSize } from './styles';

interface Props {
  item: Product,
}

export function ProductSize({ item }: Props) {
  return (
    <StyledProductSize>
      {item.tamanhos_disponiveis.map((size, index) => {
        const sizeProduct = size.toLowerCase();
        return (
          <div key={index}>
            <SizeInput
              type="radio"
              name={`select-size--product${item.id}`}
              id={`size-${sizeProduct}${item.id}`}
            />
            <SizeLabel
              htmlFor={`size-${sizeProduct}${item.id}`}>
              {sizeProduct.toUpperCase()}
            </SizeLabel>
          </div>
        );
      })}
    </StyledProductSize>
  );
}