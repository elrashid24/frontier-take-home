import React from 'react';
import { BaseField } from '../form';
import * as S from './styles';

type BoolProps = {
} & BaseField;

export const Bool = ({ onChange, value }: BoolProps) => {
  const boolOptions = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  const handleClick = (value: boolean) => () => {
    onChange(value)
  };

  return (
    <S.YesNo>
      {boolOptions.map((o, i) => (
        <S.Option key={i} onClick={handleClick(o.value)} $active={value === o.value}>
          {o.label}
        </S.Option>
      ))}
    </S.YesNo>
  );
};
