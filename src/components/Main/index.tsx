import { ReactElement } from 'react';
import style from './Main.module.scss';

interface Props {
    children?: ReactElement | ReactElement[]
}

export default function Main({ children }: Props) {
    return (
        <main className={style.container}>
          {children}
        </main>
    );
}