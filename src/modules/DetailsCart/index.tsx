import { DefaultPage } from "modules/DefaultPage";
import React from "react";
import { Product } from "types/product";
import CartTotal from "./components/CartTotal";
import WalletList from "./components/ProductsInCart";
import * as SC from "./styles";

interface CartProps {
  cart: Product[];
}

export const ContainerCart = ({ cart }: CartProps) => {
  return (
    <DefaultPage>
      <SC.StyledWallet>
        <SC.WalletTitle>Minha Sacola</SC.WalletTitle>
        <CartTotal />
        <WalletList products={cart} />
      </SC.StyledWallet>
    </DefaultPage>
  );
};
