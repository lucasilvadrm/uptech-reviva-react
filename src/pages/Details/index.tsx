import { storageState } from "state/atom";
import { useRecoilValue } from "recoil";
import { Product, ProductImage } from './styles';
import { useParams } from 'react-router-dom';
import ProductDetails from './DetailsProduct'
import { ProductList } from "components/ProductList";
import { useEffect } from "react";
import Banner from "components/Banner";


const DetailsPage = () => {

  const products = useRecoilValue(storageState);
  const { id } = useParams();
  const product = products.find(product => product.id === Number(id));

  const images = {
    imageUrl: product?.imagens[0].url,
    description: product?.imagens[0].descricao
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])

  if (!product) {
    return <div>Erro</div>
  }

  return (
    <>
      <Product>
        <ProductImage>
          <img src={`../${images.imageUrl}`} alt={images.description} />
        </ProductImage>
        <ProductDetails product={product} />
      </Product>
      <Banner />
      <ProductList
        addCart={() => console.log('clicou')}
        title={`Quem viu ${product.nome} também comprou...`}
        random={true}
      />
    </>

  );
}

export default DetailsPage;