import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Auth from '.';

describe('<Auth />', () => {
  it('deve renderizar logo, title, subtitle e children', () => {
    renderWithTheme(
      <Auth title="sign out">
        <input type="text" />
      </Auth>,
    );

    // Verifica se tem 2 logos
    expect(screen.getAllByLabelText(/Won games/i)).toHaveLength(2);

    // Verifica se o heading principal foi renderizado
    expect(
      screen.getByRole('heading', { name: /all your favorite games/i }),
    ).toBeInTheDocument();

    // Verifica se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform/i,
      }),
    ).toBeInTheDocument();

    // Verifica se tem o title do content
    expect(
      screen.getByRole('heading', {
        name: /sign out/i,
      }),
    ).toBeInTheDocument();

    // Verifica se o children esta sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
