import style from './Nav.module.scss';

export default function Navbar() {
    return (
        <nav className={style.menu}>
            <ul className={style.menu__list}>
                <li className={style.menu__item}><a href="#">Página Inicial</a></li>
                <li className={style.menu__item}><a href="#">Moda Masculina</a></li>
                <li className={style.menu__item}><a href="#">Moda Feminina</a></li>
                <li className={style.menu__item}><a href="#">Moda Infantil</a></li>
                <li className={style.menu__item}><a href="#">Manual de Moda</a></li>
            </ul>
        </nav>
    )
}