import { Title } from '../styles';
import * as S from './styles';

export default function Newsletter() {
  return (
    <S.StyledNewsletter>
      <Title>Assine nossa newsletter</Title>
      <S.NewsletterSign>
        <S.NewsletterInput type="text" />
        <S.NewsletterButton>
          Assinar Já
        </S.NewsletterButton>
      </S.NewsletterSign>
    </S.StyledNewsletter>
  );
}