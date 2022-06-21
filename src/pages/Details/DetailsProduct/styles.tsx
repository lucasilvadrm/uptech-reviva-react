import styled from "styled-components";
import { tertiaryColor } from 'components/UI/variables';

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`;

export const ProductTitle = styled.h2`
  font-size: 2.5rem;
  padding-bottom: 1.3rem;
  color: ${tertiaryColor};
`;

export const ProductDescription = styled.p`
  font-size: 1.6rem;
  text-align: justify;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 4rem;
  padding-bottom: 6rem;

  @media screen and (max-width: 1110px) {
    display: none;
  }
`;

export const ProductButton = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;

  width: 30%;
  height: 4rem;
  font-size: 1.3rem;
  background-color: ${tertiaryColor};
  position: relative;
  color: white;

  .icon__purchase {
    font-size: 2rem;
    padding-right: .5rem;
    position: absolute;
    right: 0;
  }
`;