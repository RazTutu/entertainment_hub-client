import { FaHome } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { RiMovie2Fill } from 'react-icons/ri';
import { FaBook } from 'react-icons/fa';
import { AiFillPieChart } from 'react-icons/ai';

import {
  APP_TITLE,
  NAVIGATION,
} from '@/config/constants';
import { theme } from '@/config/theme';
import {
  NavLinkIcon,
  NavLinkText,
  NavigationList,
  NavigationListContainer,
  NavigationListItem,
  SidebarContainer,
  SidebarContent,
  StyledNavLink,
  Title,
  TitleSection,
} from './styles';

type SidebarProps = {
  fullSidebarActive: boolean;
};

export const Sidebar = ({
  fullSidebarActive,
}: SidebarProps) => {
  console.log('fullNavbarActive is', fullSidebarActive);
  return (
    <SidebarContainer
      fullSidebarActive={fullSidebarActive}
    >
      <SidebarContent>
        <TitleSection>
          <Title>{APP_TITLE}</Title>
        </TitleSection>
        <NavigationListContainer>
          <NavigationList>
            <NavigationListItem>
              <StyledNavLink to="/">
                <NavLinkIcon>
                  <FaHome size={theme.iconSize.default} />
                </NavLinkIcon>
                <NavLinkText>
                  {NAVIGATION.HOME}
                </NavLinkText>
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to="/games">
                <NavLinkIcon>
                  <IoLogoGameControllerB
                    size={theme.iconSize.default}
                  />
                </NavLinkIcon>
                <NavLinkText>
                  {NAVIGATION.GAMES}
                </NavLinkText>
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to="/movies">
                <NavLinkIcon>
                  <RiMovie2Fill
                    size={theme.iconSize.default}
                  />
                </NavLinkIcon>
                <NavLinkText>
                  {NAVIGATION.MOVIES}
                </NavLinkText>
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to="/books">
                <NavLinkIcon>
                  <FaBook size={theme.iconSize.default} />
                </NavLinkIcon>
                <NavLinkText>
                  {NAVIGATION.BOOKS}
                </NavLinkText>
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to="/statistics">
                <NavLinkIcon>
                  <AiFillPieChart
                    size={theme.iconSize.default}
                  />
                </NavLinkIcon>
                <NavLinkText>
                  {NAVIGATION.STATISTICS}
                </NavLinkText>
              </StyledNavLink>
            </NavigationListItem>
          </NavigationList>
        </NavigationListContainer>
      </SidebarContent>
    </SidebarContainer>
  );
};
