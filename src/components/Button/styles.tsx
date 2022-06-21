import { tertiaryColor } from "components/UI/variables";
import styled, { css } from "styled-components";

export const GenericButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// interface IButton {
//   width: number,
//   height: number,
//   fontSize: number,
// }

interface IQuantityStorage {
  quantity?: number
}

export const StyledButton = styled(GenericButton)`
${({ quantity }: IQuantityStorage) => {
    if (quantity === 0) {
      return css`
        width: 100%;
        height: 4rem;
        font-size: 1.3rem;
        background-color: #a5a2a2;
        color: white;
        i {
          display: none;
        }
    `;
    }
    return css`
      width: 100%;
      height: 4rem;
      font-size: 1.3rem;
      background-color: ${tertiaryColor};
      color: white;
      i {
        font-size: 2rem;
        padding-right: .5rem;
        position: absolute;
        right: 0;
      }
  `;
  }}
  
`;

export const IconPurschase = styled.i`

`;

export const ProductButtonTeste = styled(GenericButton)`
  width: 30%;
  height: 4rem;
  font-size: 1.3rem;
  background-color: ${tertiaryColor};
`;