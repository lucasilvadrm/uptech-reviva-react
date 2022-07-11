import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductListItem from ".";

const propsMock = [
  {
    id: 1,
    tag: "releases",
    nome: "Camisa Cropped Feminina com Linho Animal Print Verde AK by Riachuelo",
    url: "",
    preco: 139.9,
    descricao:
      "Clássica e atemporal, mas repaginada, a Camisa Cropped Feminina com Linho Animal Print Verde AK by Riachuelo é a escolha ideal para looks estilosos e fashionistas! Confeccionada em viscose e linho, a peça apresenta modelagem cropped e padronagem de zebra. Combine com calça pantalona e tênis para um visual despojado e fashionista!",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 10,
    quantidade_carrinho: 0,
    imagens: [
      {
        url: "images/products/lancamento-1.png",
        descricao: "Imagem grande de uma Camisa Cropped Feminina",
      },
    ],
    thumbnail: [
      {
        url: "images/products/lancamento-1.png",
        descricao: "Imagem pequena de uma Camisa Cropped Feminina",
      },
      {
        url: "images/products/lancamento-1-part2.png",
        descricao: "Imagem pequena de uma Camisa Cropped Feminina",
      },
      {
        url: "images/products/lancamento-1-part3.png",
        descricao: "Imagem pequena de uma Camisa Cropped Feminina",
      },
      {
        url: "images/products/lancamento-1-part4.png",
        descricao: "Imagem pequena de uma Camisa Cropped Feminina",
      },
    ],
  },
];

jest.mock("contexts/CartContext", () => ({
  useCart: () => {
    return { cart: propsMock, addProductInCart: jest.fn() };
  },
}));

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Testes no componente ProductListItem", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("teste renderização e função de click", () => {
    render(<ProductListItem item={propsMock[0]} />);
    const image = screen.getByRole("img", {
      name: /imagem grande de uma camisa cropped feminina/i,
    });

    userEvent.click(image);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/details/1", {
      state: { product: propsMock[0] },
    });
  });

  it("Encontrar botão que adicona no carrinho", () => {
    render(<ProductListItem item={propsMock[0]} />);

    const Botao = screen.getByRole("button", {
      name: /POR NA SACOLA/i,
    });

    userEvent.click(Botao);
    expect(Botao).toBeInTheDocument();
  });
});
