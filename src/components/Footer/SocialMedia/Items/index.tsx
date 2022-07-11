import Link from "next/link";
import Image from "next/image";
import { Icons } from "types/icons";
import { SocialMediaItem } from "./styles";

const ItemsMedia = (icon: Icons) => {
  return (
    <SocialMediaItem>
      <Link href={icon.link} target="blank">
        <a>
          <figure>
            <img src={icon.urlIcon} alt={icon.alt} />
          </figure>
        </a>
      </Link>
    </SocialMediaItem>
  );
};

export default ItemsMedia;
