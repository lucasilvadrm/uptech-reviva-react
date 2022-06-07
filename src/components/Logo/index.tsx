import style from './Logo.module.scss';

interface Props {
    classes?: string
}

export default function Logo({ classes }: Props) {
    return (
        <div className={`${style.logo} ${classes}`}>
            <h1 className={style.logo__title}>Reviva Fashion</h1>
            <span className={style.logo__subtitle}>by RCHLO</span>
        </div>
    )
}