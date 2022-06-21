import { NavItem } from './NavItem';
import { Menu, MenuList } from './styles';

export default function Navbar() {
  return (
    <Menu>
      <MenuList>
        <NavItem to='/'>Página Inicial</NavItem>
        <NavItem to='/'>Moda Masculina</NavItem>
        <NavItem to='/'>Moda Feminina</NavItem>
        <NavItem to='/'>Moda Infantil</NavItem>
        <NavItem to='/'>Manual de Moda</NavItem>
      </MenuList>
    </Menu>
  )
}