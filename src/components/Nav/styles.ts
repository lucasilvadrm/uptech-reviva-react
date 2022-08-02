import styled from "styled-components";

export const Menu = styled.nav`
  position: relative;
  width: 99%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  margin: 0 auto;
  display: flex;
  font-size: 1.6rem;
`;

export const MenuList = styled.ul`
  width: ${({ theme }) => theme.width.widthMain};
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
