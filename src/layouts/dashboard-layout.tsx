import { ReactNode, useState } from 'react';
import {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
  const [fullNavbarActive, setFullNavbarActive] =
    useState<boolean>(false);

  const handleSetFullNavbar = (value: boolean): void => {
    setFullNavbarActive(value);
  };

  return (
    <Application>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SidebarContentContainer>
          <Sidebar fullNavbarActive={fullNavbarActive} />
          <Content>
            <Navigation
              handleSetFullNavbar={handleSetFullNavbar}
            />
            <ChildContent>{children}</ChildContent>
            <Footer />
          </Content>
        </SidebarContentContainer>
      </ThemeProvider>
    </Application>
  );
};
