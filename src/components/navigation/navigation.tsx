import { FiMenu } from 'react-icons/fi';

import { theme } from '@/config/theme';
import {
  MenuButton,
  MenuContainer,
  NavContainer,
} from './styles';

type NavigationProps = {
  handleSetFullSidebar: (value: boolean) => void;
};

export const Navigation = ({
  handleSetFullSidebar,
}: NavigationProps) => {
  return (
    <NavContainer>
      <MenuContainer>
        <MenuButton
          onClick={() => handleSetFullSidebar(true)}
        >
          <FiMenu size={theme.iconSize.medium}></FiMenu>
        </MenuButton>
      </MenuContainer>
      some text on nav container
    </NavContainer>
  );
};
