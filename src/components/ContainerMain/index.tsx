import { ReactNode } from "react";
import { StyledMain } from "./styles";

interface Props {
  children?: ReactNode;
}

export default function ContainerMain({ children }: Props) {
  return <StyledMain>{children}</StyledMain>;
}
