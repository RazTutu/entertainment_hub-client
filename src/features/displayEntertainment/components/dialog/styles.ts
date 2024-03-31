import { colors } from '@/config/colors';
import styled from 'styled-components';

export const DialogContainer = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.theme.space[13]};
  height: ${(props) => props.theme.space[13]};
  ${(props) => props.theme.space[2]};
  border: 1px solid ${colors.whiteLowOpacity};
  border-radius: ${(props) => props.theme.space[2]};
  background: ${colors.darkGunmetal};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(props) =>
      props.theme.screenSize.md}px) {
    width: ${(props) => props.theme.space[11]};
    height: ${(props) => props.theme.space[13]};
  }
`;

export const DialogContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 90%;
  gap: ${(props) => props.theme.space[3]};
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[2]} 0;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: ${(props) => props.theme.space[4]};

  @media (max-width: ${(props) =>
      props.theme.screenSize.md}px) {
    font-size: ${(props) => props.theme.space[3]};
  }
`;

export const Notes = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[1]};
`;

export const Label = styled.span`
  font-size: ${(props) => props.theme.space[3]};
  color: ${colors.regentGrey};
`;

export const NotesDescription = styled.textarea`
  width: 100%;
  height: ${(props) => props.theme.space[9]};
  resize: none;
  padding: ${(props) => props.theme.space[2]};
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid ${colors.whiteLowOpacity};
  border-radius: ${(props) => props.theme.space[1]};
  background: ${colors.lighterDarkGunmetal};
  font-family: 'Roboto', sans-serif;
  outline: none;
  color: white;
  scrollbar-width: thin;
  scrollbar-color: ${colors.whiteLowOpacity} transparent;

  ::placeholder {
    color: ${colors.regentGrey};
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.darkGunmetal};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.darkGunmetal};
    border-radius: 4px;
  }
`;
