import styled from "styled-components";

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
  border: solid 0.1rem ${({ theme }) => theme.colors.tertiary};
  display: flex;
  justify-content: center;
  height: 2.7rem;
  margin: 0.7rem;
  width: 1.5em;
  color: ${({ theme }) => theme.colors.tertiary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.fourth};
    cursor: pointer;
  }
`;

export const SizeInput = styled.input`
  display: none;

  &:checked + ${SizeLabel} {
    background-color: ${({ theme }) => theme.colors.tertiary};
    border: 1px solid;
    color: ${({ theme }) => theme.colors.fourth};
  }
`;
