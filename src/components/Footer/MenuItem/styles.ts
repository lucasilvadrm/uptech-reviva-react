import styled from "styled-components";

export const MenuItens = styled.div`
  grid-area: menu-itens;

  @media screen and (max-width: 794px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const MenuTitle = styled.h4`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const MenuItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: black;
`;
