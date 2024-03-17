import styled from 'styled-components';

import { colors } from '@/config/colors';

export const ChipContainer = styled.div.attrs(
  (props: { $filled: boolean }) => props
)`
  background-color: ${(props) =>
    props.$filled ? colors.darkGunmetal : 'none'};
  height: ${(props) => props.theme.space[6]};
  width: ${(props) => props.theme.space[8]};
  border-radius: ${(props) => props.theme.space[5]};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, height 0.3s ease,
    width 0.3s ease;

  &:hover {
    cursor: pointer;
  }
`;

export const ChipText = styled.p``;
