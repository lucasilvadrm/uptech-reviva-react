import { LogoSubtitle, LogoTitle, StyledLogo } from './styles';

interface Props {
  mode?: string
}

export default function Logo({ mode }: Props) {
  return (
    <StyledLogo mode={mode}>
      <LogoTitle>Reviva Fashion</LogoTitle>
      <LogoSubtitle>by RCHLO</LogoSubtitle>
    </StyledLogo>
  )
}