import { getByLabelText, render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    const { container, debug } = renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" />,
    );

    // Esta pegando o input a partir do role
    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    // Esta pegando o input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

    // Esta pegando o label a  partir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');

    debug(screen.getByLabelText(/checkbox label/i));
  });

  it('should render without label', () => {
    const { container, debug } = renderWithTheme(<Checkbox />);

    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument();
  });

  it('should render with black label', () => {
    const { container, debug } = renderWithTheme(<Checkbox />);

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517',
    });
  });
});
