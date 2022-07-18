import { Product } from "types/product";

export const formactPrice = (preco: number): string =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    preco
  );

export const quantityCartTotal = (cart: Product[]): number => {
  return cart
    .map((itemCart) => itemCart.quantidade_carrinho)
    .reduce((acm, atual) => acm + atual, 0);
};
