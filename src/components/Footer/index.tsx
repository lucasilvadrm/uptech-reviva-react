import Logo from '../Logo';
import Contact from './Contact';
import MenuItem from './MenuItem';
import Newsletter from './Newsletter';
import SocialMedia from './SocialMedia';
import { StyledFooter } from './styles';

export default function Footer() {
  return (
    <StyledFooter>
      <Logo mode='footer' />
      <MenuItem />
      <SocialMedia />
      <Contact />
      <Newsletter />
    </StyledFooter>
  )
}