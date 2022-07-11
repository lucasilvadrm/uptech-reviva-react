import { Title } from "../styles";
import * as SC from "./styles";

const Newsletter = () => {
  return (
    <SC.StyledNewsletter>
      <Title>Assine nossa newsletter</Title>
      <SC.NewsletterSign>
        <SC.NewsletterInput type="text" />
        <SC.NewsletterButton>Assinar Já</SC.NewsletterButton>
      </SC.NewsletterSign>
    </SC.StyledNewsletter>
  );
};

export default Newsletter;
