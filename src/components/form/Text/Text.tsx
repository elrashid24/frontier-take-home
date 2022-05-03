import * as S from './styles';
import { ChangeEvent, FormEvent } from 'react';
import { BaseField } from '../form';

type TextProps = BaseField & {};

export const Text = ({ onChange, value }: TextProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value || undefined);
  };
  console.log('text value', value);
  return (
    <S.Frame>
      <S.Input type="text" value={value ?? ''} onChange={handleChange} />
    </S.Frame>
  );
};
