import { Product } from "types/product";

export function formatarPreco(preco: number, exibirMoeda: boolean): string {
    if (exibirMoeda) {
        return `R$ ${(preco).toFixed(2).replace('.', ',')}`;
    }

    return `${(preco).toFixed(2).replace('.', ',')}`;
}


export function verificaLocalStorage(estoque: Product[]): void {
    if (!localStorage.getItem('produtos') || !localStorage.getItem('carrinho')) {
        localStorage.setItem("produtos", JSON.stringify(estoque));
        localStorage.setItem('carrinho', JSON.stringify([]));
    }
}