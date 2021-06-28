import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';
import theme from 'styles/theme';

import Radio from '.';

describe('<Radio />', () => {
  it('Vai testar se o label renderiza com label, se passada com  a prop labelFor', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" labelFor="check" value="anyValue" />,
    );

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.white });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Vai testar se o radio renderiza com uma label preta usando a prop labelCOlor', () => {
    renderWithTheme(<Radio label="Radio" labelColor="black" />);

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.black });
  });

  it('Vai testar se o Radio renderiza sem label, se não passada', () => {
    renderWithTheme(<Radio />);

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument();
  });

  it('Vai testar a chamada do Radio após o clique', async () => {
    const onCheck = jest.fn();
    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
      />,
    );

    // Verificando se a função passada não é chamada no inicio, sem clique
    expect(onCheck).not.toHaveBeenCalled();

    // Verificando se a função é chamada após o clique
    userEvent.click(screen.getByLabelText('Radio'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    // Verificando se a função foi chamada com o o value passado
    expect(onCheck).toHaveBeenCalledWith('anyValue');
  });

  it('Vai testar se o Radio esta acessivel com Tab', () => {
    renderWithTheme(<Radio label="Radio" labelFor="Radio" />);

    const radio = screen.getByLabelText('Radio');

    // Vai verificar se no inicio de tudo é a pagian que esta em foco. Sempre é ela que esta em foco quando inicia
    expect(document.body).toHaveFocus();

    // Vai testar se o foco foi para o Radio
    userEvent.tab();
    expect(radio).toHaveFocus();
  });
});
