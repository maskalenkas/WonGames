## Envia o estado se esta marcado ou não

## Formas de pegaR os inputs/label:

# Render
const Checkbox = () => (
  <S.Wrapper>
    <input type="checkbox" id={labelFor} />
    {!!label && (
      <S.Label htmlFor={labelFor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
);

# Testes para pegar input ou label
renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

  **input a partir da Role**
    expect(screen.getByRole('checkbox')).toBeInTheDocument();

  **input a partir da label associada**
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

  *O htmlFor é transformado em for*
  **a label a partir do texto dela**
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });



  ## Testando evento de cliques e chamadas de função
  *PRECISA SER ASYNC A FUNÇÃO, POIS TRABALHA COM STATES*
    it('Vai testar a chamada de função ao clicar', async () => {
        // Função mokada. Só serve para saber se const onCHeck foi chamado ou não
        const onCheck = jest.fn();

        renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} />);

        //Eu espero que ela não seja chamada no inicio
        expect(onCheck).not.toHaveBeenCalled();

        // Eu espero que quando apertado, ele tenha sido chamado apenas 1 vez
        userEvent.click(screen.getByRole('checkbox'));
        await waitFor(() => {
          expect(onCheck).toHaveBeenCalledTimes(1);
        });
      });