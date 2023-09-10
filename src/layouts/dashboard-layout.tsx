import { ReactNode, useState } from 'react';
import {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

import {
  ChildContent,
  Content,
  Application,
  SidebarContentContainer,
} from './styles';
import { Navigation } from '@/components/navigation';
import { Sidebar } from '@/components/sidebar';
import { Footer } from '@/components/footer/footer';
import { theme } from '@/config/theme';

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  const [fullSidebarActive, setFullSidebarActive] =
    useState<boolean>(false);

  const handleSetFullSidebar = (value: boolean): void => {
    setFullSidebarActive(value);
  };

  return (
    <Application>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SidebarContentContainer
          fullSidebarActive={fullSidebarActive}
        >
          <Sidebar
            fullSidebarActive={fullSidebarActive}
            handleSetFullSidebar={handleSetFullSidebar}
          />
          <Content fullSidebarActive={fullSidebarActive}>
            <Navigation
              handleSetFullSidebar={handleSetFullSidebar}
            />
            <ChildContent>{children}</ChildContent>
            <Footer />
          </Content>
        </SidebarContentContainer>
      </ThemeProvider>
    </Application>
  );
};
