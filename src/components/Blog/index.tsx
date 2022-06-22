import * as S from './styles';

export default function Blog() {
  return (
    <S.StyledBlog>
      <S.BlogTitle>Na dúvida sobre combinar suas roupas e ficar Incrível? <br></br> Confira nossas dicas em
        nosso blog.
      </S.BlogTitle>
      <S.ArticleMain>
        <S.ContainerImageMain>
          <a href="/"><img src="images/products/blog-big.jpg" alt="mulher com roupa estilosa segurando uma bolsa" /></a>
        </S.ContainerImageMain>
        <S.Description>O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas
          mesmas peças no inverno e continuar na moda!</S.Description>
      </S.ArticleMain>
      <S.Article position='top'>
        <S.ContainerImage>
          <a href="/"><img src="images/products/blog-small-top.png" alt="mulher com roupa estilosa de cor lilás"></img></a>
        </S.ContainerImage>
        <S.Description>O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas
          mesmas peças no inverno e continuar na moda!</S.Description>
      </S.Article>
      <S.Article position='bottom'>
        <S.ContainerImage>
          <a href="/"><img src="images/products/blog-small-bottom.jpg" alt="mulher com roupa de cores claras usando óculos escuro"></img></a>
        </S.ContainerImage>
        <S.Description>O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas
          mesmas peças no inverno e continuar na moda!</S.Description>
      </S.Article>
    </S.StyledBlog>
  );
}