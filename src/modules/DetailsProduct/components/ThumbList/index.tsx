import { StyledThumbList } from "./styles";
import { useProduct } from "contexts/ProductsContext";
import ThumbItem from "../ThumbItem";

interface Props {
  id: number;
}

const ThumbList = ({ id }: Props) => {
  const { products } = useProduct();
  const thumbnails = products.find((product) => product.id === id)?.thumbnail;

  return (
    <StyledThumbList>
      {thumbnails?.map((thumb, index) => (
        <ThumbItem index={index} thumbItem={thumb} key={index} />
      ))}
    </StyledThumbList>
  );
};

export default ThumbList;
