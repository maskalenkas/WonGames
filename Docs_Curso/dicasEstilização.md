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

## 1 - Dependendo da prop, vai ter mais de uma diferença, que é a color.
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
    color: black; *A diferença*
    font-size: ${theme.font.sizes.medium};
  `,
  **medium: (theme: DefaultTheme) => css`**
    font-size: ${theme.font.sizes.xlarge};
    color: red; *A diferença*
`};




## 2 - independente da prop, vai ter só uma diferença, que é o font-size.
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



### SUBSTITUINDO ESTILO POR HERANÇA
export const texto = styled(HeadingStyles.Wrapper)`
  ${({ color }) => css` <--- Color é uma prop recebida por herança do Heading
    ${color === 'primary' &&
    css`
      color: green;
      margin-top: 100px;
    `}
  `}
`


### Fazendo um circuito de decisões quando é enviado algo alem de boolean para o style

# 1
**Index**
export type TextFieldProps = {
  *É error:string o que vai ser recebido no index, porem no style eu tenho que ter uma decisão caso isso seja preenchido*
  error?: string,
  disabled = false,
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({ error }: TextFieldProps) => {
  *Transformando a string em algo booleano, pois la vai ser recebido boolean, e não string*
  return <S.Wrapper disabled={disabled} error={!!error}></S.Wrapper>;
};

export default TextField;


**Style**

*Transformando error em boolean e pegando o restante que eu quero com pick*
type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean };

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${!!error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`;

# 2
**Index**
export type TextFieldProps = {
  *É error:string o que vai ser recebido no index, porem no style eu tenho que ter uma decisão caso isso seja preenchido*
  error?: string,
  disabled = false,
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({ error }: TextFieldProps) => {
  *Vou mandar a string independente do que seja*
  return <S.Wrapper disabled={disabled} error={error}></S.Wrapper>;
};

export default TextField;


**Style**

type WrapperProps = Pick<TextFieldProps, 'disabled' | 'error'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    *Transformando error em boolean*
    ${!!error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`;
