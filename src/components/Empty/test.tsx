import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Empty, { EmptyProps } from '.';

const props: EmptyProps = {
  title: 'A simple title',
  description: 'A simple description',
  hasLink: true,
};

describe('<Empty />', () => {
  it('deve renderizar corretamente', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />);

    expect(
      screen.getByRole('image', {
        name: /a gamer in couch playing videogame/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /a simple title/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /go back to store/i,
      }),
    ).toHaveAttribute('href', '/');

    expect(container.parentElement).toMatchSnapshot();
  });

  it('não deve renderizar link se o hasLink for falso', () => {
    renderWithTheme(<Empty {...props} hasLink={false} />);

    expect(
      screen.queryByRole('link', {
        name: /go back to store/i,
      }),
    ).not.toBeInTheDocument();
  });
});
