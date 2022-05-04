import * as S from './styles';
import { ChangeEvent, FormEvent } from 'react';
import { BaseField } from '../form';
import { useState } from 'React';

type TextProps = BaseField & {};

export const Text = ({ onChange, value, options }: TextProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value || undefined);
  };
  return (
    <S.Frame>
      <S.Input
        type="text"
        value={value ?? ''}
        onChange={handleChange}
        // @ts-ignore
        placeholder={options && options.placeholder}
      />
    </S.Frame>
  );
};
