import { tertiaryColor } from "components/UI/variables";
import styled, { css } from "styled-components";

export const GenericButton = styled.button`
  width: 100%;
  height: 4rem;
  color: white;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

interface IQuantityStorage {
  quantity?: number;
}

export const StyledButton = styled(GenericButton)`
  ${({ quantity }: IQuantityStorage) => {
    if (quantity === 0) {
      return css`
        cursor: none;
        background-color: #a5a2a2;
        transition: 1s;
        i {
          display: none;
        }
      `;
    }
    return css`
      background-color: ${tertiaryColor};
      i {
        font-size: 2rem;
        padding-right: 0.5rem;
        position: absolute;
        right: 0;
      }

      transition: 1s;

      &:hover {
        transition: 1s;
        opacity: 80%;
      }
    `;
  }}
`;
