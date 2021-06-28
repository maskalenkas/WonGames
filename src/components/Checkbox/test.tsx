import { render, screen, waitFor } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import userEvent from '@testing-library/user-event';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" />,
    );
    // Formas de pegas os inputs/label:

    // input a partir da Role
    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    // input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

    // O htmlFor é transformado em for
    // a label a partir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Vai testar se o Checkbox renderiza sem label, caso ela não seja passada', () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByText('checkbox label')).not.toBeInTheDocument();
  });

  it('vai testar se o Checkbox é renderizado com uma label preta com a prop labelColor', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />,
    );

    expect(screen.getByText('checkbox label')).toHaveStyle({
      color: theme.colors.black,
    });
  });

  it('Vai testar se o Checkbox é marcado ao clicar', async () => {
    // Função mokada. Só serve para saber se const onCHeck foi chamado ou não
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} />);

    // Verificando se a função passada não é chamada no inicio, sem clique
    expect(onCheck).not.toHaveBeenCalled();

    // -- Quando se trabalha com states, é usado o await
    // Verificando se a função passada é chamda apenas uma vez
    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    // -- onCheck(status); (status esta true logo no inicio)
    // Verificando se ele foi chamado com true após clicado
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('Vai testar se o Checkbox inicia marcado com a prop isChecked', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} isChecked />);

    expect(onCheck).not.toHaveBeenCalled();

    // Verificando se a função é chamada após o clique
    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    // -- onCheck(status); (status esta false logo no inicio, pelo isChcked)
    // Verificando se ele foi chamado com false após clicado
    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('Vai testar se o checkbox esta acessivel com o TAB', async () => {
    renderWithTheme(<Checkbox label="checkbox" labelFor="checkbox" />);

    // Vai verificar se no inicio de tudo é a pagian que esta em foco. Sempre é ela que esta em foco quando inicia
    expect(document.body).toHaveFocus();

    // Vai testar se o foco foi para o checkbox
    userEvent.tab();
    expect(screen.getByLabelText('checkbox')).toHaveFocus();
  });
});
