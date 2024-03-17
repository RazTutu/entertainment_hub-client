import styled from 'styled-components';

export const DialogContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  border: 2px solid blue;
  background: white;
  z-index: 100;
`;
