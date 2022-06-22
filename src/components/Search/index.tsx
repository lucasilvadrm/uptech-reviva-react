import * as S from './styles';

export default function Search() {
  return (
    <S.StyledSearch>
      <S.SearchInput
        type="text"
        placeholder="Faça sua busca aqui se já souber o que está procurando..." />
      <S.SearchButton>
        <i aria-label="ícone de pesquisa" className={`fa-solid fa-magnifying-glass`}></i>
      </S.SearchButton>
    </S.StyledSearch>
  );
} 