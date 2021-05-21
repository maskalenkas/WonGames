import { render, screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import { Container } from '.';

describe('<Container />', () => {
  it('should render the heading', () => {
    const { debug, container } = renderWithTheme(<Container></Container>);

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem);
        padding-right: calc(3.2rem);
      }

      <div
        class="c0"
      />
    `);
  });
});
