import style from './Button.module.scss';

interface Props {
    onClick: () => void,
    label: string
}

export function Button( { onClick, label }: Props) {
    return (
        <button className={style.item__button} onClick={onClick}>
            {label}
            <i className={`fa-solid fa-bag-shopping ${style.icon__purchase}`}></i>
        </button>
    )
}