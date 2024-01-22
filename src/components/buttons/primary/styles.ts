import styled from 'styled-components';

import { colors } from '@/config/colors';

export const Button = styled.button.attrs(
  (props: { $type: string; $marginTop: string }) => props
)`
  width: 90%;
  height: ${(props) => props.theme.space[5]};
  border-radius: 0.2rem;
  color: ${colors.white};

  background-color: ${(props) =>
    props.$type === 'filled' ? '#0892d0' : colors.mirage};
  border: ${(props) =>
    props.$type === 'filled'
      ? 'none'
      : `1px solid #0892d0`};
  margin-top: ${(props) =>
    props.$marginTop ? props.$marginTop : 'none'};

  &:hover {
    cursor: pointer;
  }
`;
