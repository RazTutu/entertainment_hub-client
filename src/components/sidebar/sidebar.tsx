import { NavLink } from 'react-router-dom';

import { APP_TITLE } from '@/config/constants';
import {
  NavigationList,
  NavigationListContainer,
  NavigationListItem,
  SidebarContainer,
  SidebarContent,
  StyledNavLink,
  Title,
  TitleSection,
} from './styles';

export const Sidebar = ({}) => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <TitleSection>
          <Title>{APP_TITLE}</Title>
        </TitleSection>
        <NavigationListContainer>
          <NavigationList>
            <NavigationListItem>
              <StyledNavLink to="/">Home</StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to="/games">
                Games
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to="/movies">
                Movies
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to="/books">
                Books
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to="/statistics">
                Statistics
              </StyledNavLink>
            </NavigationListItem>
          </NavigationList>
        </NavigationListContainer>
      </SidebarContent>
    </SidebarContainer>
  );
};
