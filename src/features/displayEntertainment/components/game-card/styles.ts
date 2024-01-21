import styled from 'styled-components';

import { colors } from '@/config/colors';

export const CardContainer = styled.article`
  height: ${(props) =>
    props.theme.spaceContainers.defaultHeight};
  width: ${(props) =>
    props.theme.spaceContainers.defaultWidth};
  background-color: ${colors.mirage};
  display: flex;
  border-radius: ${(props) => props.theme.space[1]};
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
  height: 90%;
  width: 80%;
  object-fit: cover;
  border-radius: ${(props) => props.theme.space[1]};
`;

export const CardText = styled.div`
  width: 50%;
  height: 100%;
`;

export const Title = styled.p`
  margin-top: ${(props) => props.theme.space[4]};
  font-size: ${(props) => props.theme.space[3]};
`;

export const Info = styled.p`
  margin-top: ${(props) => props.theme.space[1]};
  font-size: ${(props) => props.theme.space[2]};
  color: ${colors.regentGrey};
`;

export const ButtonsContainer = styled.div`
  margin-top: ${(props) => props.theme.space[3]};
  width: 100%;
  height: 100;
  border: 1px solid green;
`;
