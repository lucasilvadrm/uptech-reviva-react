import { Imagem } from "./image";

export interface Product {
    id: number,
    tag: string,
    nome: string,
    preco: number,
    url: string,
    descricao: string,
    tamanhos_disponiveis: string[],
    quantidade_disponivel: number,
    quantidade_carrinho: number,
    imagens: Imagem[],
    thumbnail?: Imagem[]
}
