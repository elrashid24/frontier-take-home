import React, { ReactNode } from 'react'
import * as S from './styles'

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({onClick, children}: ButtonProps) => {
  return (
  <S.Button onClick={onClick}>
    {children}
  </S.Button>
  )
}