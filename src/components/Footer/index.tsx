import Logo from '../Logo';
import Contact from './Contact';
import style from './Footer.module.scss';
import MenuItem from './MenuItem';
import Newsletter from './Newsletter';
import SocialMedia from './SocialMedia';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <Logo classes={style['logo--justify']} />
            <MenuItem />
            <SocialMedia />
            <Contact />
            <Newsletter />
        </footer>
    )
}