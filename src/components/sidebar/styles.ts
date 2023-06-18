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
