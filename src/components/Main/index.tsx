import { ReactElement } from 'react';
import { StyledMain } from './styles';

interface Props {
  children?: ReactElement | ReactElement[]
}

export default function Main({ children }: Props) {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
}