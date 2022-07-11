import Link from "next/link";
import Logo from "../Logo";
import * as S from "./styles";

export default function Banner() {
  return (
    <Link href={"/"}>
      <S.StyledBanner>
        <S.BannerText>
          Fique por dentro de tudo que há de novidade no mundo da moda!
          <br></br>Baixe já nosso manual de moda!
        </S.BannerText>
        <Logo mode="banner" />
      </S.StyledBanner>
    </Link>
  );
}
