import styled from 'styled-components';

import { colors } from '@/config/colors';

export const SidebarContainer = styled.aside`
  width: ${(props) => props.theme.space[10]};
  min-height: 100vh;
  background-color: ${colors.mirage};
  border-right: 1px solid ${colors.whiteLowOpacity};
  position: sticky;
`;

export const SidebarContent = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h4`
  color: white;
  padding: ${(props) => props.theme.space[3]} 0;
`;
