import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Navbar from "../../components/Nav";
import { Products } from "../../components/Products";
import Search from "../../components/Search";
import { verificaLocalStorage } from "../../functions";
import { Product } from "../../types/product";
import { storage } from "./data";


verificaLocalStorage(storage);
const productsLocalStorage: Product[] = JSON.parse(localStorage.getItem('produtos') as string);
const initialCart: Product[] = JSON.parse(localStorage.getItem('carrinho') as string);

export default function Home() {
  const [products] = useState<Product[]>(productsLocalStorage);
  const [cart, setCart] = useState<Product[]>(initialCart);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(cart));
  }, [cart]);

  function addCart(item: Product): void {
    const searchProduct = cart.find(product => product.id === item.id);

    if (!searchProduct) {
      setCart([...cart, { ...item, quantidade_carrinho: 1 }]);
      alert(`Adicionado na sacola! Itens restantes: ${item.quantidade_disponivel - 1}`)
      return;
    }

    if (searchProduct.quantidade_carrinho < searchProduct.quantidade_disponivel) {
      const productFiltered = cart.filter(productCart => productCart.id !== searchProduct.id);
      setCart([
        ...productFiltered,
        {
          ...searchProduct,
          quantidade_carrinho: searchProduct.quantidade_carrinho + 1
        }
      ]);
    }

    const avaliable = (searchProduct.quantidade_disponivel - searchProduct.quantidade_carrinho) - 1
    avaliable >= 0 ? alert(`Adicionado na sacola! Itens restantes: ${avaliable}`) : alert(`${searchProduct.nome} indisponível!`);
  }

  return (
    <>
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
    </>
  )
}