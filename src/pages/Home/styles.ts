import styled from 'styled-components';

export const EntertainmentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EntertainmentType = styled.section`
  height: 2rem;
  width: 90%;
  border: 1px solid blue;
`;

export const EntertainmentContent = styled.section`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.space[8]};
  margin-top: ${(props) => props.theme.space[5]};
`;
