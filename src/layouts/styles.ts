import styled from 'styled-components';

export const Application = styled.div`
  background-color: #0d1116;
  width: 100%;
  min-height: 100vh;
  color: white;
`;

export const SidebarContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

export const ChildContent = styled.main`
  flex: 1;
`;
