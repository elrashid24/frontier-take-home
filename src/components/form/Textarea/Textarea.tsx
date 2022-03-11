import * as S from './styles';
import { ChangeEvent, FormEvent } from 'react';
import { BaseField } from '../form';

type TextareaProps = BaseField & {};

export const Textarea = ({ onChange, value }: TextareaProps) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value || undefined);
  };

  return (
    <S.Frame>
      <S.Textarea onChange={handleChange} value={value ?? ''} />
    </S.Frame>
  );
};
