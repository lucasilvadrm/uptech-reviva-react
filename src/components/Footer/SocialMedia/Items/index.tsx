import { Icons } from "types/icons";
import { SocialMediaItem } from "./styles";

export const ItemsMedia = (icon: Icons) => {
  return (
    <SocialMediaItem>
      <a href={icon.link} target="blank">
        <figure><img src={icon.urlIcon} alt={icon.alt}></img></figure>
      </a>
    </SocialMediaItem>
  );
}