import styled from "styled-components";
import { tertiaryColor } from "styles/variables";

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
  border: 1px solid #c4c4c4;
  font-size: 1.5rem;
`;

export const NewsletterButton = styled.button`
  width: 30%;
  height: auto;
  font-size: 1.7rem;
  background-color: ${tertiaryColor};
  color: white;
`;
