<!-- https://dev.to/busypeoples/notes-on-typescript-pick-exclude-and-higher-order-components-40cp -->
## No arquivo de style exisE alguns jeitos de pegar props:

# 1

**Esse eu utilizei por conta que hasIcon é passado e CRIADO logo no wrapper. O meu componente não recebe isso, apenas o styledComponent**

**src/index**
export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  icon?: JSX.Element
  children: string
}

const Button = ({ children, icon, size = 'medium' }: ButtonProps) => (
  <S.Wrapper size={size} hasIcon={!!icon}> 
      {icon}
      {!!children && <span>{children}</span>}
  </S.Wrapper>
}

**src/styles**
*Vai pegar apenas size e a outra prop*
type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | ' alguma outra props que queira pegar'
>

*Depois só utiliza no wrapper*

**OU**

*Vai pegar tudo, execto size e a outra prop*
Type WrapperProps = { hasIcon: boolean } & exclude
<ButtonProps, 
  'size' | 'alguma outra'> 


*Utilizandoa as props pega*
export const Wrapper = styled.button<WrapperProps>` 

**No mas, eu só utilizei a primeira abordagem por conta que eu criei uma prop que não existe dentro de buttonProps. Para utlizar a de button, é facil;**

export const Wrapper = styled.button<ButtonProps>` 



## 2 exemplo, pegando diretamente dentro sem criar type

*src*
export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: labelColorTypes;
};

**Pegando apenas a chave labelColor dentro de CheckBoxProps**
*styles*
export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`;
