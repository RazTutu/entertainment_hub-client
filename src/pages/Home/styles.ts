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
  display: flex;
  gap: 1rem;
  margin-top: ${(props) => props.theme.space[3]};
`;

export const EntertainmentContent = styled.section`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.space[6]};
  margin-top: ${(props) => props.theme.space[5]};
`;
