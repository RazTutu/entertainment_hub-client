import { APP_TITLE } from '@/config/constants';
import {
  SidebarContainer,
  SidebarContent,
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
      </SidebarContent>
    </SidebarContainer>
  );
};
