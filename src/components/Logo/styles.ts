import styled, { css } from "styled-components";
import {
  tertiaryColor,
  fontSizelogoTitle,
  fontSizelogoSubtitle,
} from "styles/variables";

interface IMode {
  mode?: string;
}

export const LogoAlign = styled.div`
  text-align: end;
`;

export const StyledLogo = styled(LogoAlign)`
  ${({ mode }: IMode) => {
    switch (mode) {
      case "banner":
        return css`
          bottom: 0;
          margin-right: 0.7rem;
          margin-bottom: 0.7rem;
          position: absolute;
          right: 0;
          color: ${tertiaryColor};
        `;
      case "footer":
        return css`
          grid-area: logo;
          justify-self: flex-start;
        `;
      default:
        return css`
          text-align: end;
        `;
    }
  }}
`;

export const LogoTitle = styled.h1`
  font-size: ${fontSizelogoTitle};
  font-weight: 700;
  margin: 0;
  color: ${tertiaryColor};
`;

export const LogoSubtitle = styled.span`
  font-size: ${fontSizelogoSubtitle};
  margin: 0;
  color: ${tertiaryColor};
`;
