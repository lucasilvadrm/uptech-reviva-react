import Logo from '../Logo';
import style from './Banner.module.scss';

export default function Banner() {
    return (
        <a href="#" className={style.banner}>
            <p className={style.banner__text}>
                Fique por dentro de tudo que há de novidade no mundo da moda!
                <br></br>Baixe já nosso manual de moda!
            </p>
            <Logo classes={style.banner__logo} />
        </a>
    )
}