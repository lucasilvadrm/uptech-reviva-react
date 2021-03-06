import styled from "styled-components";
import { tertiaryColor, widthMain } from "components/UI/variables";

export const Menu = styled.nav`
  position: relative;
  width: 99%;
  height: 5rem;
  background-color: ${tertiaryColor};
  margin: 0 auto;
  display: flex;
  font-size: 1.6rem;
  /* overflow: hidden; */
`;

export const MenuList = styled.ul`
  width: ${widthMain};
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
