import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
  });

  it('should handle the open/close menu', () => {
    renderWithTheme(<Menu />);

    // Selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    // Verificar se o menu esta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    // Clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/Open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    // CLicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByText(/log in now/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
  });

  it('should not show register box when loggeout out', () => {
    renderWithTheme(<Menu username="teste" />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/explore/i)).toBeInTheDocument();

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
  });
});
