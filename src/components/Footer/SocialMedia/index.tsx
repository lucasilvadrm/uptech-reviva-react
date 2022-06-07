import style from './SocialMedia.module.scss';

export default function SocialMedia() {
    return (
        <div className={style['social-media']}>
            <h4 className={style['social-media__title']}>Siga-no nas redes sociais</h4>
            <ul className={style['social-media__list']}>
                <li className={style.item}>
                    <a href="https://pt-br.facebook.com/" target="blank">
                        <figure><img src="./images/facebook-icon.png" alt="ícone do facebook"></img></figure>
                    </a>
                </li>
                <li className={style.item}>
                    <a href="#">
                        <figure><img src="./images/twitter-icon.png" alt="ícone do twitter"></img></figure>
                    </a>
                </li>
                <li className={style.item}>
                    <a href="#">
                        <figure><img src="./images/instagram-icon.png" alt="ícone do instagram"></img></figure>
                    </a>
                </li>
                <li className={style.item}>
                    <a href="#">
                        <figure><img src="./images/youtube-icon.png" alt="ícone do youtube"></img></figure>
                    </a>
                </li>
            </ul>
        </div>
    );
}