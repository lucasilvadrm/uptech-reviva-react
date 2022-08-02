import styled, { css } from "styled-components";

export const StyledBlog = styled.section`
  width: 100%;
  height: 54rem;
  margin-top: 6rem;
  margin-bottom: 6rem;
  display: grid;
  column-gap: 2.5rem;
  row-gap: 3rem;
  column-gap: 6rem;
  grid-template-rows: 4rem 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "blog__title blog__title"
    "article-big article-small--top"
    "article-big article-small--bottom";

    @media screen and (max-width: 794px) {
      display: flex;
      flex-direction: column;
      height: auto;
    }
`;

export const BlogTitle = styled.h2`
  grid-area: blog__title;
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: ${({theme}) => theme.colors.tertiary};
`;

export const ArticleMain = styled.article`
  width: 100%;
  grid-area: article-big;
`;

interface Position {
  position: string
}

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  ${({ position }: Position) => {

    switch (position) {
      case 'top':
        return css`
          grid-area: article-small--top;
        `
      case 'bottom':
        return css`
          grid-area: article-small--bottom;
        `;
      default:
        return
    }
  }}
`;

export const ContainerImageMain = styled.div`
  width: 100%;
  height: 40rem;
  background-color: #C4C4C4;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerImage = styled.div`
  background-color: #C4C4C4;
  min-width: 50%;
  margin-right: 1rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Description = styled.p`
  font-size: 1.8rem;
  text-align: justify;
`;