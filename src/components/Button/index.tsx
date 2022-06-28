import { StyledButton } from './styles';

interface Props {
  onClick: () => void,
  children?: React.ReactNode,
  quantity?: number
}

export function Button({ onClick, children, quantity }: Props) {
  return (
    <StyledButton data-testid='test-button' disabled={quantity === 0} quantity={quantity} onClick={onClick}>
      {children}
      <i className={`fa-solid fa-bag-shopping`}></i>
    </StyledButton>
  )
}