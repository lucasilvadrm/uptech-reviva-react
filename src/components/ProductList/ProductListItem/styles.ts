import styled from "styled-components";
import { tertiaryColor } from "components/UI/variables";

export const StyledProductListItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c4c4c4a7;

  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

export const ItemDescription = styled.div`
  margin: 1.6rem 0;
  display: grid;
  gap: 0.6rem;
`;

export const ItemTitle = styled.h3`
  font-size: 1.5rem;

  @media screen and (max-width: 988px) {
    font-size: 1.3rem;
  }
`;

export const ItemPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${tertiaryColor};

  @media screen and (max-width: 988px) {
    font-size: 1.3rem;
  }
`;
