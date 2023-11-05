import { FiMenu, FiSearch } from 'react-icons/fi';

import { theme } from '@/config/theme';
import { useProfileStore } from '@/stores';
import {
  EmptyContainer,
  InputField,
  LoginButton,
  MenuContainer,
  NavContainer,
  SearchIcon,
  SearchInput,
} from './styles';
import { UnstyledButton } from '@/styles';
import {
  LOGIN,
  NAV_INPUT_PLACEHOLDER,
} from '@/config/constants';
import { useEffect } from 'react';

type NavigationProps = {
  handleSetFullSidebar: (value: boolean) => void;
};

export const Navigation = ({
  handleSetFullSidebar,
}: NavigationProps) => {
  const profileStore = useProfileStore();

  useEffect(() => {
    console.log(
      'in navigation, profile store is',
      profileStore
    );
  }, []);

  const handleLogin = () => {
    window.open(
      `http://localhost:4000/auth/google`,
      '_self'
    );
  };

  const handleSearch = () => {
    console.log('handle search pressed');
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
      <SearchInput>
        <InputField placeholder={NAV_INPUT_PLACEHOLDER} />
        <SearchIcon onClick={() => handleSearch()}>
          <FiSearch size={theme.iconSize.default} />
        </SearchIcon>
      </SearchInput>
      <LoginButton onClick={() => handleLogin()}>
        {LOGIN}
      </LoginButton>
    </NavContainer>
  );
};
