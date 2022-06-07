import style from './Search.module.scss';

export default function Search() {
    return (
        <div className={style.search}>
            <input type="text" className={style.search__input} placeholder="Faça sua busca aqui se já souber o que está procurando..."/>
            <button className={style.search__button}>
                <i aria-label="ícone de pesquisa" className={`fa-solid fa-magnifying-glass ${style.search__icon}`}></i>
            </button>
        </div>
    );
} 