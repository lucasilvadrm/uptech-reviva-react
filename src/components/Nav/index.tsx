import { itemsNav } from "components/Nav/NavItem/itemsNav";
import { NavItem } from "./NavItem";
import * as SC from "./styles";

const Navbar = () => {
  return (
    <SC.Menu>
      <SC.MenuList>
        {itemsNav.map((itemNav, index) => (
          <NavItem key={index} to={itemNav.to}>
            {itemNav.name}
          </NavItem>
        ))}
      </SC.MenuList>
    </SC.Menu>
  );
};

export default Navbar;
