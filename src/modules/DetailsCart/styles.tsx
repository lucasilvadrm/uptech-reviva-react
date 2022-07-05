import styled from "styled-components";
import { tertiaryColor } from "styles/variables";

const columnGap = `${3}rem`;

export const StyledWallet = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: grid;
  column-gap: ${columnGap};
  grid-template-rows: 5rem 1fr;
  grid-template-columns: calc(80% - ${columnGap}) 20%;
  grid-template-areas:
    "wallet__title wallet__title"
    "wallet__list cart-total";
`;

export const WalletTitle = styled.h2`
  grid-area: wallet__title;
  font-size: 2.5rem;
  color: ${tertiaryColor};
`;
