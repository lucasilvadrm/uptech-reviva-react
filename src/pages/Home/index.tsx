import { useEffect } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import Banner from "../../components/Banner";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Navbar from "../../components/Nav";
import { Products } from "../../components/Products";
import Search from "../../components/Search";
import { cartState, storageState } from "../../state/atom";
import { Product } from "../../types/product";


export default function Home() {
  const [products, setUpdateStorage] = useRecoilState(storageState);
  const [cart, setUpdateCart] = useRecoilState(cartState);

  useEffect(() => {
    console.log(cart);
    console.log(products);
  }, [cart, products]);

  function addCart(item: Product): void {
    const productInCart = cart.find(product => product.id === item.id);

    const updatedProducts = products.map(product => {
      if (product.id === item.id) {
        return { ...product, quantidade_disponivel: product.quantidade_disponivel - 1 }
      }
      return product;
    })

    if (!productInCart) {
      setUpdateCart([...cart, { ...item, quantidade_carrinho: 1 }]);
      return setUpdateStorage(updatedProducts);
    }

    if (productInCart.quantidade_carrinho < productInCart.quantidade_disponivel) {
      const productsFiltered = cart.filter(productCart => productCart.id !== productInCart.id);
      setUpdateCart([
        ...productsFiltered,
        {
          ...productInCart,
          quantidade_carrinho: productInCart.quantidade_carrinho + 1
        }
      ]);

      return setUpdateStorage(updatedProducts);
    }
  }

  return (
    <RecoilRoot>
      <Header />
      <Navbar />
      <Main>
        <Search />
        <Products
          products={products}
          addCart={addCart}
          tag={'releases'}
          title='Últimos lançamentos'
        />
        <Banner />
        <Products
          products={products}
          addCart={addCart}
          tag={'summer'}
          title='Coleção Verão'
        />
        <Blog />
      </Main>
      <Footer />
    </RecoilRoot>
  )
}