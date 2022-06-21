import { StyledButton } from './styles';

interface Props {
  onClick: () => void,
  children?: React.ReactNode,
  quantity?: number
}

export function Button({ onClick, children, quantity }: Props) {
  return (
    <StyledButton quantity={quantity} onClick={onClick}>
      {children}
      <i className={`fa-solid fa-bag-shopping`}></i>
    </StyledButton>
  )
}