## After

## Debugando:

const { debug, container } = renderWithTheme(<Button> ...)

debug(container)

**Esta renderizando:**
**O elemento wrapper é um h2, por isso o heading**
const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
);

it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after',***
      },
    );
  });


  ## MEdia

  **Esta renderizando:**
  **Esta pegando o pai através do svg**
      <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 158 48"
      role="img"
      aria-label="Won Games"
    >*

   it('should render a bigger logo without text on mobile if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)',
      },
    );
  });

  ## Buscando um atributo com roles

  **O que são roles**
  ## https://testing-library.com/docs/queries/byrole/


  **O fugitivo**
  *O aria-hidden ta true*
        <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
  **A busca**
  const fullMenuElement = screen.getByRole('navigation', { hidden: true });

  **O fugitivo:**
     <S.MenuFull aria-hidden="true"  isOpen={isOpen} />
  **A busca:**
     expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');

  **O fugitivo**    
    <MenuIcon aria-label="Open menu" />
  **A busca**
    fireEvent.click(screen.getByLabelText(/Open menu/i));


  ### Buscando um item inexistente 

  *Os getBymétodos padrão geram um erro quando não conseguem encontrar um elemento, então se você quiser fazer uma afirmação de que um elemento não está presente no DOM, você pode usar queryByAPIs:*

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/explore/i)).toBeInTheDocument();

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();


  ### Renderizando o wrapper
    it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);
    // Renderizando o wrapper
    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    });
  });


  ### Usando styledrules
*Vai ser mudado a partir de S.Content, e não esta buscando o S.concent em si.*
**Para fixar, só imaginar um hover ao inves do Content**

*Classe modificadora*
export const WrapperModifiers = {
  right: () => css`
  grid-template-areas: 'floatimage content';
  ${Content} { **Esta modificando a partir do Content. Poderia ser um hover por exemplo.**
    text-align: right;
  }

*Teste*
**Esta testando se tem um modificador de content dentro do wrapper que vai deixar o text-align:right**
expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
**Poderia ser ":hover"** modifier: `${S.Content}`,
  });

*Wrapper selecionado*
export const Wrapper = styled.section<WrapperProps>`
      **... Codigo ...**
      **... Codigo ...**
      **... Codigo ...**
      **... Codigo ...**
      **... Codigo ...**

**CHamando o modificador de content dentro do wrapper:**        
    ${WrapperModifiers[alignment!]()} 
  `}
`;


### Trabalhando com evento de click e spy
it('should call onFav method when Favorite is clicked', () => {
    // Spy é um cara que vai ficar olhando o metodo. Toda vez que o metodo for chamado, ele vai me avisar que aquilo foi chamado
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toBeCalled();
  });