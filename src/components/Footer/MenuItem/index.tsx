import style from './MenuItem.module.scss';

export default function MenuItem() {
    return (
        <div className={style.menu__itens}>
                <h4 className={style.menu__title}>Menu</h4>
                <ul className={style.menu__list}>
                    <li className={style.menu__item}><a href="#">Página Inicial</a></li>
                    <li className={style.menu__item}><a href="#">Moda Masculina</a></li>
                    <li className={style.menu__item}><a href="#">Moda Feminina</a></li>
                    <li className={style.menu__item}><a href="#">Manual da Moda</a></li>
                </ul>
            </div>
    );
}