import styled from "styled-components";

export const StyledThumbList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 4rem;
  padding-bottom: 6rem;

  @media screen and (max-width: 1110px) {
    display: none;
  }
`;
