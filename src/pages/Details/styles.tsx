import styled from "styled-components";

export const Product = styled.section`
  display: flex;
  margin-top: 6rem;
  margin-bottom: 4rem;
  width: 100%;

  @media screen and (max-width: 1270px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductImage = styled.div`
  border: .1rem solid #C4C4C4;
  margin-right: 2rem;
  width: 40%;
  justify-content: center;
  display: flex;

  img {
    align-self: center;
    width: 100%;
  }
`;

