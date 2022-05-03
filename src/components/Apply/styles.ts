import styled from 'styled-components';

export const Frame = styled.div`
  background: ${({ theme }) => theme.background_color};
  width: 100%;
  max-width: 428px;
  height: 926px;
  overflow-y: scroll;
  border-radius: ${Math.pow(1.414, 3)}rem;
  margin: ${Math.pow(1.414, 3)}rem auto 0;
`;

export const Elements = styled.div`
  display: grid;
  padding: 1.414rem;
  row-gap: ${Math.pow(1.414, 3)}rem;
`;

export const Readout = styled.pre`
  display: block;
  margin: 1.414rem;
  padding: 1.414rem;
  font-size: 14px;
  background: ${({ theme }) => theme.text_color};
  color: ${({ theme }) => theme.secondary_color};
  border-radius: ${Math.pow(1.414, -1)}rem;
  overflow: scroll;
`;
