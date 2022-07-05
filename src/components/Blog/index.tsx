import * as SC from "./styles";
import Link from "next/link";

const Blog = () => {
  return (
    <SC.StyledBlog>
      <SC.BlogTitle>
        Na dúvida sobre combinar suas roupas e ficar Incrível? <br></br> Confira
        nossas dicas em nosso blog.
      </SC.BlogTitle>
      <SC.ArticleMain>
        <SC.ContainerImageMain>
          <Link href={"/"}>
            <a>
              <img
                src="/images/products/blog-big.jpg"
                alt="mulher com roupa estilosa segurando uma bolsa"
              />
            </a>
          </Link>
        </SC.ContainerImageMain>
        <SC.Description>
          O que fazer com o look que usou no carnaval? Confira já como fazer uso
          dessas mesmas peças no inverno e continuar na moda!
        </SC.Description>
      </SC.ArticleMain>
      <SC.Article position="top">
        <SC.ContainerImage>
          <Link href={"/"}>
            <a>
              <img
                src="/images/products/blog-small-top.png"
                alt="mulher com roupa estilosa de cor lilás"
              />
            </a>
          </Link>
        </SC.ContainerImage>
        <SC.Description>
          O que fazer com o look que usou no carnaval? Confira já como fazer uso
          dessas mesmas peças no inverno e continuar na moda!
        </SC.Description>
      </SC.Article>
      <SC.Article position="bottom">
        <SC.ContainerImage>
          <Link href={"/"}>
            <a>
              <img
                src="/images/products/blog-small-bottom.jpg"
                alt="mulher com roupa de cores claras usando óculos escuro"
              />
            </a>
          </Link>
        </SC.ContainerImage>
        <SC.Description>
          O que fazer com o look que usou no carnaval? Confira já como fazer uso
          dessas mesmas peças no inverno e continuar na moda!
        </SC.Description>
      </SC.Article>
    </SC.StyledBlog>
  );
};

export default Blog;
