import { itemsNav } from 'data/itemsNav';
import { NavItem } from './NavItem';
import { Menu, MenuList } from './styles';

export default function Navbar() {
  return (
    <Menu>
      <MenuList>
        {itemsNav.map((itemNav, index) =>
          <NavItem key={index} to={itemNav.to}>{itemNav.name}</NavItem>)}
      </MenuList>
    </Menu>
  )
}