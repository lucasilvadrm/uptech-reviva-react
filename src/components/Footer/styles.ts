import styled from "styled-components";

export const StyledFooter = styled.footer`
  border-top: 1px solid ${({theme}) => theme.colors.secondary};
  padding: 1rem 1rem 0 1rem;
  max-width: ${({theme}) => theme.width.widthMain};
  margin: auto;
  height: 30rem;
  display: grid;
  row-gap: 2rem;
  grid-template-rows: 6rem 1fr;
  grid-template-columns: 1fr 1.5fr 1.3fr 2fr;
  grid-template-areas:
    "logo logo logo logo"
    "menu-itens social-media contact newsletter";

  @media screen and (max-width: 794px) {
    height: auto;
    grid-template-rows: 4rem 1fr 8rem 1fr 8rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "menu-itens"
      "social-media"
      "contact"
      "newsletter";
  }
`;

export const Title = styled.h4`
  font-size: 2rem;
  margin-bottom: 1rem;
`;