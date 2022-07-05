import { icons } from "components/Footer/SocialMedia/icons";
import { Title } from "../styles";
import ItemsMedia from "./Items";
import * as SC from "./styles";

export default function SocialMedia() {
  return (
    <SC.StyledSocialMedia>
      <Title>Siga-no nas redes sociais</Title>
      <SC.SocialMediaList>
        {icons.map((icon, index) => (
          <ItemsMedia
            key={index}
            urlIcon={icon.urlIcon}
            link={icon.link}
            alt={icon.alt}
          />
        ))}
      </SC.SocialMediaList>
    </SC.StyledSocialMedia>
  );
}
