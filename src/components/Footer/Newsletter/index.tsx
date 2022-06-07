import style from './Newsletter.module.scss';

export default function Newsletter() {
    return (
        <div className={style.newsletter}>
            <h4 className={style.newsletter__title}>Assine nossa newsletter</h4>
            <div className={style.newsletter__sign}>
                <input className={style.newsletter__input} type="text"></input>
                <button className={style.newsletter__button}>
                    Assinar Já
                </button>
            </div>
        </div>
    );
}