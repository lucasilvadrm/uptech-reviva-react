import { cartState } from "state/atom";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Logo from "../Logo";
import style from './Header.module.scss';

export default function Header() {
  const routes = {
    to: '/cart'
  }

  const cart = useRecoilValue(cartState);

  const quantity__cart = cart.map(itemCart => itemCart.quantidade_carrinho)
    .reduce((acm, atual) => acm + atual, 0);

  return (
    <header className={style.header}>
      <Logo />
      <Link to={routes.to}>
        <div className={style.container__icon}>
          <i
            aria-label="ícone sacola de compras"
            className={`fa-solid fa-bag-shopping 
          ${style['purchase__icon--header']}`
            } >
          </i>
          <span
            className={quantity__cart > 0 ? style.quantity__cart : style['quantity__cart--none']}>
            {quantity__cart}
          </span>
        </div>
      </Link>
    </header>
  )
}