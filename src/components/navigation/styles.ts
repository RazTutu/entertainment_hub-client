import styled from 'styled-components';

import { colors } from '@/config/colors';
import { UnstyledButton } from '@/styles';

export const NavContainer = styled.nav`
  width: 100%;
  height: ${(props) => props.theme.space[7]};
  background-color: ${colors.mirage};
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuContainer = styled.div`
  width: ${(props) => props.theme.space[6]};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) =>
      props.theme.screenSize.sm}px) {
    display: none;
  }
`;

export const SearchInput = styled.div`
  position: relative;
  width: ${(props) => props.theme.space[12]};
  height: ${(props) => props.theme.space[5]};
  background-color: ${colors.darkGunmetal};
  border: 1px solid ${colors.whiteLowOpacity};
  border-radius: ${(props) => props.theme.space[3]};
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.space[3]};
  color: ${colors.regentGrey};

  &:focus-within {
    border-color: ${colors.whiteMediumOpacity};
  }

  &::after {
    content: '';
    position: absolute;
    right: ${(props) => props.theme.space[6]};
    top: 0;
    bottom: 0;
    width: 0.8px; /* Width of the vertical line */
    background-color: ${colors.whiteLowOpacity}; /* Color of the vertical line */
  }

  @media (max-width: ${(props) =>
      props.theme.screenSize.md}px) {
    width: ${(props) => props.theme.space[11]};
    display: flex;
    justify-content: center;
  }
`;

export const InputField = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

export const SearchIcon = styled(UnstyledButton)`
  color: ${colors.regentGrey};
  cursor: pointer;
  margin-left: ${(props) => props.theme.space[3]};
`;

export const LoginButton = styled(UnstyledButton)`
  margin-right: ${(props) => props.theme.space[5]};
  font-size: ${(props) => props.theme.space[3]};

  @media (max-width: ${(props) =>
      props.theme.screenSize.sm}px) {
    width: ${(props) => props.theme.space[2]};
  }
`;

export const EmptyContainer = styled.div`
  @media (max-width: ${(props) =>
      props.theme.screenSize.sm}px) {
    display: none;
  }
`;
