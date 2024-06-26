import { FaHome } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import {
  AiFillPieChart,
  AiOutlineClose,
} from 'react-icons/ai';

import {
  APP_TITLE,
  NAVIGATION,
} from '@/config/constants';
import { theme } from '@/config/theme';
import {
  CloseButtonContainer,
  NavElementWrapper,
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
import { UnstyledButton } from '@/styles';

type SidebarProps = {
  fullSidebarActive: boolean;
  handleSetFullSidebar: (value: boolean) => void;
};

export const Sidebar = ({
  fullSidebarActive,
  handleSetFullSidebar,
}: SidebarProps) => {
  return (
    <SidebarContainer
      $fullSidebarActive={fullSidebarActive}
    >
      <SidebarContent>
        <TitleSection
          $fullSidebarActive={fullSidebarActive}
        >
          <Title $fullSidebarActive={fullSidebarActive}>
            {APP_TITLE}
          </Title>
          {fullSidebarActive && (
            <CloseButtonContainer
              $fullSidebarActive={fullSidebarActive}
            >
              <UnstyledButton
                onClick={() =>
                  handleSetFullSidebar(false)
                }
              >
                <AiOutlineClose
                  size={theme.iconSize.medium}
                />
              </UnstyledButton>
            </CloseButtonContainer>
          )}
        </TitleSection>
        <NavigationListContainer>
          <NavigationList>
            <NavigationListItem>
              <StyledNavLink
                to="/"
                $fullSidebarActive={fullSidebarActive}
              >
                <NavElementWrapper>
                  <NavLinkIcon>
                    <FaHome
                      size={theme.iconSize.default}
                    />
                  </NavLinkIcon>
                  <NavLinkText>
                    {NAVIGATION.HOME}
                  </NavLinkText>
                </NavElementWrapper>
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink
                to="/library"
                $fullSidebarActive={fullSidebarActive}
              >
                <NavElementWrapper>
                  <NavLinkIcon>
                    <FaBook
                      size={theme.iconSize.default}
                    />
                  </NavLinkIcon>
                  <NavLinkText>
                    {NAVIGATION.LIBRARY}
                  </NavLinkText>
                </NavElementWrapper>
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink
                to="/statistics"
                $fullSidebarActive={fullSidebarActive}
              >
                <NavElementWrapper>
                  <NavLinkIcon>
                    <AiFillPieChart
                      size={theme.iconSize.default}
                    />
                  </NavLinkIcon>
                  <NavLinkText>
                    {NAVIGATION.STATISTICS}
                  </NavLinkText>
                </NavElementWrapper>
              </StyledNavLink>
            </NavigationListItem>
          </NavigationList>
        </NavigationListContainer>
      </SidebarContent>
    </SidebarContainer>
  );
};
