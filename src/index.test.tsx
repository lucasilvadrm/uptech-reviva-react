import Contact from 'components/Footer/Contact';
import { render, screen } from '@testing-library/react';

describe('Componente de contato', () => {
  test('exibe título', () => {
    render(<Contact />);
    expect(screen.getByText('Entre e contato')).toBeInTheDocument();
  })
})

// describe('Verificar funcionamento de função', () => {
//   it('exibir preço conforme moeda', () => {
//     const novoValor = formactPrice(69);

//     expect(novoValor).toBe("R$ 69,00");
//   })
// })