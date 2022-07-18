import styled from "styled-components";

export const WalletItem = styled.li`
  display: grid;
  grid-template-columns: 21rem 1.6fr 1.5fr 1fr 1fr 0.7fr;
  column-gap: 1.5rem;
`;

export const DetailThumb = styled.div`
  border: 1px solid #c4c4c4;
  max-width: 20rem;
  max-height: 20rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.h3`
  font-size: 1.8rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
`;

export const DetailInput = styled.input`
  width: 100%;
  height: 2.7rem;
  font-size: 2.1rem;
  text-align: center;
`;