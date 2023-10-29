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

export const SearchInput = styled.input`
  width: ${(props) => props.theme.space[12]};
  height: ${(props) => props.theme.space[5]};
  background-color: ${colors.darkGunmetal};
  border: 1px solid ${colors.whiteLowOpacity};
  color: ${colors.regentGrey};
  border-radius: ${(props) => props.theme.space[3]};
  text-indent: ${(props) => props.theme.space[3]};

  &:focus {
    outline: none;
    border-color: ${colors.whiteMediumOpacity};
  }

  @media (max-width: ${(props) =>
      props.theme.screenSize.md}px) {
    width: ${(props) => props.theme.space[11]};
  }
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
