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
**Props size**
*src/index*
  size?: 'small' | 'medium';

**Passando as props**
  <S.Wrapper size='medium' />

**Controller**
*src/styles*
const wrapperModifiers = {
  **small: (theme: DefaultTheme) => css`**
    font-size: ${theme.font.sizes.medium};
  `,
  **medium: (theme: DefaultTheme) => css`**
    font-size: ${theme.font.sizes.xlarge};
`};

**Size pode ter 2 valores, sendo assim, eu faço esse percurso.**
*src/styles*
 ${({size }) => css`

  **${!!size && wrapperModifiers[size](theme)}**
  `}




## 2
*PRimeiro eu faço o type dentro do index para o modificador receber*
**Index**
export type RibbonColors = 'primary' | 'secondary';

export type RibbonProps = {
  children: React.ReactNode;
  color?: RibbonColors;
};

**Depois eu vou utulizar no styles**
*src/Styles*
import { RibbonColors, RibbonProps } from '.';

const wrapperModifiers = {
  **color: (theme: DefaultTheme, color: RibbonColors) => css`**
    background-color: ${theme.colors[color]}; *Unsado a cor recebida, no controlador*
  `,
};

**Passando a color recebida para o controlador**
export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color }) => css`
    **${!!color && wrapperModifiers.color(theme, color)}**
  `}
`;
