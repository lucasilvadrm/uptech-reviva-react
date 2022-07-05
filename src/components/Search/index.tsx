import * as SC from './styles';

export default function Search() {
  return (
    <SC.StyledSearch>
      <SC.SearchInput
        type="text"
        placeholder="Faça sua busca aqui se já souber o que está procurando..." />
      <SC.SearchButton>
        <i aria-label="ícone de pesquisa" className={`fa-solid fa-magnifying-glass`}></i>
      </SC.SearchButton>
    </SC.StyledSearch>
  );
} 