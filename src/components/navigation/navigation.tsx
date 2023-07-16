import { FiMenu } from 'react-icons/fi';

import { theme } from '@/config/theme';
import {
  MenuButton,
  MenuContainer,
  NavContainer,
} from './styles';

type NavigationProps = {
  handleSetFullNavbar: (value: boolean) => void;
};

export const Navigation = ({
  handleSetFullNavbar,
}: NavigationProps) => {
  return (
    <NavContainer>
      <MenuContainer>
        <MenuButton
          onClick={() => handleSetFullNavbar(true)}
        >
          <FiMenu size={theme.iconSize.medium}></FiMenu>
        </MenuButton>
      </MenuContainer>
      some text on nav container
    </NavContainer>
  );
};
