import * as SC from "./styles";

interface Props {
  mode?: string;
}

export default function Logo({ mode }: Props) {
  return (
    <SC.StyledLogo mode={mode}>
      <SC.LogoTitle>Reviva Fashion</SC.LogoTitle>
      <SC.LogoSubtitle>by RCHLO</SC.LogoSubtitle>
    </SC.StyledLogo>
  );
}
