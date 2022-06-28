import { icons } from 'components/Footer/SocialMedia/icons';
import { Title } from '../styles';
import { ItemsMedia } from './Items';
import * as S from './styles';

export default function SocialMedia() {
  return (
    <S.StyledSocialMedia>
      <Title>Siga-no nas redes sociais</Title>
      <S.SocialMediaList>
        {icons.map((icon, index) =>
          <ItemsMedia key={index} urlIcon={icon.urlIcon} link={icon.link} alt={icon.alt} />
        )}
      </S.SocialMediaList>
    </S.StyledSocialMedia>
  );
}