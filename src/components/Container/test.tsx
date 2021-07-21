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

    expect(container.firstChild).toMatchSnapshot();
  });
});
