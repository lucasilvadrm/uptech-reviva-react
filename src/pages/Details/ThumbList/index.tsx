import ThumbItem from "pages/Details/ThumbItem";
import { ThumbList } from "./styles";
import { useProduct } from "contexts/ProductsContext";

interface Props {
  id: number;
}

export default ({ id }: Props) => {
  const { products } = useProduct();
  const thumbnails = products.find((product) => product.id === id)?.thumbnail;

  return (
    <ThumbList>
      {thumbnails?.map((thumb, index) => (
        <ThumbItem index={index} thumbItem={thumb} key={index} />
      ))}
    </ThumbList>
  );
};
