import * as S from './styles';

type labelColorTypes = 'white' | 'black';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: labelColorTypes;
};

// Impedindo de labelfor ser undefined
// Renderização de label só acontece se ela for passada
const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
}: CheckboxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} type="checkbox" />
    {!!label && (
      <S.Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
);

export default Checkbox;
