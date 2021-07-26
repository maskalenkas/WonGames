import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import CartList from '.';
import mockItems from './mock';

describe('<CartList />', () => {
  it('deve renderizar o componente', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItems} total="321" />,
    );

    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getByText(/321/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
