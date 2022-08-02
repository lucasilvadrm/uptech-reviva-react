import styled, { css } from "styled-components";

interface IMode {
  mode?: string
}

export const LogoAlign = styled.div`
  text-align: end;
`;

export const StyledLogo = styled(LogoAlign)`
  ${({ mode }: IMode) => {
    switch (mode) {
      case 'banner':
        return css`
          bottom: 0;
          margin-right: .7rem;
          margin-bottom: .7rem;
          position: absolute;
          right: 0;
          color: ${({theme}) => theme.colors.tertiary};
        `;
      case 'footer':
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
  font-size: ${({theme}) => theme.fonts.fontSizelogoTitle};
  font-weight: 700;
  margin: 0;
  color: ${({theme}) => theme.colors.tertiary};
`;

export const LogoSubtitle = styled.span`
  font-size: ${({theme}) => theme.fonts.fontSizelogoSubtitle};
  margin: 0;
  color: ${({theme}) => theme.colors.tertiary};
`;