import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  height: 3rem;
  background-color: blue;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
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

export const MenuButton = styled.button`
  all: unset;

  &:hover {
    cursor: pointer;
  }
`;
