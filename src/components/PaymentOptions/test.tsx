import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import PaymentOptions from '.';
import cards from './mock';

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />);

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument();
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument();
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument();
  });

  it('deve selecionar o cartão quando a label for clicada', async () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />);

    userEvent.click(screen.getByLabelText(/4325/));
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked();
    });
  });

  it('nao deve pertmitir handlePayment se o botão estiver desabilitado, e caso a label for clicada, deve permitir', async () => {
    const handlePayment = jest.fn();
    renderWithTheme(
      <PaymentOptions cards={cards} handlePayment={handlePayment} />,
    );

    // CLicando no botao que esta desabilitado
    userEvent.click(screen.getByRole('button', { name: /Buy now/i }));

    // Verificando se a função foi chamada no botão desabilitado
    await waitFor(() => {
      expect(handlePayment).not.toHaveBeenCalled();
    });

    // Vai clicar no label e habilitar o botão
    userEvent.click(screen.getByLabelText(/4325/));

    // Vai clicar no botão que esta habilitado
    userEvent.click(screen.getByRole('button', { name: /Buy now/i }));

    // Vai verificar se a função do botão é chamada
    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalledTimes(1);
    });
  });
});
