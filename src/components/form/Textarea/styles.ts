import styled from 'styled-components';
import { darken, desaturate } from 'polished';

export const Frame = styled.div`
  width: 100%;
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid
    ${({ theme }) => desaturate(0.6, darken(0.3, theme.background_color!))};
  outline: none;
  padding: ${Math.pow(1.414, -3)}rem ${Math.pow(1.414, -1)}rem;

  &:focus {
    border-color: ${({ theme }) => theme.primary_color};
  }
`;
