import styled, { css } from "styled-components";

export const ButtonBagContent = styled.div`
  transform-style: preserve-3d;
  transition: transform 0.5s;
  width: 100%;
  height: 4rem;
  color: white;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductButtonBag = styled.div`
  perspective: 500px;
  transition: 0.5s all;

  &:hover ${ButtonBagContent} {
    cursor: pointer;
    transform: rotateY(180deg);
    transition: transform 0.4s;
  }

  &:active {
    transform: scale(1.05);
    box-shadow: 0 20px 15px #00000036;
  }
`;

export const ContentFrontButton = styled.div`
  align-items: center;
  backface-visibility: hidden;
  background: url(../../icons/logo-bag-white.svg) ${({theme}) => theme.colors.tertiary} right no-repeat;
  border: 0.5em solid transparent;
  box-shadow: 0 0 15px #00000036;
  box-sizing: border-box;
  display: flex;
  height: 4em;
  justify-content: center;
  position: absolute;
  transition: 0.5s all;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

interface ContentBackButtonProps {
  unavailable: boolean;
  addedToCart: boolean;
}

export const ContentBackButton = styled(ContentFrontButton)<ContentBackButtonProps>`
  background: no-repeat center ${({theme}) => theme.colors.fourth} url(../../icons/check-solid.svg);
  border: none;
  overflow: hidden;
  transform: rotateY(180deg);
  transition: 0.1s all ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "";
    border-radius: 100%;
    bottom: 0;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    transform: scale(0);
    transition: 0.5s all ease-in-out;
    width: 20%;
  }

  ${({ addedToCart }) =>
    addedToCart &&
    css`
      &::after {
        background: no-repeat #1c991c center
          url(../../icons/check-solid-white.svg);
        box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.334);
        overflow: hidden;
        transform: scale(0.6);
      }
      background: #41e642;
    `}

  ${({ unavailable }) =>
    unavailable &&
    css`
      background-image: none;
      &::before {
        content: "INDISPONÍVEL";
        color: white;
        font-size: 1.5em;
        background: center/100% #999999;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
      }
    `}
`;

export const ButtonBag = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.4em;

  &:hover {
    cursor: pointer;
  }
`;
