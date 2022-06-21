import { useRecoilState } from "recoil";
import Banner from "components/Banner";
import Blog from "components/Blog";
import { ProductList } from "components/ProductList";
import { cartState, storageState } from "state/atom";
import { Product } from "types/product";


export default function Home() {
  const [products, setUpdateStorage] = useRecoilState(storageState);
  const [cart, setUpdateCart] = useRecoilState(cartState);

  function decrementStorage(item: Product) {
    const updatedProducts = products.map(product => {
      if (product.id === item.id) {
        return { ...product, quantidade_disponivel: product.quantidade_disponivel - 1 }
      }
      return product;
    })

    setUpdateStorage(updatedProducts);
  }

  function addCart(item: Product): void {
    const productInCart = cart.find(product => product.id === item.id);

    if (!productInCart) {
      setUpdateCart([...cart, { ...item, quantidade_carrinho: 1 }]);
      return decrementStorage(item);
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

      return decrementStorage(item);
    }
  }

  console.log(products);
  return (
    <>
      <ProductList
        addCart={addCart}
        tag={'releases'}
        title='Últimos lançamentos'
      />
      <Banner />
      <ProductList
        addCart={addCart}
        tag={'summer'}
        title='Coleção Verão'
      />
      <Blog />
    </>
  )
}