import styled from "styled-components";

export const StyledProductList = styled.section`
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const ListItems = styled.ul`
  display: grid;
  gap: 8rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 988px) {
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${({theme}) => theme.breakpoints.sm}) {
    gap: 2rem;
    grid-template-columns: 1fr;
  }
`;
