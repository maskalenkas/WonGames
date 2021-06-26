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

# Testes
renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

  **input a partir da Role**
    expect(screen.getByRole('checkbox')).toBeInTheDocument();

  **input a partir da label associada**
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

  *O htmlFor é transformado em for*
  **a label a partir do texto dela**
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });
