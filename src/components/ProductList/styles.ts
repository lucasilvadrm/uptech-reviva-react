import styled from "styled-components";
import { sm, tertiaryColor } from 'components/UI/variables';

export const StyledProductList = styled.section`
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: ${tertiaryColor};
`;

export const ListItems = styled.ul`
  display: grid;
  gap: 8rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 988px) {
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${sm}) {
    gap: 2rem;
    grid-template-columns: 1fr;
  }
`;