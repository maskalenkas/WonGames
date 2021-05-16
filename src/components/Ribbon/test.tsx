import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best seller/i)).toBeInTheDocument();
  });

  it('should render with the primary color', () => {
    renderWithTheme(<Ribbon>Best seller</Ribbon>);

    expect(screen.getByText(/Best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5',
    });
  });
});
