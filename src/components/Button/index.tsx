import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';
import * as S from './styles';

//https://www.saltycrane.com/cheat-sheets/typescript/react/latest/

// Componente pode receber href, onclick...
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
  minimal?: boolean;
  as?: React.ElementType;
} & ButtonTypes;

// ...props vai ter as, que por sua vez pode ter a e o restante dos atribtos dele
/* href tem que chegar em um a. Ele vai para o <button as="a"> > vai passar o href para o wrapper que por sua vez vai receber um as.*/
// Esta retornando um forward ref

// FUnciona assim:
//<Link href="/sign-in" passHref>
// <Button as="a">Sign in</Button>
//</Link>

//Depois disso o wrapper vai receber essa Href

// O passHref vai chegar aqui e vai ser tratado, jogando para o wrapper que é um a.
const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    ...props
  },
  ref,
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {icon}

    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default forwardRef(Button);
