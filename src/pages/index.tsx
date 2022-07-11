import type { GetStaticProps, NextPage } from "next";
import ContainerHome from "modules/HomePage";
import { Product } from "types/product";
import getProducts from "services/getProducts";

interface HomePageProps {
  products: Product[];
}

const HomePage: NextPage<HomePageProps> = ({ products }: HomePageProps) => {
  return <ContainerHome products={products} />;
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24,
  };
};
