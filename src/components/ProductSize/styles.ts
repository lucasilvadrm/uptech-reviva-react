import styled from "styled-components";
import { tertiaryColor, fourthColor } from "styles/variables";

export const StyledProductSize = styled.fieldset`
  border: none;

  display: flex;
  justify-content: space-around;
  align-self: flex-end;

  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;

  padding: 0;
  width: 12rem;
  padding-bottom: 1.2rem;
`;

export const SizeLabel = styled.label`
  border: solid 0.1rem ${tertiaryColor};
  display: flex;
  justify-content: center;
  height: 2.7rem;
  margin: 0.7rem;
  width: 1.5em;
  color: ${tertiaryColor};

  &:hover {
    background-color: ${fourthColor};
    cursor: pointer;
  }
`;

export const SizeInput = styled.input`
  display: none;

  &:checked + ${SizeLabel} {
    background-color: ${tertiaryColor};
    border: 1px solid;
    color: ${fourthColor};
  }
`;
