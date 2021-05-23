#### /Button

## Fazendo com que caso um uma props( ou compoennte ) não seja passado, mude a estilização no styles

**É muito util, pois caso seja passada um icone, os estilos vão mudar para uma renderização melhor**
const Button = ({
  icon,
}: ButtonProps) => (
  *Hasicon é criado diretamente no wrapper,e retorna false caso o icone não seja passado dentro do parametro*
  <S.Wrapper hasIcon={!!icon}> 
    {icon}
  </S.Wrapper>
);


## Fazendo um percurso de decisões em estilização.

## O primeiro jeito é para quando tem mais de uma diferença entre as 2 decisões, o segundo é para quando é totalmente igual, só muda uma coisa

## 1
**Passando as props**
  <S.Wrapper size='medium' />

**Props size**
*src/index*
  size?: 'small' | 'medium';

**Depois eu vou chamar direto a função**
*src/styles*
 ${({size }) => css`
  **${!!size && wrapperModifiers[size](theme)}**
`}

**e vai chamar a função dependendo do que vier no [size]**
*src/styles*
const wrapperModifiers = {
  **small: (theme: DefaultTheme) => css`**
    font-size: ${theme.font.sizes.medium};
  `,
  **medium: (theme: DefaultTheme) => css`**
    font-size: ${theme.font.sizes.xlarge};
    color: red;
`};




## 2
**Passando as props**
  <S.Wrapper color='primary' />

**props color**
*src/index*
export type RibbonProps = {
  color?: 'primary' | 'secondary';
};

**Depois eu vou passar para o controlador via parametro**
*src/Styles*
export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color }) => css`
    **${!!color && wrapperModifiers.color(theme, color)}**
  `}
`;

**E ele vai decidir o que fazer com esse parametro**
*src/Styles*
const wrapperModifiers = {
  **color: (theme: DefaultTheme, color: RibbonColors) => css`**
    background-color: ${theme.colors[color]}; *Unsado a cor recebida, no controlador*
  `,
};
