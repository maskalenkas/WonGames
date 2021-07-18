import { render, screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import TextContent, { TextContentProps } from '.';

const props: TextContentProps = {
  title: 'Description',
  content: '<h1>content</h1>',
};

describe('<TextContent />', () => {
  it('vai renderizar o titulo e o conteudo', () => {
    renderWithTheme(<TextContent {...props} />);

    expect(
      screen.getByRole('heading', { name: /description/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /content/i }),
    ).toBeInTheDocument();
  });

  it('vai renderizar com o titulo e sem o conteudo', () => {
    renderWithTheme(<TextContent content={props.content} />);

    expect(
      screen.queryByRole('heading', { name: /description/i }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /content/i }),
    ).toBeInTheDocument();
  });

  it('vai renderizar ', () => {
    renderWithTheme(<TextContent {...props} />);

    // É dentro do wrapper que tem os estilos. ELe passa para os outros, mas é ele que tem os estilos
    const wrapper = screen.getByRole('heading', {
      name: /description/i,
    }).parentElement;

    expect(wrapper).toHaveStyle({ color: theme.colors.white });

    // Usando min-width pq é feito a partir do mobile
    expect(wrapper).toHaveStyleRule('color', theme.colors.black, {
      media: '(min-width: 768px)',
    });
  });
});
