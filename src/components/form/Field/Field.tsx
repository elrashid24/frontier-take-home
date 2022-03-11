import React, { ReactNode } from 'react';
import * as S from './styles';

type FieldProps = {
  children: ReactNode;
  label?: string;
};

/**
 * The Field handles everything around the form component, and wraps the form
 * element
 */
export const Field = ({ label, children }: FieldProps) => {
  return (
    <S.Frame>
      <S.Label>{label}</S.Label>
      <S.Field>{children}</S.Field>
    </S.Frame>
  );
};
