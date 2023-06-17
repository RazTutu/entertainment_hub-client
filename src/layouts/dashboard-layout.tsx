import { ReactNode } from 'react';

import {
  ChildContent,
  Content,
  Application,
  SidebarContentContainer,
} from './styles';
import { Navigation } from '@/components/navigation';
import { Sidebar } from '@/components/sidebar';
import { Footer } from '@/components/footer/footer';

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <Application>
      <SidebarContentContainer>
        <Sidebar />
        <Content>
          <Navigation />
          <ChildContent>{children}</ChildContent>
          <Footer />
        </Content>
      </SidebarContentContainer>
    </Application>
  );
};
