import styled from "styled-components";
import { fourthColor, tertiaryColor } from "styles/variables";

export const StyledBanner = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 100%;
  height: 16rem;
  background-color: ${fourthColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  position: relative;
`;

export const BannerText = styled.p`
  letter-spacing: 1rem;
  font-size: 1.9rem;
  color: ${tertiaryColor};
  font-weight: 700;

  &::first-line {
    letter-spacing: 0;
  }

  @media screen and (max-width: 988px) {
    letter-spacing: 1rem;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 386px) {
    letter-spacing: 0.5rem;
    font-size: 1rem;
  }
`;
