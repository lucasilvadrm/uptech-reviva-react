import { Product } from "types/product";
import  getProducts  from "./getProducts";

const getProductById = async (id: number): Promise<Product> => {
  const products = await getProducts();

  return products.find((productItem) => productItem.id === id) as Product;
};

export default getProductById;
