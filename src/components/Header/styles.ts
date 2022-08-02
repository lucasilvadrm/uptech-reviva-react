import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  height: 12rem;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.width.widthMain};
  margin: auto;
  padding: 1rem 2rem 1rem 2rem;
`;

export const ContainerIcon = styled.div`
  position: relative;
`;

interface IQuantityCart {
  quantity: number;
}

export const QuantityCart = styled.span`
  ${({ quantity }: IQuantityCart) => {
    if (quantity === 0) {
      return css`
        display: none;
      `;
    }

    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme.colors.fourth};
      border-radius: 50%;
      padding: 0.1rem;
      position: absolute;
      left: -5px;
      bottom: 0;
      top: 20px;
      right: 0;
      color: ${({ theme }) => theme.colors.tertiary};
      font-weight: bold;
    `;
  }}
`;

export const IconHeader = styled.i`
  color: #6a808f;
  font-size: 3rem;
  &:hover {
    font-size: 3.1rem;
    transition: 0.5s;
  }
`;
