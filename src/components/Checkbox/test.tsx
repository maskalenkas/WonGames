import { render, screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);
    // Formas de pegas os inputs/label:

    // input a partir da Role
    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    // input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

    // O htmlFor é transformado em for
    // a label a partir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('Vai verificar se a label NÃO é renderizada caso não seja passada', () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByText('checkbox label')).not.toBeInTheDocument();
  });

  it('vai renderizar uma label preta', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />,
    );

    expect(screen.getByText('checkbox label')).toHaveStyle({
      color: theme.colors.black,
    });
  });
});
