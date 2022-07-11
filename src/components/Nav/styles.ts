import styled from "styled-components";
import { tertiaryColor, widthMain } from "styles/variables";

export const Menu = styled.nav`
  width: 99%;
  height: 5rem;
  background-color: ${tertiaryColor};
  margin: 0 auto;
  display: flex;
  font-size: 1.6rem;
`;

export const MenuList = styled.ul`
  width: ${widthMain};
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
