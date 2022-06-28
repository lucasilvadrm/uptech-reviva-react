import { itemsNav } from 'components/Nav/NavItem/itemsNav';
import { Link } from 'react-router-dom';
import { Title } from '../styles';
import * as S from './styles';

export default function MenuItem() {
  return (
    <S.MenuItens>
      <Title>Menu</Title>
      <ul>
        {itemsNav.map((itemNav, index) => (
          <S.MenuItem key={index}><Link to={itemNav.to}>{itemNav.name}</Link></S.MenuItem>
        ))}
      </ul>
    </S.MenuItens>
  );
}