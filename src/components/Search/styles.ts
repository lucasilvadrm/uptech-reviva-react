import styled from "styled-components";
import { tertiaryColor } from 'styles/variables';

export const StyledSearch = styled.div`
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const SearchInput = styled.input`
  border: 1px solid #C4C4C4;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  width: 92%;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${tertiaryColor};
  width: 8%;

  i {
    font-size: 2rem;
    color: white;
  }
`;