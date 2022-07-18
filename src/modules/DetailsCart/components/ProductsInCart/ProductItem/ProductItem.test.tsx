import { render, screen } from "@testing-library/react"
import { ProductItem } from ".";
import userEvent from "@testing-library/user-event";

jest.mock('contexts/CartContext', () => ({
  useCart: () => { return { cart: propsMock, updateProductInCart: jest.fn() } }
}))

const propsMock = [{
  id: 1,
  tag: 'releases',
  nome: 'Camisa Cropped Feminina com Linho Animal Print Verde AK by Riachuelo',
  url: '',
  preco: 139.90,
  descricao: 'Clássica e atemporal, mas repaginada, a Camisa Cropped Feminina com Linho Animal Print Verde AK by Riachuelo é a escolha ideal para looks estilosos e fashionistas! Confeccionada em viscose e linho, a peça apresenta modelagem cropped e padronagem de zebra. Combine com calça pantalona e tênis para um visual despojado e fashionista!',
  tamanhos_disponiveis: ['P', 'M', 'G'],
  quantidade_disponivel: 10,
  quantidade_carrinho: 0,
  imagens: [{
    url: 'images/products/lancamento-1.png',
    descricao: 'Imagem grande de uma Camisa Cropped Feminina'
  }],
  thumbnail: [{
    url: 'images/products/lancamento-1.png',
    descricao: 'Imagem pequena de uma Camisa Cropped Feminina'
  },
  {
    url: 'images/products/lancamento-1-part2.png',
    descricao: 'Imagem pequena de uma Camisa Cropped Feminina'
  },
  {
    url: 'images/products/lancamento-1-part3.png',
    descricao: 'Imagem pequena de uma Camisa Cropped Feminina'
  },
  {
    url: 'images/products/lancamento-1-part4.png',
    descricao: 'Imagem pequena de uma Camisa Cropped Feminina'
  }
  ]
}]

describe('Teste do input', () => {
  it('testando se o input incrementa ou decrementa a quantidade de produtos no carrinho', () => {
    render(<ProductItem itemCart={propsMock[0]} />);

    const input = screen.getByTestId('test-input');

    userEvent.type(input, '1');

    expect(input).toHaveValue(1);
  })
})