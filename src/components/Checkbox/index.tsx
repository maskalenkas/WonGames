import { useState } from 'react';
import { InputHTMLAttributes } from 'react';
import * as S from './styles';

type labelColorTypes = 'white' | 'black';

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  label?: string;
  labelFor?: string;
  labelColor?: labelColorTypes;
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

// Impedindo de labelfor ser undefined
// Renderização de label só acontece se ela for passada
// Adicionando varios atributos do proprio Input com a simples utilização da linha } & InputHTMLAttributes<HTMLInputElement>;
const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked;

    setChecked(status);
    if (onCheck) {
      onCheck(status);
    }
  };

  return (
    <S.Wrapper>
      {/* O onchange padrão vai chamar o meu onChange para marcar e desmarcar, mesma coisa com checked */}
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default Checkbox;
