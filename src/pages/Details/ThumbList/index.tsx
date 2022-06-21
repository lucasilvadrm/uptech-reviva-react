import { storageState } from "state/atom";
import { useRecoilValue } from "recoil";
import ThumbItem from 'pages/Details/ThumbItem';
import { ThumbList } from './styles';


interface Props {
  id: number;
}

export default ({ id }: Props) => {

  const products = useRecoilValue(storageState);
  const thumbnails = products.find(product => product.id === id)?.thumbnail;

  return (
    <ThumbList>
      {thumbnails?.map((thumb, index) =>
        <ThumbItem thumbItem={thumb} key={index} />
      )}
    </ThumbList>
  );
}