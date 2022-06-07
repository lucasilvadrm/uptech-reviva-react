import style from './Contact.module.scss';

export default function Contact() {
    return (
        <div className={style.contact}>
            <h4 className={style.contact__title}>Entre e contato</h4>
            <ul className={style.contact__items}>
                <li className={style.contact__item}>Contato</li>
                <li className={style.contact__item}><a href="#">reviva@rchio.com.br</a></li>
                <li className={`${style.contact__item} ${style.whatsapp__content}`}>
                    <a href="#">WhatsApp</a>
                    <i aria-label="icone whatsapp" className="fa-brands fa-whatsapp whatsapp__icon"></i>
                </li>
                <li className={`${style.contact__item} ${style.phone__content}`}>
                    <a className={style.phone__number} href="#">11 2123-3321</a>
                    <i aria-label="ícone telefone" className="fa-solid fa-phone phone__icon"></i>
                </li>
            </ul>
        </div>
    );
}