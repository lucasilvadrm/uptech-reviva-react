import { Title } from '../styles';
import * as S from './styles';

export default function Contact() {
  return (
    <S.StyledContact>
      <Title>Entre e contato</Title>
      <ul>
        <S.ContactItem>Contato</S.ContactItem>
        <S.ContactItem><a href="/">reviva@rchio.com.br</a></S.ContactItem>
        <S.ContactItem>
          <a href="https://web.whatsapp.com/">WhatsApp</a>
          <i aria-label="icone whatsapp" className="fa-brands fa-whatsapp"></i>
        </S.ContactItem>
        <S.ContactItem>
          <a href="/">11 2123-3321</a>
          <i aria-label="ícone telefone" className="fa-solid fa-phone"></i>
        </S.ContactItem>
      </ul>
    </S.StyledContact>
  );
}