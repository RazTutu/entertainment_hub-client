import { useEffect } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import { theme } from '@/config/theme';
import { useProfile } from '@/stores';
import {
  Avatar,
  EmptyContainer,
  InputField,
  LoginButton,
  MenuContainer,
  NavContainer,
  ProfileButton,
  ProfileInfo,
  SearchIcon,
  SearchInput,
} from './styles';
import { UnstyledButton } from '@/styles';
import {
  AVATAR_DESCRIPTION,
  LOGIN,
  LOGOUT,
  NAV_INPUT_PLACEHOLDER,
} from '@/config/constants';
import { Profile } from '@/types';
import {
  handleLogin,
  useLogout,
} from '@/features/authentication';

type NavigationProps = {
  handleSetFullSidebar: (value: boolean) => void;
};

export const Navigation = ({
  handleSetFullSidebar,
}: NavigationProps) => {
  const profileInfo: Profile = useProfile();
  const logout = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  const handleSearch = () => {
    console.log('handle search pressed');
  };

  useEffect(() => {
    console.log(
      'in navigation, profile info is',
      profileInfo
    );
  }, [profileInfo]);

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
      <ProfileInfo>
        {!profileInfo.id && (
          <LoginButton onClick={() => handleLogin()}>
            {LOGIN}
          </LoginButton>
        )}
        {profileInfo.avatar && (
          <Avatar
            src={profileInfo.avatar}
            alt={AVATAR_DESCRIPTION}
          ></Avatar>
        )}
        {profileInfo.username && (
          <ProfileButton onClick={() => handleLogout()}>
            {LOGOUT}
          </ProfileButton>
        )}
      </ProfileInfo>
    </NavContainer>
  );
};
