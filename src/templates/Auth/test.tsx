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

    // Verifica se tem o subtitle

    // Verifica se tem o title do content

    // Verifica se o children esta sendo renderizado
  });
});
