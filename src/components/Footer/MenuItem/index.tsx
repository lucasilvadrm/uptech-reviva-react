import { Link } from 'react-router-dom';
import style from './MenuItem.module.scss';

export default function MenuItem() {
  const itemsNav = [{
    title: 'Página Inicial',
    to: '/'
  },
  {
    title: 'Moda Masculina',
    to: '/'
  },
  {
    title: 'Moda Feminina',
    to: '/'
  },
  {
    title: 'Manual da Moda',
    to: '/'
  },
  ]

  return (
    <div className={style.menu__itens}>
      <h4 className={style.menu__title}>Menu</h4>
      <ul className={style.menu__list}>
        {itemsNav.map((itemNav, index) => (
          <li key={index} className={style.menu__item}><Link to={itemNav.to}>{itemNav.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}