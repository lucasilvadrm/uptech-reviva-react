import { Link } from "react-router-dom";
import Logo from "../Logo";
import * as S from "./styles";
import { quantityCartTotal } from "functions";
import { useCart } from "contexts/CartContext";


export default function Header() {
  const { cart } = useCart();
  const quantity__cart = quantityCartTotal(cart);

  return (
    <S.StyledHeader>
      <Link to={'/'}>
        <Logo />
      </Link>
      <Link to={'/cart'}>
        <S.ContainerIcon>
          <S.IconHeader
            aria-label="ícone sacola de compras"
            className="fa-solid fa-bag-shopping" >
          </S.IconHeader>
          <S.QuantityCart quantity={quantity__cart}>
            {quantity__cart}
          </S.QuantityCart>
        </S.ContainerIcon>
      </Link>
    </S.StyledHeader>
  )
}