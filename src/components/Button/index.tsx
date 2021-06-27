import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

//https://www.saltycrane.com/cheat-sheets/typescript/react/latest/

// Componente pode receber href, onclick...
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

// ...props esta sendo utilizado para passar onclick, href e etc... (propriedades de button, caso o as = a)
// as é pego implicitamente mesmo com o pick<>, junto com as outras varias propriedades
export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
  minimal?: boolean;
  as?: React.ElementType;
} & ButtonTypes;

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
