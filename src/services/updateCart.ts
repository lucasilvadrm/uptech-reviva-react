import { Product } from "types/product";

export const updateCart = async (cart: Product[]) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_NEXT}/api/cart/setcart`, {
    method: "POST",
    body: JSON.stringify(cart),
  });
};
