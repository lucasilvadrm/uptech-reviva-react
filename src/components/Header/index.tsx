import Logo from "../Logo";
import style from './Header.module.scss';

export default function Header() {
    return (
        <header className={style.header}>
            <Logo />
            <a href="./carrinho.html"><i aria-label="ícone sacola de compras"
                className={`fa-solid fa-bag-shopping ${style['purchase__icon--header']}`} ></i></a>
        </header>
    )
}