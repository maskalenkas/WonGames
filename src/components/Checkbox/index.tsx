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
  // Recebendo um valor ja presente em input, porem explicitamente
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

// Adicionando varios atributos do proprio Input com a simples utilização da linha } & InputHTMLAttributes<HTMLInputElement>;
const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props // Passando os atributos do InputHTML como type, change e etc...
}: CheckboxProps) => {
  // Controlado
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
      {/* onChange, type,id, checked e value são valores padrões pegos com HtmlAtributtes*/}
      {/* COm ...props dentro, o que for passado no story por exemplo de input, ficara no input */}
      {/* O que eu colocar em props, não sera usado em styles */}
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
