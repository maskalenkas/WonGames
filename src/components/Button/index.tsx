import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
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
