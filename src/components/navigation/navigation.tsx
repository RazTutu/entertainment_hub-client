import { FiMenu } from 'react-icons/fi';

import { theme } from '@/config/theme';
import { MenuContainer, NavContainer } from './styles';
import { UnstyledButton } from '@/styles';

type NavigationProps = {
  handleSetFullSidebar: (value: boolean) => void;
};

export const Navigation = ({
  handleSetFullSidebar,
}: NavigationProps) => {
  return (
    <NavContainer>
      <MenuContainer>
        <UnstyledButton
          onClick={() => handleSetFullSidebar(true)}
        >
          <FiMenu size={theme.iconSize.medium}></FiMenu>
        </UnstyledButton>
      </MenuContainer>
      some text on nav container
    </NavContainer>
  );
};
