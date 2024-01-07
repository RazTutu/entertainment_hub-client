import { useEffect, useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { useDebounce } from '@uidotdev/usehooks';

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
import { useEntertainmentByName } from '@/features/searchEntertainment';
import { GetEntertainmentOptions } from '@/features/searchEntertainment';

type NavigationProps = {
  handleSetFullSidebar: (value: boolean) => void;
};

const DEBOUNCED_TIME = 700;

export const Navigation = ({
  handleSetFullSidebar,
}: NavigationProps) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(
    inputValue,
    DEBOUNCED_TIME
  );

  const gamesParam: GetEntertainmentOptions = {
    entertainmentType: 'games',
    entertainmentName: debouncedInputValue,
  };

  const profileInfo: Profile = useProfile();
  const logout = useLogout();
  const { gamesData, isLoading, refetchSearchByName } =
    useEntertainmentByName(gamesParam);

  useEffect(() => {
    if (debouncedInputValue.length > 0) {
      refetchSearchByName();
    }
  }, [debouncedInputValue]);

  const handleLogout = async () => {
    await logout();
  };

  const handleSearch = () => {
    refetchSearchByName();
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
        <InputField
          type="text"
          value={inputValue}
          onChange={(event) =>
            setInputValue(event.target.value)
          }
          placeholder={NAV_INPUT_PLACEHOLDER}
        />
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
