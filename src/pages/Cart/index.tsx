import Footer from "components/Footer";
import Header from "components/Header";
import Main from "components/Main";
import Navbar from "components/Nav";
import Search from "components/Search";
import { Product } from "types/product";
import './Cart.module.scss';
import { Wallet } from "./Wallet";

export default function Cart() {

  const cartTemp: Product[] = [{
    id: 1,
    tag: 'releases',
    nome: 'Camisa Cropped Feminina com Linho Animal Print Verde AK by Riachuelo',
    url: '',
    preco: 139.90,
    descricao: 'Clássica e atemporal, mas repaginada, a Camisa Cropped Feminina com Linho Animal Print Verde AK by Riachuelo é a escolha ideal para looks estilosos e fashionistas! Confeccionada em viscose e linho, a peça apresenta modelagem cropped e padronagem de zebra. Combine com calça pantalona e tênis para um visual despojado e fashionista!',
    tamanhos_disponiveis: ['P', 'M', 'G'],
    quantidade_disponivel: 10,
    quantidade_carrinho: 3,
    imagens: [{
      url: 'images/products/lancamento-1.png',
      descricao: 'Imagem grande de uma Camisa Cropped Feminina'
    }],
  },
  {
    id: 3,
    tag: 'releases',
    nome: 'Vestido Midi Feminino Evasê Uma Maria Floral Preto Pool by Riachuelo',
    url: '',
    preco: 199.90,
    descricao: 'O Vestido Midi Feminino Evasê Uma Maria Floral Preto Pool by Riachuelo é característico por seus recortes com efeitos de babados, ideal para compor looks com um toque romântico. Cheio de conforto, é confeccionado em malha com mangas 3/4, uma ótima pedida para os dias mais quentes. O modelo possui detalhe de recortes, que leva mais movimento ao look. Inspire-se!',
    tamanhos_disponiveis: ['P', 'M', 'G'],
    quantidade_disponivel: 7,
    quantidade_carrinho: 4,
    imagens: [{
      url: 'images/products/lancamento-3.png',
      descricao: 'imagem grande Vestido Midi Feminino Evasê Uma Maria Floral Preto Pool'
    }],
  }
  ];

  return (
    <>
      <Header />
      <Navbar />
      <Main>
        <Search />
        <Wallet cart={cartTemp} />
      </Main>
      <Footer />
    </>
  );
}