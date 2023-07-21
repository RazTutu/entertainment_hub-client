import styled from 'styled-components';

export const Application = styled.div`
  background-color: #0d1116;
  width: 100%;
  min-height: 100vh;
  color: white;
`;

export const SidebarContentContainer = styled.div.attrs(
  (props: { fullSidebarActive: boolean }) => props
)`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: ${(props) =>
    props.fullSidebarActive ? 'hidden' : 'auto'};
`;

export const Content = styled.div.attrs(
  (props: { fullSidebarActive: boolean }) => props
)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  height: ${(props) =>
    props.fullSidebarActive ? '0' : '100%'};
  width: ${(props) =>
    props.fullSidebarActive ? '0' : '100%'};
  opacity: ${(props) =>
    props.fullSidebarActive ? '0' : '100%'};
`;

export const ChildContent = styled.main`
  flex: 1;
`;
