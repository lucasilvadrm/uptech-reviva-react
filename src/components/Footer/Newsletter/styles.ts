import styled from "styled-components";

export const StyledNewsletter = styled.div`
  grid-area: newsletter;
`;

export const NewsletterSign = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const NewsletterInput = styled.input`
  width: 70%;
  height: 3rem;
  margin-right: 1rem;
  border: 1px solid #C4C4C4;
  font-size: 1.5rem;
`;

export const NewsletterButton = styled.button`
  width: 30%;
  height: auto;
  font-size: 1.7rem;
  background-color: ${({theme}) => theme.colors.tertiary};
  color: white;
`;