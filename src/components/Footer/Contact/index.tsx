import Link from "next/link";
import { Title } from "../styles";
import * as SC from "./styles";

const Contact = () => {
  return (
    <SC.StyledContact>
      <Title>Entre e contato</Title>
      <ul>
        <SC.ContactItem>Contato</SC.ContactItem>
        <SC.ContactItem>
          <Link href={'/'}>
            <a>reviva@rchio.com.br</a>
          </Link>
        </SC.ContactItem>
        <SC.ContactItem>
          <Link href={"https://web.whatsapp.com/"}>
            <a>WhatsApp</a>
          </Link>
          <i aria-label="icone whatsapp" className="fa-brands fa-whatsapp"></i>
        </SC.ContactItem>
        <SC.ContactItem>
          <Link href={'/'}>
            <a>11 2123-3321</a>
          </Link>
          <i aria-label="ícone telefone" className="fa-solid fa-phone"></i>
        </SC.ContactItem>
      </ul>
    </SC.StyledContact>
  );
};

export default Contact;
