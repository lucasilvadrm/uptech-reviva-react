import { useEffect, useState } from 'react';
import { ProductSize } from 'components/ProductSize';
import { formactPrice } from 'functions';
import { Product } from 'types/product';
import { DetailThumb, Name, Description, WalletItem, DetailInput } from './styles';
import { useCart } from 'contexts/CartContext';

interface Props {
  itemCart: Product;
}

export const ProductItem = ({ itemCart }: Props) => {

  const { updateProductInCart } = useCart();

  const [quantityValue, setQuantityValue] = useState(itemCart.quantidade_carrinho);
  const [subtotal, setSubtotal] = useState((itemCart.preco * itemCart.quantidade_carrinho));

  useEffect(() => {
    setSubtotal(quantityValue * itemCart.preco);
  }, [quantityValue, itemCart.preco]);

  const updateCart = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantityValue(+e.target.value);
    updateProductInCart(itemCart, +e.target.value);
  }

  return (
    <WalletItem>
      <DetailThumb>
        <img src={itemCart.imagens[0].url} alt={itemCart.imagens[0].descricao} />
      </DetailThumb>
      <div>
        <Name>Produto</Name>
        <Description>{itemCart.nome}</Description>
      </div>
      <div>
        <Name>Tamanho escolhido</Name>
        <ProductSize item={itemCart} />
      </div>
      <div>
        <Name>Valor</Name>
        <Description>{`${formactPrice(itemCart.preco)}`}</Description>
      </div>
      <div>
        <Name>Quantidade</Name>
        <DetailInput
          data-testid='test-input'
          onChange={updateCart}
          type="number"
          name={`quantity${itemCart.id}`}
          id={`quantity${itemCart.id}`}
          value={quantityValue}
          min="1"
          max={itemCart.quantidade_disponivel}
        />
      </div>
      <div>
        <Name>Subtotal</Name>
        <Description>{formactPrice(subtotal)}</Description>
      </div>
    </WalletItem>
  )
} 