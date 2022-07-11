import Banner from "components/Banner";
import Blog from "components/Blog";
import ProductList from "components/ProductList";
import { DefaultPage } from "modules/DefaultPage";
import React from "react";
import { Product } from "types/product";

interface ContainerHomeProps {
  products: Product[];
}

const ContainerHomePage = ({ products }: ContainerHomeProps) => {

  return (
    <DefaultPage>
      <ProductList
        products={products}
        tag="releases"
        title="Últimos lançamentos"
      />
      <Banner />
      <ProductList products={products} tag="summer" title="Coleção Verão" />
      <Blog />
    </DefaultPage>
  );
};

export default ContainerHomePage;
