import Banner from "components/Banner";
import Blog from "components/Blog";
import { ProductList } from "components/ProductList";

export default function Home() {
  return (
    <>
      <ProductList
        tag='releases'
        title='Últimos lançamentos'
      />
      <Banner />
      <ProductList
        tag='summer'
        title='Coleção Verão'
      />
      <Blog />
    </>
  )
}