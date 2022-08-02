import styled from "styled-components";

export const StyledCartTotal = styled.article`
  grid-area: cart-total;
  background-color: ${({ theme }) => theme.colors.fourth};
  box-shadow: 0px 0px 9px -1px rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  padding: 0 1.3rem;
  display: grid;
  grid-template-rows: 20% 60% 20%;
  min-width: 22rem;

  @media (max-width: 994px) {
    grid-template-rows: 20% auto 6rem;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const TotalValue = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const QuantityPrice = styled.ul`
  margin-right: 3rem;
  margin-left: 3rem;

  p {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
  }
`;

export const WalletButton = styled.button`
  width: 100%;
  height: 6rem;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  align-self: flex-end;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;
