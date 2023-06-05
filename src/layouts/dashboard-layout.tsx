import { ReactNode } from 'react';
import { MainContainer } from './styles';

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  return <MainContainer>{children}</MainContainer>;
};
