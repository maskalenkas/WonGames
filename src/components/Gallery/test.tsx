import 'match-media-mock';

import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import mockItems from './mock';

import Gallery from '.';

describe('<Gallery />', () => {
  it('deve testar se esta as imagens estão sendo renderizadas como botões', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    ).toHaveAttribute('src', mockItems[0].src);

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i }),
    ).toHaveAttribute('src', mockItems[1].src);
  });

  it('deve abrir o modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    // selecionar o nosso modal
    const modal = screen.getByLabelText('modal');

    // verificar se o modal tá escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });

    // clicar na imagem e verificar se o modal foi aberto
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it('deve fechar o modal se o overlay ou botão for clicado', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    // selecionar o nosso modal
    const modal = screen.getByLabelText('modal');

    // clicar na imagem e verificar se o modal foi aberto
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });

    // clica no x e verifica se ele foi fechado
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('deve fechar o modal ao apertar o ESC', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />,
    );

    // selecionar o nosso modal
    const modal = screen.getByLabelText('modal');

    // clicar na imagem e verificar se o modal foi aberto
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });

    // clica no esc e verifica se foi fechado
    fireEvent.keyUp(container, { key: 'Escape' });
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it('deve abrir o modal na imagem selecionada', async () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />,
    );

    // selecionar o nosso modal
    const modal = screen.getByLabelText('modal');

    // Clica na thumbnail
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i }),
    );

    //  Espero que a imagem da thumbnail seja aberta
    // a estrutura é <div slick-active><div><img/></div></div>
    const img = await screen.findByRole('img', { name: /Gallery image 2/i });
    expect(img.parentElement?.parentElement).toHaveClass('slick-active');
  });
});
