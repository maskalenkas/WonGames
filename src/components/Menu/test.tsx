import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
  });
});
