import { FiMenu } from 'react-icons/fi';

import { theme } from '@/config/theme';
import {
  EmptyContainer,
  LoginButton,
  MenuContainer,
  NavContainer,
  SearchInput,
} from './styles';
import { UnstyledButton } from '@/styles';
import {
  LOGIN,
  NAV_INPUT_PLACEHOLDER,
} from '@/config/constants';

type NavigationProps = {
  handleSetFullSidebar: (value: boolean) => void;
};

export const Navigation = ({
  handleSetFullSidebar,
}: NavigationProps) => {
  const handleLogin = () => {
    console.log('handle login pressed');
  };

  return (
    <NavContainer>
      <MenuContainer>
        <UnstyledButton
          onClick={() => handleSetFullSidebar(true)}
        >
          <FiMenu
            size={theme.iconSize.medium}
            data-testid="nav-mobile-menu-icon"
          ></FiMenu>
        </UnstyledButton>
      </MenuContainer>
      <EmptyContainer />
      <SearchInput placeholder={NAV_INPUT_PLACEHOLDER} />
      <LoginButton onClick={() => handleLogin()}>
        {LOGIN}
      </LoginButton>
    </NavContainer>
  );
};
