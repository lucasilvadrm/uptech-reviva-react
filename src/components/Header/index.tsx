import { Link } from "react-router-dom";
import Logo from "../Logo";
import style from './Header.module.scss';

export default function Header() {
  const routes = {
    to: '/cart'
  }
  return (
    <header className={style.header}>
      <Logo />
      <Link to={routes.to}><i aria-label="ícone sacola de compras"
        className={`fa-solid fa-bag-shopping ${style['purchase__icon--header']}`} ></i>
      </Link>
    </header>
  )
}