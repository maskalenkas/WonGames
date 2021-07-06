import { render, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('deve renderizar os forms', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });

  it('deve renderizar o forgot password link', () => {
    renderWithTheme(<FormSignIn />);

    expect(
      screen.getByRole('link', { name: /forgot your password?/i }),
    ).toBeInTheDocument();
  });

  it('deve renderizar o texto do sign-up', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByText(/don´t have an account/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
  });
});
