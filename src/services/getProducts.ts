import { Product } from "types/product";

const getProducts = async (): Promise<Product[]> =>
  (await fetch(`${process.env.NEXT_PUBLIC_API_JSONSERVER}/products`)).json();

export default getProducts;
