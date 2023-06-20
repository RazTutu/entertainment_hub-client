import { FaHome } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { RiMovie2Fill } from 'react-icons/ri';
import { FaBook } from 'react-icons/fa';
import { AiFillPieChart } from 'react-icons/ai';

import {
  APP_TITLE,
  NAVIGATION,
} from '@/config/constants';
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
              <StyledNavLink to="/">
                <FaHome /> {NAVIGATION.HOME}
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to="/games">
                <IoLogoGameControllerB />{' '}
                {NAVIGATION.GAMES}
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to="/movies">
                <RiMovie2Fill /> {NAVIGATION.MOVIES}
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to="/books">
                <FaBook /> {NAVIGATION.BOOKS}
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to="/statistics">
                <AiFillPieChart /> {NAVIGATION.STATISTICS}
              </StyledNavLink>
            </NavigationListItem>
          </NavigationList>
        </NavigationListContainer>
      </SidebarContent>
    </SidebarContainer>
  );
};
