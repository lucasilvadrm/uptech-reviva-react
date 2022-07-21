import { useState } from "react";
import {
  ButtonBag,
  ButtonBagContent,
  ContentBackButton,
  ContentFrontButton,
  ProductButtonBag,
} from "./styles";

interface IButton {
  children: React.ReactNode;
  unavailable?: boolean;
  onClick?: () => void;
}

const Button = ({ children, unavailable, onClick }: IButton) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const setStyleAddedToCart = () => {
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <ProductButtonBag
      data-testid="productButtonBag"
      onClick={onClick}
    >
      <ButtonBagContent
        className="button-bag-content"
        onClick={() => {
          setAddedToCart(true);
          setStyleAddedToCart();
        }}
      >
        <ContentFrontButton>
          <ButtonBag>{children}</ButtonBag>
        </ContentFrontButton>
        <ContentBackButton
          data-testid="contentBackButton"
          addedToCart={addedToCart}
          unavailable={unavailable!}
        ></ContentBackButton>
      </ButtonBagContent>
    </ProductButtonBag>
  );
};

export default Button;
