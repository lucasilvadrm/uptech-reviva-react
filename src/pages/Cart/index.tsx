import { useCart } from "contexts/CartContext";
import { ContainerCart } from "modules/DetailsCart";

const Cart = () => {
  const { cart } = useCart();
  return (
    <ContainerCart cart={cart} />
  );
};

export default Cart;
