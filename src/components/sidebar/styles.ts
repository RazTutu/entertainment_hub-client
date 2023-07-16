import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '@/config/colors';

export const SidebarContainer = styled.aside`
  width: ${(props) => props.theme.space[10]};
  min-height: 100vh;
  top: 0;
  background-color: ${colors.mirage};
  border-right: 1px solid ${colors.whiteLowOpacity};
  position: sticky;

  @media (max-width: ${(props) =>
      props.theme.screenSize.sm}px) {
    display: none;
  }
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

export const NavigationListContainer = styled.nav``;

export const NavigationList = styled.ul``;

export const NavigationListItem = styled.li`
  padding: ${(props) => props.theme.space[1]}
    ${(props) => props.theme.space[2]};
`;

export const StyledNavLink = styled(NavLink)`
  width: 100%;
  color: ${colors.regentGrey};
  font-size: ${(props) => props.theme.space[3]};
  text-decoration: none;
  display: flex;
  padding: ${(props) => props.theme.space[1]} 0;
  border-radius: ${(props) => props.theme.space[1]};
  transition: background-color 0.3s ease, color 0.3s ease;

  &.active {
    background-color: ${colors.darkGunmetal};
    color: ${colors.white};
  }

  &:hover {
    background-color: ${colors.darkGunmetal};
    color: ${colors.white};
  }
`;

export const NavLinkText = styled.span`
  margin-left: ${(props) => props.theme.space[1]};
`;

export const NavLinkIcon = styled.span`
  margin-left: ${(props) => props.theme.space[1]};
`;
