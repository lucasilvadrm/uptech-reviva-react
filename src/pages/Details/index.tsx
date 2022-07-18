import * as SC from "./styles";
import { useParams } from "react-router-dom";
import { ProductList } from "components/ProductList";
import { useEffect } from "react";
import Banner from "components/Banner";
import { useProduct } from "contexts/ProductsContext";
import ProductDetails from "modules/DetailsProduct/components/DetailsProduct";

const DetailsPage = () => {
  const { products, urlThumb, setUrlThumb } = useProduct();
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  const images = {
    imageUrl: product?.imagens[0].url,
    description: product?.imagens[0].descricao,
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setUrlThumb(`../${images.imageUrl}`);
  }, [product]);

  if (!product) {
    return <div>Erro</div>;
  }

  return (
    <>
      <SC.Product>
        <SC.ProductImage>
          <img src={urlThumb} alt={images.description} />
        </SC.ProductImage>
        <ProductDetails product={product} />
      </SC.Product>
      <Banner />
      <ProductList
        title={`Quem viu ${product.nome} também comprou...`}
        random={true}
      />
    </>
  );
};

export default DetailsPage;
