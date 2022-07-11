import Logo from "../Logo";
import Contact from "./Contact";
import MenuItem from "./MenuItem";
import Newsletter from "./Newsletter";
import SocialMedia from "./SocialMedia";
import { StyledFooter } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo mode="footer" />
      <MenuItem />
      <SocialMedia />
      <Contact />
      <Newsletter />
    </StyledFooter>
  );
};

export default Footer;
