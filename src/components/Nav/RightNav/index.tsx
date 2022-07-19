import { fourthColor, tertiaryColor, widthMain } from "components/UI/variables";
import styled from "styled-components";
import { NavItem } from "../NavItem";
import { itemsNav } from "../NavItem/itemsNav";

interface RightNavProps {
  open: boolean;
}

const MenuList = styled.ul<RightNavProps>`
  width: ${widthMain};
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: start;
    background-color: ${fourthColor};
    position: absolute;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 50vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 5;

    li {
      color: ${tertiaryColor};
    }
  }
`;

const RightNav = ({ open }: RightNavProps) => {
  return (
    <MenuList open={open}>
      {itemsNav.map((itemNav, index) => (
        <NavItem key={index} to={itemNav.to}>
          {itemNav.name}
        </NavItem>
      ))}
    </MenuList>
  );
};

export default RightNav;
