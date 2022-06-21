import { cartState } from "state/atom";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Logo from "../Logo";
import { ContainerIcon, IconHeader, QuantityCart, StyledHeader } from "./styles";

export default function Header() {
  const routes = {
    to: '/cart'
  }

  const cart = useRecoilValue(cartState);

  const quantity__cart = cart.map(itemCart => itemCart.quantidade_carrinho)
    .reduce((acm, atual) => acm + atual, 0);

  return (
    <StyledHeader>
      <Link to={'/'}>
        <Logo />
      </Link>
      <Link to={routes.to}>
        <ContainerIcon>
          <IconHeader
            aria-label="ícone sacola de compras"
            className={`fa-solid fa-bag-shopping`} >
          </IconHeader>
          <QuantityCart quantity={quantity__cart}>
            {quantity__cart}
          </QuantityCart>
        </ContainerIcon>
      </Link>
    </StyledHeader>
  )
}