import { ThumbList } from "./styles";
import ThumbItem from "../ThumbItem";
import { useEffect, useState } from "react";
import { Product } from "types/product";
import getProducts from "services/getProducts";

interface Props {
  id: number;
}

export default ({ id }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  const thumbnails = products.find((product) => product.id === id)?.thumbnail;

  return (
    <ThumbList>
      {thumbnails?.map((thumb, index) => (
        <ThumbItem thumbItem={thumb} key={index} />
      ))}
    </ThumbList>
  );
};
