import { Product } from "types/product";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { formactPrice } from "functions";
import { getCart } from "services/getCart";
import { updateCart } from "services/updateCart";

type CartContextProps = {
  children: ReactNode;
};

type CartContextType = {
  cart: Product[];
  addProductInCart: (item: Product) => void;
  totalCart: () => string;
  updateProductInCart: (item: Product, quantity: number) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);
CartContext.displayName = "Cart";

const CartProvider = ({ children }: CartContextProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const fetchCartApi = async () => {
    setCart(await getCart());
  };

  useEffect(() => {
    fetchCartApi();
  }, []);

  // const { products, setProducts } = useProduct();

  // function decrementStorage(item: Product) {
  //   const updatedProducts = products.map((product) => {
  //     if (product.id === item.id) {
  //       return {
  //         ...product,
  //         quantidade_disponivel: product.quantidade_disponivel - 1,
  //       };
  //     }
  //     return product;
  //   });

  //   setProducts(updatedProducts);
  // }

  const verifyQuantity = (item: Product) =>
    item.quantidade_carrinho < item.quantidade_disponivel;

  const addProductInCart = useCallback(
    (item: Product) => {
      const productInCart = cart.some((product) => product.id === item.id);

      if (!productInCart) {
        return setCart(() => {
          updateCart([...cart, { ...item, quantidade_carrinho: 1 }]);
          return [...cart, { ...item, quantidade_carrinho: 1 }];
        });
      }

      if (verifyQuantity(item)) {
        setCart(() => {
          const updatedCart = cart.map((itemCart) => {
            if (itemCart.id === item.id) {
              return {
                ...itemCart,
                quantidade_carrinho: itemCart.quantidade_carrinho + 1,
              };
            }
            return itemCart;
          });

          updateCart(updatedCart);

          return updatedCart;
        });
        // decrementStorage(item);
      }
    },
    [cart]
  );

  const updateProductInCart = (item: Product, quantity: number) => {
    setCart(() => {
      const updatedCart = cart.map((itemCart) => {
        if (itemCart.id === item.id) {
          return {
            ...itemCart,
            quantidade_carrinho: quantity,
          };
        }
        return itemCart;
      });
      updateCart(updatedCart);

      return updatedCart;
    });
  };

  const totalCart = () => {
    const total = cart
      .map((itemCart) => itemCart.preco * itemCart.quantidade_carrinho)
      .reduce((pv, acc) => pv + acc, 0);

    return formactPrice(total);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProductInCart, totalCart, updateProductInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export { CartProvider, useCart };
