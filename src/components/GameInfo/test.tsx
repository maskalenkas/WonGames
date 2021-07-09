import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import GameInfo from '.';

const props = {
  title: 'My game Title',
  description: 'My game Description',
  price: '210,00',
};

describe('<GameInfo />', () => {
  it('Vai renderizar o componente', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />);

    // Esperar por um heading (title)
    expect(screen.getByRole('heading', { name: /My game title/i }));

    // Esperar por description
    expect(screen.getByText(/my game description/i)).toBeInTheDocument();

    // Esperar pelo price
    expect(screen.getByText(/\$210,00/)).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });

  it('Vai renderizar os botões', () => {
    renderWithTheme(<GameInfo {...props} />);

    // Esperar button add to cart
    expect(
      screen.getByRole('button', { name: /add to cart/i }),
    ).toBeInTheDocument();

    // Esperar button wish list
    expect(
      screen.getByRole('button', { name: /wishlist/i }),
    ).toBeInTheDocument();
  });
});
