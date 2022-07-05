import Banner from "components/Banner";
import ProductList from "components/ProductList";
import { DefaultPage } from "modules/DefaultPage";
import { useEffect } from "react";
import { Product } from "types/product";
import ProductDetails from "./components/DetailsProduct";
import * as SC from "./styles";

interface ProductDetailsProps {
  product: Product;
  products: Product[];
}

const ContainerProductDetails = ({
  product,
  products,
}: ProductDetailsProps) => {
  const images = {
    imageUrl: product?.imagens[0].url,
    description: product?.imagens[0].descricao,
  };

  return (
    <DefaultPage>
      <SC.Product>
        <SC.ProductImage>
          <img src={`../${images.imageUrl}`} alt={images.description} />
        </SC.ProductImage>
        <ProductDetails product={product} />
      </SC.Product>
      <Banner />
      <ProductList
        products={products}
        title={`Quem viu ${product.nome} também comprou...`}
        random={true}
      />
    </DefaultPage>
  );
};

export default ContainerProductDetails;
